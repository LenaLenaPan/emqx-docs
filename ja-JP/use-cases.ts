export default {
  'use-cases': {
    titleTemplate: '%s Solution | EMQ',
    benifits: 'Benifits',
    background: 'Background',
    challenge: 'Challenge',
    solution: 'Solution',
    results: 'Results',
    capabilities: 'Capabilities',
    resources: 'Resources',
    featuresList: 'Features List',
    architecture: 'Architecture',
    relatedProducts: 'Related Products',
    learnMore: 'Learn More',
    getStarted: {
      title: 'Get Started Now',
      getStarted: 'Try Free',
      contactUs: 'Contact Us',
    },
    'mqtt-sparkplug': {
      title: 'MQTT Sparkplug',
      description:
        'EMQ MQTT Sparkplug solution based on MQTT is specially designed for industrial information systems and is a true plug-and-play IIoT solution for Industry 4.0.',
      navs: [
        {
          text: 'Background',
          link: '#background',
        },
        {
          text: 'Architecture',
          link: '#sparkplug-architecture',
        },
        {
          text: 'Capabilities',
          link: '#capabilities',
        },
        {
          text: 'Related Products',
          link: '#related-products',
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
      banner: {
        keyWords: 'MQTT Sparkplug',
        title: 'EMQ MQTT Sparkplug solution',
        subTitle:
          'The extended open interoperability protocol based on MQTT is specially designed for industrial information systems. It reduces the cost of system maintenance, and is a true plug-and-play IIoT solution for Industry 4.0',
        btns: [{ text: 'Contact Experts', link: '/contact?product=solutions' }],
      },
      background: [
        {
          title: 'Unified industrial system infrastructure',
          content:
            'Sparkplug unifies the MQTT state management, MQTT topics namespace and MQTT load messages, so that each system of the Sparkplug architecture can discover each other and exchange messages without any message parsing and transformation.',
        },
        {
          title: 'High scalability',
          content:
            'Application software and industrial devices that follow the Sparkplug specification can be easily integrated in same infrastructure, increasing the system scalability. Especially suitable for distributed applications of Industry 4.0.',
        },
        {
          title: 'Plug n Play solution',
          content:
            'The MQTT pub-sub architecture reduces the connection complexity over the protocols like OPCUA which use client-server architecture. That makes Sparkplug to be Plug n Play solution for industrial information system.',
        },
      ],
      architecture: {
        content:
          'EMQX MQTT broker or cluster must present in the infrastructure and will manage all MQTT message traffic. Devices and sensors through the EoN node can communicate with Application node such as SCADA systems, historical records and analysis programs. EoN node will assist some “data polling” devices to be smarter and to report data in asynchronous way.',
      },
      capabilities: [
        {
          title: 'MQTT Sparkplug B protocol compliant',
          content:
            'EMQ broker server and cluster are complying with MQTT v3.1.1 and MQTT 5 protocol required by Sparkplug B specification.',
        },
        {
          title: 'High performance MQTT server',
          content:
            'EMQ broker is a world’s leading high performance, business critical, cloud native, and powerful SQL-based IoT processing MQTT server.',
        },
        {
          title: 'Various Deployment Option',
          content: 'EMQ has the ability to deploy on-premise, on Microsoft Azure or AWS, or EMQX Cloud.',
        },
        {
          title: 'Seamless integration with other EMQ products',
          content:
            'EMQ offers a series of Sparkplug ready EMQ products like Neuron, Nanomq, and MQTTX which have seamless integration with EMQ broker.',
        },
        {
          title: 'Sparkplug B simulation tool',
          content:
            'EMQ offers a powerful tool MQTTX to simulate the Sparkplug communication in infrastructure for application deployment.',
        },
      ],
      relatedProducts: [
        {
          icon: 'icon-emqx',
          title: 'EMQX',
          summary:
            'EMQX broker by starting itself a plugin can be used as an EoN node to publish Sparkplug messages to the topics that conform to Sparkplug specification.',
          link: '/products/emqx',
        },
        {
          icon: 'icon-neuron',
          title: 'Neuron',
          summary:
            'Neuron will pack various data collected from industrial devices into Sparkplug messages and send them to the topics that conform to Sparkplug specification.',
          link: '/products/neuron',
        },
        {
          icon: 'icon-nanomq',
          title: 'NanoMQ',
          summary:
            'Nanomq can be used as an EoN node to publish Sparkplug messages to the topics that conform to Sparkplug specification.',
          link: '/products/nanomq',
        },
        {
          icon: 'icon-mqttx',
          title: 'MQTT X',
          summary:
            'MQTTX will automatically generate some Sparkplug messages and deliver to other Sparkplug systems such as ERP / MES / SCADA to simulate the Sparkplug communication.',
          link: '/products/mqttx',
        },
      ],
    },
    'mqtt-security': {
      title: 'MQTT Security',
      description:
        "EMQ's MQTT security solution provides out-of-the-box security solutions for IoT deployments, enables comprehensive security for enterprise applications.",
      navs: [
        {
          text: 'Benefits',
          link: '#background',
        },
        {
          text: 'Capabilities',
          link: '#capabilities',
        },
        {
          text: 'Resources',
          link: '#security-resources',
        },
        {
          text: 'Get Started',
          link: '#get-started',
        },
      ],
      banner: {
        keyWords: 'MQTT Security',
        title: 'Multiple protection mechanisms to ensure data and privacy security',
        subTitle:
          'Security is the cornerstone of all IoT applications and platforms. EMQX meets the security standards of the industry and various countries and regions; provides out-of-the-box security solutions for IoT deployments; passed security compliance audits; enables comprehensive security for enterprise applications.',
        btns: [{ text: 'Contact Experts', link: '/contact?product=solutions' }],
      },
      benifits: [
        {
          title: 'Ensure data security based on TLS/SSL',
          content:
            'Based on the native TLS/SSL encryption technology, EMQX ensures the data transmission security of client data transmission, message communication between cluster nodes, and enterprise system integrations.',
        },
        {
          title: 'Multiple authentication and permission mechanisms',
          content:
            'EMQX supports multiple authentication methods such as username and password, LDAP, JWT, PSK, and X.509 certificate based authentication for per-machine passwords or per-type passwords. EMQX also provides dynamic permission management with different granularity such as single device, grouping device, IP address, and topic, which can be flexibly integrated with the existing authentication/authorisation systems.',
        },
        {
          title: 'Enterprise IT Security',
          content:
            'It supports cluster overload protection to limit abnormal clients and network attacks, supports integrated indicator monitoring and alarm system, and realizes seamless security upgrade with unique hot patch and hot upgrade technology.',
        },
        {
          title: 'Compliance and Security',
          content:
            "Data privacy protection complies with the EU's GDPR act, with open and transparent code. It is fully responsible for product safety and quality risk management in cooperation with the world's leading security companies.",
        },
      ],
      capabilities: [
        {
          title: 'Out-of-the-box security functions, zero development investment',
          content:
            'EMQX implements the authentication development work through simple built-in configuration and realizes various levels of security configuration without coding, which greatly improves the efficiency of operation and development.',
        },
        {
          title: 'Flexible and diverse authentication methods to adapt to more enterprise solutions',
          content:
            'It supports multiple authentication methods of HTTP API, JWT, LDAP, X.509 certificates and various databases, provides a more fine-grained security level and permission control scheme, which can be flexibly and seamlessly integrated with the third-party enterprise security system.',
        },
        {
          title: 'Carrier-level product architecture, unique security technology',
          content:
            'With the unique hot patch and hot upgrade technology, it supports non-stop vulnerability update and security reinforcement, to minimize the impact of security issues. With perfect overload protection, attack protection, and indicator monitoring capabilities, it can help enterprises find risks in operation in time.',
        },
        {
          title: 'Top-level security and compliance, unimpeded global deployment',
          content:
            "The products comply with industry and national security certifications. Data privacy protection complies with the EU's GDPR act and meets the overseas regulations and policies for equipment and business. With a set of solutions, it can be deployed unimpeded all over the world.",
        },
      ],
      resources: [
        {
          title: 'Enable SSL/TLS for EMQX',
          link: '/blog/emqx-server-ssl-tls-secure-connection-configuration-guide',
        },
        {
          title: 'Authentication with PSK',
          link: 'https://docs.emqx.com/en/enterprise/v4.4/modules/psk_authentication.html',
        },
        {
          title: 'Authenticate with JWT',
          link: 'https://docs.emqx.com/en/enterprise/v4.4/modules/jwt_authentication.html',
        },
        {
          title: 'Username/password based authentication',
          link: 'https://docs.emqx.com/en/enterprise/v4.4/modules/mysql_authentication.html',
        },
        {
          title: 'Monitoring with metrics',
          link: 'https://docs.emqx.com/en/enterprise/v4.4/advanced/metrics-and-stats.html',
        },
        {
          title: 'Configure rate limits to limit abnormal clients and network attacks',
          link: 'https://docs.emqx.com/en/enterprise/v4.4/advanced/rate-limit.html',
        },
      ],
    },
    'confluent-kafka': {
      title: 'Confluent/Kafka',
      description: 'The built-in rule engine and data bridge of EMQX can stream IoT data (MQTT messages) to Kafka.',
      navs: [
        {
          text: 'Background',
          link: '#background',
        },
        {
          text: 'Capabilities',
          link: '#capabilities',
        },
        {
          text: 'Features List',
          link: '#features-list',
        },
        {
          text: 'Get Started',
          link: '#get-started',
        },
      ],
      banner: {
        keyWords: 'Confluent/Kafka',
        title: 'Confluent/Kafka integration, high-performance bi-direction data transport of massive IoT data',
        subTitle:
          'Kafka is a highly scalable, reliable, secure and real-time event streaming platform that combines messaging, storage and data processing. The built-in rule engine and data bridge of EMQX can stream IoT data (MQTT messages) to Kafka. The massive-scale device connectivity provided by #EMQX and the high-throughput, durable data processing capability from #Kafka, make the perfect IoT data infrastructure.',
        btns: [{ text: 'Contact Experts', link: '/contact?product=solutions' }],
      },
      background: [
        {
          title: 'MQTT Benefits',
          content:
            'MQTT is specially designed for IoT devices with low performance, low power consumption and unreliable network connection. The protocol is light and flexible enough to meet the needs of fast analysis and response of devices and diversity of IoT services.',
        },
        {
          title: 'Limitations of Kafka',
          content:
            'Kafka is not built for edge IoT communication. Kafka client needs a stable network connection and more hardware resources. At the same time, it lacks the technical features necessary for IoT scenarios, such as keepalives and will messages.',
        },
        {
          title: 'MQTT + Kafka',
          content:
            'Kafka focuses on data storage and reading, while EMQX focuses on the communication between the client and the server. EMQX quickly receives and processes messages from a large number of IoT devices. Kafka collects and stores these data and sends them to data analysts for analysis and processing.',
        },
      ],
      capabilities: [
        {
          title: 'Built-in implementation of data bridging with Confluent/Kafka',
          content:
            'With the help of EMQX’s data bridge or Rule Action features, it can consume from and/or produce message batches to Kafka. With UI configuration interface, you can easily setup the data pipelines to pipe data between your IoT devices and enterprise data platforms without having to implement it yourself.',
        },
        {
          title: 'Higher performance and automatic capacity expansion',
          content:
            'Thanks to the asynchronous and batch processing mechanism, in our stress tests, EMQX is able to write up to 1 million messages per second to Kafka. And EMQX is able to automatically discover the partition scale-ups in Kafka, without having to re-configure or restart which may cause interruptions to the data stream, making it easy for you to flexibly scale-up the capacity as your business grows.',
        },
        {
          title: 'Seamless integration with the rule engine',
          content:
            "Through the built-in rule engine of EMQX Enterprise, you can extract, filter, enrich and transform IoT data in real-time, and then write the processed results to a specific Kafka topic. Combined with Kafka's streaming processing capability, you can quickly build application integration and business Innovation.",
        },
      ],
      featuresList: [
        'Bidirectional. EMQX supports batching MQTT messages towards Kafka, also fetching Kafka messages to publish to MQTT clients.',
        'Flexibile MQTT-to-Kafka topic mapping, e.g. one-to-one, one-to-many, many-to-many, including MQTT topic filters (wildcards).',
        'EMQX comes with a local on-disk buffer mechanism to prevent data loss during network disturbances, Kafka service maintenance, or even node restarts of EMQX itself.',
        'EMQX Kafka producer supports synchronous/asynchronous write mode, making it flexible when it comes to prioritising latency vs. throughput.',
        'Dynamically configure data bridging in Dashboard or configuration file.',
        'Realtime metrics, such as the total number of messages, the number of succeeded/failed deliveries, and messaging rate, etc.',
        'Integrated with SQL IoT rules to extract, filter, enrich and transform data before pushing the messages to Kafka or devices.',
      ],
    },
    'smart-cockpit': {
      title: 'Smart Cockpit',
      description:
        "EMQ's cloud-side end-to-end collaborative architecture helps car manufacturers build the core capabilities of the smart cockpit with vehicle-cloud collaboration.",
      navs: [
        {
          text: 'Challenge',
          link: '#background',
        },
        {
          text: 'Solution',
          link: '#solution',
        },
        {
          text: 'Results',
          link: '#results',
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
      banner: {
        keyWords: 'Smart Cockpit',
        title: 'Build an smart cockpit with human, road, vehicle and cloud collaboration',
        subTitle:
          'In the context of software-defined cars, an smart cockpit brings a personalized interaction experience to users by integrating "one core, multiple screens, multiple systems", voice recognition, gesture control, LCD instrumentation, HUD, DMS and ADAS integration, etc. It is an important differentiation factor for car manufacturers in the fierce market competition, and also an important differentiation point for car manufacturers to subsequently obtain. It is also an important distinguishing selling point for car companies in the competitive market, as well as a way for car manufacturers to obtain user data and monetize traffic data.',
        btns: [{ text: 'Contact Experts', link: '/contact?product=solutions' }],
      },
      challenge: [
        {
          title: 'Smart cockpit product software and hardware structure are complex',
          content:
            'Under the smart cabin scenario, OEMs and suppliers will have a more diversified and open relationship, and suppliers will need to develop compatible hardware and software according to the customer’s needs. At the same time, the smart cockpit software also involves the operating system, middleware, UI design, and other aspects.',
        },
        {
          title: 'Operating system, virtualization, software development capabilities are not enough',
          content:
            'Host manufacturers have insufficient software development capabilities for SoC, Hypervisor virtualization, in-vehicle OS, middleware, and upper-layer application software.',
        },
        {
          title: 'Lack of end-cloud convergence solution capability',
          content:
            'Lack of end-to-end convergence solution capability for edge-vehicle side, cloud side, and cloud-side collaboration need to carry a set of mature cloud-side collaboration architecture and components.',
        },
      ],
      solution: [
        'EMQ edge components can be adapted to mainstream domain control systems to achieve the edge computing capability of the vehicle domain control side with less resource consumption. The edge component supports multiple data sources access, with edge computing power, time window, DBC interface parsing capability, and multiple data interface output capability.',
        'In the EMQ smart cockpit scenario solution, the EMQ edge computing component is integrated with the vehicle domain control system, using raw data from CAN bus and Ethernet bus as the data source.  Combined with the edge stream computing capability of DBC, it can provide dynamically scalable edge engine computing capability through a flexible rule engine to realize command counter-control, write to edge database or log file and cloud-side data forwarding.',
        'After the cloud gets real-time data input from the edge, it uses the powerful central computing power to train large, high-order AI algorithms and inference models, and then distributes the trained AI algorithms and decision models and customized intelligent rules to the vehicle through a lightweight and secure cloud-side channel to build an smart cockpit scenario brain with end-cloud collaboration.',
      ],
      results: [
        "Based on EMQ's cloud-side end-to-end collaborative software architecture, we help car manufacturers build the core capabilities of the smart cockpit with vehicle-cloud collaboration. It realizes software and hardware decoupling capability, edge computing engine, and AI extension capability for cockpit domain control, and builds end-cloud convergence based on big data scenario brain.",
        'Based on the above capabilities, car enterprises can lower development costs and shorten development cycles to achieve keyless entry, intelligent air conditioning, intelligent seats, scene engines, and other smart cockpit scenarios. This as well as intelligent driving modes, ROTA, chassis tuning, and other personalized customization capabilities can provide a good intelligent driving experience for car owners.',
      ],
    },
    'internet-of-vehicles': {
      title: 'Internet of Vehicles',
      description:
        "EMQ's IoV solution uses MQTT protocol access to achieve 10 million car connectivity and data communication capabilities.",
      navs: [
        {
          text: 'Challenge',
          link: '#background',
        },
        {
          text: 'Solution',
          link: '#solution',
        },
        {
          text: 'Results',
          link: '#results',
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
      banner: {
        keyWords: 'Internet of Vehicles',
        title: 'Build a new generation of IoV with autonomous driving as the core',
        subTitle:
          'In the new age of transformation and change in the automotive industry, the IoV that is based on autonomous driving and single-vehicle intelligence has become the mainstream trend to create smart travel, smart navigation, smart car control, smart entertainment, and other smart IoV scenarios. The IoT MQTT protocol-based message collection, movement, processing, and analysis platform have become the key to building a new generation of intelligent Telematics systems.',
        btns: [{ text: 'Contact Experts', link: '/contact?product=solutions' }],
      },
      challenge: [
        {
          title: 'Safe access to a large number of car systems',
          content:
            'The new generation of intelligent car connection system covers car data uploading, POI sending, pushing files, sending configuration, pushing messages, operation care, and other new car networking business, which generates a large number of messages. Topics need more secure and stable access and transmission to achieve message subscription and distribution.',
        },
        {
          title: 'Ensure the real-time and reliability of messages in the complex network environment',
          content:
            'Some scenarios, such as remote configuration (remote car control), involve complex network environments and have high requirements for message reliability and real-time.',
        },
        {
          title: 'Large concurrent and highly available message communication',
          content:
            'Traditional car manufacturers lack experience in the design, development, and maintenance of million-level large concurrent communication systems.  In addition, message communication systems built independently face great challenges in terms of system stability and high availability under large concurrent throughput scenarios.',
        },
        {
          title: 'Quickly achieve business system docking',
          content:
            'The vehicle side and business platform side of car companies are often operated by independent teams. How to realize the decoupling of the vehicle side and the cloud business platform and efficiently complete the business docking is the key to the timely delivery of the project.',
        },
      ],
      solution: [
        'The EMQ-based Smart Telematics system uses MQTT protocol to access data.  Through load balancing and EMQ distributed cluster deployment, it can enable 10 million levels of vehicle connectivity and data communication capability, and support TLS/DTLS security protocol to guarantee system reliability and stability.',
        'The powerful message rule engine provides one-stop realization of massive message bridging to Kafka persistence, offline message caching, and other capabilities.  In addition it provides rich micro-service APIs for the upper layer TPS and other business platforms to call.',
        'EMQ provides multiple guarantee mechanisms such as heartbeat monitoring, probate messages, QoS level, etc., and realizes real-time, secure, and reliable car-computer message communication in a complex network environment through offline message storage.',
        'The EMQ Telematics solution can realize the loose coupling to the new generation of intelligent Telematics systems and car engines. The OEM Telematics development team only needs to focus on the development of upper-layer applications, and can take advantage of the standard interface capability of the EMQ messaging platform for the message communication between the Smart Telematics system and the vehicle.',
      ],
      results: [
        'EMQ provides an efficient and stable underlying framework for the Telematics platform to meet the high availability, high concurrency, and low latency business demands of Telematics systems.  This greatly improves the development efficiency and reduces the development and maintenance costs for the Telematics teams.',
        'Through one-stop integrated EMQ capability, car manufacturers can efficiently realize message communication and data processing for a series of Telematics applications from the car-end collection, message delivery, message reception and processing, data storage, etc. It guarantees secure access and reliable two-way transmission of messages for massive car systems. Meanwhile, the distributed cluster architecture realizes dynamic horizontal expansion of access capacity and the layered architecture design provides good scalability.',
        'EMQ has become the first choice of messaging middleware for large-scale Telematics systems and has been recognized and commercialized by a large number of automotive customers.',
      ],
    },
    v2x: {
      title: 'V2X',
      description:
        'EMQ’s V2X solution effectively meets the requirements of massive connectivity, low latency, large throughput, and high availability for vehicle-road and cloud.',
      navs: [
        {
          text: 'Challenge',
          link: '#background',
        },
        {
          text: 'Solution',
          link: '#solution',
        },
        {
          text: 'Results',
          link: '#results',
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
      banner: {
        keyWords: 'V2X',
        title: 'Build an intelligent transportation ecosystem with human-vehicle-road-cloud coordination',
        subTitle:
          'With the rapid development of C-V2X, MEC and 5G technologies, vehicle driving will gradually change from single-vehicle intelligent to vehicle-road coordinated automatic driving. Along with this is the demand for intelligent networked scenarios of mass connectivity, ultra-high throughput, ultra-low latency and high security. The high-efficiency coordination of information of the "human-vehicle-road-cloud" will greatly accelerate the development of intelligent networked vehicles, provide safer and more intelligent travel modes, enable the intelligent and comprehensive perception of road conditions, and provide the dynamic coordination with traffic control and other features.',
        btns: [{ text: 'Contact Experts', link: '/contact?product=solutions' }],
      },
      challenge: [
        {
          title: 'Access to massive vehicle-mounted units and roadside units',
          content:
            'The new generation of vehicle-road coordination scenarios involves massive devices such as vehicle OBU and roadside RSU, and it is necessary to guarantee secure access to them.',
        },
        {
          title: 'Communication of V2X message with high reliability and low latency',
          content:
            'Messaging and service processing in vehicle-road coordination scenarios are highly sensitive to latency. V2X message forwarding needs to solve the low-latency reliable transmission of the vehicle-road message at the ms level.',
        },
        {
          title: 'Requirements for end-to-end message tracking and stream computing',
          content:
            'More specific scenarios of V2X can be realized by solving message coding and decoding of vehicle-road coordination and efficient multi-data streams to coordinate computing capability.',
        },
      ],
      solution: [
        'EMQ provides two-level distributed deployment architecture of MEC and Cloud for IoV scenarios. Based on the capability of 5G network slicing, traffic information service with ultra-low latency is realized through nearby access to personal subsystem, vehicle subsystem and roadside unit. Through MQTT, JT808, TCP and other protocols, the information of road conditions perceived by the vehicle and roadside facilities is pushed to the cloud platform, and the intelligent traffic scenarios such as road coordinate perception, safety reminder and remote coordinate control are realized through the cloud control platform combined with V2X algorithm.',
        'It supports international standard TLS/DTLS encryption or national secret algorithm GMSSL encryption, and ensures secure communication of vehicle-road information and coordination by extending authentication system based on PKI/CA certificates.',
        'The powerful rule engine and stream computing engine can realize V2X message processing and real-time triggering of alert events, and analyze the V2X protocol stack through the coding and decoding capability to improve the message processing efficiency of the cloud platform as well.',
      ],
      results: [
        'EMQ’s vehicle-road coordination solution based on 5G+MEC+V2X effectively meets the requirements such as mass connectivity, ultra-low latency, ultra-high throughput, and high security and availability of vehicle-road and cloud information service. It is widely used in many national pilot demonstration areas of vehicle-road coordination and regional demonstration areas of vehicle-road coordination with intelligent networks.',
        'EMQ provides customers with a proven cloud-edge collaborative infrastructure to quickly build the V2X platform.',
      ],
    },
    'industrial-iot': {
      title: 'Industrial Internet',
      description:
        'In the EMQ Industrial Internet solution, Neuron, the industrial protocol gateway software, supports Modbus, OPC-UA, IEC61850, IEC104, and other industrial protocols.',
      navs: [
        {
          text: 'Challenge',
          link: '#background',
        },
        {
          text: 'Solution',
          link: '#solution',
        },
        {
          text: 'Results',
          link: '#results',
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
      banner: {
        keyWords: 'Industrial Internet',
        title: 'EMQ empowers industrial networking, digitization, and intelligence',
        subTitle:
          'The wave of Industry 4.0 is sweeping the world. As a result of the deep integration of a new generation of information technology and manufacturing industry, the Industrial Internet has become the infrastructure to support the fourth industrial revolution. Accelerating the development of the industrial Internet is not only a strategic choice to meet the trend of industrial development and seize the high ground of industry in the future, but also an objective requirement to promote quality change, efficiency change, and power change in the manufacturing industry and realize high-quality development.',
        btns: [{ text: 'Contact Experts', link: '/contact?product=solutions' }],
      },
      challenge: [
        {
          title: 'Difficulties and cost of data access',
          content:
            'The difficulties and cost of data access are two of the core pain points that restrict the application of industrial Internet platforms. Industrial equipment types are complicated, equipment manufacturers are numerous, a large number of private protocol create access difficulties, older equipment does not have digital capabilities, and the full amount of data collection is difficult. In the absence of unified management, storage, application, and data compliance, it is difficult to realize data value mining.',
        },
        {
          title: 'Edge intelligence and cloud-side collaboration capability requirements',
          content:
            'Traditional SCADA and DCS systems cannot meet the new industrial Internet requirements for data transmission, storage, edge processing, and real-time display and retransmission. To meet industrial real-time requirements and reduce network and IT resource consumption, data analysis at the edge is becoming a must for industrial Internet platforms.',
        },
        {
          title: 'Data Value Underutilized',
          content:
            'A large amount of historical data is collected, but no unified management, storage, or application is realized. The collected data has poor compliance and is difficult to generate effective value. Intelligent applications are built independently and cannot share and interoperate with each other effectively.',
        },
      ],
      solution: [
        'In the EMQ Industrial Internet solution, Neuron, the edge industrial protocol gateway software, can support Modbus, OPC-UA, IEC61850, IEC104, and other complete industrial protocols to realize efficient access to data of various heterogeneous industrial equipment. The data collected in real-time is captured, filtered, complemented, and time-windowed calculated at the edge using eKuiper, a lightweight edge streaming processing engine, to provide a high-quality data source for edge AI inference services.',
        'The solution supports both local deployment and multi-location, multi-node distributed deployment, providing flexible and diverse edge cloud data channels. The edge can achieve high real-time data response through lightweight deployment; SQL-based edge streaming data processing effectively reduces cloud-side transmission costs, and the overall flexibility and scalability can significantly improve the integration of enterprise personalized edge-side.',
        'EMQ empowers industrial data, allowing data to be analyzed with data from other business systems (such as ERP, CRM, etc). EMQ also provides various data interfaces and various data persistence and message queue interfacing capabilities, with standard rich RESTful APIs for external application integration to obtain more valuable analysis results.',
      ],
      results: [
        'Based on EMQ IoT data infrastructure software, the industrial Internet platform provides one-stop access to IoT protocols, industrial protocols, and private protocols to realize the unified collection of massive and high-frequency industrial data.  It also provides a good data foundation for big data analysis and artificial intelligence applications by connecting, moving, storing, processing and analyzing data in real-time at the cloud side.  This helps enterprises quickly build upper-layer applications.',
        'The original way to build applications was to build applications around data.  This made enterprises become data-driven to help drive future-oriented IoT key business applications.',
      ],
    },
    'construction-machinery-iot': {
      title: 'IoT for Engineering Machineries and Equipment',
      description:
        'The EMQ engineering machinery IoT solution adopts the distributed MQTT broker EMQX for unified access to the high-frequency collection of massive data.',
      navs: [
        {
          text: 'Challenge',
          link: '#background',
        },
        {
          text: 'Solution',
          link: '#solution',
        },
        {
          text: 'Results',
          link: '#results',
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
      banner: {
        keyWords: 'IoT for Engineering Machineries and Equipment',
        title: 'EMQ data infrastructure powers IoT for engineering machineries and equipment',
        subTitle:
          'In recent years, the engineering machinery manufacturing industry has rapidly developed, and many companies have begun to strengthen their research in intelligent manufacturing products to open up new markets. As the market for host machines is becoming saturated, equipment manufacturers must strictly control the host failure rate, extend the service time of equipment, and reduce the energy consumption of plant production equipment and engineering machinery products, in order to achieve sustainable development. The use of big data analysis, the Internet of Things, and other means to strengthen the product life cycle management and service extension of “smart manufacturing” has gradually become the new focus of development in manufacturing enterprises.',
        btns: [{ text: 'Contact Experts', link: '/contact?product=solutions' }],
      },
      challenge: [
        {
          title: 'Stable data transmission in complex network environments',
          content:
            'Engineering machineries achieve equipment data upload and message downlink through the operator network. The onsite work environment can be complex, with varying network conditions. Hence, there is a need to ensure the secure and stable transmission of data in weak networks and other adverse environments.',
        },
        {
          title: 'Application layout under high throughput',
          content:
            'With the increase in the number of equipment, the Internet of Things technology would need to achieve project overview, remote control, fault diagnosis, positioning tracking, alarm statistics and other visualized controls under high throughput data. This requires robust data access and storage architecture.',
        },
        {
          title: 'Bottleneck of massive data distribution',
          content:
            'With the rapid increase in business volume, bottlenecks would occur in the process of sending massive downlink data, resulting in data delays, packet loss, the inability to complete the remote control of equipment, and other scenario applications.',
        },
      ],
      solution: [
        'The EMQ engineering machinery IoT solution adopts the cloud-native distributed MQTT message server EMQX for unified access to the high-frequency collection of massive data, at a million messages per second concurrency. This ensures the real-time, complete and secure data transmission in environments of poor network quality and transmission bandwidth constraints.',
        'The flexible and scalable cluster mode can expand the cluster scale without stopping. A single cluster can handle millions of TPS message concurrency, providing good scalability and stability of the data architecture layer to meet the business growth demand, despite the increase in equipment access.',
        'The powerful rules engine can realize one-click data persistence, and solve problems related to direct storage, when data is not delivered. By adding a buffer parameter setting, the data delivery rate is controlled through the SQL configuration alert in the rules engine. In addition, with the rules engine, a series of events, such as the online and offline status of devices, and packet loss, can trigger the complete delivery of messages, solving the problem of webhook inefficiency. In addition, different zones can be used to achieve different authentication methods for internal and external networks.',
        'In terms of operation and maintenance management, the EMQ solution provides group and registration management, subscription and publishing authority management, and online and offline device management, and realizes message pushing, making system management easier and more convenient.',
      ],
      results: [
        'Through the EMQ IoT infrastructure software, the concurrent access to data of large-scale engineering machinery and equipment can be achieved, ensuring the real-time, secure and stable processing of vehicle-end data, message transmissions, and data storage.',
        'Based on the robust data transmission layer provided by EMQ for engineering machinery and equipment networking, engineering machinery and equipment fault prediction and health management, remote control, real-time alarm, product maintenance cost reduction, product design optimization and R&D can be realized. Thus ultimately leading to the whole life cycle management and service extension of products.',
      ],
    },
    'smart-grid': {
      title: 'Electric Internet of Things',
      description:
        "EMQ's Electric IoT solution provides millions of concurrent long connections through EMQX, which supports distributed cluster deployment and flexible horizontal scaling.",
      navs: [
        {
          text: 'Challenge',
          link: '#background',
        },
        {
          text: 'Solution',
          link: '#solution',
        },
        {
          text: 'Results',
          link: '#results',
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
      banner: {
        keyWords: 'Electric Internet of Things',
        title: 'EMQ is based to build a new generation of massive equipment access electric IoT platform',
        subTitle:
          'With the new electric IoT strategy, the State Grid is making efforts to promote the construction of a unified IoT management platform . This will realize cross-discipline data sharing to achieve practical results in transmission and transformation, distribution station area, customer side, supply chain, and other fields. During the construction of the IoT platform, it is necessary to define a large number of heterogeneous terminal management and access through software, and support the concurrent access of millions of devices, while carrying a large number of message consumption.',
        btns: [{ text: 'Contact Experts', link: '/contact?product=solutions' }],
      },
      challenge: [
        {
          title:
            "Traditional platforms can't carry a huge number of electric power devices that access at the same time",
          content:
            'The number of smart devices in the power industry is huge, and the construction of the electric IoT platform by provincial power grid companies often needs to support the access capacity of more than one million devices. The traditional IoT management platform is difficult to cope with.',
        },
        {
          title: 'Compatibility difficulties with industry and IoT access protocols',
          content:
            'In various production environments of transmission-transformation-distribution-use, the existing devices mainly communicate with IEC104, DL/T698.45, I1, and other power industry protocols. With the gradual increase of power devices communicating with MQTT IoT protocols, compatibility access and management of multiple traditional power protocols and IoT protocol devices has become a major difficulty in the construction of a new generation power IoT platform.',
        },
        {
          title: 'is difficult to adapt to the existing northbound device management platform',
          content:
            'The old device management platform is usually managed by establishing a separate connection for each device. In the process of connecting the new generation power IoT platform with the existing device management platform, it is necessary to bridge the data between the new platform and the existing platform through a large concurrent one-to-one connection.',
        },
      ],
      solution: [
        'EMQ power IoT solution provides millions of concurrent long connections through EMQX, a cloud-native distributed IoT access platform, which supports distributed cluster deployment and flexible horizontal scaling architecture on demand. In the device access layer architecture of the IoT management platform, using the high-performance EMQX cluster as the platform access module, MQTT connections and TCP connections for a large number of IoT terminals can be carried with a small number of infrastructure resources.',
        "The solution supports the unified access of IEC104, DL/T698.45, and I1 protocols based on TCP protocol, which is transformed into MQTT protocol to achieve unified and efficient data transfer in the access layer. Combined with EMQX's MQTT, LwM2M/CoAP, and other IoT protocol access capabilities, it meets the access layer requirements of unified protocol access and high concurrent connections for the power IoT platform.",
        "EMQX uses optimized bridge configuration read and write efficiency to achieve more than 100,000 levels of northbound bridging capability in EMQX clusters, meeting the one-to-one routing capability between devices and upper management platforms in power application scenarios.  Thus breaking the business bottleneck between the new platform and the customer's existing device management platform.",
      ],
      results: [
        'Quickly realize the one-stop 10 million IoT platform access capability and greatly shorten the R&D cycle.',
        "Based on EMQX's high-performance access capability and high concurrent communication modules, multi-protocol unified connection services and large connection and high traffic connection management can be achieved with relatively small hardware resources.  Thus saving more than 50% of hardware resource cost compared to other access layer solutions.",
        'It provides massive real-time data for the whole life cycle control of smart devices, one-stop IoT application management, and other IoT ecological applications, and provides powerful support for the "accurate sensing, edge intelligence, unified IoT, open sharing" power IOT intelligent IoT system.',
      ],
    },
    'smart-bank': {
      title: 'Smart Bank',
      description:
        "EMQ's smart banking solution can connect hundreds of millions of IoT devices in a flexible, scalable, secure, and reliable manner.",
      navs: [
        {
          text: 'Challenge',
          link: '#background',
        },
        {
          text: 'Solution',
          link: '#solution',
        },
        {
          text: 'Results',
          link: '#results',
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
      banner: {
        keyWords: 'Smart Bank',
        title:
          'EMQ works together with financial services enterprise to create smart qutlets for customer service experience enhancement',
        subTitle:
          'With the boom of mobile communication technology and Internet applications, banks have started to build innovative smart banks in the concept of “IoT + Finance,” in order to improve the service capability of offline outlets and enhance user experience. In the process of the digital transformation of outlets, it is not only necessary to adapt the terminal domains of business equipment, display equipment, security equipment, and power and environment equipment, but also to complete the processing and integration of relevant business data in the platform domain and application domain.',
        btns: [{ text: 'Contact Experts', link: '/contact?product=solutions' }],
      },
      challenge: [
        {
          title: 'Insufficient digitalization level of outlet terminal domain equipment',
          content:
            'The construction of new banking outlets requires the introduction of new terminal domain devices, such as STM, space capsule and interactive desktop. These devices often have high intelligent processing capability. However, the inherently closed design makes it very difficult to integrate with the platform domain or application domain. In addition, power and environment devices do not have direct digital presentation capabilities and can barely interface directly with the platform domain.',
        },
        {
          title:
            'Complex platform domain scenarios with different requirements in northbound and southbound interfaces',
          content:
            'In the construction of smart bank outlets, the platform domain is the key to both northbound and southbound interfaces. The southbound interfaces to the terminal domain, and needs to be compatible and open, with a unified standard, in order to facilitate the management of the subsequent increase in equipment. The northbound interfaces to the application domain. As a typical scenario of innovative applications, this needs to accommodate application developments aligned with diversified individual needs in the market. The different requirements for northbound and southbound interfaces bring great challenges in platform domain docking.',
        },
        {
          title: 'Varied equipment and data encoding formats bring difficulties when using the application domain',
          content:
            'The business equipment, display equipment, security equipment, power and environment equipment, and other terminal domains of IoT device terminals greatly vary. That is, each manufacturer uses a different coding format. When accessing the platform domain, the data formats need to be unified for device management in the application domain above the platform.',
        },
      ],
      solution: [
        'Regardless of whether business equipment, display equipment or other devices with networking capabilities, or power and environment equipment that cannot be directly networked are used, the EMQ IoT data infrastructure can help achieve open standard protocol access to connect hundreds of millions of IoT devices in a flexible, scalable, secure and reliable manner.  Thus providing the data foundation for smart banking digital business.',
        'The cloud-native distributed IoT access platform EMQX is based on a powerful SQL-based IoT rules engine and data bridging, which can flexibly extract, filter, transform and process IoT data, and quickly integrate with more than 40 kinds of databases and enterprise systems, such as Kafka, SQL, NoSQL and time-series databases. This plays a crucial role in accelerating application integration and business innovation, improving network service capability, and creating sustainable competitiveness.',
        'Relying on the capability of the EMQX Schema Registry, the data reported by the device domain can be processed, ensuring that the application domain receives a unified data format. In addition to supporting Avro, Protobuf and other common codec formats, this also supports custom coding to enable customized data format output. Thus greatly reducing the difficulty and time cost of data processing in application domains.',
      ],
      results: [
        'In the terminal domain, this realizes the digital access of various devices, diverse authentication mechanisms, perfect terminal authentication mechanisms, and other security solutions, in order to protect the security of financial services.',
        'In the platform domain and application domain, the rules engine is used to reduce the complexity of integration of traditional applications, realizing the implementation of IoT + Finance in a variety of scenarios.  Thereby improving the digital service capability of outlets, enhancing customer experience, and creating more value for customers and enterprises alike.',
      ],
    },
    'oil-extraction-transportation': {
      title: 'Oil Extraction, Storage and Transportation',
      description:
        'EMQ provides IoT data collection solutions for the oil industry that support real-time data collection and cloud-side collaborative management of oilfield IoT terminal devices.',
      navs: [
        {
          text: 'Challenge',
          link: '#background',
        },
        {
          text: 'Solution',
          link: '#solution',
        },
        {
          text: 'Results',
          link: '#results',
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
      banner: {
        keyWords: 'Oil Extraction, Storage and Transportation',
        title: 'Collecting oil production data in the cloud using EMQ infrastructure',
        subTitle:
          'As the scale of oil production digitalization gradually expands, the amount of automated equipment is increasing, the number of data collection links is increasing, and the complexity of equipment management is growing. This shift requires new technologies to simplify the data collection process and reduce the difficulty of operation and maintenance management. EMQ provides IoT data collection solutions for the oil industry that support real-time data collection and cloud-side collaborative management of oilfield IoT terminal devices. EMQ infrastructure helps operators optimize the security, efficiency and scalability of oil production data storage and management, accelerating digital transformation and enterprise modernization.',
        btns: [{ text: 'Contact Experts', link: '/contact?product=solutions' }],
      },
      challenge: [
        {
          title: 'Diverse data collection needs in production equipment',
          content:
            'The number of connections to oil production equipment is gradually increasing. Data collection needs includes oil well sensors, various PLCs for production systems, extraction system equipment, pipeline transportation systems, station control systems, and more. Data collection equipment, collection methods and collection systems for various types of data are highly heterogeneous making unified access difficult.',
        },
        {
          title: 'Difficulty integrating data from scattered collection systems',
          content:
            'Oil production data is often scattered across dispersed data collection and management systems. For instance, in a traditional SCADA system, collected production data may be stored in local databases within each production area or substation control room, increasing the complexity and cost of data integration. Since different systems may use different means of collection and storage, the frequency and latency of data collection cannot be guaranteed to be uniform.',
        },
        {
          title: 'Increasing difficulty of operation and maintenance',
          content:
            'Since data collection and storage devices are usually scattered throughout production sites, operation and maintenance work requires a lot of manual on-site labor. Equipment access, inspection, configuration, upgrading, updating, alarm processing and other tasks lack unified IT-based management, increasing costs and straining operation and maintenance resources. Meanwhile, the quantity of new equipment continues to increase.',
        },
      ],
      solution: [
        'By building an open equipment data network, it is possible for an oil production plant data center to connect directly with many different data acquisition devices, such as RTUs, DTUs and PLCs. Using industrial protocol gateway software, Modbus/TCP and vendor-specific protocols can be converted into MQTT data, a standard IoT protocol that can be collected, processed, and reported in real-time.',
        'An EMQX MQTT broker cluster can converge massive amounts of real-time streaming data from industrial protocol gateways and store it into relational or time-series databases or into business applications through direct message push or subscription. Using its built-in rules engine, data flow can be tailored according to business requirements.',
        'In this architecture, the connection to field devices is established through Neuron, an edge-oriented industrial protocol gateway software that provides unified data collection for many kinds of industrial devices. Neuron supports Modbus, OPC-UA and other bus protocols, as well as Siemens, A-B, ABB, Mitsubishi, Schneider and other industrial equipment protocols, and converts these into MQTT payloads for reporting to the EMQX cloud platform. Neuron also enables uniform planning of collection points, collection frequency, reporting frequency and reporting format, reducing the cost and complexity of data storage and consumption in high-level business systems.',
        'To integrate with third-party platforms in the user environment, eKuiper, an open-source stream processing engine, can retrieve data from many different sources—SOAP and REST interfaces, SQL databases and even flat files—repackage it in different formats and publish it into the EMQX platform as MQTT payloads.',
        'For cloud-side collaboration, EMQX provides bidirectional north-south data channel capability. Business applications can send configuration messages through EMQX’s REST API using pre-defined topics for different devices. Messages can include the address and configuration value of the point to be configured.',
      ],
      results: [
        'A system architecture that is light on the frontend and heavy on the backend, reducing field equipment and system operation and maintenance costs.',
        'Improved business system responsiveness through real-time reporting of production data by using the MQTT IoT protocol as the main method of data collection and transmission.',
        'Aggregation of massive amounts of real-time data from heterogeneous equipment and systems, including storage of various types of production and monitoring equipment.',
        'The decoupling of data collection and data consumption systems through a unified access middleware platform and rich data interfaces, making application development easier and more efficient.',
      ],
    },
  },
}
