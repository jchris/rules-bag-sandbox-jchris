import { Result, exception2Result, URI } from "@adviser/cement";
import { type } from "arktype";

const Body = type({ href: "string", body: "string" });

export function load(raw: unknown): Result<string> {
  const input = Body(raw);
  if (input instanceof type.errors) return Result.Err(input.summary);
  const uri = URI.from(input.href);
  return exception2Result(() => input.body);
}

export function add(a: number, b: number): number {
  return a + b;
}
