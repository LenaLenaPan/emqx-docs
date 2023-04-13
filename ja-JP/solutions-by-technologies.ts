export default {
  'solutions-by-technologies': {
    navs: [
      {
        text: 'Benefits',
        link: '#benifits',
      },
      {
        text: 'Capabilities',
        link: '#capabilities',
      },
      // {
      //   text: 'Use Cases',
      //   link: '#use-cases',
      // },
      {
        text: 'Related Products',
        link: '#related-products',
      },
      {
        text: 'Customer Success Stories',
        link: '#customer-story',
      },
      {
        text: 'Get Started',
        link: '#get-started',
      },
      {
        text: 'Resources',
        link: '#resources',
      },
    ],
    benifits: 'Benefits',
    capability: 'Capabilities',
    useCases: 'Use Cases',
    customerStory: {
      title: 'Customer Success Stories',
      readStory: 'Read the Story',
    },
    relatedProducts: {
      title: 'Related Products',
      list: {
        cloud: {
          icon: 'icon-cloud',
          title: 'EMQX Cloud',
          summary: 'Fully Managed MQTT Service for IoT',
          link: '/cloud',
        },
        emqx: {
          icon: 'icon-emqx',
          title: 'EMQX',
          summary: 'Self-managed MQTT Messaging Platform',
          link: '/products/emqx',
        },
        hstreamdb: {
          icon: 'icon-hstreamdb',
          title: 'HStreamDB',
          summary: 'Cloud-native Streaming Database for IoT Data Storage and Real-time Analytics',
          link: 'https://hstream.io/',
        },
        neuron: {
          icon: 'icon-neuron',
          title: 'Neuron',
          summary: 'Industrial IoT Gateway Software for Edge',
          link: '/products/neuron',
        },
        nanomq: {
          icon: 'icon-nanomq',
          title: 'NanoMQ',
          summary: 'Lightweight Messaging Engine for IoT Edge',
          link: '/products/nanomq',
        },
        xmeter: {
          icon: 'icon-xmeter',
          title: 'XMeter',
          summary: 'Large-Scale, Continuous JMeter Cloud Testing Platform for IoT',
          link: '/products/xmeter',
        },
        mqttx: {
          icon: 'icon-mqttx',
          title: 'MQTT X',
          summary: 'An Elegant Cross-platform MQTT 5.0 Desktop Client',
          link: '/products/mqttx',
        },
      },
    },
    resources: 'Resources',
    getStarted: {
      title: 'Get Started Now',
      getStarted: 'Try Free',
      contactUs: 'Contact Us',
    },
    learnMore: 'Learn More',
    connect: {
      title: 'An All-in-one Solution for IoT Device Connectivity',
      description:
        'An all-in-one solution for IoT device connectivity via the open standard MQTT and CoAP protocols, helping connect your IoT devices to everything.',
      banner: {
        keyWords: 'Connect',
        title: 'IoT Device Connectivity',
        subTitle:
          'An all-in-one solution for IoT device connectivity via the open standard MQTT and CoAP protocols, helping connect your IoT devices to everything in a secure, reliable, and efficient way, powering your new digital businesses in the IoT Era.',
        btns: [
          {
            text: 'Try Free',
          },
          { text: 'Talk to an Expert', link: '/contact?product=solutions' },
        ],
      },
      benifits: [
        {
          title: 'Connect Any Device',
          content: 'Connect any device via the open standard IoT protocols MQTT.',
        },
        {
          title: 'Connect Anywhere',
          content: 'Connect your IoT devices from edge to cloud to multi-cloud.',
        },
        {
          title: 'Connect to Everything',
          content: 'Connect your IoT devices to various cloud services and applications.',
        },
        {
          title: 'Reliable Bi-directional Connectivity',
          content: 'Reliable bi-directional connectivity between devices and cloud via MQTT.',
        },
        {
          title: 'Efficient and Low-cost',
          content: 'Low-cost, efficient use of hardware, network bandwidth and cloud resources.',
        },
        {
          title: 'Unreliable Network Support',
          content: 'Support for connecting over unreliable or low-power cellular networks, such as NB-IoT.',
        },
      ],
      capabilities: [
        {
          title: 'Global MQTT Access Network',
          content:
            'Support for building a global MQTT access network across multi-cloud, where devices, people, apps connected from any endpoint of the network can talk to each other.',
        },
        {
          title: 'Massive Scale',
          content:
            "Effortlessly and reliably connect hundreds of millions of IoT devices to cloud with the world's most scalable distributed MQTT broker.",
        },
        {
          title: 'Multi-protocol Access Support',
          content:
            'Support all-in-one access to any IoT device via open standards such as MQTT, OPC UA, LwM2M/CoAP, WebSocket, or industry proprietary protocols.',
        },
        {
          title: 'Ensure Security & Privacy',
          content:
            'Secure communications with MQTT over TLS/SSL or QUIC and various authentication mechanisms using LDAP, JWT, PSK, X.509 certificates, and more.',
        },
      ],
      architectureDiagram: 'Unified IoT device connectivity from edge to cloud',
      useCases: {
        subTitle: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
        list: [
          {
            image: '',
            title: 'Connected cars',
            summary:
              '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
            link: '/',
            linkText: 'Learn More',
          },
          {
            image: '',
            title: 'IIoT | Industrial IoT',
            summary:
              '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
            link: '/',
            linkText: 'Learn More',
          },
        ],
      },
      relatedSolutionsByit: [
        { text: 'Automotive', link: '/solutions/industries/automotive' },
        { text: 'Manufacturing', link: '/solutions/industries/manufacturing' },
        { text: 'Telecommunications', link: '/solutions/industries/carrier' },
        { text: 'Energy & Utilities', link: '/solutions/industries/energy-utilities' },
      ],
      relatedProducts: ['emqx', 'nanomq', 'neuron'],
    },
    move: {
      title: 'Reliable IoT Messaging Solution',
      description:
        'The unified IoT messaging solution enables reliable movement of IoT data in real-time between IoT devices and cloud services.',
      banner: {
        keyWords: 'Move',
        title: 'Reliable IoT Messaging',
        subTitle:
          "The unified IoT messaging solution, powered by the world's most scalable MQTT broker, enables reliable movement of IoT data in real-time between IoT devices and cloud services, whether sensor data from devices to cloud, or command and control from cloud to devices.",
        btns: [
          {
            text: 'Try Free',
          },
          { text: 'Talk to an Expert', link: '/contact?product=solutions' },
        ],
      },
      benifits: [
        {
          title: 'Bi-directional Data Movement',
          content: 'Reliably move IoT data from and to connected devices, edge, and cloud services.',
        },
        {
          title: 'High-performance, Low-latency',
          content: 'Deliver millions of messages using a cluster of nodes with latencies as low as 1ms.',
        },
        {
          title: 'Dynamic Message Routing',
          content: 'Route message dynamically with the creation of topics and subscriptions at runtime.',
        },
        {
          title: 'Fast and Reliable Data Delivery',
          content: 'Deliver data to connected devices quickly and reliably with multiple QoS guarantees.',
        },
      ],
      capabilities: [
        {
          title: 'Topic-based Pub/Sub Messaging',
          content:
            'Bi-directionally move data between devices, people, and applications with flexible topic-based publish/subscribe messaging.',
        },
        {
          title: 'Move millions of MQTT messages',
          content:
            'Move millions of MQTT messages per second using a broker cluster with a high-performance real-time message processing engine.',
        },
        {
          title: 'Deliver with latency as low as 1ms',
          content:
            'Guarantee millisecond latency in message routing and delivery with the soft real-time runtime system.',
        },
        {
          title: 'End-to-end Multi QoS Guarantee',
          content:
            'Ensure the reliability of message delivery with multiple end-to-end QoS, including at most once, at least once, and exactly once.',
        },
      ],
      architectureDiagram: 'Move data in real-time between devices, edge, cloud, and applications',
      useCases: {
        subTitle: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
        list: [
          {
            image: '',
            title: 'Connected cars',
            summary:
              '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
            link: '/',
            linkText: 'Learn More',
          },
          {
            image: '',
            title: 'IIoT | Industrial IoT',
            summary:
              '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
            link: '/',
            linkText: 'Learn More',
          },
        ],
      },
      relatedSolutionsByit: [
        { text: 'Automotive', link: '/solutions/industries/automotive' },
        { text: 'Manufacturing', link: '/solutions/industries/manufacturing' },
      ],
      relatedProducts: ['emqx', 'cloud', 'nanomq'],
    },
    process: {
      title: 'Powerful SQL-based IoT Rule Engine',
      description:
        'Low-code IoT data processing and integration using a SQL-based IoT rule engine and data bridges to help extract, filter, transform and store IoT data in real-time.',
      banner: {
        keyWords: 'Process',
        title: 'SQL-based IoT Rule Engine',
        subTitle:
          'Low-code IoT data processing using a SQL-based IoT rule engine to help extract, filter, enrich, and transform IoT data in real-time to accelerate application integration and business innovation.',
        btns: [
          {
            text: 'Learn More',
            link: 'https://docs.emqx.com/en/enterprise/v4.4/rule/rule-engine.html',
          },
          { text: 'Talk to an Expert', link: '/contact?product=solutions' },
        ],
      },
      benifits: [
        {
          title: 'Simplified data processing',
          content:
            'The SQL-like syntax and stream processing capabilities make it easier to filter, transform, and distribute data without needing to develop custom code or use additional tools.',
        },
        {
          title: 'Real-time insights and actions',
          content:
            'By triggering actions based on specific conditions, the Rule Engine enables users to derive real-time insights and take appropriate actions',
        },
        {
          title: 'Reduced development time and effort',
          content:
            'The Rule Engine simplifies the development of IoT applications by providing a wide range of built-in capabilities, reducing the need to develop custom code and minimizing maintenance efforts.',
        },
        {
          title: 'Scalability and reliability',
          content:
            'Designed to handle high throughput and large numbers of connected devices, allowing users to scale their IoT solutions without sacrificing performance or reliability.',
        },
      ],
      capabilities: [
        {
          title: 'SQL-based Real-time Data Processing',
          content:
            'Real-time processing of data streams using SQL-like syntax. Filter, transform, and distribute data on-the-fly to derive insights.',
          link: 'https://docs.emqx.com/en/enterprise/v4.4/rule/rule-engine.html',
          linkText: 'Learn More',
        },
        {
          title: 'Event triggers with conditional actions',
          content:
            'Rule engine can respond to various events such as message publish/subscribe and actions to be taken could based on specific conditions.',
          link: 'https://docs.emqx.com/en/enterprise/v4.4/rule/rule-engine_field.html',
          linkText: 'Learn More',
        },
        {
          title: 'Rich built-in functions',
          content:
            'A bunch of predefined operations that can be used within the Rule Engine to process and manipulate the data streams more effectively and efficiently.',
          link: 'https://docs.emqx.com/en/enterprise/v4.4/rule/rule-engine_buildin_function.html',
          linkText: 'Learn More',
        },
        {
          title: 'Schema registry and message encoding/decoding',
          content:
            'High-performance encode/decode MQTT messages in JSON, Avro, Protobuf formats via built-in schema registry.',
          link: 'https://docs.emqx.com/en/enterprise/v4.4/rule/schema-registry.html',
          linkText: 'Learn More',
        },
        {
          title: 'HTTP/gRPC extension',
          content:
            'Extend processing capabilities with a cross-platform HTTP/gRPC method to achieve custom types of data processing.',
          link: 'https://docs.emqx.com/en/enterprise/v4.4/rule/schema-registry-examp-3rdparty-http.html',
          linkText: 'Learn More',
        },
        {
          title: 'Complex JSON Processing',
          content:
            'Integrate the powerful JSON-specific processing tool jq to convert and process complex JSON data effortlessly.',
          link: 'https://docs.emqx.com/en/enterprise/v5.0/data-integration/rule-sql-jq.html',
          linkText: 'Learn More',
        },
      ],
      architectureDiagram: '40+ Pre-built Data bridges to Integrate IoT Data with Everything',
      useCases: {
        subTitle: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
        list: [
          {
            image: '',
            title: 'Connected cars',
            summary:
              '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
            link: '/',
            linkText: 'Learn More',
          },
          {
            image: '',
            title: 'IIoT | Industrial IoT',
            summary:
              '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
            link: '/',
            linkText: 'Learn More',
          },
        ],
      },
      relatedProducts: ['cloud', 'emqx'],
    },
    integrate: {
      title: 'Integrate Data with Everything',
      description:
        'Seamlessly integrate IoT data with more than 40 cloud services and enterprise systems, including Kafka, SQL, NoSQL, and time-series databases, using the visual Flow Editor.',
      banner: {
        keyWords: 'Integrate',
        title: 'Integrate Data with Everything',
        subTitle:
          'Seamlessly integrate IoT data with more than 40 cloud services and enterprise systems, including Kafka, SQL, NoSQL, and time-series databases, using the visual Flow Editor.',
        btns: [
          {
            text: 'Learn More',
            link: '/integrations',
          },
          { text: 'Talk to an Expert', link: '/contact?product=solutions' },
        ],
      },
      benifits: [
        {
          title: 'Simplified data management',
          content:
            'Seamless integration with various databases, messaging platforms, and cloud services allows you to manage and analyze their data more effectively, reducing the complexity of handling data across multiple systems.',
        },
        {
          title: 'Enhanced system interoperability',
          content:
            'Integration with various external services and platforms enables you to create interoperable IoT solutions, connecting disparate systems and technologies to work together harmoniously.',
        },
        {
          title: 'Security and data protection',
          content:
            'The data is directly connected to the external system from the MQTT server, reducing intermediate operations, reducing the risk of data leakage, and ensuring data security.',
        },
        {
          title: 'Scalability and reliability',
          content:
            'Designed to handle high throughput, ensure that data integration tasks can be reliably executed even as the number of connected devices and data volumes grow.',
        },
      ],
      capabilities: [
        {
          title: 'Ingest data into various databases with no code',
          content:
            'EMQX Enterprise can integrate with a variety of databases such as MySQL, PostgreSQL, Redis, MongoDB, InfluxDB, and ClickHouse, enabling users to sink data with no additional effort needed.',
          link: '/integrations?tag=database',
          linkText: 'Learn More',
        },
        {
          title: 'Integration with streaming platforms',
          content:
            'Connect to popular streaming platforms like Kafka/Confluent, Pulsar, and RabbitMQ, allowing users to route messages between the MQTT broker and these systems for more complex data processing and distribution scenarios.',
          link: '/integrations?tag=message-queue',
          linkText: 'Learn More',
        },
        {
          title: 'Integration with cloud services',
          content:
            'Supports integration with major cloud services, such as AWS Kinesis, Azure EventHub, and GCP Pub/Sub, enabling users to leverage cloud-based services for data processing and analytics.',
        },
        {
          title: 'Webhook support',
          content:
            'Use webhooks to send HTTP requests to external APIs or services when specific events or conditions are met. Integrating IoT solutions with custom applications and third-party services is now easier than ever.',
        },
        {
          title: 'Customizable data transformation and mapping',
          content:
            'Define custom data mapping rules to transform and route data between the MQTT broker and external systems, ensuring that data is properly formatted and delivered to the appropriate destinations.',
        },
        {
          title: 'Batch Processing',
          content:
            'Built-in buffer layer to achieve batch processing of data, reduce the burden on the target system and ensure the stability and high throughput of data integration.',
        },
      ],
      architectureDiagram: '40+ Pre-built Data bridges to Integrate IoT Data with Everything',
      useCases: {
        subTitle: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
        list: [
          {
            image: '',
            title: '车联网',
            summary:
              '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
            link: '/',
            linkText: 'Learn More',
          },
          {
            image: '',
            title: '工业互联网',
            summary:
              '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
            link: '/',
            linkText: 'Learn More',
          },
        ],
      },
      relatedProducts: ['cloud', 'emqx'],
    },
    analyze: {
      title: 'Real-time IoT Analytics',
      description:
        'Real-time analytics solutions based on the innovative streaming database support complex query and analysis operations.',
      banner: {
        keyWords: 'Analyze',
        title: 'Real-time IoT Analytics',
        subTitle:
          'Real-time analytics solutions based on the innovative streaming database support complex query and analysis operations. You can query materialized views with simple SQL statements to gain real-time data insights, leverage data value, and make instant business decisions.',
        btns: [{ text: 'Talk to an Expert', link: '/contact?product=solutions' }],
      },
      benifits: [
        {
          title: 'Unlock Real-time Value of data-in-motion',
          content: 'Get insights from high-velocity streaming data quickly and continuously.',
        },
        {
          title: 'All-in-One Streaming Data Solution',
          content: 'An innovative streaming database gets all your problems about real-time data done.',
        },
        {
          title: 'Simple and Powerful Interfaces: SQL and Stream',
          content: 'Apply the tools and concepts you know best: SQL and Streaming.',
        },
        {
          title: 'Unlimited Scaling and Fault-Tolerant',
          content: 'Automatic scaling and error recovery based on cloud-native architecture.',
        },
      ],
      capabilities: [
        {
          title: 'Stream Processing with Standard SQL',
          content:
            'Leverage the power of standard SQL, including joins, subqueries, and more for complex real-time stream processing.',
        },
        {
          title: 'Real-time Analytics based on Powerful Materialized Views',
          content:
            'Maintain large-scale complex materialized views effectively based on an advanced incremental computing engine.',
        },
        {
          title: 'Reliable, Low-latency Streaming Data Storage',
          content:
            'Distributed storage especially optimized for large-scale streaming data and reliable persistence based on Paxos.',
        },
        {
          title: 'Handle Millions of Streams Effortlessly',
          content:
            'Create, manipulate,  manage millions of streams effortlessly and maintain stable latency and throughput in the presence of large numbers of concurrent reads and writes.',
        },
      ],
      architectureDiagram: '40+ Pre-built Data bridges to Integrate IoT Data with Everything',
      useCases: {
        subTitle: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
        list: [
          {
            image: '',
            title: 'Connected cars',
            summary:
              '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
            link: '/',
            linkText: 'Learn More',
          },
          {
            image: '',
            title: 'IIoT | Industrial IoT',
            summary:
              '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案',
            link: '/',
            linkText: 'Learn More',
          },
        ],
      },
      relatedProducts: ['hstreamdb'],
    },
  },
}
