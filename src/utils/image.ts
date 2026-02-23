import fs from "fs";

export function imageToBase64(path: string): string {
  const buffer = fs.readFileSync(path);
  const ext = path.split(".").pop();

  return `data:image/${ext};base64,${buffer.toString("base64")}`;
}
