export class Computer {
  #options

  constructor(options = []) {
    this.#options = options
  }

  computerRandomMove() {
    const compInd = ~~(Math.random() * this.#options.length)
    const compVal = this.#options[compInd]

    return { compInd, compVal }
  }
}
