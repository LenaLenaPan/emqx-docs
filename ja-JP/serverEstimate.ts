export default {
  serverEstimate: {
    title: 'Server Estimate',
    description:
      'Estimate the hardware requirements of EMQX MQTT broker according to the maximum number of connections of devices and the message send and receive TPS.',
    banner: {
      title: 'Server Estimate',
    },
    connectionItem: {
      title: 'Max connection',
      tips: 'max number of device connections supported',
      contactUs: 'contact us',
    },
    TPSItem: {
      title: 'Pub&Sub TPS',
      tips: 'The total number of messages sent and received per second, regardless of message size',
      customize: 'customize',
    },
    resourceCalculation: {
      title: 'Resource usage calculation',
      memory: 'Memory',
      nodes: 'nodes',
      cpu: 'CPU cores',
    },
    getStarted: {
      title: 'Get Started',
      tryEnterprise: 'Try EMQX Enterprise',
      contact: 'Contact Us',
    },
  },
}
