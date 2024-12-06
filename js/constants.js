const STATE = {
    ON: 'switch-on',
    OFF: 'switch-off'
}
const KeyMessage = {
    HAND_CHECK: "handCheck",
    STATE_RECOVERY: "recoveryOfOldMessages",
    MESSAGE_SENDING: "messageSending",
    MESSAGE_RECEPTION: "messageReception",
}

const app = document.querySelector('.app');
const switchOffButton = document.querySelector('#off-button');
const switchOnButton  = document.querySelector('#on-button');