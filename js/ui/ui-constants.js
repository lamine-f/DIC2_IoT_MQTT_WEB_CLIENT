const app = document.querySelector('.app');
const switchOffButton = document.querySelector('#off-button');
const switchOnButton  = document.querySelector('#on-button');

const STATE = {
    ON: 'switch-on',
    OFF: 'switch-off'
}

const [state, setState] = [{value: STATE.OFF}, (value) => {
    state.value = value === '1' ? STATE.ON : STATE.OFF;
    app.setAttribute("id", state.value);
}];