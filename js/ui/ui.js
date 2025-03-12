const onReceivingMessage = ({stateValue}) => setState(stateValue);

switchOffButton.addEventListener('click', () => {
    setState(STATE.OFF);
    notifyAll('0');
});

switchOnButton.addEventListener('click', () => {
    setState(STATE.ON);
    notifyAll('1');
});