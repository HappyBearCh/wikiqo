import { NextRequest, NextResponse } from "next/server";
import { openSearch } from "@/lib/wikipedia";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (!q) {
    return NextResponse.json({ suggestions: [] });
  }

  try {
    const suggestions = await openSearch(q, 8);
    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error("Autocomplete request failed:", error);
    return NextResponse.json({ suggestions: [] }, { status: 502 });
  }
}
