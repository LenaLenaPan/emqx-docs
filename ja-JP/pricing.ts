export default {
  pricing: {
    title: 'Pricing',
    description:
      'See pricing for EMQX Cloud and EMQX Enterprise. Choose one that’s right for you. Free trial available.',
    banner: {
      title: 'Pricing',
      subTitle: 'Choose one that’s right for you',
    },
    tabs: [
      {
        icon: 'icon-cloud',
        key: 'cloud',
        title: 'EMQX Cloud',
        summary: 'Fully managed MQTT service',
        link: '/pricing?product=cloud',
      },
      {
        icon: 'icon-emqx',
        key: 'enterprise',
        title: 'EMQX Enterprise',
        summary: 'Self-managed MQTT messaging platform',
        link: '/pricing?product=enterprise',
      },
    ],
    enterprise: [
      {
        title: 'EMQX Enterprise',
        subTitle: 'Enterprise-grade on-premises deployment, self-managed',
        features: [
          'Cross-platform and multi-cloud deployment',
          'Cloud-Native operation and maintenance',
          'Various services and databases integration',
          'Global technical support team',
          'Annual subscription',
        ],
        link: '/contact?product=emqx',
        linkText: 'Contact Us',
      },
      {
        title: 'EMQX Business Critical',
        subTitle: 'Effective orchestration and governance of multiple clusters in business critical scenarios',
        features: [
          'Multi cluster Orchestration',
          'Multi tenancy',
          'Backup and Disaster Recovery',
          'Global professional service',
          'Annual subscription',
        ],
        link: '/contact?product=emqx',
        linkText: 'Contact Us',
      },
    ],
  },
}
