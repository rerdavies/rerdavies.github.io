import { Feed } from 'feed';
import { articleDataRaw } from '../src/data/BlogDataRaw.ts';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = 'https://rerdavies.github.io';
const author = {
  name: 'Robin E.R. Davies',
  email: 'rerdavies@gmail.com',
  link: siteUrl
};

const feed = new Feed({
  title: "Robin E.R. Davies",
  description: "Technical blog and essays on software development",
  id: siteUrl,
  link: siteUrl,
  language: "en",
  image: `${siteUrl}/favicon.png`,
  favicon: `${siteUrl}/favicon.png`,
  copyright: `Copyright ${new Date().getFullYear()} Robin E.R. Davies. All rights reserved.`,
  updated: new Date(),
  generator: "Feed for Node.js",
  feedLinks: {
    rss: `${siteUrl}/feed.xml`,
    atom: `${siteUrl}/atom.xml`,
  },
  author: author
});

// Sort articles by date (newest first)
const sortedArticles = [...articleDataRaw].sort((a, b) => 
  new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Add each article to the feed
sortedArticles.forEach(article => {
  const url = `${siteUrl}${article.route}`;
  
  feed.addItem({
    title: article.title,
    id: url,
    link: url,
    description: article.description,
    content: article.description,
    author: article.authors.map(a => ({ name: a.name })),
    date: new Date(article.date),
    image: article.thumbnail ? `${siteUrl}${article.thumbnail}` : undefined,
    category: [{ name: article.tag }],
  });
});

// Ensure build/client directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  console.error('Public directory does not exist.');
  process.exit(1);
}

// Write RSS and Atom feeds
const rssContent = feed.rss2();
const atomContent = feed.atom1();

// Add XSLT stylesheet processing instructions
const rssWithStylesheet = rssContent.replace(
  '<?xml version="1.0" encoding="utf-8"?>',
  '<?xml version="1.0" encoding="utf-8"?>\n<?xml-stylesheet type="text/xsl" href="feed.xsl"?>'
);

const atomWithStylesheet = atomContent.replace(
  '<?xml version="1.0" encoding="utf-8"?>',
  '<?xml version="1.0" encoding="utf-8"?>\n<?xml-stylesheet type="text/xsl" href="atom.xsl"?>'
);

fs.writeFileSync(path.join(publicDir, 'feed.xml'), rssWithStylesheet);
fs.writeFileSync(path.join(publicDir, 'atom.xml'), atomWithStylesheet);

console.log('✅ RSS and Atom feeds generated successfully!');
console.log(`   - ${publicDir}/feed.xml`);
console.log(`   - ${publicDir}/atom.xml`);
