Integra Magna - Landing Page Replication
Files included:
- index.html
- styles.css
- script.js
- README.txt

Approach:
- Built a semantic landing page using only CSS Grid for layout.
- Responsiveness handled with grid-template-columns/areas + media queries at 720px and 1024px.
- Relative units (rem, %, clamp) used for typography and spacing.
- Included two hover interactions: .btn.primary and .card/.feature hover effects.
- Optional bonus: Dark/Light toggle with keyboard accessibility (Enter, Space, and Ctrl/Cmd+T).
- Accessibility: semantic HTML, aria labels, and focus styles for interactive controls.

What I struggled with:
- The hero grid (.hero-grid) took the longest to get right because arranging content + visual block to reflow cleanly across narrow to wide viewports using only grid (no flexbox) needed careful tuning of area definitions and widths.

Known issues:
- This is a single-file static demo — form does not submit.
- Fonts are system fonts; if you want Google Fonts, add a link in head.

How to run:
- Open index.html in your browser.
- Toggle theme with the moon icon or press Enter/Space while focused on the toggle.
- For keyboard shortcut: Ctrl/Cmd+T also toggles theme.

Good luck with the submission!
