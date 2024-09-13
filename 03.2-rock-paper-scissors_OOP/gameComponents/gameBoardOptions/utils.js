export const generateBoardOptions = boardOptions => {
  const options = boardOptions.reduce(
    (acc, option, i) =>
      acc.concat({
        name: `${i + 1} - ${option}`,
        value: { n: i + 1, ind: i, option },
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
