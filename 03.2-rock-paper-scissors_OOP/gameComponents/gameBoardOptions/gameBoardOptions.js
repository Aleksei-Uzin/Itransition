import { select } from '@inquirer/prompts'
import { generateBoardOptions } from './utils.js'
import { log } from '../utils.js'

let bordOptions = null

export const gameBoardOptions = async (options, hmac) => {
  bordOptions = bordOptions || generateBoardOptions(options)

  log(`HMAC: ${hmac}`)

  return await select({
    message: `Available moves:`,
    loop: false,
    ...bordOptions,
  })
}
