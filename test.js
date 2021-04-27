// const repeat = (string, repetitions) => {
//   if (repetitions <= 1) return string;
//   return `${string}${repeat(string, --repetitions)}`;
// };

function repeat(str, times) {
  if (!str) return '';
  if (times === 0) return '';
  if (times === 1) return str;
  var result = str;
  for (var i = result.length; i < times; ) {
      if (i + result.length < times) {
          result += result;
          i = result.length;
      } else {
          result += repeat(str, times - i);
          break;
      }
  }
  return result;
}


test("works correctly", () => {
  expect(repeat("0", 1)).toBe("0");
  expect(repeat("0", 2)).toBe("00");
  expect(repeat("0", 3)).toBe("000");

  for(let i = 1; i < 5000000; i++) {
    expect(repeat('0', i)).toBe('0'.repeat(i))
  }
});
