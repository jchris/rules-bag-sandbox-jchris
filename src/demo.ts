export default function load(raw: any) {
  try {
    const u = new URL(raw.href);
    if (!u) return undefined;
    return JSON.parse(raw.body);
  } catch (e) {
    throw new Error("bad input");
  }
}

const add = (a: number, b: number) => a + b;
