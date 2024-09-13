import { createHmac, randomBytes } from 'node:crypto'

export class Crypto {
  #cryptoKey = randomBytes(32).toString('hex')

  get cryptoKey() {
    return this.#cryptoKey
  }

  getHMAC(data) {
    return createHmac('sha256', this.#cryptoKey).update(data).digest('hex')
  }
}
