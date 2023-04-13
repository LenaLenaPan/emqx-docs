export default {
  integrations: {
    title: 'Integrations of EMQX Enterprise',
    description:
      'Simply configure the Rule Engine and Data Bridge on the Web UI to integrate the IoT data with Kafka, RDS, SQL / NoSQL / time-series databases, and enterprise systems.',
    banner: {
      title: '{0} {1} via Rule Engine and Data Bridge',
      titleSlots: ['Integration with Everything'],
      summary:
        'With the power of rule engine and data bridge, system Integration is as easy as a few clicks on UI. We offer product integration with Message Queues (such as Kafka, RabbitMQ), SQL / NoSQL / Timeseries Database, and enterprise systems (such as Oracle and SAP).',
      tryFree: 'Try EMQX Enterprise',
      contactUs: 'Contact Us',
    },
    overView: {
      title: 'Fast and Flexible, Low-code Data Processing and Integration',
      list: [
        {
          image: 'overview-1',
          title: 'Built-in IoT Rule Engine',
          contents:
            'The core component of data processing and distribution based on MQTT. Real-time IoT data extraction, filtering, enrichment and transformation between systems.',
        },
        {
          title: 'SQL-based Data Processing',
          contents:
            'Simplify IoT application development by writing SQL to achieve fast and flexible data processing and accelerate business delivery.',
        },
        {
          image: 'overview-3',
          title: 'Data Bridge and Integration',
          contents:
            'No code is required to move data between more than 40 enterprise systems and hundreds of millions of devices. Achieve rapid integration and accelerate business innovation.',
        },
      ],
    },
    integrationList: {
      title: 'Find Integrations',
      searchTips: 'Search Integrations',
      all: 'All',
      noData: 'No related integration found',
    },
    startNow: {
      title: 'Get Started Now',
      tryFree: 'Try EMQX Enterprise',
      contactUs: 'Contact Us',
    },
    discoverMore: {
      title: 'Discover More',
      learnMore: 'Learn More',
      list: [
        {
          image: 'icon-resources',
          text: 'Resources',
          link: '/resources',
        },
        {
          image: 'icon-blog',
          text: 'Blog',
          link: '/blog/tag/rules-engine',
        },
        {
          image: 'icon-contact',
          text: 'Contact Us',
          link: '/contact',
        },
      ],
    },
  },
}
