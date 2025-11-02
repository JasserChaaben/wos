# Design Guidelines: Chaimae's Birthday Website

## Design Approach

**Selected Approach:** Custom celebratory design inspired by modern interactive greeting card websites like JibJab and Punchbowl, combined with playful quiz mechanics similar to BuzzFeed's interactive content.

**Core Principles:**
- Joyful and whimsical aesthetic that builds excitement through each game stage
- Smooth, delightful transitions that make the experience feel like unwrapping a gift
- Personal and heartfelt tone balanced with playful humor
- Progressive reveal strategy: simple → colorful → emotional

## Typography

**Font Selection:**
- Primary: Rounded, friendly sans-serif (e.g., Quicksand, Poppins, or Nunito) for headings and questions
- Secondary: Clean, legible sans-serif (e.g., Inter or Open Sans) for body text and messages
- Accent: Playful handwritten style (e.g., Pacifico or Dancing Script) for "Happy Birthday" message

**Hierarchy:**
- Quiz Questions: Large, bold (text-3xl to text-5xl), centered
- Multiple Choice Options: Medium weight (text-xl to text-2xl)
- Birthday Message: Medium to large (text-lg to text-2xl), well-spaced for readability
- Button Text: Medium weight (text-base to text-lg)

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, and 16 for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-12 to py-16
- Element gaps: gap-4 to gap-6

**Page Structure:**

**Quiz Stages (Games 1-4):**
- Full viewport height (min-h-screen) with centered content
- Vertical stack layout with generous spacing
- Progress indicator at top (subtle dots or step counter)
- Question prominently centered
- Input/choices below with breathing room
- "Next" or submit button at bottom with clear visual weight

**Game Layouts:**
- Game 1: Text input field (large, centered, rounded)
- Game 2: 4 stacked buttons (full-width on mobile, constrained on desktop)
- Game 3: 3 horizontal option buttons or cards
- Game 4: 4 options in 2x2 grid (mobile: stacked)

**Celebration Page:**
- Full viewport, centered gift card (max-w-2xl)
- Floating animations fill background space around card
- Card positioned in center with z-index hierarchy

## Component Library

### Quiz Components

**Question Cards:**
- Contained width (max-w-xl to max-w-2xl)
- Generous padding (p-8 to p-12)
- Subtle elevation/shadow for depth
- Rounded corners (rounded-2xl to rounded-3xl)

**Input Field (Game 1):**
- Extra large text input with rounded borders
- Prominent focus state with scale/glow effect
- Clear validation feedback (shake animation for wrong answer)

**Multiple Choice Buttons:**
- Full-width touchable targets (min-h-14)
- Rounded corners (rounded-xl)
- Clear hover and active states
- Wrong answer shake + color flash
- Correct answer celebration (scale + glow)

**Progress Indicator:**
- 4 dots/steps across top
- Active state clearly distinguished
- Smooth transitions between steps

### Gift Card Component

**Card Structure:**
- 3D card appearance with realistic dimensions (aspect ratio ~3:4 or standard greeting card)
- Opening animation: split down middle, pages swing outward (rotateY transform)
- Duration: 1.5-2 seconds for open
- Inside left: decorative element (balloons/roses illustration)
- Inside right: cake with candles + message

**Cake Element:**
- Illustrated or styled cake with 28 candles
- Candles light up sequentially (stagger animation, 50-100ms delay each)
- Flame flicker animation (subtle scale pulse)

**Message Presentation:**
- Well-spaced paragraphs with comfortable line-height (leading-relaxed)
- Heartfelt message centered or left-aligned for readability
- Emoji integrated naturally within text
- Signature or from-name at bottom

**Button (Page Turn):**
- Positioned below message card
- Clear, prominent call-to-action
- Rounded design matching overall aesthetic

### Reveal Page (Wrong Day Message)

**Page Turn Animation:**
- 3D flip effect (rotateY 180deg)
- Duration: 800ms-1s
- Ease-out timing for natural feel

**Message Layout:**
- Centered content
- Large crying emoji (text-6xl to text-8xl)
- Apologetic message with playful tone
- Same typography family for consistency

### Floating Elements

**Balloons:**
- 8-12 balloons of varying sizes scattered across viewport
- Continuous upward float animation (translateY + slight sway)
- Different animation durations (8-15s) for organic feel
- Slight rotation during float
- Start positions randomized across bottom

**Roses:**
- 6-10 roses floating upward
- Similar animation approach to balloons
- Mixed with balloons for variety
- Slower ascent than balloons for visual interest

## Animation Strategy

**Page Transitions:**
- Fade + slight scale for quiz stage changes (300-400ms)
- Card opening: smooth 3D rotation with perspective
- Page turn: realistic flip with slight overshoot

**Micro-interactions:**
- Button hover: subtle lift (translateY -2px) + shadow increase
- Wrong answer: horizontal shake (5-10px, 3-4 iterations)
- Correct answer: scale pulse (1.05x) + brief glow
- Input focus: scale (1.02x) + border glow

**Celebration Animations:**
- Confetti burst on quiz completion (before card appears)
- Balloons and roses start animating immediately when celebration page loads
- Candles light sequentially when card opens
- Smooth, delightful timing throughout

**Performance Considerations:**
- Use CSS transforms (not position changes) for smooth 60fps
- Limit simultaneous heavy animations
- Preload card open state for seamless transition

## Responsive Behavior

**Mobile (base to md):**
- Single column layouts
- Larger touch targets (min 48px height)
- Stacked buttons and options
- Reduced spacing for viewport efficiency
- Card scales down but remains readable

**Desktop (lg+):**
- Constrained content width for focus
- Larger typography and spacing
- Card at optimal size (not full width)
- More pronounced floating element spread

## Visual Enrichment

**Background Treatments:**
- Quiz stages: Soft gradient or subtle pattern
- Celebration page: Vibrant, multi-layered gradients
- Avoid distracting patterns that compete with content

**Depth & Elevation:**
- Cards and buttons use subtle shadows
- Layered z-index for floating elements
- Perspective on 3D animations (card open, page turn)

**Celebratory Elements:**
- Confetti particles on quiz completion
- Sparkle effects around correct answers
- Warm, glowing effects around cake candles
- Joyful, uplifting visual language throughout

## Images

**No large hero image required** - this is a sequential interactive experience that builds to the card reveal.

**Decorative Graphics:**
- Balloon illustrations: Colorful, cartoon-style balloons (SVG preferred)
- Rose graphics: Stylized roses in complementary style
- Cake illustration: Detailed birthday cake with 28 individual candles
- Emoji: High-quality crying emoji for final reveal

**Implementation:** Use icon libraries or simple SVG illustrations for balloons, roses, and decorative elements. Cake can be illustrated SVG or creatively composed from CSS/shapes.