export default {
  consulting: {
    title: 'Consulting',
    description:
      'We can provide top-notch assistance when building and customizing your IoT platform. We offer tailored consulting services for every stage of your project.',
    intro: {
      title: '{0} for Every Stage',
      subsequentTitle: 'Tailored Consulting Services',
      desc: 'With years of field experience under our belt, we can provide top-notch assistance when it comes to building and customizing your IoT platform.',
      content: 'Consulting',
    },
    design: {
      title: 'IoT Platform Architecture Design',
      desc: 'Looking to roll out an IoT service? Ensure your platform architecture is as reliable, available, and scalable as possible by keeping these tips in mind:',
      list: [
        {
          icon: 'list',
          content: 'How to design a load balancer',
        },
        {
          icon: 'list',
          content: 'How to architect EMQX clusters',
        },
        {
          icon: 'list',
          content: 'Your backup plan if an avalanche accident happens',
        },
        {
          icon: 'list',
          content: 'How to bridge EMQX to your stream or DB infrastructure',
        },
        {
          icon: 'list',
          content: 'How to keep your messages that publish to EMQX persistent',
        },
        {
          icon: 'list',
          content:
            'How to design your hook API’s, so that you can use your big data analysis platform more efficiently',
        },
      ],
    },
    deployment: {
      title: 'Across Clusters/Data Centers/Regions Solution',
      content: [
        {
          left: 'left',
          text: 'Sometimes your IoT project needs to be deployed across carriers, across the cloud, or on different data centers in different regions.',
        },
        {
          left: '',
          text: 'How can your IoT devices seamlessly switch between different carriers and clouds?',
        },
        {
          left: 'left',
          text: 'How can your data keep consistent in multiple data centers?',
        },
      ],
      desc: 'EMQ can help define and design the specific test cases and scenarios that might impact your system and ensure it can be put into operation without potential pitfalls.',
    },
    secure: {
      title: 'Highly Secured IoT Platform',
      list: [
        {
          img: 'cover',
          desc: 'A secure IoT platform means it is secure end-to-end. This includes, but is not limited to, secure IoT devices, data channels, data storage (with tenant separation), application deployment and mobile applications.',
        },
        {
          img: 'secure',
          desc: 'Our consulting services can provide you the best practices in each of these design topics, to help you build a highly secured IoT platform and meet some of the most strict security standards and regulations.',
        },
      ],
    },
    acceptance: {
      title: 'Pre-Production Inspection',
      list: [
        {
          class: 'card card-first',
          content:
            'Before your IoT platform is ready to be tested in a production environment, its implementation must achieve your design goals.',
        },
        {
          class: 'card card-second',
          content: 'You must be sure that the system can stay stable in the long run.',
        },
        {
          class: 'card card-third',
          content:
            'EMQ can help you define and design the specific test cases and scenarios. We can inspect your system to ensure it can be put into operation without potential pitfalls.',
        },
      ],
    },
    operation: {
      title: 'Deploying And Operating Your IoT Platform',
      list: [
        {
          class: 'operation-block-top',
          content:
            'What is your platform’s deployment strategy - on premises, or in a public or private cloud? How many clusters do you need? Once it is online - how can you monitor the system? And, if any problems occur, how can you locate and fix them as soon as possible? How can you upgrade your system with little to no downtime?',
        },
        {
          class: 'operation-block-bottom',
          content:
            'We will help you better understand the statistics of the system, as well as in the dashboard so that you have a better understanding overall. We’ll also help you come up with a plan as to when alarms should be triggered. We provide various consulting services to meet your needs when it comes to operation and deployment.',
        },
      ],
    },
  },
}
