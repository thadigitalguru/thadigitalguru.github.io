import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const routes = ['/', '/services.html', '/blog.html', '/contact.html'];
for (const page of ['blog.html', 'contact.html', 'services.html']) {
  const html = await readFile(`_site/${page}`, 'utf8');
  const navigation = html.match(/<nav class="site-nav"[\s\S]*?<\/nav>/)?.[0];
  assert.ok(navigation, `${page}: shared navigation is present`);
  for (const route of routes) {
    assert.ok(navigation.includes(`href="${route}"`), `${page}: navigation includes ${route}`);
  }
  assert.ok(navigation.includes('aria-current="page"'), `${page}: current page is indicated`);
  for (const missingAsset of ['bootstrap-social.css', 'beautifuljekyll.css', 'beautifuljekyll.js']) {
    assert.ok(!html.includes(missingAsset), `${page}: obsolete ${missingAsset} is not requested`);
  }
}
console.log('Shared navigation and asset references verified on Blog, Services, and Contact.');
