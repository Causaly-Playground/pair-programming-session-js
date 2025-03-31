import { filterConceptsByCategory, searchAndGroupConcepts } from "./utils.js";

// Example usage of filterConceptsByCategory (for review)
console.log("Filtering concepts by category:");
const chemicalConcepts = filterConceptsByCategory("Chemicals & Drugs", 1000);
console.log(chemicalConcepts);

// Example usage of searchAndGroupConcepts (to be implemented)
console.log("Searching and grouping concepts:");
try {
  const groupedResults = searchAndGroupConcepts("ins");
  console.log(groupedResults);
} catch (error) {
  console.log("Search and group not implemented yet:", error.message);
}
