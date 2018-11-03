const all = (arr, fn = false) => arr.every(fn)

const allEqual = arr => arr.every(v => v === arr[0])

const any = (arr, fn = false) => arr.some(fn)

const arrayToCSV = (arr, delimiter = ',') => arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n')

const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

// bifurcate(["a","b","c","d"],[true,true,false,true])

const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

// bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]

const compact = arr => arr.filter(Boolean);

const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size))


console.log(chunk([0,1,2,3,4,5], 2))