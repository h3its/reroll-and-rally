import { marked } from 'marked';

// load all .md files at build time
const files = import.meta.glob('/src/posts/**/*.md', { as: 'raw', eager: true });

function parseFrontmatter(raw) {
  const fm = /^---\n([\s\S]*?)\n---/.exec(raw);
  const meta = {};
  let body = raw;

  if (fm) {
    const lines = fm[1].split('\n');
    for (const line of lines) {
      const m = /^(\w+):\s*(.*)$/.exec(line.trim());
      if (m) meta[m[1]] = m[2];
    }
    body = raw.slice(fm[0].length).trimStart();
  }
  return { meta, body };
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '');
}

export function getAllPosts() {
  const metas = [];
  for (const [path, raw] of Object.entries(files)) {
    const { meta } = parseFrontmatter(raw);
    metas.push({
      slug: slugFromPath(path),
      title: meta.title ?? slugFromPath(path),
      date: meta.date ?? new Date().toISOString().slice(0, 10),
      tags: meta.tags ? meta.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
      excerpt: meta.excerpt,
      cover: meta.cover
    });
  }
  // newest first
  return metas.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug) {
  const entry = Object.entries(files).find(([p]) => p.endsWith(`${slug}.md`));
  if (!entry) return null;

  const [path, raw] = entry;
  const { meta, body } = parseFrontmatter(raw);
  return {
    slug: slugFromPath(path),
    title: meta.title ?? slugFromPath(path),
    date: meta.date ?? new Date().toISOString().slice(0, 10),
    tags: meta.tags ? meta.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
    excerpt: meta.excerpt,
    cover: meta.cover,
    html: marked.parse(body)
  };
}
