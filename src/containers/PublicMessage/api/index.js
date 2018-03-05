export const apiPostMessageToPublic = (socket, messageInfo) => {
  /** socket: publicMessageを送る
   *  Returns:
   *    socket.on('receiveMessage') (Session/index.js)
   */
  socket.emit('postMessage', messageInfo)
}
