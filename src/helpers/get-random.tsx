export default function getRandomValue() {
  return window.crypto.getRandomValues(new Int16Array(10));
}
