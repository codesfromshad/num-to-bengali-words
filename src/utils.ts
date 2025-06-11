function isFinite(value: number) {
  return !(
    typeof value !== "number" ||
    value !== value ||
    value === Infinity ||
    value === -Infinity
  );
}

const MAX_SAFE_INTEGER = 9007199254740991;
function isSafeNumber(value: number) {
  return typeof value === "number" &&
    Math.abs(value) <= MAX_SAFE_INTEGER;
}

function isInt(n: number) {
  return n % 1 === 0;
}

export { isFinite, isSafeNumber, isInt };