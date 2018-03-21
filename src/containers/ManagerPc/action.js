export const successInitializedPcList = (pcList) => {
  return {
    type: 'SUCCESS_INITIALIZED_PC_LIST',
    pcList: pcList,
  }
}

export const successAddPcList = (newPc) => {
  return {
    type: 'SUCCESS_ADD_PC_LIST',
    newPc: newPc,
  }
}
