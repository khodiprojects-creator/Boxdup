# Box'd Up Design Guidelines

## Design Approach
**Reference-Based + Brand-Specific**: Clean, eco-conscious aesthetic with generous white space and minimalist approach. Think of brands like Stripe's restraint combined with modern green/sustainability focused companies.

## Brand Colors (Strictly Defined)
- **Primary Deep Green**: #0E5A2A (primary brand color, headers, key elements)
- **Accent Green**: #24A148 (CTAs, highlights, active states)
- **Off-White Background**: #FAF9F7 (main background, light surfaces)
- **Dark Text**: #123127 (body text, dark elements)

## Typography
- **Hierarchy**: Big, bold headlines for impact; clean, readable body text
- **Scale**: Generous sizing - make headlines prominent and impactful
- **Weight Variation**: Use bold weights for headlines, medium for subheadings, regular for body

## Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Mobile-first approach with progressive enhancement
- Generous white space between sections (py-16 to py-24)
- Contained content with max-width constraints (max-w-7xl for sections, max-w-2xl for text blocks)

## Component Library

### Header (Sticky)
- Left-aligned logo (use logo-wordmark.svg)
- Right-aligned navigation links: "FAQ", "Contact"
- Sticky positioning on scroll with subtle shadow
- Clean, minimal design with padding py-4

### Hero Section
- **Layout**: Image on left (black tote bin), content on right (desktop); stacked on mobile
- **Headline**: Large, bold "Rent Bins by the Week"
- **Subcopy**: "Eco-friendly bin rentals with delivery & pickup across Metro Vancouver. Mattress removal and small deliveries available."
- **CTA**: Prominent button "Reserve Bins" in accent green (#24A148) - scrolls to reservation form
- **Spacing**: Generous vertical padding (py-20 to py-32)

### Pricing Section
- **2-Column Card Layout** (grid on desktop, stack on mobile)
- **Card Style**: rounded-2xl with subtle shadows, off-white background
- **Pricing Items**:
  - Weekly Bin Rental: 10 black bins — $35/week
  - Delivery & Pickup (Metro Van): $25 flat
  - Mattress Removal: $40 each
  - Small Item Delivery: from $50
  - Extra Week: $20/week
  - Bundle Discount: 10% off (highlighted)
- **Visual Treatment**: Clear hierarchy, easy scanning, emphasis on value

### Reservation Form
- **Minimalist Card**: rounded-2xl, centered, clean design
- **Input Fields**: Name, Email, Phone, Address, Number of Bins (dropdown: 5/10/20), Add-ons (checkboxes: Mattress Removal, Small Delivery), Preferred Delivery Date/Time, Pickup Date/Time, Notes (textarea)
- **Validation**: Client-side with clear error states
- **Success State**: Toast notification on submission
- **Styling**: Focus rings on all inputs, proper labels, accessible form design

### Service Area Band
- **Content**: "Serving Metro Vancouver: Vancouver, Burnaby, Richmond, Surrey, Coquitlam, North/West Van"
- **Branded Truck Image**: Display below text (use provided truck image)
- **Background**: Subtle contrast from main sections

### Eco-Friendly Blurb
- **Content**: 1-2 sentences about reusing/sanitizing bins and reducing cardboard waste
- **Placement**: Near bottom, before footer
- **Style**: Clean, focused messaging with icon or visual element

### Footer
- **Contact Info**: Phone and email displayed clearly
- **Legal Links**: Terms • Eco Policy • Privacy (small, linked)
- **Layout**: Simple, organized, not cluttered

## Visual Design Elements
- **Cards**: rounded-2xl corners, subtle shadows (shadow-md to shadow-lg)
- **Buttons**: Accent green (#24A148) with proper hover/active states, rounded corners
- **Focus Rings**: Visible, accessible focus indicators on all interactive elements
- **Transitions**: Smooth but respect prefers-reduced-motion

## Images
- **Hero Image**: Black tote bin (left side on desktop) - use provided boxs_1762206524839.png
- **Service Area**: Branded truck image - use provided Truck_1762206524840.png
- **Logos**: Use logo-wordmark.svg for header, logo-icon.svg for favicon
- All images should have proper alt text for accessibility

## Accessibility Requirements
- Semantic HTML landmarks (header, main, section, footer)
- WCAG AA+ color contrast compliance
- All form inputs properly labeled with associated label elements
- Focus management and visible focus indicators
- Support for prefers-reduced-motion
- Descriptive alt text for all images

## Mobile Responsiveness
- Mobile-first design approach
- Stacked layouts on small screens
- Touch-friendly tap targets (minimum 44x44px)
- Readable text sizes without zooming
- Responsive images that scale appropriately