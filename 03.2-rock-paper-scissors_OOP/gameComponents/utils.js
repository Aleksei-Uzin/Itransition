import { ValidationOptionsError } from '../gameClasses/index.js'

export const log = data => console.log(data)

export const findWinner = (compInd, ind, n) => {
  const p = ~~(n / 2)
  const res = Math.sign(((compInd - ind + p + n) % n) - p)

  return res
}

export const validateArgs = args => {
  const len = args.length
  const set = new Set(args)

  try {
    if (len < 3) {
      throw new ValidationOptionsError(
        `expected ≥ 3 elements (a b c), you provide: ${len}`
      )
    }

    if (set.size !== len) {
      throw new ValidationOptionsError('elements should be unique')
    }

    if (len % 2 === 0) {
      throw new ValidationOptionsError(
        `expected odd number of elements, you provide: ${len}`
      )
    }

    return args
  } catch ({ name, message }) {
    log(`${name}: ${message}`)
  }
}
