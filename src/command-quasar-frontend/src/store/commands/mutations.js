/*
export function someMutation (state) {
}
*/

export const updateExample = (state, toSet) => {
  state.example = toSet
}

export const updateCommands = (state, toSet) => {
  state.commandsData = toSet
}

export const addCommand = (state, commandToSet) => {
  state.commandsData.push(commandToSet)
}