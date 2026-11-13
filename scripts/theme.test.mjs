import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const source = await readFile(new URL('../assets/js/theme.js', import.meta.url), 'utf8');

function setup({ saved = null, blockedStorage = false } = {}) {
  const attributes = {};
  const button = { attributes: {}, setAttribute(name, value) { this.attributes[name] = value; } };
  const icon = {};
  const menuButton = { ...button, attributes: {}, focus() { this.focused = true; } };
  const classes = new Set();
  const menu = { classList: {
    toggle(name, on) { on ? classes.add(name) : classes.delete(name); },
    contains(name) { return classes.has(name); },
  } };
  const handlers = {};
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
      getElementById(id) { return id === 'theme-icon' ? icon : id === 'nav-menu' ? menu : null; },
      querySelector() { return menuButton; },
      querySelectorAll(selector) { return selector === '.theme-toggle' ? [button] : []; },
      addEventListener(event, handler) { handlers[event] = handler; },
    },
  });
  vm.runInContext(source, context);
  return { context, attributes, button, icon, menuButton, menu, handlers, storage };
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

test('Escape closes navigation, updates state, and returns focus', () => {
  const view = setup();
  view.context.toggleMenu();
  assert.equal(view.menuButton.attributes['aria-expanded'], 'true');
  view.handlers.keydown({ key: 'Escape' });
  assert.equal(view.menu.classList.contains('active'), false);
  assert.equal(view.menuButton.attributes['aria-expanded'], 'false');
  assert.equal(view.menuButton.focused, true);
});

test('outside clicks close navigation and update its announced state', () => {
  const view = setup();
  view.context.toggleMenu();
  view.handlers.click({ target: { closest() { return null; } } });
  assert.equal(view.menuButton.attributes['aria-expanded'], 'false');
});
