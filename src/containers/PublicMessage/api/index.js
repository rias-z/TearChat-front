export const apiPostMessageToPublic = (socket, messageInfo) => {
  /**
   * socket: publicMessageを送る
   * @return socket.on('receiveMessage') (Session/index.js)
   */
  socket.emit('postMessage', messageInfo)
}
