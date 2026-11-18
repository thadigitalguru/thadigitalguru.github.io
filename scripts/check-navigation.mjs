import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const routes = ['/', '/services.html', '/blog.html', '/contact.html'];
const pages = ['index.html', 'blog.html', 'contact.html', 'services.html', 'blog/2026/02/20/from-chatbots-to-agents/index.html'];
for (const page of pages) {
  const html = await readFile(`_site/${page}`, 'utf8');
  const navigation = html.match(/<nav\b[^>]*aria-label="Main navigation"[^>]*>[\s\S]*?<\/nav>/)?.[0];
  assert.ok(navigation, `${page}: shared navigation is present`);
  for (const route of routes) {
    assert.ok(navigation.includes(`href="${route}"`), `${page}: navigation includes ${route}`);
  }
  if (page.split('/').length === 1) {
    const current = page === 'index.html' ? '/' : `/${page}`;
    assert.ok(navigation.includes(`href="${current}" aria-current="page"`), `${page}: current page is indicated`);
  }
  assert.ok(!navigation.includes('hidden'), `${page}: navigation links remain available without JavaScript`);
  assert.equal((html.match(/<footer class="site-footer">/g) ?? []).length, 1, `${page}: one shared site footer`);
  assert.equal((html.match(/src="\/assets\/js\/theme\.js\?/g) ?? []).length, 1, `${page}: one shared theme script`);
  assert.ok(html.includes('href="#main"'), `${page}: skip link is present`);
  assert.match(html, /<main[^>]*id="main"[^>]*tabindex="-1"/, `${page}: skip target accepts focus`);
  for (const missingAsset of ['bootstrap-social.css', 'beautifuljekyll.css', 'beautifuljekyll.js']) {
    assert.ok(!html.includes(missingAsset), `${page}: obsolete ${missingAsset} is not requested`);
  }
}
console.log(`Navigation, skip targets, and asset references verified on ${pages.length} representative pages.`);
