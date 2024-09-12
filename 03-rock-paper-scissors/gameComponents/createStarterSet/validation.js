export const inputArr = str => str.split(/,?\s*/)

export const validate = str => {
  const arr = inputArr(str.trim())
  const len = arr.length
  const set = new Set(arr)

  if (len < 3) return 'expected ≥ 3 elements (a, b, c)'
  if (set.size !== len) return 'elements should be unique'
  if (len % 2 === 0) return 'expected odd number of elements'

  return true
}
