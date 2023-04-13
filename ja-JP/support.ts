export default {
  support: {
    title: 'Support',
    description:
      "Whether you've downloaded our open source solution or require comprehensive 24/7 commercial system support – we always have your back.",
    pageName: 'Support',
    banner: {
      title: "We're Here to Help with Everything for Your {0}",
      titleSlots: ['Success'],
      subTitle:
        "Whether you've downloaded our open source solution or require comprehensive 24/7 commercial system support – we always have your back.",
    },
    methods: {
      title: 'Choose the right support that works for you',
      list: [
        {
          title: 'Community Support',
          subTitle: 'Submit questions and get answered on {0}, {1}, {2}',
          slots: [
            { text: 'GitHub', link: 'https://github.com/emqx/emqx' },
            { text: 'Slack', link: 'https://slack-invite.emqx.io/' },
            { text: 'Forum', link: 'https://www.emqx.io/forum/' },
          ],
          img: 'community',
        },
        {
          title: 'Commercial Support',
          subTitle:
            'Our professional team provides full service from installation to how to use the product. Please {0} for commercial support.',
          slots: [{ text: 'contact us', link: '/contact' }],
          img: 'commercial',
        },
      ],
    },
    commercial: {
      title: 'What Does Commercial Support Cover?',
      list: [
        {
          title: 'Use of EMQX Community and Enterprise',
          img: 'lateral',
          desc: 'Commercial support covers both EMQX Community (open source) and Enterprise (commercial). We provide different subscription service for the two editions.',
        },
        {
          title: 'Assistance with Installation and Deployment',
          img: 'assist',
          desc: 'We can help when it comes to defining the prerequisite of your deployment environment. Whether it’s step-by-step installation guidance or issues during the installation and deployment process, we’ve got your back.',
        },
        {
          title: 'Software Updates',
          img: 'software',
          desc: 'As EMQ releases new software, we let you know in our documentation and release notes. Running into problems as you’re upgrading? The EMQ team has you covered.',
        },
        {
          title: 'Debugging and Problem Fixing',
          img: 'debug',
          desc: 'Running into bugs? Tell us! Our team will work with you to solve the problem, provide a fix, and then incorporate that fix into our next update so no clients face that issue again. Customers engaged with us on a commercial basis will have their problems fixed first.',
        },
        {
          title: 'Performance Optimization and Tuning',
          img: 'performance',
          desc: 'We can help you analyze key performance metrics and make recommendations on system configuration and architecture. We’ll help you improve your system based on your requirements.',
        },
        {
          title: 'Critical Security Notifications',
          img: 'critical',
          desc: 'With EMQX, security issues are rare and unlikely. But, if they happen, we’ll let you know about the implications you face and find a solution as directly and quickly as possible.',
        },
      ],
    },
    level: {
      title: 'Commercial Service Level',
      thead: ['Features', 'Standard', 'Professional'],
      table: [
        {
          content: ['Support hours', '5*8', '7*24'],
        },
        {
          content: ['Email support', 'Yes', 'Yes'],
        },
        {
          content: ['Online chat tool support', 'Yes', 'Yes'],
        },
        {
          content: ['Telephone hotline support', 'No', 'Yes'],
        },
        {
          content: ['Response time', '8 hours', '2 hours'],
        },
        {
          content: ['Hot bug fixes', 'No', 'Yes'],
        },
        {
          content: ['3rd-party plug-in support', 'No', 'Yes'],
        },
      ],
    },
    more: {
      title: 'More Support Resources',
      list: [
        {
          link: 'https://www.emqx.io/docs/en/latest/',
          img: 'more-docs',
          content: 'EMQX Documentation',
        },
        {
          link: 'https://www.emqx.io/docs/en/latest/extensions/plugins.html',
          img: 'more-dev',
          content: 'Plugins Development Guide',
        },
        {
          link: '/policy/service-agreement',
          img: 'more-lic',
          content: 'Service Agreement',
        },
      ],
      checkMore: 'Learn More',
    },
  },
}
