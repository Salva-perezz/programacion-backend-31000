import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("Equals", () => {
  assertEquals("world", "world");
  assertEquals({ saludo: "Hola" }, { saludo: "Hola" });
});

Deno.test("StrictEquals", () => {
  const a = { saludo: "Hola" };
  const b = a;

  assertStrictEquals("world", "world");
  assertStrictEquals(a, b);
});
