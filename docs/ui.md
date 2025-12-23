# UI Coding Standards

## Overview

This document establishes the coding standards for all user interface components throughout this project. **These standards are mandatory and must be followed without exception.**

## Core Principle

**ONLY shadcn/ui components shall be used for all UI elements in this project.**

## Component Usage Rules

### ✅ ALLOWED
- **shadcn/ui components ONLY**: All UI elements must use components from the shadcn/ui library
- Installing and using any official shadcn/ui component from their registry
- Composing shadcn/ui components together to create complex interfaces
- Using shadcn/ui component variants and customization options
- Applying Tailwind CSS classes to shadcn/ui components for styling adjustments

### ❌ STRICTLY FORBIDDEN
- Creating custom UI components from scratch
- Building custom buttons, inputs, cards, dialogs, or any other UI primitives
- Writing custom component implementations even if they mimic shadcn/ui
- Using any other UI component library (Material-UI, Chakra UI, etc.)
- Creating wrapper components that don't use shadcn/ui as their base

## Implementation Guidelines

### Installing shadcn/ui Components

When a new UI element is needed:

1. Check the [shadcn/ui documentation](https://ui.shadcn.com/) for the appropriate component
2. Install the component using the CLI:
   ```bash
   npx shadcn@latest add <component-name>
   ```
3. Import and use the component in your code

### Example: Adding a Button

```bash
# Install the button component
npx shadcn@latest add button
```

```tsx
// Use in your code
import { Button } from "@/components/ui/button"

export function MyFeature() {
  return (
    <Button variant="default">Click me</Button>
  )
}
```

### Composing Components

Complex UI patterns should be built by composing multiple shadcn/ui components:

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MyForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter text" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
}
```

### Styling shadcn/ui Components

Customize shadcn/ui components using:
- Built-in variant props
- Tailwind CSS utility classes
- The `className` prop for additional styling

```tsx
<Button
  variant="outline"
  size="lg"
  className="mt-4 bg-blue-500 hover:bg-blue-600"
>
  Styled Button
</Button>
```

## Available shadcn/ui Components

shadcn/ui provides a comprehensive set of components including:

- **Form Elements**: Button, Input, Textarea, Checkbox, Radio, Select, Switch, Slider
- **Layout**: Card, Separator, Tabs, Accordion, Sheet
- **Feedback**: Alert, Toast, Dialog, Popover, Tooltip, Progress
- **Navigation**: Navigation Menu, Dropdown Menu, Command, Breadcrumb
- **Data Display**: Table, Badge, Avatar, Calendar, Data Table
- **Overlays**: Dialog, Drawer, Popover, Sheet, Alert Dialog
- **And many more...**

Always consult the [official documentation](https://ui.shadcn.com/docs/components) for the complete list.

## Enforcement

### Code Review Requirements

All code submissions must:
1. Use exclusively shadcn/ui components for UI elements
2. Not contain any custom-built UI components
3. Have appropriate shadcn/ui components installed before use

### What to Do If a Component Is Not Available

If shadcn/ui doesn't have a component you need:

1. **Re-evaluate**: Can you achieve the same result by composing existing shadcn/ui components?
2. **Check Updates**: Has shadcn/ui added this component recently?
3. **Use Primitives**: shadcn/ui is built on Radix UI - check if the primitive exists
4. **Consult Team**: Discuss with the team before considering alternatives

## Rationale

Using exclusively shadcn/ui components ensures:

- **Consistency**: Uniform look and feel across the entire application
- **Accessibility**: shadcn/ui components are built on accessible primitives (Radix UI)
- **Maintainability**: Single source of truth for UI components
- **Quality**: Well-tested, production-ready components
- **Developer Experience**: Comprehensive documentation and TypeScript support
- **Performance**: Optimized components with minimal bundle impact
- **Theme Integration**: Seamless integration with Tailwind CSS and design tokens

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [shadcn/ui Themes](https://ui.shadcn.com/themes)
- [Radix UI Documentation](https://www.radix-ui.com/) (underlying primitives)

---

**Remember: When in doubt, use shadcn/ui. No exceptions.**
