export default {
  'public-mqtt5-broker': {
    title: 'Free Public MQTT Broker for IoT Testing',
    description:
      'Try out the free public MQTT broker based on the scalable and reliable EMQX. Start your MQTT testing and learning immediately without deployment.',
    banner: {
      title: 'Public {0} for IoT Testing',
      subTitle: 'Start your MQTT testing and learning immediately without deployment.',
      titleSlots: ['MQTT Broker'],
    },
    brokerInfo: {
      accessInfo: 'MQTT Broker Info:',
      info: [
        {
          label: 'Broker',
          value: 'broker.emqx.io',
        },
        {
          label: 'TCP Port',
          value: '1883',
        },
        {
          label: 'WebSocket Port',
          value: '8083',
        },
        {
          label: 'SSL/TLS Port',
          value: '8883',
        },
        {
          label: 'WebSocket Secure Port',
          value: '8084',
        },
      ],
      CAFile: 'Certificate Authority',
      introductions: {
        content:
          'This free public MQTT broker is based on the scalable and reliable EMQX and deployed in the US West (Oregon) AWS region.',
        slot: 'Never use it in production.',
      },
      learnMQTT: {
        content:
          'Check out our {0} to get started with MQTT protocol quickly and start your journey of IoT application development.',
        slot: 'rich and easy-to-understand MQTT guide',
      },
      MQTTTestClientTool: {
        title: 'Need MQTT client tools for testing? Recommend using',
        list: [
          {
            icon: 'icon-mqtt-websocket-toolkit',
            title: 'Online MQTT Client',
            link: 'http://www.emqx.io/online-mqtt-client',
          },
          {
            icon: 'icon-mqttx',
            title: 'Cross-platform MQTT Client',
            link: 'https://mqttx.app/',
          },
        ],
      },
    },
    privateBroker: {
      title: 'Want to deploy a dedicated MQTT broker?',
      list: [
        {
          key: 'cloud',
          icon: 'icon-cloud',
          title: 'EMQX Cloud',
          summary:
            'Fully managed MQTT service for IoT. The easiest way to start MQTT service. Connect your IoT devices to any cloud without the burden of maintaining infrastructure.',
          btnText: 'Try Free',
        },
        {
          key: 'enterprise',
          icon: 'icon-emqx',
          title: 'EMQX Enterprise',
          summary:
            'Self-managed enterprise MQTT platform at scale, an all-in-one distributed MQTT broker with multiple protocol gateways and a powerful built-in SQL-based IoT rule engine.',
          btnText: 'Download Free',
          link: '/try?product=enterprise',
        },
      ],
    },
    relatedBlogs: {
      title: 'Resources',
      learnMore: 'Learn More',
      viewMore: 'View More',
    },
  },
}
