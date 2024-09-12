import { createHmac, randomBytes } from 'node:crypto'

// https://nodejs.org/api/crypto.html#cryptorandombytessize-callback
// 256b / 8 = 32B
export const getCryptoKey = () => randomBytes(32).toString('hex')

// https://nodejs.org/api/crypto.html#cryptocreatehmacalgorithm-key-options
export const getHMAC = (key, data) =>
  createHmac('sha256', key).update(data).digest('hex')
