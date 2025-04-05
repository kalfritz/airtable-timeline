# Airtable Timeline Component

A modern, interactive timeline component built with TypeScript and React. Deployed on Vercel for optimal performance and reliability.

🖥️ **Live on**: https://airtable-timeline.vercel.app/

## What I Like About My Implementation

1. **Smart Space Management**: The lane assignment algorithm efficiently packs items, making great use of horizontal space
2. **Progressive Enhancement**: Starting with basic functionality (item display) and layering on features (tooltips, month dividers)
3. **User-First Approach**: 
   - Modal editing for small items where inline editing would be impractical
   - Date indicators positioned precisely at item boundaries
   - Month dividers for better time context
4. **Performance Considerations**: Minimal re-renders and efficient DOM updates

## What I Would Change

1. **First of all: Clean up the Timeline Component:** I would create a **TimelineItem** component or perhaps a **TimelineLane** one. Perhaps a custom hook could also come in handy to decouple most of the logic from _Timeline_. I ran out of time to do that :(
2. Second: use a library to handle the Timeline Component instead of reinventing the wheel with no need.
3. **Switch to Tailwind**: Given styled-components' deprecation, Tailwind would be a more future-proof choice
4. **Better Date Handling**: Use a robust date library like date-fns from the start
5. **More Accessible**: Add better keyboard navigation and ARIA attributes
6. **State Management**: Consider using a more robust state management solution for complex interactions

## Design Decisions

- **Inspiration**: Looked at Airtable's UI patterns and other timeline tools like Google Calendar and Jira's timeline view
- **Modal vs Inline**: Chose modal editing after testing with various item widths - inline editing became unusable for small items
- **Visual Hierarchy**:
  - Month dividers to break up long timelines
  - Date indicators above items for immediate context
  - Tooltips for full details without cluttering the UI
- **Responsive Approach**: Focused on horizontal scrolling rather than trying to squeeze everything into view

## Testing Approach

Current test coverage with Cypress includes basic functionality. With more time, I would add tests for:
  - Lane assignment algorithm - Unit Testing
  - Date calculations and formatting - Unit Testing / Component Testing ( React Testing Library )
  - Item creation/editing flow - Component Testing ( React Testing Library )
  - Tooltip and modal interactions - Component Testing ( React Testing Library )

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Run tests: `npm test`
