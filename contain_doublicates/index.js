function checkDoublicate(arr) {
  const set = new Set();

  for (item of arr) {
    if (set.has(item)) {
      return true;
    }
    set.add(item);
  }
  return false;
}

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(checkDoublicate(nums));
