import { describe, it, expect } from "vitest";
import { demoProducts, filterDemoProducts } from "./demo-catalog";

describe("portfolio demo catalog", () => {
 it("provides unique products with valid purchasable variants", () => {
   expect(demoProducts.length).toBeGreaterThan(12);
   expect(new Set(demoProducts.map(p => p.id)).size).toBe(demoProducts.length);
   for (const p of demoProducts) { expect(p.variants.length).toBeGreaterThan(0); for (const v of p.variants) expect(v.price).toBeGreaterThan(0); }
 });
 it("combines species, brand, tags and search", () => {
   const result = filterDemoProducts({ category: "gato", brand: "agility", tags: ["secos"], query: "kitten" });
   expect(result.length).toBeGreaterThan(0);
   expect(result.every(p => p.category === "gato" && p.brand === "Agility" && p.title.toLowerCase().includes("kitten"))).toBe(true);
 });
 it("returns an empty result for unknown text and bounds limits", () => {
   expect(filterDemoProducts({ query: "noexiste123" })).toEqual([]);
   expect(filterDemoProducts({ limit: 2 })).toHaveLength(2);
 });
});
