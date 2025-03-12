const Configuration = {
    brokerUrl : 'broker.emqx.io',
    port : 8083,
    topic : '@lord/led/1/management',
    clientId : 'webClientId_' + Math.random().toString(16).substring(2, 8),
}

const GetOptions = client => ({
    timeout: 5,
    keepAliveInterval: 60,
    onSuccess: () => {
        client.subscribe(Configuration.topic, {
            onSuccess: () => console.log(`Abonné au topic ${Configuration.topic} !`),
            onFailure: error => console.error('Erreur lors de l’abonnement au topic :', error),
        });
    },
    onFailure: error => console.error('Erreur de connexion au broker MQTT :', error)
})