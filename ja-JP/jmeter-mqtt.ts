export default {
  'jmeter-mqtt': {
    title: 'JMeter MQTT Plugin',
    description:
      'The mqtt-jmeter plugin is an open source JMeter plugin for MQTT test, widely adopted within IoT platform testing domain.',
    banner: {
      title: 'JMeter MQTT Plugin',
      desc: 'The mqtt-jmeter plugin is an open source JMeter plugin for MQTT test, widely adopted within IoT platform testing domain.',
      tryXmeter: 'Try XMeter Cloud',
      download: 'Download',
    },
    features: [
      {
        title: 'MQTT protocol compatible',
        desc: 'Support of multiple MQTT protocol versions, and full support for Qos0, Qos1, and Qos2 level MQTT messages.',
      },
      {
        title: 'Complex scenarios construction',
        desc: 'Provide connection sampler, publish sampler and subscribe sampler for constructing multiple combination scenarios.',
      },
      {
        title: 'SSL & WebSocket',
        desc: 'Support common TCP or encrypted MQTT connections; support connections via WebSocket.',
      },
      {
        title: 'Large-scale load simulation',
        desc: 'Be able to simulate millions of connections and message throughput with XMeter, fitting well into load testing.',
      },
    ],
    resources: {
      title: 'Resources',
      list: [
        {
          title: 'Introduction to open-source test tool - JMeter',
          desc: 'This article introduces the open source performance testing tool JMeter and uses JMeter to build and run a simple HTTP test case.',
          link: '/blog/introduction-to-the-open-source-testing-tool-jmeter',
        },
        {
          title: 'Introduction to JMeter test components',
          desc: "In this article, we will further introduce JMeter's rich components to help you build test scripts for complex scenarios.",
          link: '/blog/introduction-to-jmeter-test-components',
        },
        {
          title: 'How to Use the MQTT Plug-in in JMeter',
          desc: 'EMQ has open-sourced a JMeter-based MQTT test plug-in, and this article will introduce how to use this MQTT plug-in in JMeter.',
          link: '/blog/how-to-use-the-mqtt-plugin-in-jmeter',
        },
      ],
    },
  },
}
