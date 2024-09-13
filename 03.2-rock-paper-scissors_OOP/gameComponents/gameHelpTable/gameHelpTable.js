import { Table } from 'console-table-printer'
import { findWinner } from '../utils.js'

const table = new Table({ title: 'Rules of the game' })

export const gameHelpTable = options => {
  for (let [ind, item] of Object.entries(options)) {
    const row = options.reduce((acc, move, i) => {
      const res = findWinner(ind, i, options.length)

      return {
        ...acc,
        ...{ [move]: res === 1 ? 'Lose' : res === -1 ? 'Win' : 'Draw' },
      }
    }, {})

    table.addRow({ ['PCv|User>']: item, ...row })
  }

  table.printTable()
}
