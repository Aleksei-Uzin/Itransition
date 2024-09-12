import { select } from '@inquirer/prompts'
import { getHMAC } from '../crypto/index.js'
import { generateBoardOptions } from './utils.js'
import { log } from '../utils.js'

let options = null

export const generateGameBoardOptions = async (args, cryptoKey, compValue) => {
  const hmac = getHMAC(cryptoKey, compValue)
  options = options || generateBoardOptions(args)

  log(`HMAC:\n${hmac}`)
  return await select({
    message: `Available moves:`,
    loop: false,
    ...options,
  })
}
