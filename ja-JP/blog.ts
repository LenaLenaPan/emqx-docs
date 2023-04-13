export default {
  blog: {
    title: 'Blog',
    description:
      "EMQ's blog includes the user guide for MQTT protocol and MQTT client, technical tutorials and best practices of EMQX, and solutions for the IoT industry.",
    category: 'Category',
    banner: {
      title: 'Tutorials, IoT Development Practices, Edge Computing, Functional Programming...',
      subTitle: '',
    },
    all: 'All',
    seeAll: 'See All',
    topics: 'Topics',
    products: 'Products',
    engineering: 'Engineering',
    userStories: 'User Stories',
    community: 'Community',
    news: 'News',
    releases: 'Releases',
    search: 'Search',
    noData: 'No Data',
    back: 'Back',
    edit: 'Edit',
    feedback: 'Feedback',
    learnMore: 'Learn more',
    relatedLinks: 'Related Posts',
    shareBlog: 'Share',
    popularBlogs: 'Top Posts',
    contents: 'Contents',
    categoryOption: [
      [
        {
          label: 'EMQX',
          value: 'emqx',
        },
        {
          label: 'EMQX Cloud',
          value: 'cloud',
        },
        // {
        //   label: 'EMQX Enterprise',
        //   value: 'enterprise',
        // },
        {
          label: 'Neuron',
          value: 'neuron',
        },
      ],
      [
        {
          label: 'MQTT Tutorials',
          value: 'mqtt-protocol',
        },
        {
          label: 'MQTT Broker',
          value: 'mqtt-broker',
        },
        {
          label: 'MQTT Programming',
          value: 'mqtt-client',
        },
        {
          label: 'MQTT Security',
          value: 'security',
        },
      ],
      [
        {
          label: 'Internet of Vehicles',
          value: 'internet-of-vehicles',
        },
        {
          label: 'Industrial IoT',
          value: 'industrial-iot',
        },
        {
          label: 'Eco & Integration',
          value: 'eco-and-integration',
        },
        {
          label: 'IoT Testing',
          value: 'iot-testing',
        },
      ],
      [
        {
          label: 'NanoMQ',
          value: 'nanomq',
        },
        {
          label: 'MQTT X',
          value: 'mqttx',
        },
        {
          label: 'eKuiper',
          value: 'kuiper',
        },
        {
          label: 'XMeter',
          value: 'xmeter',
        },
      ],
    ],
    categoryData: {
      emqx: {
        icon: 'icon-emqx',
        title: 'EMQX - Enterprise MQTT Messaging Platform',
        summary:
          'The world’s most scalable and reliable MQTT messaging platform to connect, move and process your data in business-critical scenarios for the IoT era.',
      },
      cloud: {
        icon: 'icon-cloud',
        title: 'EMQX Cloud - Fully Managed MQTT Service for IoT',
        summary:
          'The easiest way to start MQTT service. Connect your IoT devices to any cloud without the burden of maintaining infrastructure.',
      },
      hstream: {
        icon: 'icon-hstreamdb',
        title: 'HStreamDB - Cloud-Native Streaming Database for IoT Data Storage and Real-time Analytics',
        summary:
          'HStreamDB is the first stream-native database explicitly designed for streaming data, supporting efficient storage and management of large-scale streaming data and complex real-time analytics on dynamically changing data streams. It helps enterprises gather instantaneous insights and stay competitive by empowering a quick implementation of real-time applications.',
      },
      neuron: {
        icon: 'icon-neuron',
        title: 'Neuron - Industrial IoT Gateway Software for Edge',
        summary:
          'IoT edge industrial protocol gateway software, which supports one-stop access to dozens of industrial protocols and converts them into MQTT protocol to access the cloud industrial IoT platform. It just requires ultra-low resource consumption, and supports three major architectures of X86, ARM, and MIPS.',
      },
      nanomq: {
        icon: 'icon-nanomq',
        title: 'NanoMQ - Lightweight Messaging Engine for IoT Edge',
        summary:
          'NanoMQ is an MQTT messaging broker + multi-protocol message bus for edge computing. It supports the MQTT protocol and other commonly-used edge bus protocols such as ZeroMQ and Nanomsg, and integrates broker and brokerless message modes to facilitate the creation of one-stop edge data bus applications.',
      },
      kuiper: {
        icon: 'icon-ekuiper',
        title: 'eKuiper',
        summary:
          'eKuiper is an edge lightweight IoT data analytics / streaming software implemented by Golang, and it can be run at all kinds of resource constrained edge devices.',
      },
      mqttx: {
        icon: 'icon-mqttx',
        title: 'MQTT X - MQTT 5.0 Desktop Client',
        summary:
          'MQTT X is a Fully Open-source MQTT 5.0 cross-platform Desktop Client, makes it easy and quick to create multiple simultaneous online MQTT client connections, test the connection, publish, and subscribe functions of MQTT/TCP, MQTT/TLS, MQTT/WebSocket as well as other MQTT protocol features.',
      },
      xmeter: {
        icon: 'icon-xmeter',
        title: 'XMeter - Large-Scale, Continuous JMeter Cloud Testing Platform for IoT',
        summary:
          'XMeter support millions of simulated users, concurrent device connections, and message throughput performance testing. XMeter support the testing of many IoT protocols such as MQTT, LwM2M/CoAP, and can extend richer test scenarios and protocol support for IoT applications.',
      },
      'mqtt-protocol': {
        title: 'MQTT Tutorials',
        summary: 'Get to know the preferred protocol in IoT from beginner to master.',
      },
      'mqtt-client': {
        title: 'MQTT Programming',
        summary: 'Best practice of MQTT in various clients.',
      },
      solutions: {
        title: 'Solutions',
        summary: 'Accelerate digital transformation of  industries based on EMQ data infrastructure for IoT.',
      },
      'internet-of-vehicles': {
        title: 'Internet of Vehicles',
        summary:
          "Build a reliable, efficient and industry-specific Internet of Vehicles platform based on EMQ's practical experience, from theoretical knowledge such as protocol selection to practical operations like platform architecture design.",
      },
      'eco-and-integration': {
        title: 'Eco & Integration',
        summary: 'Explore more with & via EMQ.',
      },
      'iot-testing': {
        title: 'IoT Testing',
        summary: 'Guarantee the availability and reliability of the IoT platform.',
      },
    },
    subscribe: {
      title: 'Subscribe to our blogs',
      placeholder: 'Your email address',
      btn: 'Subscribe',
      success: 'Thanks for subscribing!',
    },
    tryCloud: {
      title: 'Need a Fully Managed MQTT Broker?',
      desc: 'Try EMQX Cloud now, and create an MQTT Broker instantly in minutes.',
      btn: 'Get Started Free',
    },
  },
}
