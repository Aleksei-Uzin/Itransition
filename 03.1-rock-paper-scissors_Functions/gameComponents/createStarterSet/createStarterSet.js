import { input, select } from '@inquirer/prompts'
import { options } from './choicesOptions.js'
import { inputArr, validate } from './validation.js'

const selectgObj = {
  message: 'Select a set:',
  required: true,
  loop: false,
  ...options,
}

const inputObj = {
  message: 'Set: ',
  validate,
}

export const getStarterSet = () =>
  select(selectgObj).then(
    async answer => answer || inputArr(await input(inputObj))
  )
