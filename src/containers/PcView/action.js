export const successInitializedPcsInfo = (pcsInfo) => {
  return {
    type: 'SUCCESS_INITIALIZED_PCS_INFO',
    pcsInfo: pcsInfo,
  }
}

export const successAddPcToView = (pcInfo) => {
  return {
    type: 'SUCCESS_ADD_PC',
    pcInfo: pcInfo,
  }
}
