export default {
  'neuron-modules': {
    title: {
      northbound: 'Neuron Northbound Modules',
      southbound: 'Neuron Southbound Modules',
    },
    description: {
      northbound:
        'Northbound modules are used to provide specific data processing features, or to provide connectivity for cloud platforms or industrial applications.',
      southbound:
        'Southbound modules are commonly used to provide data access to various industrial devices, building automation and smart sensors.',
    },
    navs: [
      {
        text: 'Why Neuron',
        link: '/products/neuron#why-neuron',
      },
      {
        text: 'Modules',
        link: '/products/neuron#modules',
      },
      {
        text: 'Integrations',
        link: '/products/neuron#integrate',
      },
      {
        text: 'Resources',
        link: '/products/neuron#resources',
      },
      {
        text: 'Get Started',
        link: '/products/neuron#start-now',
      },
    ],
    tabs: [
      {
        key: 'northbound',
        title: 'Northbound Modules',
      },
      {
        key: 'southbound',
        title: 'Southbound Modules',
      },
    ],
    northbound: {
      tabs: ['Cloud Connectivity', 'Application'],
      list: [
        [
          {
            img: 'mqtt',
            name: 'MQTT',
            direction: 'northbound',
            status: 'open source',
            content:
              'MQTT is an OASIS standard messaging protocol for the Internet of Things (IoT). It is designed as an extremely lightweight publish/subscribe messaging transport that is ideal for connecting remote devices with a small code footprint and minimal network bandwidth.',
          },
          {
            img: 'sparkplug',
            name: 'Sparkplug B',
            direction: 'northbound',
            status: 'commercial',
            content:
              'Sparkplug is an extended public protocol based on the MQTT protocol designed for industrial IoT, especially industrial 4.0 distributed applications. Devices and sensors at the edge of a network can use Sparkplug B to communicate with applications like SCADA systems, historians, and analytics programs.',
          },
          {
            img: 'websocket',
            name: 'WebSocket',
            direction: 'northbound',
            status: 'commercial',
            content:
              'WebSocket makes the data exchange between the client and the server easier, allowing the server to actively push data to the client. In the WebSocket API, the browser and the server only need to complete a handshake, and a persistent connection can be established between the two, and two-way data transmission can be performed.',
          },
          {
            img: 'restful-api',
            name: 'RESTful API',
            direction: 'northbound',
            status: 'commercial',
            content:
              'API, full name Application Programming Interface (application programming interface), in simple terms, is an interface developed by the brand, allowing third parties to additionally develop and apply the system communication interface to their own products.',
          },
        ],
        [
          {
            img: 'ekuiper',
            name: 'eKuiper Streaming Engine',
            direction: 'northbound',
            status: 'open source',
            content:
              'LF Edge eKuiper is lightweight IoT edge analytics, streaming processing open source software. When eKuiper is integrated into Neuron, Neuron can implement a streaming process rule logic. Users can develop business logic, device control or data filtering by writing Streaming SQL statement in eKuiper module.',
          },
        ],
      ],
    },
    southbound: {
      tabs: ['PLC Drivers', 'Global Standards', 'Electricity', 'Building Automation', 'CNC Machines & Robotics'],
      list: [
        [
          {
            img: 'siemens',
            name: 'Siemens',
            direction: 'southbound',
            status: 'commercial',
            content:
              'Neuron offers the following drive modules for Siemens PLCs, including the S5 and S7 series models.',
            table: [
              'Siemens 3964R/RK512: Serial',
              'Siemens Fetch Write for CP343 and CP443 module: Ethernet',
              'Siemens Industrial Ethernet ISO for S7-200/300/400/1200/1500: Ethernet',
            ],
          },
          {
            img: 'sanling',
            name: 'Mitsubishi',
            direction: 'southbound',
            status: 'commercial',
            content:
              'Neuron offers the following drive modules for Mitsubishi PLCs, including FX, Q and L series models.',
            table: [
              'Mitsubishi FX: Serial',
              'Mitsubishi 232ADP/485BD: Serial/RS485',
              'Mitsubishi FX3U-ENET-ADP: Ethernet',
              'Mitsubishi MC Protocol for MELSEC-Q and C24 module: Serial',
              'Mitsubishi MC Protocol for MELSEC-Q and E71 module: Ethernet',
            ],
          },
          {
            img: 'omron',
            name: 'Omron',
            direction: 'southbound',
            status: 'commercial',
            content:
              'Neuron offers the following drive modules for Omron PLCs, including CX, CJ and CPM series models.',
            table: ['Omron Host Link: Serial', 'Omron FINS on Host Link: Serial', 'Omron FINS on TCP: Ethernet'],
          },
          {
            img: 'schneider',
            name: 'Schneider',
            direction: 'southbound',
            status: 'commercial',
            content: 'Neuron offers the following drive modules for Schneider PLCs.',
            table: [
              'Schneider PLC Modbus RTU: Serial',
              'Schneider PLC Modbus TCP: Ethernet',
              'Schneider Telemecanique UNI-TE: Serial',
            ],
          },
          {
            img: 'allen-bradley',
            name: 'Rockwell Automation',
            direction: 'southbound',
            status: 'commercial',
            content: 'Neuron offers the following drive modules for Allen-Bradley PLCs.',
            table: ['Allen-Bradley DF1 half-duplex: Serial', 'CIP EtherNet/IP: Ethernet'],
          },
          {
            img: 'panasonic',
            name: 'Panasonic',
            direction: 'southbound',
            status: 'commercial',
            content: 'Neuron offers the following drive modules for Panasonic PLCs.',
            table: [
              'Panasonic FP series MEWTOCOL-COM: Serial',
              'Panasonic FP series MEWTOCOL-COM: Ethernet',
              'Panasonic FP series MEWTOCOL-DAT: Ethernet',
            ],
          },
          {
            img: 'beckhoff',
            name: 'Beckhoff',
            direction: 'southbound',
            status: 'commercial',
            content: 'Neuron offers the following drive modules for Beckhoff PLCs.',
            table: ['Beckhoff ADS/AMS TCPIP: Ethernet'],
          },
          {
            img: 'keyence',
            name: 'Keyence',
            direction: 'southbound',
            status: 'commercial',
            content: 'Neuron offers the following drive modules for KEYENCE PLCs.',
            table: ['CIP Ethernet/IP: Ethernet', 'Mitsubishi MC Protocol: Ethernet'],
          },
          {
            img: 'delta',
            name: 'Delta',
            direction: 'southbound',
            status: 'commercial',
            content: 'Neuron offers the following drive modules for Delta PLCs.',
            table: ['Delta DVP communication protocol: Serial', 'Modbus TCP: Ethernet', 'CIP Ethernet/IP: Ethernet'],
          },
          {
            img: 'abb',
            name: 'ABB',
            direction: 'southbound',
            status: 'commercial',
            content: 'Neuron offers the following drive modules for ABB PLCs.',
            table: ['ABB Sattcon Comli: Serial', 'ABB Sattbus on TCP: Ethernet'],
          },
          {
            img: 'fatek',
            name: 'Fatek',
            direction: 'southbound',
            status: 'commercial',
            content: 'Neuron offers the following drive modules for Fatek PLCs.',
            table: ['FATEK FACON serial: Serial', 'FATEK FACON ethernet: Ethernet'],
          },
          {
            img: 'ge-fanuc',
            name: 'GE Fanuc',
            direction: 'southbound',
            status: 'commercial',
            content: 'Neuron offers the following drive modules for GE Fanuc PLCs.',
            table: ['GE FANUC 90-30 SNPX: Serial', 'GE FANUC 90-30 Ethernet SRTP: Ethernet'],
          },
        ],
        [
          {
            img: 'opcua',
            name: 'OPC UA',
            direction: 'southbound',
            status: 'commercial',
            content:
              'OPC is an interoperability standard for safe and reliable data exchange in the field of industrial automation. OPC is based on client/server technology which is an extensible, platform-independent standard that enables the secure exchange of information in industrial systems.',
          },
          {
            img: 'modbus',
            name: 'Modbus RTU, Modbus RTU over TCP, Modbus TCP',
            direction: 'southbound',
            status: 'open source',
            content:
              'Modbus devices use master-slave (client-server) communication model, and only one device (master/client) can initiate a query. In simple terms, it is a method used for transmitting information over serial lines between electronic devices.',
          },
          {
            img: 'ethernet',
            name: 'EtherNet/IP',
            direction: 'southbound',
            status: 'commercial',
            content:
              'EtherNet/IP is a best-in-class Ethernet communication network that provides users with the tools to deploy standard Ethernet technology (IEEE 802.3 combined with the TCP/IP Suite) in industrial automation applications while enabling Internet and enterprise connectivity, data anytime, anywhere.',
          },
        ],
        [
          {
            img: 'iec',
            name: 'IEC Standards',
            direction: 'southbound',
            status: 'commercial',
            content:
              'IEC 60870-5-104 supports communication between the control station and the substation through a standard TCP/IP network. The TCP protocol is used for connection secure data transmission. The standard interoperability list ensures the interoperability between devices from different vendors.',
            table: ['IEC 60870-5-101: Serial', 'IEC 60870-5-104: Ethernet', 'IEC 61850: Ethernet'],
          },
          {
            img: 'dnp3',
            name: 'DNP3',
            direction: 'southbound',
            status: 'commercial',
            content:
              'DNP3 (Distributed Network Protocol) was developed to create a protocol for standardization by vendors of power grid SCADA. DNP3 is commonly used in North American electric and water utilities for communication between SCADA masters and substations such as remote terminal units (RTUs).',
          },
          {
            img: 'gb',
            name: 'Chinese Standard',
            direction: 'southbound',
            status: 'commercial',
            content:
              'DL/T645 multi-functional energy meter communication protocol is a Chinese standard to unify and standardize the physical connection and protocol when multi-functional energy meter and data terminal devices exchange data, there are two versions, DL/T645-97 and DL/T645-07 respectively.',
          },
        ],
        [
          {
            img: 'bacnet',
            name: 'BACnet/IP',
            direction: 'southbound',
            status: 'commercial',
            content:
              'BACnet is a data communication protocol for building automation and control networks. BACnet is an international (ISO) and American National Standards Institute (ANSI) standard for interoperability between cooperative buildings.',
          },
          {
            img: 'knx',
            name: 'KNXnet/IP',
            direction: 'southbound',
            status: 'commercial',
            content:
              'KNX is an open standard (ISO/IEC 14543) for commercial and domestic building automation. KNX devices can manage lighting, blinds and shutters, HVAC, security systems, energy management, audio video, white goods, displays, remote control, etc.',
          },
          {
            img: 'lonworks',
            name: 'LON',
            direction: 'southbound',
            status: 'commercial',
            content:
              'LonWorks is a communication network protocol useful for building automation applications designed on a low bandwidth, for networking devices through power lines, fiber optics, and other media.',
          },
        ],
        [
          {
            img: 'mtconnect',
            name: 'MTConnect',
            direction: 'southbound',
            status: 'commercial',
            content:
              'MTConnect is a protocol designed for the exchange of data between shop floor equipment and software applications used for monitoring and data analysis.',
          },
        ],
      ],
    },
  },
}
