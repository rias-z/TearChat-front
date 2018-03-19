export function addTable(id) {
  return {
    type: 'ADD_TABLE',
    id: id,
  }
}

export function removeTable(id) {
  return {
    type: 'REMOVE_TABLE',
    id: id,
  }
}
