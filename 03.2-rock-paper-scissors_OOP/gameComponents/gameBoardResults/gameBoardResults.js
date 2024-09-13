import { findWinner, log } from '../utils.js'

export const gameBoardResults = ({
  compInd,
  compVal,
  cryptoKey,
  ind,
  len,
  option,
}) => {
  const res = findWinner(compInd, ind, len)

  log(`\nYour move: ${option}`)
  log(`Computer move: ${compVal}`)
  log(res === 1 ? 'You loose 😔' : res === -1 ? 'You win! 😎' : 'Draw')
  log(`HMAC key:\n${cryptoKey}\n`)
}
