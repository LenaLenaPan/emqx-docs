export default {
  'solutions-by-industries': {
    titleTemplate: 'IoT Solution for %s | EMQ',
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
        text: 'Why EMQ',
        link: '#why-choose-emq',
      },
      // {
      //   text: 'Use Cases',
      //   link: '#use-cases',
      // },
      // {
      //   text: 'Customer Story',
      //   link: '#customer-story',
      // },
      {
        text: 'Get Started',
        link: '#get-started',
      },
      {
        text: 'Resources',
        link: '#resources',
      },
    ],
    contact: 'Talk to an Expert',
    background: 'Background',
    capabilities: 'Capabilities',
    useCases: 'Use Cases',
    customerStory: {
      title: 'Customer Story',
      readStory: 'Read the Story',
    },
    resources: 'Resources',
    getStarted: {
      title: 'Get Started Now',
      getStarted: 'Try Free',
      contactUs: 'Contact Us',
    },
    learnMore: 'Learn More',
    automotive: {
      title: 'Automotive',
      description:
        'Interconnecting people, vehicles, roads, and the cloud based on EMQ’s IoT infrastructure software and MQTT protocol.',
      banner: {
        keyWords: 'Automotive',
        title: 'EMQ connects people, vehicles, roads and the cloud',
        summary:
          'Interconnecting people, vehicles, roads, and the cloud based on EMQ’s IoT infrastructure software and MQTT protocol. Providing IoT infrastructure solutions for intelligent networking, autonomous driving and vehicle-to-everything (V2X) for vehicle manufacturers, T1 suppliers, after-market service providers, and travel service companies.',
        logoList: ['banner-logo-1', 'banner-logo-2', 'banner-logo-3', 'banner-logo-4'],
      },
      background: [
        {
          title: 'Electrification',
          contents:
            'Electrification is the foundation of intelligent and connected vehicles. As the automobile industry is evolving more and more from fossil fuels to sustainable power resources, the construction of vehicles is gradually shifting to electrified architecture. As a result, the management and control of various parts of the vehicle have become a core factor in electrification.',
        },
        {
          title: 'Autonomous Driving',
          contents:
            'The increasing application of driverless and driver assistance systems is pushing the intelligence of connected vehicles to a new level. Coordinating in-vehicle sensors, controllers, actuators, and in-vehicle system modules enables them to have complex environmental perception and intelligent decision-making and control functions. This is the key to the entire intelligence.',
        },
        {
          title: 'Connectivity',
          contents:
            'Driven by the demands of emerging advanced vehicular applications, large-scale automotive networks, and mobile networking, traditional V2X is evolving to Internet of Vehicles (IoV). This ubiquitous network will enable humans, vehicles, and other infrastructure elements to sense each other and share information. Connectivity is fundamental for building the autonomous system of automobiles.',
        },
      ],
      capabilities: [
        {
          title: 'Connecting massive vehicles',
          contents:
            'EMQ provides multiple protocol access. It not only guarantees vehicles’ massive TBox connections via diverse protocols, it also collects, processes, and analyzes messages from the Electrical/Electronic Architecture, Automotive OS, Cooperative Vehicle Infrastructure System, Autonomous Driving System, and other sub-systems at the network edge. EMQ adopts front-end and back-end separation and a fully asynchronous, distributed cluster architecture. This provides better support for the access of MQTT, GB/T32960, JT/T808, and other IoV protocols.',
        },
        {
          title: 'V2X Information Interaction',
          contents:
            'EMQ interconnects road-side infrastructure, such as cameras on road, MMW radar, laser radar, and MEC to support CVIS applications. It coordinates the road-side infrastructure, in-vehicle units at edge, and applications in the cloud and powers the information exchange capability of V2X.',
        },
        {
          title: 'Soft Real-time and high concurrency of data transmission',
          contents:
            'Connected vehicle networks and autonomous driving require real-time and highly concurrent data exchange at the application level. EMQ is built on the Erlang/OTP platform, a language platform characterized by soft real-time, low latency and distributed, which serves the purpose of IoV very well.',
        },
        {
          title: 'Security',
          contents:
            'EMQ provides an extensible authentication and authorization chain. It supports authentication via an internal or external DB, certificates, and third-party platforms, and it supports TLS/DTL encrypted transmission and bi-directional certificate authentication. EMQ protects access and provides complete data security.',
        },
        {
          title: 'High Availability and Extensibility',
          contents:
            'EMQ’s distributed cluster architecture enables horizontal expansion; it supports node automatic discovery, auto clustering, auto-healing from a network partition, and auto removal of a downed node. EMQ’s layered modular design supports multi-language extension. EMQ provides a highly reliable and easy-to-expand overall architecture, and ensures a reliable and available interconnection layer for the intelligent network system.',
        },
      ],
      whyChooseEMQ: [
        {
          title: 'Architecture',
          contents:
            'Based on the overall architecture of the IoT infrastructure, EMQ supports scenarios such as the Internet of Vehicles, intelligent driving, and vehicle-road collaboration, and it simplifies the infrastructural construction of IoT applications.',
        },
        {
          title: 'Interconnection',
          contents:
            '10-million-level device interconnections.  Supports MQTT and many protocols that are widely used in IoV applications. Coordinates the people, vehicles, roads, and the cloud.',
        },
        {
          title: 'Data transmit and throughput',
          contents:
            'EMQ’s soft real-time, low latency, and high concurrency, satisfies the needs of autonomous driving, CVIS, ITS, and many more applications.',
        },
        {
          title: 'Security',
          contents:
            'Bi-directional authentication, access control, and secure transmission guarantee the reliability of IoV applications.',
        },
        {
          title: 'High availability',
          contents:
            'EMQ’s distributed, dockerized, elastically extensible, and auto-scalable ways of deployment ensure the high reliability and high availability of IoV applications.',
        },
      ],
      // useCases: [
      //   {
      //     title: 'IoV',
      //     contents:
      //       'Through its protocol connection and data processing capabilities, EMQ provides a highly available and large-scale message exchange platform for IoV applications that connect millions of vehicles.',
      //     link: '/use-cases/internet-of-vehicles',
      //   },
      //   {
      //     title: 'Cooperative Vehicle Infrastructure System (CVIS)',
      //     contents:
      //       'EMQ’s low latency, high concurrency network converges, processes, and exchanges data that is collected from in-vehicle units/sensors and road-side devices. This is the foundation for building V2X applications.',
      //     link: '/use-cases/v2x',
      //   },
      //   {
      //     title: 'Smart cockpit',
      //     contents:
      //       'EMQ’s edge computing products and EMQX in the cloud are bridged together with a powerful, built-in rule engine that enables smart cockpit applications, which provides a whole new cockpit experience.',
      //     link: '/use-cases/smart-cockpit',
      //   },
      //   {
      //     title: 'High precision positioning',
      //     contents:
      //       'EMQ’s distributed messaging solution, combined with high precision GPS and base-station assisted positioning services, provides high quality location-based services to vehicles.',
      //     link: '',
      //   },
      // ],
    },
    manufacturing: {
      title: 'Manufacturing',
      description:
        'EMQ’s cloud-edge collaboration solution interchanges production data, opens up information isolated islands, and closes gaps between the edge and the cloud.',
      banner: {
        keyWords: 'Manufacturing',
        title: 'IoT technologies to enable Industrial digitalization',
        summary:
          'The manufacturing industry is fast evolving to digital transformation. EMQ’s cloud-edge collaboration solution interchanges production data, opens up information isolated islands, and closes gaps between the edge and the cloud. It helps enterprises realize the data connection, exchanging, processing and analysis in a collaborated way, and realizes the digitalization, network, and intelligentization of new manufacturing.',
        logoList: ['banner-logo-wahaha', 'banner-logo-great-wall'],
      },
      background: [
        {
          title: 'Internet + advanced manufacturing',
          contents:
            'The integration of the Internet and the manufacturing industry can optimize resource allocation and improve total productivity and enable innovations. The IoT technologies, AI, and edge computing accelerate the merging of information technology (IT) and operation technology (OT) and make the new ways of manufacturing more competitive.',
        },
        {
          title: 'Low carbon transition in manufacturing',
          contents:
            'Low carbon is the drive of sustainable industry. New manufacturing demands environmental awareness. It is challenging for manufacturing to lower carbon emissions and energy consumption, and also save production costs and increases productivity at the same time.',
        },
        {
          title: 'Industrial digital transformation',
          contents:
            'Industrial digital transformation is the driving force to reform production, operation, business and organizational management. It builds a new paradigm of data-driven industry, creates new businesses such as smart manufacturing and shared manufacturing, and brings new value to the enterprise.',
        },
      ],
      capabilities: [
        {
          title: 'Multi-protocol access',
          contents:
            'Manufacturers bring many different types of industrial equipment to the market, and the equipment follows drivers access protocols which are not necessarily compatible with each other. Existing equipment is hard to digitalize in a unified way. Besides the standardized MQTT protocol for IoT, EMQ’s industry solution also supports existing industrial protocols such as Modbus, OPC-UA, IEC61850, IEC104and many more. It provides a unified high-quality data collection and data normalization on northbound and device controlling on southbound.',
        },
        {
          title: 'Efficient and flexible edge-cloud data channel',
          contents:
            'Manufacturing requires large data volumes to be transmitted with low latency. Through light-weight edge side deployment, EMQ’s localized data processing and edge-cloud collaboration solution realizes high real-time response. The edge-side data streaming processing reduces the edge-cloud data transfer cost. The solution is flexible and extensible and it can be integrated with edge-side AI inference and decision making.  This realizes the transformation from traditional manufacturing to smart manufacturing.',
        },
        {
          title: 'Data value creation',
          contents:
            'Massive amounts of data are collected, without a unified way to manage, store, and apply the data thus the value of the data is wasted. EMQ provides Interoperability to different data interfaces, APIs, data storage and message queues. It connects core applications in manufacturing, such as the MES and ERP, and creates new value from the data.',
        },
      ],
      whyChooseEMQ: [
        {
          title: 'One-stop data access platform',
          contents:
            'EMQ provides a unified data access platform for IoT Protocols, standardized and proprietary protocols that are widely used in the manufacturing industry. It supports million-level device connection and data exchanging.',
        },
        {
          title: 'Real-time data acquisition and data normalization',
          contents:
            'EMQ provides for massive and high frequent data acquisition in real-time. Normalization of data from diverse devices provided by many different vendors and with secured data transfer.',
        },
        {
          title: 'Extensibility',
          contents:
            'EMQ’s solution is extensible and flexible. It can be integrated with software, databases, and systems from third parties.',
        },
      ],
    },
    'energy-utilities': {
      title: 'Energy & Utilities',
      description:
        'EMQ builds reliable IoT data infrastructure software based on innovative technologies. This enables building an intelligent and stable electricity transmission grid powered by the IoT.',
      banner: {
        keyWords: 'Energy & Utilities',
        title: 'EMQ in the Intelligent Energy & Utilities',
        summary:
          'EMQ builds reliable IoT data infrastructure software based on innovative technologies.  This enables building an intelligent and stable electricity transmission grid powered by the Internet of Things, in which the management of electricity transmission, the data flow, and the business flow are combined.',
        logoList: ['banner-logo-state-grid', 'banner-logo-southern-power-grid'],
      },
      background: [
        {
          title: 'Transition to a clean and efficient low-carbon power system',
          contents:
            'A future-proof power solution is low-emission, renewable and smart, it requires an IoT system that processes data in real-time. The data generated by providers, traders, and consumers are transferred and analyzed in the same smart grid empowered by IoT, and the potential of information is fully released.',
        },
        {
          title: 'From the energy flow to data flow',
          contents:
            'Power Grid becomes more complex with the boom of renewable energy. A more decentralized and miniaturized grid needs a unified way to collect and process data. Based on the data, power production and transmission are regulated and balanced, and the usability of the grid is optimized and secured.',
        },
        {
          title: 'New business models',
          contents:
            'Consumers are now more price-sensitive and environmentally aware; The new technologies make a traditional power consumer now a prosumer. These changes bring new business, IoT systems that efficiently process massive data are the key to the success of new businesses..',
        },
      ],
      capabilities: [
        {
          title: 'IoT protocols and power industry protocol in one place',
          contents:
            'Power grid is one of the oldest industrial infrastructure systems. A huge amount of legacy systems using different protocols are existing in the grid, and they will exist with new systems for a long time. A smart grid must be compatible with legacy systems. EMQ’s solution not only supports the new IoT or internet protocols, such as MQTT, LwM2M, CoAP, and HTTP, it also provides support of standards used in power systems, such as IEC104, IEC61850, and DL/T698.45. It provides a unified interconnection solution for the power industry.',
        },
        {
          title: '10-million level concurrent connection',
          contents:
            'The amount of equipment in the power industry is huge, for example, the massive quantity of electricity meter equipment, which requires the platform to provide concurrent connection capabilities to this massive amount of equipment. The high-concurrency and high-throughput access capability of EMQ provides a stable connection guarantee for a large number of devices to be connected simultaneously.',
        },
        {
          title: 'High available cluster',
          contents:
            'The power grid is one of the most important infrastructures in our society. It requires a very high available and stable management platform. EMQ is based on the Erlang/OTP framework, a distributed high-availability cluster architecture used in many infrastructure systems. It supports hot-update and hot configuration which provides the availability and stability required by Grid.',
        },
        {
          title: 'A built-in flexible and powerful rule engine',
          contents:
            'Smart grid management platforms require a unified way to operate the end devices, the network, and the consumer and backend applications. This achieves the normalization of data access and provides standardized data interfaces for data processing and distributing.  EMQ’s built-in rule engine flexibly connects diverse applications and bridges data to databases and message queues, providing more architectural options for the applications.',
        },
      ],
      whyChooseEMQ: [
        {
          title: 'High combability',
          contents:
            'EMQ’s solution is compatible with power industry standards and IoT protocols, and realizes unified data access for the smart grid.',
        },
        {
          title: 'High performance',
          contents:
            'EMQ’s solution provides high performance, high availability, and high concurrency. It supports the power grid running under heavy load with massive devices and applications connected.',
        },
        {
          title: 'Flexible rule engine',
          contents:
            'The rule engine enables the extending and innovation of business models and ensures the rapid new business implementation on data platforms.',
        },
        {
          title: 'Edge-cloud collaboration',
          contents:
            'EMQ’s solution processes and distributes data both on the edge and on the cloud.  It can fit into diverse use cases, making it possible to build a smart grid with IoT technologies everywhere and for everyone.',
        },
      ],
    },
    'oil-gas': {
      title: 'Oil & Gas',
      description:
        'EMQ’s IoT solution provides efficient, stable, and secure IoT data collection, transmission, processing, and analysis for critical procedures in the petroleum and petrochemical industry.',
      banner: {
        keyWords: 'Oil & Gas',
        title: 'EMQ’s IoT infrastructure software helps the petroleum and petrochemical industry to rejuvenate',
        summary:
          'EMQ’s IoT infrastructure software solution provides efficient, stable, and secure IoT cloud-edge integrated data collection, transmission, processing, and analysis for critical procedures in the petroleum and petrochemical industry. Key areas include exploration, production, storage and transportation, and processing.  Benefits include improved production efficiency, reduced operating costs, and the injection of new vitality into the petroleum and petrochemical industry with leading Internet of Things technology.',
        logoList: [],
      },
      background: [
        {
          title: 'Saving Cost',
          contents:
            'Newly discovered oil and gas reserves are decreasing. Remote exploration, production, and transportation are driving up costs. It is necessary to improve the efficiency and reduce the cost of mining and production activities through new technical solutions such as cloud computing based on the Internet of Things.',
        },
        {
          title: 'Increasing Income',
          contents:
            'In recent years, the international oil and gas market demand has been unstable, and crude oil prices have fluctuated sharply. The stability and competitiveness of the oil and gas industry chain have been challenged, which has also brought huge profit pressure to the petroleum and petrochemical industry. It is necessary to find various innovative businesses to increase revenue and profit.',
        },
        {
          title: 'Reducing risk',
          contents:
            'Nowadays, the requirements for health, safety, security, and environmental protection of the oil exploration and production process are constantly increasing. Improving the protection of production and transportation links and reducing operational risks through new technologies are important requirements of the petroleum and petrochemical industry.',
        },
      ],
      capabilities: [
        {
          title: 'Excellent on-site perception',
          contents:
            "In the petrochemical industry, the requirement of equipment interoperability for data collection services is very demanding. Exploration sensing equipment, oil well sensors, various PLCs related to oil well production systems, pulling system equipment, pipeline transportation systems, station control systems, etc., all have serious impact on acquisition methods and acquisition systems. EMQ's Neuron industry protocol gateway interoperates with standard Modbus-TCP protocol and proprietary protocols introduced by diverse PLC manufacturers. Data collected by Neuron is uploaded to the cloud platform in real-time. It increases the on-site exploration, production, and transportation procedures, simplifies equipment interoperation, and ensures infrastructure for building a petrochemical-industry-specific IoT application.",
        },
        {
          title: 'Efficient data transfer',
          contents:
            'Data processing on a petroleum production site is characterized by the massive number of devices, the high frequency of data uploading, and high data throughput. EMQ uses the lightweight, highly reliable MQTT protocol to collect and transfer massive amounts of data in real-time. It reduces the workload of transferring and processing data on the application platform, and it connects subsystems in the whole production chain. The fast information exchange ensures business innovation.',
        },
        {
          title: 'Secure data transmit',
          contents:
            'MQTT is essential to the EMQ IoT solution. The QoS of MQTT protocol enables the data to be transferred at different quality levels; higher QoS guarantees that business-critical data is transferred without loss.  EMQ’s products support TLS/DLT connection from the edge to cloud, so that data is encrypted while it is transferred.',
        },
        {
          title: 'Comprehensive operation management',
          contents:
            'When massive historical data is collected in existing systems, it stays in information silos and cannot be managed, stored, and used in a unified way. Getting value out of this data is difficult. EMQ provides edge-cloud collaboration, which manages data and devices in a unified way, thus reducing the cost of operation and maintenance.',
        },
        {
          title: 'Accurate operational decisions',
          contents:
            'EMQ’s eKuiper edge-side streaming processing engine can process the data at the edge side, forward the results to the cloud, and react quickly to the business requirements. On the cloud side, with the help of the Rule Engine and HStreamDB, massive amounts of data can be analyzed and visualized in real-time. This makes it possible to make decisions more precisely and quickly.',
        },
      ],
      whyChooseEMQ: [
        {
          title: 'Flexible architecture',
          contents:
            'EMQ’s architecture is flexible, it is accessible from both edge side and cloud side, handles data according to the data volume and available resources locally on-site or remotely in a centralized location.',
        },
        {
          title: 'Convenient access',
          contents:
            'EMQ’s solution supports IoT-oriented protocols, such as MQTT, LwM2M/CoAP, and MQTT-SN. On the device side, not only are the industrial standards Modbus and OPC-UA bus supported, EMQ’s solution also supports proprietary protocols from Siemens, ABB, Schneider, Mitsubishi, and many other vendors. EMQ also provides quick implementation, supporting new protocols on demand.',
        },
        {
          title: 'Reliability',
          contents:
            'EMQ’s highly available, highly reliable architecture serves million-level data points simultaneously. It provides a reliable infrastructure to build IoT applications for collecting and processing data in every production step of the oil industry.',
        },
        {
          title: 'Efficient OP',
          contents:
            'The cloud-edge collaboration capability of EMQ’s solution is outstanding. It is especially suitable for the remote operation maintenance of oil field equipment and remote configuration of software located at the edge side.',
        },
        {
          title: 'Rapid integration',
          contents:
            'EMQ provides abundant open interfaces to data collection and data storage. It can be integrated easily with devices, business applications, middleware, and databases. The integration possibilities are almost boundless, making rapid innovation of applications very easy.',
        },
      ],
    },
    carrier: {
      title: 'Carrier',
      description:
        'EMQ’s edge-cloud collaborating IoT infrastructure software supports 10 million level cross-network, multi-protocol interconnections for diverse industries.',
      banner: {
        keyWords: 'Carrier',
        title: 'EMQ builds edge-cloud collaborating IoT platforms with Carriers in the 5G era',
        summary:
          'EMQ’s edge-cloud collaborating IoT infrastructure software supports 10 million level cross-network, multi-protocol interconnections for diverse industries. It helps carriers build the capacity platform for vertical industries such as manufacturing, Internet of Vehicle, smart city, and so on, enabling the enterprise digitalization transformation.',
        logoList: ['banner-logo-china-mobile', 'banner-logo-china-telecom', 'banner-logo-china-unicom'],
      },
      background: [
        {
          title: 'IoT applications need a solid foundation',
          contents:
            'With the advancement of the 5G network, enterprise digitalization comes to a new era. Carriers take advantage of their infrastructure to provide end-to-end IoT solutions for customers. Cross-industry, cross-network, and cross-protocol massive device access capability become a key element for telecom operators to build a unified IoT DMP/AEP platform and improve enterprise services.',
        },
        {
          title: 'Edge-side enhancement',
          contents:
            'Telecom operators rely on the advantages of 5G networks to deploy edge clouds, empower vertical industries, and provide low-latency edge applications. How to provide message and stream processing capabilities for edge-cloud collaboration cores and help operators build integrated 5G MEC services has become key to IoT construction in the telecommunications industry.',
        },
      ],
      capabilities: [
        {
          title: 'Cross-industry, cross-network, and cross-protocol',
          contents:
            'EMQ’s solution utilizes 4G, 5G, and NB networks, connects devices and applications via MQTT, MQTT-SN, LwM2M, CoAP, HTTP WS, and other protocols, and provides services to diverse industries in a unified way.',
        },
        {
          title: '10 million level device connection and million level TPS throughput',
          contents:
            'EMQ’s distributed platform architecture interconnects 10-million-level devices and handles million-level message exchanging.',
        },
        {
          title: 'High security and high availability',
          contents:
            'EMQ’s products support TLS and DTLS and together with a flexible ACL, provide high-level data security and integrity. The distributed architecture ensures high availability of service.',
        },
        {
          title: 'Edge-cloud collaboration',
          contents:
            'EMQ provides an industrial protocol gateway and stream computing ability at the edge. It collaborates with message services, stream services, data storage on the cloud, which provides end-users with an edge-cloud collaboration solution under KubeEdge, K3S or EdgeManger frameworks.',
        },
      ],
      whyChooseEMQ: [
        {
          title: 'Multiple protocol support',
          contents: 'EMQ provides unified device and data access for multiple protocol cross networks.',
        },
        {
          title: '10-million level connection',
          contents:
            '10-million level interconnections and million-level TPS throughput ensures that carriers build their DMP/AEP platform that can serve the enterprise users.',
        },
        {
          title: 'High availability, extensibility and security',
          contents:
            'High availability, extensibility, and security of EMQ’s solution, fulfills the integration requirements of many different industries.',
        },
        {
          title: 'Customizable',
          contents:
            'EMQ works with carriers closely and provides specialized and customized solutions for carriers, continuously improving the delivery capacity to end-users.',
        },
      ],
    },
    transportation: {
      title: 'Transportation & Logistics',
      description:
        'Like many industries, the transportation industry is one of the fields where IoT technologies are applied. EMQ provides IoT infrastructure software for the transportation industry.',
      banner: {
        keyWords: 'Transportation & Logistics',
        title: 'The Fundamentally changed Transportation industry in the IoT Era',
        summary:
          'Like many industries, the transportation industry is one of the fields where IoT technologies are applied. IoT has seen immense success in this industry and many applications are now changing our life.  To name a few: the toll and ticket system, fleet management, parking systems, connected cars, public transport management, traffic congestion systems, and traveler information systems. EMQ provides IoT infrastructure software for the transportation industry.',
        logoList: ['banner-logo-sutpc', 'banner-logo-sf'],
      },
      background: [
        {
          title: 'Digitalization of transportation',
          contents:
            'Digitalization of transportation started decades ago, and IoT in transportation is already a big business, and it is still growing. By applying IoT technologies, many isolated systems are connected, companies and transportation authorities share data and make new services possible. Individuals and organizations all benefit from this technological advancement. Yet, the potential of IoT in Transportation is not fully exploited.',
        },
        {
          title: 'Benefits of IoT for transportation',
          contents:
            'IoT technology brings together isolated systems, exchanges data in real-time, and provides insights to transportation participants. It improves traveler experience, increases safety, and improves operational performance. All these benefits are based on IoT technology that collects and processes massive data efficiently in real-time at a low cost, which is impossible with the traditional Internet.',
        },
        {
          title: 'The future and the challenges',
          contents:
            'The potential of IoT is enormous. The IoT, combined with other technologies, such as artificial intelligence, machine learning, roadside sensor networks, and 5G MEC, incubates new applications. The next upsurge to change our life could be in autonomous driving, smart fleet management, or predictive maintenance. EMQ works with its partners closely and will continuously invest in IoT in transportation.',
        },
      ],
      capabilities: [
        {
          title: 'Connecting large amount of various devices',
          contents:
            'In a transportation economic system, various devices are involved.  A thermometer on the roadside and a GPS tracker on the truck may use different communication protocols and send messages in different patterns. EMQ interconnects road-side infrastructure, MMW radar, laser radar, and MEC to support CVIS applications. It coordinates the roadside infrastructure, in-vehicle units at edge, applications in the cloud, and powers the information exchange.',
        },
        {
          title: 'Efficient IoT data processing',
          contents:
            'EMQ provides infrastructure software for IoT that can connect 10-million level devices. It collects data from massive amounts of connected devices in real-time, processes data via a rule engine, and bridges data to backend services and storage in a unified way. With EMQ providing the infrastructure, the transportation industry can focus on business application development.',
        },
        {
          title: 'Efficient and flexible edge-cloud data channel',
          contents:
            'The transportation industry requires large data volumes to be transmitted with low latency. Through light-weight edge side deployment, EMQ’s localized data processing and edge-cloud collaboration solution realizes high real-time response. The edge-side data streaming processing reduces the edge-cloud data transfer cost. The solution is flexible and extensible and it can be integrated with edge-side AI inference and decision making.  This realizes the transformation from traditional manufacturing to smart manufacturing.',
        },
      ],
      whyChooseEMQ: [
        {
          title: 'Flexible products combination',
          contents:
            'EMQ’s capability covers device connection, data collection, data processing, data transmission, and data interfaces to third-party components. Its flexible product combinations simplify the industry to provide end-to-end solutions to users and make it possible to rapidly develop and launch new services.',
        },
        {
          title: 'High performance and high concurrency',
          contents:
            'In the transportation industry, enormous devices are interconnected and generate data constantly, some with very high frequency.  The high-concurrency and high-throughput access capability of EMQ provides a stable connection guarantee for a large number of devices to be connected simultaneously.',
        },
        {
          title: 'EMQ is experienced',
          contents:
            'EMQ is one of the first companies to offer MQTT and IoT infrastructure software. It serves many leading transportation and logistics enterprises, provides solutions for diverse use cases, and accumulated valuable experiences in handling large-scale, complex, and distributed projects.  With EMQ, you are in good hands.',
        },
      ],
    },
    'finance-pay': {
      title: 'Finance & Payment',
      description:
        'IoT impacts many different industries, and now it is changing the landscape of fintech and banking too.  EMQ is helping the fintech providers build infrastructure that makes this change of business happen.',
      banner: {
        keyWords: 'Finance & Payment',
        title: 'Future-proof fintech and banking with IoT',
        summary:
          'IoT impacts many different industries, and now it is changing the landscape of fintech and banking too. From personal banking to enterprise financial services, from bank counters to vending machines, IoT serves a great purpose. EMQ is helping the fintech providers build infrastructure that makes this change of business happen.',
        logoList: ['banner-logo-china-construction-bank', 'banner-logo-shouqianba'],
      },
      background: [
        {
          title: 'IoT in the fintech and banking',
          contents:
            'The banking and finance industries have already heavily invested in IoT to embrace technological advances. Mobile banking is taking the place of traditional bank branches, personalized services provide better quality and time savings for the consumer, interconnected enterprise applications and banking services reduce costs for business operations. The fintech industry is still exploring new possibilities to make better use of IoT technologies.',
        },
        {
          title: 'The individual needs of customers requires industrial upgrading',
          contents:
            'Similar to other industries, the fintech customers’ requirements become more and more individual. Mobile banking, online banking, contactless payment, smart ATM, and other applications and facilities combined with IoT technologies, provide more real-time insights into customers’ needs and interests.  Thus, businesses can offer improved experiences to customers.',
        },
        {
          title: 'Enhanced bank security',
          contents:
            'IoT-enabled cameras, motion sensors, smart access control systems in branches, all gathering data and connecting to centralized security systems can react instantly and prevent money losses. Real-time data, including user behavior and geographical information, can be activated when necessary to lock payment devices and prevent unauthorized transfer.',
        },
        {
          title: 'More possibilities',
          contents:
            'The potential of Interconnected IoT devices is infinite. This means that more and more new businesses can be started. One example is the smart meters of utilities sending data across service providers to banks, and bills can be automatically generated and consolidated.  With the use of IoT technology, we can foresee the boom of IoT applications in the fintech and banking industry.',
        },
      ],
      capabilities: [
        {
          title: 'Massive device connection via MQTT',
          contents:
            'It is common that fintech providers need to connect million-level devices.  Before MQTT, the most used communication protocol was HTTPS, which is secure, but heavy and resource-intensive. The request/response communication pattern of HTTPS is very suitable for always-online services. However, light weight MQTT exchanges messages using a subscribe/publish pattern which is much better at allowing the connection of massive amounts of end devices and provides services that use less bandwidth. EMQX is a high performance MQTT broker that can connect millions even tens of millions of devices via any standard MQTT SDK. With EMQX, fintech providers can easily migrate their current system to MQTT and add more new devices.',
        },
        {
          title: 'Flexible and powerful northbound data bridge',
          contents:
            'As an MQTT broker, EMQX is located in the middle, between the end devices and backend services. The backend databases and services of fintech may be complex and EMQX provides the interoperation of most mainstream databases and streaming services. Whether it is a SQL DB, NoSQL DB, TSDB, streaming processing, or third-party authentication platforms, EMQX has a way to communicate with it. This ability relieves the application developers from worrying about data access and frees them so that they can focus on business innovation. With the continuous research and innovation of new technologies in the market, EMQ will provide more possibilities to connect to third-party software.',
        },
        {
          title: 'Simplified data processing on the application',
          contents:
            "EMQ's rule engine can process message flow, device events, and response rules, efficiently transmitting massive amounts of data generated in real-time to applications. This provides the ability to quickly adapt to various business needs. At the same time, it also provides data processing capabilities and thus accelerates the development of new business processing.",
        },
      ],
      whyChooseEMQ: [
        {
          title: 'High availability and high security',
          contents:
            'Fintech and banking require high security of data. EMQX is based on the Erlang/OTP distributed platform and it can provide carrier-level high availability. EMQX supports TLS/mTLS, which ensures confidentiality and integrity of data communication. It provides integrated authorization and authentication and can also integrate with third-party authentication platforms. EMQX fulfills the security requirements of the fintech and banking industry.',
        },
        {
          title: 'Easy to integrate',
          contents:
            'Besides the rule engine, EMQX also provides an abundant HTTP API, which simplifies device connection and integration with external systems.',
        },
        {
          title: 'High performance and low latency',
          contents:
            'EMQ provides a soft real-time, low-latency, and distributed platform to ensure that millisecond-level low latency can be maintained even with tens of millions of connections. It meets the low latency and high concurrency requirements of the fintech industry.',
        },
      ],
    },
    ict: {
      title: 'ICT',
      description:
        'EMQ’s IoT infrastructure software helps ICT companies extend their IoT data access capability both at the edge and on the cloud and integrate their existing business system with the IoT Platform.',
      banner: {
        keyWords: 'ICT',
        title: 'EMQ boosts innovations for ICT companies',
        summary:
          'EMQ’s IoT infrastructure software helps ICT companies extend their IoT data access capability both at the edge and on the cloud and integrate their existing business system with the IoT Platform. With EMQ’s products, ICT companies can extend their IT business advantages to the IoT industry and keep growing with a new innovative driving force.',
        logoList: ['banner-logo-hpe', 'banner-logo-huawei', 'banner-logo-cisco'],
      },
      background: [
        {
          title: 'Discovering the data value',
          contents:
            'In the IoT era, devices generate massive valuable data. Traditional IT software has been unable to meet the needs of data access and processing in IoT use cases. ICT companies need IoT-oriented infrastructure software to support the connection, transferring, processing, and analysis of data, and to discover more data value.',
        },
        {
          title: 'Expanding business boundaries',
          contents:
            'With the development of technologies, new applications are constantly emerging. From the smart home to the industrial interconnection of production, these are all new areas for ICT companies to realize innovation and business expansion. Applying IoT technologies, ICT companies expand their business boundaries to a greater extent.',
        },
        {
          title: 'Speeding up innovation',
          contents:
            'ICT companies hope to improve the consumption of real-time data and quickly integrate new business scenarios by exploring IoT technologies, which requires ICT companies to have more efficient data access, data consumption data distribution, and data processing capability.',
        },
      ],
      capabilities: [
        {
          title: 'Cloud-native IoT Hub',
          contents:
            'EMQ provides high-performance, high-concurrency, and high-availability IoT device access and application integration capabilities based on cloud-native architecture, helping ICT companies build IoT Hubs with millions to tens of millions of devices connected to the Internet of Things. This allows rapid integration of data and business application systems.',
        },
        {
          title: 'Data access',
          contents:
            'EMQ provides access to standard MQTT, LwM2M/CoAP, and other IoT protocols, including proprietary protocols on demand. It helps the ICT company deeply dig into the IoT fields, interconnecting existing applications with new businesses.',
        },
        {
          title: 'System integration',
          contents:
            'The flexible and powerful Rule Engine and Stream Processing provided by EMQ helps the CTP users integrate their devices, backend software, and databases freely, accelerating the development of the applications for new business.',
        },
        {
          title: 'Supporting public, private and hybrid clouds',
          contents:
            "EMQ’s IoT infrastructural software can be deployed on most public cloud platforms and interconnected with other PaaS services. It can also be deployed in an organization's private cloud to meet the specialized requirements of diverse projects.",
        },
      ],
      whyChooseEMQ: [
        {
          title: 'Cloud native design',
          contents:
            'Speed and agility are important for developing and deploying modern applications. The design of EMQ’s IoT messaging middleware and StreamDB follows the cloud native principle, the technique is well applied in resilient, manageable, and scalable could applications. Applications of different scales can utilize the same set of technologies that meet the challenges of complex business systems that expect rapid growth, better responsiveness, rich features, and less downtime.',
        },
        {
          title: 'Lower cost',
          contents:
            'EMQ provides easy-to-manage IoT infrastructure software from edge to cloud. The software collaboratively reduces the complexity of IoT applications and lowers operating expenses.',
        },
        {
          title: 'Flexible interconnection',
          contents:
            'End devices can access the IoT platform on the edge or directly in the cloud. The EMQ infrastructure software couples the different network connections and computing resources between the field equipment side and the data center in many industries.',
        },
        {
          title: 'Agile integration',
          contents:
            'It provides rich and standardized message interfaces and data storage interfaces, which can quickly connect various business application systems, various middleware and databases, and facilitate the agile development and rapid integration of applications.',
        },
      ],
    },
    retail: {
      title: 'Retail',
      description:
        'IoT applications connected by EMQ’s IoT infrastructure software help retailers optimize business processes and resource management, improve customer experience and reduce operating costs.',
      banner: {
        keyWords: 'Retail',
        title: 'EMQ connects the retailer and consumers',
        summary:
          'The retail business is experiencing a seismic change with the evolution of IoT. EMQ provides the IoT infrastructure software for smart retail. IoT applications connected by EMQ’s IoT infrastructure software help retailers optimize business processes and resource management, improve customer experience and reduce operating costs.',
      },
      background: [
        {
          title: 'Digitalization of new retail',
          contents:
            'New technologies, such as IoT, big data, and AI, are intensely used, from facility management to buyer behavior tracking and supply chain management. Every link in the retail business is connected. Getting the data value through digitalization is the key to intelligent retail.',
        },
        {
          title: 'Reformation in the retail model',
          contents:
            'In recent years, the retail business is changed thoroughly: business moving from offline to online, exploding of E-payment, better cleanliness and hygiene, less densely populated shopping areas. Smart retail is the response to these changes.',
        },
        {
          title: 'Cost reduction and efficiency increase',
          contents:
            'A growing retail business means more devices and systems are connected and more data are generated. Smart retail applications manage massive equipment in stores and warehouses, collect and process the data from the equipment in a unified way, so that the data can be better used, thereby reducing costs and improving efficiency.',
        },
      ],
      capabilities: [
        {
          title: 'Securely connecting massive devices',
          contents:
            'EMQ supports authentication via an internal or external DB, certificates, and third-party platforms. It also supports TLS/DTL encrypted transmission and bi-directional certificate authentication. EMQ protects access and provides complete data security. EMQ is massively extensible; it can connect millions of devices, ensuring the unified access and management of many devices at the store.',
        },
        {
          title: 'Flexible, low-code integration',
          contents:
            'Retail business involves product design and development, store space management, product display, warehouse, service, marketing, supply chain, and much more. EMQ’s SQL-based rule engine and stream processing allow the users to integrate their applications with DBs, Kafka, and other third-party systems, making rapid application integration and business innovation easier.',
        },
        {
          title: 'One-stop IoT data processing',
          contents:
            "The timeliness of data is one of the important characteristics of the retail business.  EMQ's IoT infrastructure software processes IoT data in one-stop. It supports efficient storage and management of large-scale streaming data, and performs complex real-time analysis on dynamically changing data streams.  This helps enterprises quickly develop applications and obtain customer insights to ensure a leading competitive advantage.",
        },
      ],
      whyChooseEMQ: [
        {
          title: 'End-to-end IoT infrastructure platform',
          contents:
            'EMQ uses standardized or proprietary IoT protocols to connect diverse devices in the retail business. EMQ’s IoT infrastructure software features multi-protocol support, multi-operating system support, soft real-time, low-latency, and high scalability. It realizes the connection, collection, transmission, processing, and analysis at the store-end and in a centralized location.',
        },
        {
          title: 'Adapt to different terminal equipment',
          contents:
            "EMQ has the ability to adapt to different types of store-side devices, whether it is an Android-based mobile device or a Windows-based cashier device. EMQ's powerful terminal equipment adaptation capability can assist retail enterprises in achieving unified access and data collection of store-side equipment with zero transformation cost.",
        },
        {
          title: 'Edge-cloud collaboration',
          contents:
            "EMQ's cloud-side collaborative management capability enables unified access and management of a large number of store-side devices. It provides insights of device operation status, life cycle, availability assessment, and security. Unified device management framework with IoT edge-cloud collaboration improves the quality and efficiency of operation and maintenance, and reduces the operation cost.",
        },
      ],
    },
  },
}
