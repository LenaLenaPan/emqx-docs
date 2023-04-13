export default {
  deployments: {
    title: 'EMQX Enterprise Deployment Options',
    description: 'EMQX Enterprise can be directly deployed on bare metal servers or virtual machines.',
    banner: {
      pageName: 'Deployments',
      title: 'EMQX Enterprise {0}',
      titleSlots: ['Deployment Options'],
    },
    overview: [
      {
        title: 'On virtual machines or bare metal',
        content:
          'EMQX Enterprise can be directly deployed on bare metal servers or virtual machines. A minimum of 2 core and 4GB machine can run the EMQX Enterprise. It can support CentOS/Debian/Ubuntu/MacOS operating systems. For a complete list of supported operating systems and versions, please refer to the {0}. You can use this deployment method to deploy EMQX Enterprise products in your private data center.',
        slots: [
          { text: 'document', link: 'https://docs.emqx.com/en/enterprise/latest/getting-started/install-ee.html' },
        ],
      },
      {
        title: 'Docker',
        content:
          'Docker image is another option that you can use to set up a running instance quickly. You can learn more about the image on {0}. Containerized deployment is one of the ways you can quickly start evaluating EMQX Enterprise products. Installing EMQX Enterprise is as easy as {1}. In this way, you can also create a fully functional EMQX Enterprise cluster.',
        slots: [
          { text: 'Docker Hub', link: 'https://hub.docker.com/r/emqx/emqx-ee' },
          {
            text: '2 command lines',
            link: 'https://hub.docker.com/r/emqx/emqx-ee',
          },
        ],
      },
      {
        title: 'Kubernetes',
        content:
          'EMQX provides the {0} for Kubernetes users. This tool can help you deploy a fully functional EMQX Enterprise in a Kubernetes environment within minutes. The operator is an application orchestration tool developed based on the native API of Kubernetes. It is used to automate the deployment and lifecycle management of EMQX clusters. You can refer to the {1} of EMQX Kubernetes Operator to learn how to use Operator for EMQX Enterprise deployment.',
        slots: [
          {
            text: 'EMQX Kubernetes Operator',
            link: '/emqx-kubernetes-operator',
          },
          {
            text: 'documentation',
            link: 'https://github.com/emqx/emqx-operator/blob/main/docs/en_US/getting-started/getting-started.md',
          },
        ],
      },
      {
        title: 'Terraform',
        content:
          'EMQX provides {0} tool. This tool can help you quickly deploy an EMQX cluster from scratch on the public cloud (AWS, Alibaba Cloud, or Azure) or private cloud, including infrastructure (virtual machines, network, storage, etc.). The advantage of this approach is that it helps you deploy your infrastructure and EMQX clusters in a repeatable and predictable manner in a declarative style. You can refer to the {1} of Terraform EMQX Module to deploy an EMQX Cluster in AWS.',
        slots: [
          {
            text: 'Terraform EMQX Module',
            link: '/emqx-terraform',
          },
          {
            text: 'documentation',
            link: 'https://docs.emqx.com/en/emqx-terraform/latest/',
          },
        ],
      },
    ],
    contactUs: {
      title: 'Ready to get started?',
      btn: 'Contact Us',
    },
  },
}
