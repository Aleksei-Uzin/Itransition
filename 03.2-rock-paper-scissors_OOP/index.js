import { Computer, Crypto } from './gameClasses/index.js'
import {
  gameBoardOptions,
  gameBoardResults,
  gameHelpTable,
  log,
  validateArgs,
} from './gameComponents/index.js'

const options = validateArgs(process.argv.slice(2))
const computer = new Computer(options)
const crypto = new Crypto()

async function startGame() {
  const { compInd, compVal } = computer.computerRandomMove()
  const answer = await gameBoardOptions(options, crypto.getHMAC(compVal))
  const cryptoKey = crypto.cryptoKey
  const len = options.length

  if (answer === 'exit') {
    log('The End')
    return
  }

  if (answer === 'help') {
    gameHelpTable(options)
    startGame()
    return
  }

  gameBoardResults({ compInd, compVal, cryptoKey, len, ...answer })
  startGame()
}

startGame()
