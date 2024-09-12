import { getStarterSet } from '../createStarterSet/index.js'
import { getCryptoKey } from '../crypto/index.js'
import { gameHelpTable } from '../gameHelpTable/index.js'
import { log } from '../utils.js'
import { generateGameBoardOptions } from './generateGameBoardOptions.js'
import { generateGameBoardResult } from './generateGameBoardResult.js'
import { computerRandomMove } from './utils.js'

const args = await getStarterSet()
const cryptoKey = getCryptoKey()

export const gameBoardMenu = async () => {
  const { ind: compInd, value: compValue } = computerRandomMove(args)
  const answer = await generateGameBoardOptions(args, cryptoKey, compValue)
  const n = args.length

  if (answer === 'exit') {
    log('The End')
    return
  }

  if (answer === 'help') {
    gameHelpTable(args)
    gameBoardMenu()
    return
  }

  generateGameBoardResult({ compInd, compValue, cryptoKey, n, ...answer })
  gameBoardMenu()
}
