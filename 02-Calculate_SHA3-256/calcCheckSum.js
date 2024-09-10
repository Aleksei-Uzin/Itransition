const { readdirSync, readFileSync } = require('node:fs')
const { createHash } = require('node:crypto')

class CheckSum {
  #dir
  #email
  #hashArr = []

  #getHash(data) {
    return createHash('SHA3-256').update(data).digest('hex')
  }

  #processDir() {
    const fileNames = readdirSync(this.#dir)

    for (const fileName of fileNames) {
      const buffer = readFileSync(`${this.#dir}${fileName}`)
      this.#hashArr.push(this.#getHash(buffer))
    }

    return this.#hashArr.sort()
  }

  constructor(dir, email) {
    this.#dir = dir
    this.#email = email
  }

  get sum() {
    const sortedArr = this.#processDir()
    const strWithEmail = sortedArr.join('').concat(this.#email)
    return this.#getHash(strWithEmail)
  }
}

const checkSum = new CheckSum('./files/', 'aleksei.uzin@gmail.com')

console.log(checkSum.sum)
