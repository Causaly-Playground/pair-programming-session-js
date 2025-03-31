# Pair Programming Session

Welcome to your pair programming session! We're excited to work together on this project. This is a great opportunity for us to collaborate, share ideas, and see how we work together while solving some interesting technical challenges.

We'll be working with a dataset of scientific concepts and implementing various data processing functions. Think of this as a real-world scenario where we're pair programming on a feature together.

Good luck! Remember to communicate your thought process as
you work through the tasks.

## Project Setup

1. Install dependencies:

```bash
npm install
```

2. Running tests

```bash
npm test
```

3. Running script
   `npm run start ` or `node ./src/index.js`

## Project Structure

Here's what we're working with:

```
src/
├── index.js         # Example usage of the functions
├── utils.js         # Functions we'll work on together
├── __tests__/       # Test files
│   └── utils.test.js
└── data/
    └── concepts.json
```

## Data Structure

We're working with scientific concepts that look like this:

```typescript
interface Concept {
  id: string; // Unique identifier
  name: string; // Concept name
  evidence_count: number; // Number of evidence items
  primary_category: {
    // Category information
    id: string;
    name: string;
  };
  entry_term: string; // Alternative name
  external_ids: Array<{
    // External references
    id: string;
    type: string;
  }>;
}
```

## Testing

The project uses Vitest for testing. You can:

```bash
# Run all tests
npm test

# Run tests in watch mode (recommended)
npm test -- --watch

# Run tests for a specific function
npm test -- -t "filterConceptsByCategory"
```
