import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "files", "TMG-2024.pdf");
  const fileBuffer = fs.readFileSync(filePath);

  return new Response(fileBuffer, {
    headers: {
      "content-type": "application/pdf",
      "content-disposition": 'inline; filename="Todd-Goates-Resume.pdf"',
    },
  });
}
