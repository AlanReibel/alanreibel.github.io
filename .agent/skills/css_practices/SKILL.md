# CSS Best Practices for Portfolio Development

This skill documents the specific CSS architecture and styling preferences for the Alan Reibel Portfolio project.

## Core Principles

### 1. Nesting Limits
To maintain readability and avoid high specificity issues, native CSS nesting should be limited to a maximum of **3 levels**. Deeply nested rules make the code difficult to maintain and debug.

### 2. Semantic IDs
Unique, top-level sections that define the application's structure should be identified and referred to by their **IDs** (e.g., `#about`, `#experience`, `#skills`). This reinforces semantic clarity and ensures these elements are easily targetable.

### 3. Selector Simplicity
Avoid over-specifying selectors. If a class or element is unique within its context or can be easily identified, do not nest it unnecessarily within deep parent hierarchies. Aim for the **flattest selector possible** that still ensures proper scoping and function.
- **Good**: `.location`
- **Avoid**: `.section .hero .wrapper .content .contact .location`

### 4. Tag-Based Selection for Unique Contexts
Within unique semantic sections (like `#about`), prefer styling standard HTML tags directly rather than creating redundant class names for every element. This results in cleaner HTML and more semantic CSS.
- **Prefer**: `#about h1`
- **Avoid**: `.name` (when `#about h1` is sufficient)
- **Prefer**: `#about p`
- **Avoid**: `.description`

## Usage Examples

### Correct Approach (Semantic & Flat)
```css
#about {
  padding: 4rem 2rem;
  
  h1 {
    font-size: 3rem;
    color: var(--accent-primary);
  }
  
  .actions {
    display: flex;
    gap: 1rem;
  }
}

.button {
  padding: 0.8rem 2rem;
  border-radius: 50px;
}
```

### Approach to Avoid (Deep Nesting & Redundant Classes)
```css
.section {
  .hero {
    .container {
      .text-content {
        .title-name { /* Deep nesting and redundant class */
          font-size: 3rem;
        }
      }
    }
  }
}
```
