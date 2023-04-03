export const checkedSort = (task) => task.checked ? 1 : -1

// const PRIORITY = {
//   'alta': -1,
//   'media': 0,
//   'baixa': 1,
//   '': 2
// }

export const sortPriority = (task) => {
  if (task.select === 'media') return 1
  if (task.select === 'alta') return -1
  return 0
}

