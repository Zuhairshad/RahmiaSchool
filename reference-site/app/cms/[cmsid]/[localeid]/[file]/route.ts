import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ cmsid: string; localeid: string; file: string }> }
) {
  const { file } = await params;
  const range = request.nextUrl.searchParams.get("range");

  const filePath = path.join(process.cwd(), "public", "assets", "js", file);

  let data: Buffer;
  try {
    data = await readFile(filePath);
  } catch {
    return new NextResponse(null, { status: 404 });
  }

  if (range) {
    const [startStr, endStr] = range.split("-");
    const start = parseInt(startStr, 10);
    const end = parseInt(endStr, 10);
    const slice = data.slice(start, end + 1);
    return new NextResponse(slice, {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Length": String(slice.length),
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  return new NextResponse(data, {
    status: 200,
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Length": String(data.length),
      "Access-Control-Allow-Origin": "*",
    },
  });
}
