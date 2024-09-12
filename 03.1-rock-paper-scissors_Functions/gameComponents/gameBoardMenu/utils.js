export const computerRandomMove = args => {
  const ind = ~~(Math.random() * args.length)
  const value = args[ind]

  return { ind, value }
}

export const generateBoardOptions = args => {
  const options = args.reduce(
    (acc, o, i) =>
      acc.concat({
        name: `${i + 1} - ${o}`,
        value: { n: i + 1, ind: i, option: o },
      }),
    []
  )

  return {
    choices: [
      ...options,
      {
        name: '0 - exit',
        value: 'exit',
      },
      {
        name: '? - help',
        value: 'help',
      },
    ],
  }
}
