const f = (first = '', ...rest) => {
  let max = (s = '')

  for (let c of first) {
    s += c
    rest.every(e => e.includes(s)) ? (max = s) : (s = s.slice(1))
  }

  console.log(max)
}

f('BAA', 'AA', 'A') // A
f('ABCDEFZ', 'WBCDXYZ') // BCD
f('132', '12332', '12312') // 1
f('ABCDEFGH', 'ABCDEFG', 'ABCEDF', 'ABCED') // ABC
f('ABCDEFGH', 'ABCDEFG', 'ABCDEF', 'ABCDE') // ABCDE
f('ABCDEFGH', 'ABCDEFG', 'ABCDEF', 'ABCDE', 'EDCBA') // A
f('ABCDEFGH', 'ABCDEFG', 'ABCDEF', 'ABCDE', 'EDCBCA') // BC
f('ABCDEFGH', 'ABCDEFG', 'AxBCDEF', 'ABCDxE', 'EDCBCAABCD') // BCD
f('ABCDEFGH', '1234') // ''
f('ABCDEFGH') // ABCDEFGH
f() // ''
f('ABCQEFDEFGHIJ', 'BCXEFGYZBCDEWEFGHU') // EFGH
