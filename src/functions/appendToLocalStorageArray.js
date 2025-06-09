export function appendToLocalStorageArray(key, item) {
  const prev = JSON.parse(localStorage.getItem(key) || '[]');
  const next = [...prev, item];
  localStorage.setItem(key, JSON.stringify(next));
}
