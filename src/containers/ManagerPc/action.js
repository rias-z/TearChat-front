export const successSetPcInfoList = (pcInfoList) => {
  return {
    type: 'SUCCESS_SET_PC_INFO_LIST',
    pcInfoList: pcInfoList,
  }
}

export const successAddPcList = (newPc) => {
  return {
    type: 'SUCCESS_ADD_PC_LIST',
    newPc: newPc,
  }
}
