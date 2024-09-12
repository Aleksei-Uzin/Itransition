export const log = data => console.log(data)

export const findWinner = (compInd, ind, n) => {
  const p = ~~(n / 2)
  const res = Math.sign(((compInd - ind + p + n) % n) - p)

  return res
}
