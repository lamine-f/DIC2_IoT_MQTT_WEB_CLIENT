# DIC2_IoT_MQTT_WEB_CLIENT

## Description
DIC2_IoT_MQTT_WEB_CLIENT est une application web permettant de contrôler un interrupteur connecté via MQTT. Ce projet utilise **Node-RED**, **MQTT**, et un **Tableau de Bord Web** pour l'interaction avec l'utilisateur.

## Fonctionnalités
- Connexion à un **broker MQTT**.
- Envoi et réception des messages MQTT pour contrôler un **interrupteur LED**.
- Interface utilisateur interactive pour visualiser et changer l'état de l'interrupteur.
- Gestion des logs et configuration centralisée.

## Architecture du Projet

```
DIC2_IoT_MQTT_WEB_CLIENT
│── images/                 # Ressources graphiques
│   ├── switch-off.png       # Image interrupteur éteint
│   ├── switch-on.png        # Image interrupteur allumé
│── index.html               # Page principale de l'application
│── js/                      # Scripts JavaScript
│   ├── app.js               # Logique principale
│   ├── config.js            # Centralisation des constantes
│   ├── mqtt/                # Gestion MQTT
│   │   ├── mqtt-constants.js # Définition des topics MQTT
│   │   ├── mqtt.js          # Connexion et gestion MQTT
│   ├── ui/                  # Gestion de l'interface utilisateur
│   │   ├── ui-constants.js   # Définition des constantes UI
│   │   ├── switch.js        # Composant interrupteur
│   ├── utils/               # Utilitaires
│   │   ├── logger.js        # Système de logs
│── libs/                    # Bibliothèques externes
│   ├── paho-mqtt/           # Client MQTT Paho
│   │   └── paho-mqtt-min.js # Bibliothèque minifiée
│── node-red-flow/           # Configuration de Node-RED
│   └── flow.json            # Flow Node-RED
│── README.md                # Documentation du projet
└── styles/                  # Styles CSS
    └── main.css             # Styles principaux
```

## Technologies utilisées
- **Frontend** : HTML, CSS, JavaScript
- **Backend** : Node-RED (pour le traitement MQTT)
- **Protocole de communication** : MQTT
- **Bibliothèques externes** : Paho MQTT (client MQTT en JavaScript)

## Installation et Exécution
### 1. Prérequis
- Un broker MQTT (ex: Mosquitto, HiveMQ, Eclipse Mosquitto)
- Un serveur Node-RED installé
- Un navigateur web

### 2. Installation
1. **Cloner le projet** :
   ```sh
   git clone https://github.com/votre-repo/DIC2_IoT_MQTT_WEB_CLIENT.git
   cd DIC2_IoT_MQTT_WEB_CLIENT
   ```
2. **Configurer Node-RED** :
   - Importer `node-red-flow/flow.json` dans Node-RED.
   - Déployer les flux.
3. **Lancer un broker MQTT** :
   ```sh
   mosquitto -v
   ```
4. **Ouvrir `index.html` dans un navigateur**.

## Utilisation
- **Allumer/Éteindre l'interrupteur** en cliquant sur le bouton de l'interface.
- **Observer les logs** dans la console navigateur.
- **Vérifier la communication MQTT** avec un client MQTT comme `mosquitto_sub` ou `MQTT Explorer`.

---
🎯 **Auteur** : Mouhamed Lamine FAYE  
🚀 **Projet DIC2 IoT**

