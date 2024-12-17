const brokerUrl = 'broker.emqx.io';
const port = 8083;
const topic = '@lord/led/1/management';
const clientId = 'myClientId_' + Math.random().toString(16).substring(2, 8);

const client = new Paho.MQTT.Client(brokerUrl, port, clientId);

const options = {
  timeout: 5,
  keepAliveInterval: 60,
  onSuccess: () => {
    client.subscribe(topic, {
      onSuccess: () => {
        console.log(`Abonné au topic ${topic} !`);
      },
      onFailure: (error) => {
        console.error('Erreur lors de l’abonnement au topic :', error);
      },
    });
    sendMessage({message: "0", topic});
  },
  onFailure: (error) => {
    console.error('Erreur de connexion au broker MQTT :', error);
  }
};

client.onMessageArrived = (message) => {
    onReceivingMessage({value: message.payloadString});
};

client.onConnectionLost = (responseObject) => {
  if (responseObject.errorCode !== 0) {
    console.error('Connexion perdue :', responseObject.errorMessage);
  }
};

client.connect(options);

const sendMessage = ({message, topic}) => {
  const mqttMessage = new Paho.MQTT.Message(message);
  mqttMessage.destinationName = topic;
  client.send(mqttMessage);
}

const notifyAll = message => sendMessage({message, topic});