# Illustration version

Mobile-first implementation of the five screens selected in Figma node `581:221` in the Portfolio Board (`AbBS4I2i1y3XKQG2Qovi6N`).

## Screens

| Route | Figma source |
| --- | --- |
| `/` | Introduction mosaic, `512:29` |
| `/why-hire-me/1` | Fresh Perspective, `512:85` |
| `/why-hire-me/2` | Ownership and three separate image strips, `519:2` |
| `/why-hire-me/3` | Hands-On, `512:153` |
| `/projects` | Selected Projects and two collage cards, `559:2` |

The illustrations and SVGs in `public/illustrations` are the exact assets supplied by Figma design context. No screen is implemented as a flattened screenshot. Bodoni Moda, Oswald, and Barlow Condensed are hosted locally. SF Pro uses the native Apple system font where available, with Helvetica/Arial fallbacks on other platforms; its proprietary font files are not bundled.

The mosaic and cards retain their Figma proportions. Reading content flows naturally to avoid the overlaps and clipped text present in the fixed-height Ownership layout. Larger screens retain a bounded onboarding reading area; Projects changes to two columns at 1000px. Browser navigation, arrow keys on the focused screen, touch swipes, previous/next links, progress links, and a keyboard-accessible menu connect the screens. Reduced-motion preferences disable movement.

The Production card opens the existing production case study. Prodiva opens a concise text case study based on the supplied project context; it makes no measured-result claims. Existing case study content is preserved. About and other unselected Figma screens are outside this first implementation.

## Validation

- `npm run build`
- `npx eslint src/App.jsx src/illustration/Portfolio.jsx`
- Browser checks at 320, 390, 714, 768, and 1440px for all five screens: no horizontal overflow, all image assets loaded.
- Visual comparison of mobile, Figma-width, and desktop screenshots.
- Navigation checks for the mosaic, progress, menu, both project cards, keyboard arrows, touch swipes, focus wrap/restoration, and reduced motion.

Work is isolated to `illustration-version`. Publishing the branch does not merge it into `main`.
