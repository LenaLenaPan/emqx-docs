export default {
  downloads: {
    title: 'Try EMQ Products for Free',
    description:
      'Try EMQ products free. Use in the cloud, or download locally, to start your IoT data connection, movement, processing and analysis easily and reliably.',
    banner: {
      title: 'Choose your product, start free',
    },
    tabs: {
      cloud: {
        icon: 'icon-cloud',
        title: 'EMQX Cloud',
        subTitle: 'Fully managed MQTT service',
      },
      onPremises: {
        icon: 'icon-emqx',
        title: 'EMQX',
        subTitle: 'Self-managed MQTT messaging platform',
      },
      moreProducts: {
        icon: 'icon-more-products',
        title: 'More Products',
        subTitle: 'Neuron, NanoMQ and MQTT X',
      },
    },
    paneCloud: {
      title: 'Fully Managed MQTT Service for IoT',
      cloudProviderList: ['aws', 'azure', 'google-cloud'],
      freeTrial: 'Up to 14-Day Free Trial',
      noCreditCard: 'No credit card required',
      features: [
        'Fully managed MQTT 5.0 service',
        'Powerful SQL-based data integrations',
        'Integration with various databases',
        'Highly available, fault-tolerant',
        'Run anywhere, pay as you go',
      ],
      form: {
        title: 'Sign up and deploy in minutes',
        getStarted: 'Get Started Free',
        alreadyRegistered: 'Have an account? {signIn}',
      },
    },
    paneEnterprise: {
      paneTitle: {
        title: 'EMQX Enterprise',
      },
      summary:
        'Self-managed scalable and reliable MQTT messaging platform, an all-in-one distributed MQTT broker with multiple protocol gateways and a powerful built-in SQL-based IoT rule engine.',
      features: [
        'Multiple IoT protocols support',
        'Powerful SQL-based rule engine',
        'Data persistence and bridging',
        'Management & monitoring center',
        'Global technical support team',
      ],
      freeTrial: 'Get Free Trial License',
    },
    paneBroker: {
      paneTitle: {
        title: 'EMQX Open Source',
      },
      summary:
        'The most popular open source MQTT broker with a high-performance real-time message processing engine, powering event streaming for IoT devices at massive scale.',
      features: [
        'Fully open-sourced under APL 2.0',
        'MQTT 3.1.1 and MQTT 5.0 spec',
        'High available, masterless clustering',
        'High concurrency with low latency',
        'Extensible gateways and plugins',
      ],
    },
    paneNeuron: {
      paneTitle: {
        icon: 'icon-neuron',
        title: 'Neuron',
      },
      summary:
        'IoT edge industrial protocol gateway software, which supports one-stop access to dozens of industrial protocols and converts them into MQTT protocol to access the cloud industrial IoT platform.',
      features: [
        'Support multiple industrial protocols',
        'Reverse control equipment capability',
        'Extensible framework',
        'Data loss protection',
        'Gateway configuration management based on Web',
        'Edge computing capability',
      ],
      freeTrial: 'Get Free Trial License',
    },
    paneNanoMQ: {
      paneTitle: {
        icon: 'icon-nanomq',
        title: 'NanoMQ',
      },
      summary: 'NanoMQ is an MQTT messaging broker + multi-protocol message bus for edge computing.',
      features: [
        'MQTT 3.1.1 and MQTT 5.0 spec',
        'WebSocket',
        'Nanomsg',
        'Fully asynchronous I/O & multi-threading',
        'Good support for SMP',
        'Low latency. High handling capacity',
      ],
    },
    paneMQTTX: {
      paneTitle: {
        icon: 'icon-mqttx',
        title: 'MQTT X',
      },
      summary: 'MQTT X is a fully open-source cross-platform MQTT 5.0 desktop client.',
      features: [
        'For MQTT v3.1.1 and MQTT 5.0',
        'For Windows，macOS，Linux',
        'Support MQTT over WebSockets',
        'Single/two-way SSL authentication',
        'Customizable script to simulate data testing',
        'Support for Chinese, English, Japanese and Turkish',
        'Support for Hex, Base64, JSON and Plaintext',
      ],
    },
    paneEmqttBench: {
      paneTitle: {
        icon: 'icon-emqtt-bench',
        title: 'eMQTT-Bench',
      },
      summary: 'eMQTT-Bench is a lightweight MQTT v5.0 benchmark tool written in Erlang.',
      features: [
        'For MQTT v3.1.1 and MQTT 5.0',
        'For MQTT over QUIC',
        'Single/two-way SSL authentication',
        'Support millions of concurrent connections and message publish/subscribe tests on a single machine',
        'Support flexibly define scenarios with customized connection numbers, message rates, and size',
        'Provide error recovery and retry mechanisms to ensure test stability',
      ],
    },
    downloadsForm: {
      title: 'Available Downloads',
      getStarted: 'Download',
      version: 'Version',
      os: 'OS',
    },
    followUs: 'Follow Us',
    back: 'Back',
    documentation: 'Documentation',
    releaseNotes: 'Release Notes',
    type: 'Type',
    broker: 'Open Source',
    enterprise: 'Enterprise',
    version: 'Version',
    cloudVersion: 'Plan',
    historyVersions: 'All Versions',
    serverEstimate: ' Server Estimate',
    getDockerImage: 'Get Docker Image',
    startDockerContainer: 'Start Docker Container',
    systemVersion: 'System Version',
    installMethod: 'Install Method',
    CPUArch: 'CPU Architecture',
    supportQUIC: 'Support QUIC',
    downloads: 'Download',
    install: 'Install',
    run: 'Run',
    systemctl: 'Checking status',
    windowsDownload: '1. Download {0}，then decompress it',
    startEMQX: 'Access the decompression path from the command line, start emqx',
    nanomqWindowsDownload: '1. Download {0}',
    downloadNow: 'Download Now',
    tryFree: 'Get FREE Trial License',
    enableOnEMQXCloud: 'Launch on EMQX Cloud',
    titleSlot: 'Download {product}',
    k8sInstall: {
      certManager: '1. Follow the {docs} to install the cert-manager. For example',
      certManagerDocs: 'documentation',
      operatorControllerManager: 'Install Operator Controller Manager',
      checkStatus: 'Check EMQX Operator Controller status (Make sure the status is Running)',
      deployEMQX: 'Deploy the EMQX',
      EMQXOperatorDocs: 'EMQX Operator Docs',
    },
    licenseTips: {
      emqx: {
        limitations: 'Limitations',
        neverExpires: 'EMQX Enterprise comes with a built-in license for ten connections that never expires.',
        neverExpiresV5: 'EMQX Enterprise comes with a built-in license for 100 connections that never expires.',
        needMore: 'Need more connections for testing?',
        freeTrial: 'Get a Free Trial License',
      },
      neuron: {
        limitations: 'Limitations',
        neverExpires:
          'Neuron open source edition only includes Modbus and MQTT drivers. If you need all drivers for testing, you can apply for a 15-day trial license by clicking below.',
        freeTrial: 'Get a Free Trial License',
      },
    },
  },
}
