export default {
  mqtt5: {
    title: 'MQTT 5 Explore',
    description:
      'MQTT 5.0 adds many new features. EMQX supports MQTT 5.0 protocol from 3.0 and is completely compatible with MQTT V3.1 and V3.1.1 protocol.',
    banner: {
      title: 'MQTT 5.0',
      contents:
        'Based on version 3.1.1, MQTT 5.0 adds features such as Session/Message Expiry Interval, Reason Code, Topic Alias, User Properties, and Shared Subscriptions. It improves the performance, stability, and scalability of large systems.',
      tryCloud: 'Try MQTT 5.0 Cloud',
    },
    navs: [
      {
        text: 'MQTT 5.0 New Features',
        link: '#mqtt5-new-features',
      },
      {
        text: 'Try MQTT 5.0',
        link: '#try-mqtt5',
      },
      {
        text: 'MQTT 5.0 Resources',
        link: '#mqtt5-resources',
      },
    ],
    newFeatures: {
      title: 'MQTT 5.0 New Features',
      subTitle: 'Master MQTT 5.0 features and start IoT application development quickly.',
      list: [
        {
          title: 'User Properties',
          desc: 'User Properties are the user-defined properties that allow users to add their metadata to MQTT messages.',
          link: '/blog/mqtt5-user-properties',
        },
        {
          title: 'Topic Alias',
          desc: 'Topic Alias allow users to reduce the name of the topic used to reduce bandwidth consumption when publishing messages.',
          link: '/blog/mqtt5-topic-alias',
        },
        {
          title: 'Session Expiry Interval',
          desc: 'The clean session flag is split into a new start flag, and the session expiration interval can be modified on disconnection.',
          link: '/blog/mqtt5-new-feature-clean-start-and-session-expiry-interval',
        },
        {
          title: 'Flow Control',
          desc: 'Flow Control can be the sending rate for limiting the sender or receiving rate for limiting the receiver.',
          link: '/blog/mqtt5-flow-control',
        },
        {
          title: 'Message Expiry Interval',
          desc: 'Allow messages to be published with an expiration interval.',
          link: '/blog/message-retention-and-message-expiration-interval-of-emqx-mqtt5-broker',
        },
        {
          title: 'Maximum Packet Size',
          desc: 'Allows the client and server to each specify the maximum packet length they support.',
          link: '',
        },
        {
          title: 'Reason Code',
          desc: 'All response messages contain a Reason Code to enable the caller to determine whether the requested function was successful or not',
          link: '/blog/mqtt5-new-features-reason-code-and-ack',
        },
        {
          title: 'Reason Strings',
          desc: 'Reason Strings is a string that indicates exactly why something happened.',
          link: '',
        },
        {
          title: 'Optional server function availability',
          desc: 'Inform the client of the list of supported server-side features to prevent the client from using unsupported features.',
          link: '',
        },
        {
          title: 'Enhanced Authentication',
          desc: 'The enhanced authentication includes query/response style authentication, which can implement bi-directional authentication of the client and broker.',
          link: '/blog/mqtt5-enhanced-authentication',
        },
        {
          title: 'DISCONNECT Packets',
          desc: 'Allow the server to send DISCONNECT packets to the client.',
          link: '',
        },
        {
          title: 'Subscription Identifier',
          desc: 'The client can specify a subscription identifier when subscribing.',
          link: '/blog/subscription-identifier-and-subscription-options',
        },
        {
          title: 'Subscription Options',
          desc: 'Use more Subscription Options to change server behavior.',
          link: '/blog/subscription-identifier-and-subscription-options',
        },
        {
          title: 'Payload Format Indicator and Content Type',
          desc: 'Allow to specify the payload format (binary, text) and MIME style content type when the message is published.',
          link: '/blog/mqtt5-new-features-payload-format-indicator-and-content-type',
        },
        {
          title: 'Will Delay Interval',
          desc: 'This is used to specify a time delay in sending the will messages.',
          link: '',
        },
        {
          title: 'Request/Response',
          desc: 'The configuration of Response Topic and Correlation Data is provided, The response message is routed back to the publisher of the request.',
          link: '/blog/mqtt5-request-response',
        },
        {
          title: 'Shared Subscriptions',
          desc: 'Shared Subscriptions allow users to share subscriptions between multiple clients.',
          link: '/blog/introduction-to-mqtt5-protocol-shared-subscription',
        },
        {
          title: 'Server Keep Alive',
          desc: 'Allows the server to specify the Server Keep Alive it wants the client to use.',
          link: '',
        },
        {
          title: 'Assigned Client Identifier',
          desc: 'Allows the Broker to uniformly assign Client IDs to Clients',
          link: '',
        },
        {
          title: 'Server Reference',
          desc: 'Allows the Broker to redirect the client to another Broker/Server.',
          link: '',
        },
      ],
      learnMore: 'More MQTT 5.0 Blogs',
    },
    gettingStarted: {
      title: 'Try MQTT 5.0',
      list: [
        {
          title: 'MQTT 5.0 Cloud',
          contents:
            'EMQX Cloud is a fully managed MQTT 5.0 service for IoT and create an MQTT Broker instantly in minutes.',
          btnText: 'Try EMQX Cloud',
        },
        {
          title: 'MQTT 5.0 Broker',
          contents:
            'EMQX is a cloud-native, distributed MQTT 5.0 Broker for IoT, powering event streaming for IoT devices at massive scale.',
          btnText: 'Download EMQX',
          link: '/try?product=enterprise',
        },
      ],
    },
    resources: {
      title: 'MQTT 5.0 Resources',
      list: [
        {
          title: 'Cross-platform MQTT 5.0 Desktop Client',
          summary:
            'MQTT X provides comprehensive MQTT testing capabilities and helps you develop MQTT services and applications faster.',
          btnText: 'Download',
          link: '/try?product=MQTTX',
        },
        {
          title: 'Testing MQTT 5 features with the MQTT X',
          summary: 'Test MQTT 5.0 with MQTT X and explore the many new features of MQTT 5.0.',
          btnText: 'Learn More',
          link: '/blog/testing-mqtt-5-with-the-mqtt-client',
        },
        {
          title: 'Using MQTT 5.0 in the iOS Project',
          summary:
            'Use the MQTT 5.0 client library CocoaMQTT in the iOS project, implement the connection, subscription, messaging, etc.',
          btnText: 'Learn More',
          link: '/blog/ios-mqtt5-client',
        },
      ],
    },
  },
}
