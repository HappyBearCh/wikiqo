"""
Renders wikiqo's icons from the logo mark in components/Header.tsx: a bold
serif "w" in white on the library-blue gradient (globals.css --library-blue),
in a rounded square.

Writes the Next.js file-convention icons:
  app/favicon.ico     16, 32 and 48 px (48 is the minimum Google Search uses)
  app/icon.png        512 px, for browsers and search engines that want a PNG
  app/apple-icon.png  180 px, for iOS home screens

Usage: python scripts/generate-icons.py   (needs Pillow; uses Georgia Bold,
falling back to DejaVu Serif Bold). Rerun only if the mark changes.
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
GRADIENT = [(0x1E, 0x3A, 0x8A), (0x1D, 0x4E, 0xD8), (0x3B, 0x82, 0xF6)]
FONT_CANDIDATES = [
    "C:/Windows/Fonts/georgiab.ttf",
    "/Library/Fonts/Georgia Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
]


def lerp(a, b, t):
    return tuple(round(x + (y - x) * t) for x, y in zip(a, b))


def gradient_at(t):
    """135deg gradient: t runs 0..1 from top-left to bottom-right."""
    return lerp(GRADIENT[0], GRADIENT[1], t * 2) if t < 0.5 else lerp(GRADIENT[1], GRADIENT[2], (t - 0.5) * 2)


def font(size):
    for path in FONT_CANDIDATES:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    raise SystemExit("No bold serif font found; edit FONT_CANDIDATES.")


def render(size, radius_ratio=0.22):
    # Draw at 4x and downsample, for clean edges at favicon sizes.
    scale = 4
    s = size * scale
    bg = Image.new("RGB", (s, s))
    px = bg.load()
    for y in range(s):
        for x in range(s):
            px[x, y] = gradient_at((x + y) / (2 * (s - 1)))

    mask = Image.new("L", (s, s), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, s - 1, s - 1], radius=round(s * radius_ratio), fill=255)

    icon = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    icon.paste(bg, (0, 0), mask)

    draw = ImageDraw.Draw(icon)
    f = font(round(s * 0.78))
    left, top, right, bottom = draw.textbbox((0, 0), "w", font=f)
    draw.text(((s - (right - left)) / 2 - left, (s - (bottom - top)) / 2 - top), "w", font=f, fill="white")

    return icon.resize((size, size), Image.LANCZOS)


def main():
    app = ROOT / "app"
    render(512).save(app / "icon.png")
    # Apple applies its own corner mask, so the touch icon is a full square.
    render(180, radius_ratio=0).save(app / "apple-icon.png")
    big = render(48)
    big.save(app / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("Wrote app/favicon.ico, app/icon.png, app/apple-icon.png")


if __name__ == "__main__":
    main()
