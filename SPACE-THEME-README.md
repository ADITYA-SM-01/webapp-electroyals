# Space Theme Implementation

This README documents the changes made to implement a space-themed design across the entire website.

## Components Created

1. **SpaceThemeLayout**
   - Central layout component that provides consistent space theming
   - Used as a wrapper for all pages
   - Handles meta tags, navbar, footer, and background effects

2. **StarsCanvas**
   - Three.js-powered animated star background
   - Creates an immersive 3D star field that slowly rotates

3. **ModelViewer**
   - 3D model viewer component for GLB/GLTF files
   - Includes stars effect and model rotation
   - Used in the hero section with space.glb

4. **SpaceBackground.css**
   - CSS animations and background effects
   - Space-themed utility classes for elements

## Implemented Across Site

The space theme has been implemented across the entire site by:

1. Wrapping all pages with `SpaceThemeLayout`
2. Updating color schemes to dark blue/black with cosmic accents
3. Updating component styles to match the space theme
4. Replacing generic terms with space-themed language

## How to Use

### Layout Component

When creating new pages, use the SpaceThemeLayout wrapper:

```jsx
import SpaceThemeLayout from '../components/layouts/SpaceThemeLayout';

const NewPage = () => {
  return (
    <SpaceThemeLayout
      title="Page Title | ELECTROYALS"
      description="Space-themed description"
    >
      {/* Your page content */}
    </SpaceThemeLayout>
  );
};
```

### 3D Models

To display 3D models:

```jsx
import ModelViewer from '../components/3d/ModelViewer';

<ModelViewer 
  modelPath="/models/your-model.glb" 
  className="h-[400px]" 
  showStars={true} 
/>
```

### CSS Utilities

Use space-themed CSS classes:

```jsx
<div className="space-bg">
  <div className="cosmic-glow cosmic-border">
    <h2 className="twinkle">Content</h2>
  </div>
</div>
```

Available classes:
- `space-bg`: Space background with subtle stars
- `stars-small`, `stars-medium`, `stars-large`: Different star densities
- `cosmic-glow`: Blue/purple shadow glow
- `cosmic-border`: Colored border
- `space-gradient`: Dark gradient background
- `float`: Floating animation
- `pulse-glow`: Pulsing glow animation
- `twinkle`: Opacity animation

## Theme Colors

Space theme uses these primary colors:
- Background: `from-gray-900 to-black`
- Accents: `blue-400`, `purple-500`, `indigo-900`
- Text: `text-white`, `text-gray-300`
- Buttons: `from-blue-500 to-purple-600`

## Dependencies

The space theme relies on:
- three.js (v0.156.1)
- @react-three/fiber (v8.15.19)
- @react-three/drei (v9.92.7)

## Future Enhancements

Potential improvements:
- Add more space-themed 3D models
- Create particle effects for interactive elements
- Add subtle parallax scrolling effects
- Implement constellation animations
- Add more cosmic illustrations 