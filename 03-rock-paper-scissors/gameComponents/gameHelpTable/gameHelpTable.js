import { Table } from 'console-table-printer'
import { findWinner } from '../utils.js'

const table = new Table({ title: 'Rules of the game' })

export const gameHelpTable = args => {
  for (let [ind, item] of Object.entries(args)) {
    const row = args.reduce((acc, move, i) => {
      const res = findWinner(ind, i, args.length)

      return {
        ...acc,
        ...{ [move]: res === 1 ? 'Lose' : res === -1 ? 'Win' : 'Draw' },
      }
    }, {})
    table.addRow({ Move: item, ...row })
  }

  table.printTable()
}
