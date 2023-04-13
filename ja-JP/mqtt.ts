export default {
  mqtt: {
    title: 'The Easy-to-understand Guide to MQTT Protocol',
    description:
      'The rich and easy-to-understand MQTT guide to help you quickly get started with MQTT protocol and start your journey of IoT application development.',
    banner: {
      title: 'The Easy-to-understand Guide to MQTT Protocol',
      subTitle:
        'The rich and easy-to-understand MQTT guide to help you quickly get started with MQTT protocol and start your journey of IoT application development.',
    },
    why: [
      'Lightweight and Efficient',
      'Reliable Message Delivery',
      'Connect Massive IoT Devices',
      'Secure Bi-directional Communication',
      'Keep Alive and Stateful Sessions',
    ],
    MQTTGettingStarted: {
      title: "MQTT Beginner's Guide",
      subTitle: '',
      learnMore: 'Explore MQTT 5.0',
    },
    MQTTInDepth: {
      title: 'MQTT Advanced & Practice',
      subTitle: '',
      tagOptions: [
        {
          value: 'server',
          label: 'Server-side',
        },
        {
          value: 'frontend',
          label: 'Front-end',
        },
        {
          value: 'mobile',
          label: 'Mobile',
        },
        {
          value: 'hardware',
          label: 'Hardware',
        },
      ],
      list: {
        server: [
          {
            icon: 'icon-java',
            title: 'How to Use MQTT in Java',
            link: '/blog/how-to-use-mqtt-in-java',
          },
          {
            icon: 'icon-nodejs',
            title: 'How to Use MQTT in Node.js',
            link: '/blog/how-to-use-mqtt-in-nodejs',
          },
          {
            icon: 'icon-php',
            title: 'How to Use MQTT in PHP',
            link: '/blog/how-to-use-mqtt-in-php',
          },
          {
            icon: 'icon-go',
            title: 'How to Use MQTT in Golang',
            link: '/blog/how-to-use-mqtt-in-golang',
          },
          {
            icon: 'icon-python',
            title: 'How to Use MQTT in Python',
            link: '/blog/how-to-use-mqtt-in-python',
          },
          {
            icon: 'icon-python',
            title: 'Python MQTT Asynchronous Framework - HBMQTT',
            link: '/blog/python-async-mqtt-client-hbmqtt',
          },
          {
            icon: 'icon-python',
            title: 'Comparison of Python MQTT Clients',
            link: '/blog/comparision-of-python-mqtt-client',
          },
          {
            icon: 'icon-rust',
            title: 'How to Use MQTT in Rust',
            link: '/blog/how-to-use-mqtt-in-rust',
          },
        ],
        frontend: [
          {
            icon: 'icon-websocket',
            title: 'Connect to MQTT Broker with WebSocket',
            link: '/blog/connect-to-mqtt-broker-with-websocket',
          },
          {
            icon: 'icon-mqtt',
            title: 'MQTT.js Tutorial',
            link: '/blog/mqtt-js-tutorial',
          },
          {
            icon: 'icon-vue',
            title: 'How to Use MQTT in the Vue Project',
            link: '/blog/how-to-use-mqtt-in-vue',
          },
          {
            icon: 'icon-react',
            title: 'How to Use MQTT in the React Project',
            link: '/blog/how-to-use-mqtt-in-react',
          },
          {
            icon: 'icon-electron',
            title: 'How to Use MQTT in the Electron Project',
            link: '/blog/how-to-use-mqtt-in-electron',
          },
        ],
        mobile: [
          {
            icon: 'icon-flutter',
            title: 'Using MQTT in the Flutter Project',
            link: '/blog/using-mqtt-in-flutter',
          },
          {
            icon: 'icon-ios',
            title: 'Using MQTT in the iOS Project',
            link: '/blog/ios-mqtt5-client',
          },
          {
            icon: 'icon-react',
            title: 'Using MQTT in the React Native Project',
            link: '/blog/how-to-use-mqtt-in-react-native',
          },
          {
            icon: 'icon-android',
            title: 'Android Connects MQTT Using Kotlin',
            link: '/blog/android-connects-mqtt-using-kotlin',
          },
          {
            icon: 'icon-android',
            title: 'Android MQTT TLS/SSL Authentication',
            link: '/blog/android-mqtt-ssl-tls-authentication',
          },
        ],
        hardware: [
          {
            icon: 'icon-raspberry-pi',
            title: 'Use MQTT with Raspberry Pi',
            link: '/blog/use-mqtt-with-raspberry-pi',
          },
          {
            icon: 'icon-raspberry-pi',
            title: 'MicroPython MQTT Tutorial Based on Raspberry Pi',
            link: '/blog/micro-python-mqtt-tutorial-based-on-raspberry-pi',
          },
          {
            icon: 'icon-esp32',
            title: 'ESP32 Connects to the Free Public MQTT Broker',
            link: '/blog/esp32-connects-to-the-free-public-mqtt-broker',
          },
          {
            icon: 'icon-esp8266',
            title: 'ESP8266 Connects to MQTT Broker with Arduino',
            link: '/blog/esp8266-connects-to-the-public-mqtt-broker',
          },
          {
            icon: 'icon-esp8266',
            title: 'Remote Control LED with ESP8266 and MQTT',
            link: '/blog/esp8266_mqtt_led',
          },
          {
            icon: 'icon-esp8266',
            title: 'Upload Sensor Data to MQTT Cloud Service Via NodeMCU (ESP8266)',
            link: '/blog/upload-sensor-data-to-mqtt-cloud-service-via-nodemcu-esp8266',
          },
        ],
      },
      learnMore: 'More MQTT Blogs',
      learnMoreLink: '/blog/category/mqtt-client',
    },
    quickStart: {
      title: 'Get Started with MQTT',
      steps: [
        {
          title: 'MQTT Broker Setup',
          or: 'Or',
          cloud: {
            title: 'Fully Managed',
            contents:
              'EMQX Cloud is a fully managed MQTT service for IoT and create an MQTT Broker instantly in minutes.',
            tryCloud: 'Try EMQX Cloud',
          },
          enterprise: {
            title: 'Self-managed',
            contents:
              'EMQX is a cloud-native, distributed MQTT Broker for IoT, powering event streaming for IoT devices at massive scale.',
            download: 'Download EMQX',
          },
        },
        {
          title: 'Testing with MQTT Client',
          mqttx: {
            contents:
              'MQTT X provides comprehensive MQTT testing capabilities and helps you develop MQTT services and applications faster.',
            download: 'Download MQTT X',
          },
        },
        {
          title: 'MQTT Use Case',
          automotive: {
            title: 'EMQ helps SAIC Volkswagen building IoV platform',
            contents:
              "EMQX provides persistence, southbound message caching, and secure authentication to meet SAIC Volkswagen's IoV platform's needs.",
            learnMore: 'Learn More',
            learnMoreLink: '/blog/emqx-in-volkswagen-iov',
          },
        },
      ],
    },
  },
}
