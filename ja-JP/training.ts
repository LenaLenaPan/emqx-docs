export default {
  training: {
    title: 'Training',
    description:
      'We provide standard and customized training courses. Whether it’s a guide to design IoT platforms or train new IoT ops teams - our team is at your service.',
    banner: {
      title: 'Standard and {0} Training Courses',
      titleSlots: ['Customized'],
      desc: '',
    },
    system: {
      title: 'Training Courses',
      list: [
        {
          subTitle: 'Introductory Courses',
          desc: 'The EMQX introductory course helps users to understand basic IoT knowledge, including software development and theoretical and practical operation of common protocols. Through this course, users gain a preliminary understanding of IoT and practical operation ability. Also, user will learn how to use EMQ Broker & Edge products.',
          courses: [
            {
              cardTitle: 'Basic Course',
              content: ['IoT introduction', 'MQTT protocol basics', 'CoAP protocol basics', 'LwM2M protocol basics'],
            },
            {
              cardTitle: 'EMQX Community',
              content: ['EMQX introduction', 'Up & Run', 'MQTT client programming', 'EMQ bridges'],
            },
            {
              cardTitle: 'EMQX Edge',
              content: [
                'Up & Run at Raspberry PI',
                'Data synchronization',
                'Industry protocol support',
                'Edge management platform of EMQX Cube',
              ],
            },
          ],
        },
        {
          subTitle: 'Intermediate Courses',
          desc: 'These courses introduce more usage of EMQX, such as EMQ security settings, message persistence, bridging of nodes, and data stream processing. Through this course, users gain a deeper understanding of how to build a secured, streaming data processing IoT platform.',
          courses: [
            {
              cardTitle: 'Securities',
              content: ['TLS connections', 'Authentication', 'ACL settings'],
            },
            {
              cardTitle: 'Rule engines & Streaming processing',
              content: [
                'SQL based rule engine introduction',
                'Data persistence for Redis',
                'Data persistence for MySQL',
                'Data persistence for PostgreSQL',
                'Data persistence for MongoDB',
                'Data persistence for Cassandra',
                'Webhook',
              ],
            },
          ],
        },
        {
          subTitle: 'Advanced Courses',
          desc: 'These courses introduce advanced topics of EMQX products, such as clustering, deployment at Kubernetes, plugin development. Also, it covers optimization of EMQ for supporting massive con-current connections. Through this course, users can learn how to build a complete IoT platform supporting for massive connection.',
          courses: [
            {
              cardTitle: 'Advanced Topics',
              content: [
                'EMQX cluster',
                'Cross data center deployment',
                'Kubernetes deployment',
                'Deployment clusters at AWS',
                'Device management platform',
                'Plugin development',
                'IoT platform development',
              ],
            },
            {
              cardTitle: 'Optimization',
              content: [
                '1M - 10M concurrent connections configuration tuning',
                'Massive connection performance testing',
                'MQTT client programming',
                'SSL offload',
              ],
            },
          ],
        },
      ],
    },
    methods: {
      title: 'The Training',
      list: [
        {
          img: 'online',
          title: 'Online Training',
          desc: 'Online courses and webinars for introducing the usage of EMQ, and new features of EMQ.',
        },
        {
          img: 'enterprise',
          title: 'Customized Enterprise Customer Training',
          desc: 'We tailor and customize the training material to meet customer’s specific need prior to the on-site face-to-face training.',
        },
        {
          img: 'offline',
          title: 'Meetup Events',
          desc: 'EMQX occasionally organizes Meetup events in all major cities in China and around the world to build up our communities, do some case studies and share our experiences with our users and IoT developers worldwide.',
        },
      ],
    },
  },
}
