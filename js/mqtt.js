const client = new Paho.MQTT.Client(Configuration.brokerUrl, Configuration.port, Configuration.clientId);

client.connect(getOptions(client));

client.onMessageArrived = (message) => {
  onReceivingMessage({value: message.payloadString});
}

client.onConnectionLost = (responseObject) => {
  if (responseObject.errorCode !== 0) {
    console.error('Connexion perdue :', responseObject.errorMessage);
  }
};

const sendMessage = ({message, topic}) => {
  const mqttMessage = new Paho.MQTT.Message(message);
  mqttMessage.destinationName = topic;
  client.send(mqttMessage);
}

const notifyAll = message => sendMessage({message, topic: Configuration.topic});