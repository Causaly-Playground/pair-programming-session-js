import conceptsData from "./data/concepts.json" with { type: "json" };

/**
 * Gets all concepts from the dataset
 * @returns {Array} Array of concepts
 */
export const getConcepts = () => {
  return conceptsData.data;
};

// Debugging Task: Fix the issues in this function

/**
 * Filters concepts by category and evidence count
 * @param {string} categoryName - The category to filter by
 * @param {number} minEvidence - Minimum evidence count (optional)
 * @returns {Array} Filtered concepts
 */
const DEBUG = true;
export const filterConceptsByCategory = (categoryName, minEvidence = 0) => {
  const isDebug = DEBUG;

  const results = getConcepts().filter((concept) => {
    concept.primary_category.name = categoryName;
  });

  return results.map((concept) => {
    // console.log(concept);
    if (concept.evidence_count > minEvidence) {
      return concept;
    }
  });
};

/**
 * Implementation Task:
 * Create a function that searches concepts and groups them by their primary category
 * Requirements:
 * 1. Search should be case-insensitive and match partial names
 * 2. Results should be grouped by primary category
 * 3. Each category group should be sorted by evidence_count (descending)
 * 4. Each group should contain at most 5 concepts
 * 5. Categories with no matches should be omitted
 *
 * Expected return format:
 * {
 *   "Category1": [concepts...],
 *   "Category2": [concepts...],
 *   ...
 * }
 *
 * @param {string} searchTerm - The term to search for in concept names
 * @returns {Object} Grouped and sorted search results
 */
export const searchAndGroupConcepts = (searchTerm) => {
  // TODO: Implement this function
  throw new Error("Not implemented");
};
