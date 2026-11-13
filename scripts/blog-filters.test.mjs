import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const source = await readFile(new URL('../assets/js/blog-filters.js', import.meta.url), 'utf8');

function setup() {
  const buttons = ['all', 'SEO', 'AI'].map(filter => ({
    attributes: { 'data-filter': filter },
    getAttribute(name) { return this.attributes[name]; },
    setAttribute(name, value) { this.attributes[name] = value; },
    addEventListener(event, handler) { this[event] = handler; },
  }));
  const cards = ['brand search, seo', 'SEO, AI', 'retail, AIO', '', 'AI agents, AI models, AI'].map(topics => ({
    hidden: false,
    getAttribute() { return topics; },
  }));
  const results = {};
  vm.runInNewContext(source, { document: {
    addEventListener(event, handler) { handler(); },
    querySelectorAll(selector) { return selector === '.filter-button' ? buttons : cards; },
    getElementById() { return results; },
  } });
  return { buttons, cards, results };
}

test('SEO includes lowercase tags and excludes unrelated cards', () => {
  const { buttons, cards, results } = setup();
  buttons[1].click();
  assert.deepEqual(cards.map(card => card.hidden), [false, false, true, true, true]);
  assert.equal(results.textContent, 'Showing 2 articles.');
  assert.deepEqual(buttons.map(button => button.attributes['aria-pressed']), ['false', 'true', 'false']);
});

test('AI uses whole topics including categories, and All Posts restores every card', () => {
  const { buttons, cards, results } = setup();
  buttons[2].click();
  assert.deepEqual(cards.map(card => card.hidden), [true, false, true, true, false]);
  assert.equal(results.textContent, 'Showing 2 articles.');
  buttons[0].click();
  assert.ok(cards.every(card => !card.hidden));
  assert.equal(results.textContent, 'Showing 5 articles.');
});
