const fs = require('fs');
const path = require('path');

const innerPagesDir = 'c:\\Users\\User\\Downloads\\Global Guide\\globalguideawards.com\\original_backup\\globalguideawards.com\\public_html\\inner_pages';
const files = fs.readdirSync(innerPagesDir).filter(f => f.endsWith('.html'));

const categories = [];

files.forEach(file => {
  // Skip general utility page templates if any
  if (file.startsWith('page-')) return;
  
  const filePath = path.join(innerPagesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract category title
  const titleMatch = content.match(/<h1 class="fsz-60">?\s*([\s\S]*?)\s*<\/h1>/i);
  const title = titleMatch ? titleMatch[1].trim() : file.replace('.html', '');
  
  // Find contestants
  const contestants = [];
  
  // Regex to find blocks of pricing-card
  const cardRegex = /<div class="pricing-card(?:\s+active)?">([\s\S]*?)<\/div>\s*<\/div>/gi;
  let match;
  
  // Check if the pricing-table section is commented out
  const isSectionCommented = /<!--\s*<section class="tc-page-pricing-table">([\s\S]*?)<\/section>\s*-->/i.test(content);
  
  while ((match = cardRegex.exec(content)) !== null) {
    const cardContent = match[1];
    const nameMatch = cardContent.match(/<h6>\s*([\s\S]*?)\s*<\/h6>/i);
    const iframeMatch = cardContent.match(/<iframe[^>]+src="([^"]+)"/i);
    
    if (nameMatch) {
      contestants.push({
        name: nameMatch[1].trim(),
        videoUrl: iframeMatch ? iframeMatch[1].trim() : '',
        disabled: isSectionCommented
      });
    }
  }
  
  categories.push({
    id: file.replace('.html', ''),
    title: title,
    contestants: contestants
  });
});

const outputFilePath = 'c:\\Users\\User\\Downloads\\Global Guide\\globalguideawards.com\\src\\data\\categoriesData.js';
fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });
fs.writeFileSync(outputFilePath, `export const categoriesData = ${JSON.stringify(categories, null, 2)};\n`, 'utf-8');
console.log('Categories data successfully generated at:', outputFilePath);
