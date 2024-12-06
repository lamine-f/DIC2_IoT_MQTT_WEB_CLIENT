const socket = io();
let socketClientID = null;

socket.on("connect", () => socket.emit(KeyMessage.HAND_CHECK, socketClientID = socket.id));
socket.on(KeyMessage.STATE_RECOVERY, data => onRecoveryState(JSON.parse(data)));
socket.on(KeyMessage.MESSAGE_RECEPTION, message => {
    const data = JSON.parse(message);
    if (data.socketClientID === socketClientID) return;
    onReceivingMessage(data.message);
});

const buildNewMessage = message => ({socketClientID, user: user.value, message});
const notifyAll = message => socket.emit(KeyMessage.MESSAGE_SENDING, JSON.stringify(message));