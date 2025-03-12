const mqttClient = new Paho.MQTT.Client(Configuration.brokerUrl, Configuration.port, Configuration.clientId);

mqttClient.connect(GetOptions(mqttClient));

mqttClient.onMessageArrived = message => onReceivingMessage({stateValue: message.payloadString});

mqttClient.onConnectionLost = (responseObject) => {
  if (responseObject.errorCode !== 0)
    console.error('Connexion perdue :', responseObject.errorMessage);
};

const sendMessage = ({message, topic}) => {
  const mqttMessage = new Paho.MQTT.Message(message);
  mqttMessage.destinationName = topic;
  mqttClient.send(mqttMessage);
}

const notifyAll = message => sendMessage({message, topic: Configuration.topic});