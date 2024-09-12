import { findWinner, log } from '../utils.js'

export const generateGameBoardResult = ({
  compInd,
  compValue,
  cryptoKey,
  ind,
  option,
  n,
}) => {
  const res = findWinner(compInd, ind, n)
  log(`\nYour move: ${option}`)
  log(`Computer move: ${compValue}`)
  log(res === 1 ? 'Computer win!' : res === -1 ? 'You win!' : 'Draw')
  log(`HMAC key:\n${cryptoKey}\n`)
}
