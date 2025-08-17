import { marked } from 'marked';

// load all .md files at build time (keep your existing folder)
const files = import.meta.glob('/src/posts/**/*.md', { as: 'raw', eager: true });

function parseFrontmatter(raw) {
  const fm = /^---\n([\s\S]*?)\n---/.exec(raw);
  const meta = {};
  let body = raw;

  if (fm) {
    const lines = fm[1].split('\n');
    for (const line of lines) {
      const m = /^(\w+):\s*(.*)$/.exec(line.trim());
      if (m) {
        let val = m[2].trim();
        // strip surrounding single/double quotes if the whole value is quoted
        if (
          (val.startsWith('"') && val.endsWith('"')) ||
          (val.startsWith("'") && val.endsWith("'"))
        ) {
          val = val.slice(1, -1);
        }
        meta[m[1]] = val;
      }
    }
    body = raw.slice(fm[0].length).trimStart();
  }
  return { meta, body };
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '');
}

function normalizeTags(val) {
  if (!val) return [];
  return val.split(',').map((t) => t.trim()).filter(Boolean);
}

function normalizeCover(val) {
  if (!val) return '';
  // leave absolute URLs and absolute paths alone
  if (/^https?:\/\//i.test(val) || val.startsWith('/')) return val;
  // strip a leading "static/" if present, then make it site-absolute
  return '/' + val.replace(/^static\//, '');
}

export function getAllPosts() {
  const metas = [];
  for (const [path, raw] of Object.entries(files)) {
    const { meta } = parseFrontmatter(raw);
    metas.push({
      slug: slugFromPath(path),
      title: meta.title ?? slugFromPath(path),
      date: meta.date ?? new Date().toISOString().slice(0, 10),
      author: meta.author ?? 'Re-roll & Rally',                // <-- added
      tags: normalizeTags(meta.tags),                          // CSV -> array
      excerpt: meta.excerpt,
      cover: normalizeCover(meta.cover)                        // <-- normalize
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
    author: meta.author ?? 'Re-roll & Rally',                  // <-- added
    tags: normalizeTags(meta.tags),
    excerpt: meta.excerpt,
    cover: normalizeCover(meta.cover),                         // <-- normalize
    html: marked.parse(body)
  };
}
