import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const source = await readFile(new URL('../assets/js/theme.js', import.meta.url), 'utf8');

function setup({ saved = null, blockedStorage = false } = {}) {
  const attributes = {};
  const button = { attributes: {}, setAttribute(name, value) { this.attributes[name] = value; } };
  const icon = {};
  const storage = { theme: saved };
  const context = vm.createContext({
    console: { warn() {} },
    localStorage: {
      getItem() { if (blockedStorage) throw Error('blocked'); return storage.theme; },
      setItem(key, value) { if (blockedStorage) throw Error('blocked'); storage[key] = value; },
    },
    document: {
      documentElement: {
        setAttribute(name, value) { attributes[name] = value; },
        getAttribute(name) { return attributes[name]; },
      },
      getElementById(id) { return id === 'theme-icon' ? icon : null; },
      querySelectorAll(selector) { return selector === '.theme-toggle' ? [button] : []; },
      addEventListener() {},
    },
  });
  vm.runInContext(source, context);
  return { context, attributes, button, icon, storage };
}

test('theme state, label, and saved preference stay synchronized', () => {
  const view = setup({ saved: 'light' });
  assert.equal(view.attributes['data-theme'], 'light');
  assert.equal(view.button.attributes['aria-label'], 'Switch to dark theme');
  view.context.toggleTheme();
  assert.equal(view.attributes['data-theme'], 'dark');
  assert.equal(view.button.attributes['aria-label'], 'Switch to light theme');
  assert.equal(view.icon.textContent, 'Light');
  assert.equal(view.storage.theme, 'dark');
});

test('theme still changes when preference storage is unavailable', () => {
  const view = setup({ blockedStorage: true });
  view.context.toggleTheme();
  assert.equal(view.attributes['data-theme'], 'light');
  assert.equal(view.button.attributes['aria-label'], 'Switch to dark theme');
});
