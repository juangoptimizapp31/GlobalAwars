const fs = require('fs');
const path = require('path');

const innerPagesDir = 'c:\\Users\\User\\Downloads\\Global Guide\\globalguideawards.com\\original_backup\\globalguideawards.com\\public_html\\inner_pages';
const files = fs.readdirSync(innerPagesDir).filter(f => f.endsWith('.html'));

const categories = [];

files.forEach(file => {
  const filePath = path.join(innerPagesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract category title
  const titleMatch = content.match(/<h1 class="fsz-60">?\s*([\s\S]*?)\s*<\/h1>/i);
  const title = titleMatch ? titleMatch[1].trim() : file.replace('.html', '');
  
  // Find contestants
  // Let's parse pricing cards.
  // Note: some cards might be commented out. We can find both commented and active ones.
  const contestants = [];
  
  // Use a regex to find blocks of pricing-card
  // We can search for <div class="pricing-card ..."> or commented ones
  const cardRegex = /<div class="pricing-card(?:\s+active)?">([\s\S]*?)<\/div>\s*<\/div>/gi;
  let match;
  
  // First, check if the whole section is commented out.
  // If the section is inside <!-- ... --> then we mark all contestants as disabled.
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

console.log(JSON.stringify(categories, null, 2));
