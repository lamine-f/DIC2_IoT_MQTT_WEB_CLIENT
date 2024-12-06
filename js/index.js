const [state, setState] = [{value: STATE.OFF}, (value) => {
    state.value = value;
    app.setAttribute("id", value);
}];

const onRecoveryState = ({value}) => setState(value);
const onReceivingMessage = ({value}) =>  setState(value);

switchOffButton.addEventListener('click', () => {
    setState(STATE.OFF);
    notifyAll( buildNewMessage(state) );
});

switchOnButton.addEventListener('click', () => {
    setState(STATE.ON);
    notifyAll( buildNewMessage(state) );
});