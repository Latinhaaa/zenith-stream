const key = (name) => `zenith:${name}`;
export const read = (name, fallback) => { try { return JSON.parse(localStorage.getItem(key(name))) ?? fallback; } catch { return fallback; } };
export const write = (name, value) => localStorage.setItem(key(name), JSON.stringify(value));
export const uid = () => crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
