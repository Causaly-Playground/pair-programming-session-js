import { describe, test, expect } from "vitest";
import { filterConceptsByCategory, searchAndGroupConcepts } from "../utils.js";

describe.only("filterConceptsByCategory", () => {
  test("should filter concepts by category", () => {
    const filtered = filterConceptsByCategory("Chemicals & Drugs");
    expect(filtered).toBeDefined();
    expect(Array.isArray(filtered)).toBe(true);
    expect(
      filtered.every(
        (concept) => concept.primary_category.name === "Chemicals & Drugs"
      )
    ).toBe(true);
  });

  test("should handle minimum evidence count", () => {
    const minEvidence = 1000;
    const filtered = filterConceptsByCategory("Chemicals & Drugs", minEvidence);
    expect(filtered).toBeDefined();
    expect(Array.isArray(filtered)).toBe(true);
    expect(
      filtered.every((concept) => concept.evidence_count > minEvidence)
    ).toBe(true);
  });

  test("should handle invalid inputs and edge cases", () => {
    // Should handle non-existent category
    const result = filterConceptsByCategory("NonExistentCategory");
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);

    // Should handle concepts with missing properties
    const filtered = filterConceptsByCategory("Chemicals & Drugs");
    expect(
      filtered.every(
        (concept) =>
          concept &&
          concept.primary_category &&
          concept.primary_category.name &&
          concept.evidence_count !== undefined
      )
    ).toBe(true);
  });
});

describe("searchAndGroupConcepts", () => {
  test("should return grouped results in correct format", () => {
    const results = searchAndGroupConcepts("ins");
    expect(results).toBeDefined();
    expect(typeof results).toBe("object");

    // Check structure of results
    Object.entries(results).forEach(([category, concepts]) => {
      expect(Array.isArray(concepts)).toBe(true);
      expect(concepts.length).toBeLessThanOrEqual(5);
      expect(concepts.every((c) => c.primary_category.name === category)).toBe(
        true
      );
    });
  });

  test("should perform case-insensitive search", () => {
    const lowerCase = searchAndGroupConcepts("ins");
    const upperCase = searchAndGroupConcepts("INS");
    expect(lowerCase).toEqual(upperCase);
  });

  test("should sort by evidence count within groups", () => {
    const results = searchAndGroupConcepts("ins");
    Object.values(results).forEach((concepts) => {
      for (let i = 1; i < concepts.length; i++) {
        expect(
          concepts[i - 1].evidence_count >= concepts[i].evidence_count
        ).toBe(true);
      }
    });
  });

  test("should handle empty or invalid search terms", () => {
    expect(() => searchAndGroupConcepts("")).not.toThrow();
    expect(() => searchAndGroupConcepts(null)).toThrow();
    expect(() => searchAndGroupConcepts(undefined)).toThrow();
  });
});
