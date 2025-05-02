import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDirectory = path.join(__dirname, 'src', 'pages');
const pageFiles = fs.readdirSync(pagesDirectory).filter(file => 
  file.endsWith('.tsx') && 
  file !== 'HomePage.tsx' &&  // We've already updated these
  file !== 'AboutPage.tsx' && 
  file !== 'ServicesPage.tsx' && 
  file !== 'ContactPage.tsx'
);

// Template for updating pages
const updatePageContent = (content, pageName) => {
  // Extract the main content components
  const componentRegex = /<main[^>]*>([\s\S]*?)<\/main>/;
  const match = content.match(componentRegex);
  const mainContent = match ? match[1].trim() : '';
  
  // Create a title based on the page name
  const title = pageName.replace('Page.tsx', '').replace(/([A-Z])/g, ' $1').trim();
  
  // Extract all imports
  const importMatches = content.match(/import [^;]*?;/g) || [];
  const filteredImports = importMatches
    .filter(line => !line.includes('import Navbar'))
    .filter(line => !line.includes('import Footer'))
    .filter(line => !line.includes('import { Helmet }'))
    .join('\n');
  
  // Updated content
  return `import React from 'react';
${filteredImports}
import SpaceThemeLayout from '../components/layouts/SpaceThemeLayout';

const ${pageName.replace('.tsx', '')} = () => {
  return (
    <SpaceThemeLayout
      title="${title} | ELECTROYALS"
      description="Explore the cosmic possibilities with ELECTROYALS ${title.toLowerCase()} offerings."
    >
      ${mainContent}
    </SpaceThemeLayout>
  );
};

export default ${pageName.replace('.tsx', '')};`;
};

// Process each page
pageFiles.forEach(file => {
  const filePath = path.join(pagesDirectory, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already using SpaceThemeLayout
  if (content.includes('SpaceThemeLayout')) {
    console.log(`Skipping ${file} - already updated`);
    return;
  }
  
  try {
    const updatedContent = updatePageContent(content, file);
    
    // Create backup
    fs.writeFileSync(`${filePath}.bak`, content);
    
    // Write updated content
    fs.writeFileSync(filePath, updatedContent);
    
    console.log(`Updated ${file}`);
  } catch (error) {
    console.error(`Error updating ${file}:`, error);
  }
});

console.log('Update complete!'); 