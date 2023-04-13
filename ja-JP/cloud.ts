export default {
  cloud: {
    title: 'フルマネージド型MQTTメッセージングクラウドサービス',
    description:
      'EMQX Cloudは、EMQが提供するフルマネージド型MQTT 5.0 IoTクラウドサービスプラットフォームであり、大規模IoTデバイスを接続し、リアルタイムでデータが処理可能で、使用量課金制をサポートし、コードレスでメッセージ配信と永続性を実現できます。',
    keywords: 'MQTT、MQTTプロトコル、MQTTサーバー、モノのインターネット、IoT、IoTアプリ',
    navs: [
      {
        text: '料金',
        link: '/cloud/pricing',
      },
      {
        text: 'ドキュメント',
        link: 'https://docs.emqx.com/en/cloud/latest/',
      },
      {
        text: 'お問い合わせ',
        link: '/contact?product=cloud',
      },
    ],
    tryFree: '無料トライアル',
    banner: {
      title: 'フルマネージド型MQTTメッセージングクラウドサービス',
      content:
        'MQTTサービスを簡単に開始できます。IoTデバイスを任意のクラウドに接続しても、インフラをメンテナンスする負担がありません。',
      startTrial: '無料トライアル',
      demo: 'デモの申請',
      noCreditTips: '14日間の無料トライアル、 クレジットカードの提供は必要ありません。',
      platformLogos: ['icon-cloud-aws', 'icon-cloud-azure', 'icon-cloud-gcp'],
      videoLink: 'https://cdn.emqx.com/video/emqx_cloud_en_overview.mp4',
      unmuteTips: 'クリックするとミュートを解除します',
      contact: 'お問い合わせ',
    },
    'customer-wall': {
      logos: [
        { imgName: 'nissan', alt: 'Nissan' },
        { imgName: 'cisco', alt: 'Cisco' },
        { imgName: 'jc', alt: 'Johnson Controls' },
        { imgName: 'shell', alt: 'Shell' },
        { imgName: 'volkswagen', alt: 'Volkswagen' },
        { imgName: 'foxconn', alt: 'Foxconn' },
      ],
    },
    'why-cloud': {
      list: [
        {
          title: '{0} ワンクリックでデプロイメント',
          description:
            'EMQX Cloudは、IoTアプリケーションに便利なMQTTクラウドサービスを提供し、ワンクリックで導入し、運用・保守における一般的な問題を回避します。',
          highlights: ['1'],
        },
        {
          title: '{0} クラウドリソースのサービス統合 ',
          description:
            '柔軟で強力な統合機能で、クラウドデータベースなどのデータベースサービス、およびKafkaなどのメッセージキューサービスに接続できます。',
          highlights: ['40+'],
        },
        {
          title: '世界で {0} 個以上の地域で使用され',
          description: 'AWS、Google Cloud、Microsoft Azureの17地域で幅広い業界の多くのユーザー愛用されいます。',
          highlights: ['17'],
        },
        {
          title: '{0} SLA保障',
          description:
            'EMQXの高性能製品アーキテクチャのサポートにより、EMQX Cloudは最大99.99%のSLAを保証し、システムに強力な保証を提供します。',
          highlights: ['99.99%'],
        },
        {
          title: '{0} MQTT',
          description:
            'MQTT v5.0のプロトコル標準を100%サポートします。QoS0、1、および2のMQTTメッセージングを全面的にサポートします。',
          highlights: ['100%'],
        },
        {
          title: '{0} 技術サポート',
          description:
            'アジア、北米、ヨーロッパなどに配置された専門チームが、24時間年中無休のグローバル技術サポートサービスを提供し、システムを保護します。',
          highlights: ['24 / 7'],
        },
      ],
    },
    income: {
      title: '複数のサービス保証、安心のクラウド体験',
      list: [
        {
          title: '運用・保守コストの削減',
          description:
            'フルマネージド型サービスを使用すると、時間と人件費を大幅に節約できるため、企業はより価値のある業務システムの納入に専念できます。',
        },
        {
          title: '従量制の課金',
          description:
            'EMQXクラウドサーバーレスを使用するには、料金は使用した接続とトラフィックに対してのみ支払う必要があります。初期段階の業務及びプロジェクト評価に最適です。',
        },
        {
          title: '完全無料の割当量',
          description:
            '使用量が無料割当量内であれば、Serverlessサービスは、完全に無料です。開発中およびテスト中のプロジェクトで使用できます。',
        },
        {
          title: '使いやすい管理',
          description:
            'マルチプロジェクトのマルチロール権限管理をサポートし、部門、財務、調達の権限設定を備え、企業内の人員ロール管理を満たします。',
        },
      ],
      startTrial: '無料体験の開始',
    },
    integrations: {
      title: '40箇所以上の完全なデータ統合リンクが含まれています',
      description:
        '端末データ処理を40以上のクラウドサービスに統合できます。たとえば、デバイスデータを処理およびフィルタリングし、クラウドデータベースのリソースサーバーに送信します。',
      viewAllIntegrations: 'すべての統合の確認',
      link: 'https://docs.emqx.com/en/cloud/latest/rule_engine/introduction.html',
      list: [
        {
          imgName: 'kafka',
          title: 'Kafka',
          link: 'https://docs.emqx.com/en/cloud/latest/rule_engine/rule_engine_confluent.html',
        },
        {
          imgName: 'mongodb',
          title: 'MongoDB',
          link: 'https://docs.emqx.com/en/cloud/latest/rule_engine/rule_engine_save_mongodb.html',
        },
        {
          imgName: 'redis',
          title: 'Redis',
          link: 'https://docs.emqx.com/en/cloud/latest/rule_engine/rule_engine_save_redis.html',
        },
        {
          imgName: 'influxdb',
          title: 'InfluxDB',
          link: 'https://docs.emqx.com/en/cloud/latest/rule_engine/rule_engine_influxDB_2.0.html',
        },
        {
          imgName: 'timescaledb',
          title: 'TimescaleDB',
          link: 'https://docs.emqx.com/en/cloud/latest/rule_engine/rule_engine_save_timescale_cloud.html',
        },
        {
          imgName: 'mysql',
          title: 'MySQL',
          link: 'https://docs.emqx.com/en/cloud/latest/rule_engine/rule_engine_save_mysql.html',
        },
        {
          imgName: 'aws',
          title: 'AWS',
          link: 'https://docs.emqx.com/en/cloud/latest/deployments/vpc_peering.html#precautions',
        },
        {
          imgName: 'azure',
          title: 'Microsoft Azure',
          link: 'https://docs.emqx.com/en/cloud/latest/deployments/vpc_peering.html#azure-vpc-peering-connection',
        },
        {
          imgName: 'gcp',
          title: 'Google Cloud',
          link: 'https://docs.emqx.com/en/cloud/latest/deployments/vpc_peering.html#gcp-vpc-peering-connection',
        },
      ],
    },
    platforms: {
      title: '7つの主流クラウドサービスプロバイダーをサポートし、30以上の地域をサポート',
      description:
        'クリックして、当社がサポートする主要なクラウドサービスプロバイダーの導入地域を確認します。業務が海外にある場合、ポリシー規制、データセキュリティ、およびネットワーク環境の要因を考慮して、海外のクラウドサービスプロバイダーを選択して導入することをお勧めします。',
      btnText: '地域と価格の確認',
      cloudLogos: [
        {
          imgName: 'azure',
          icon: 'icon-cloud-azure-cloud',
          imgAlt: 'Azure',
          supportRegions: ['East US', 'Germany West Central', 'Southeast Asia'],
          mapValues: [
            { name: 'United States', value: 1 },
            { name: 'Germany', value: 1 },
            { name: 'Brunei', value: 1 },
            { name: 'Cambodia', value: 1 },
            { name: 'Indonesia', value: 1 },
            { name: 'Lao PDR', value: 1 },
            { name: 'Malaysia', value: 1 },
            { name: 'Myanmar', value: 1 },
            { name: 'Philippines', value: 1 },
            { name: 'Singapore', value: 1 },
            { name: 'Thailand', value: 1 },
            { name: 'Vietnam', value: 1 },
          ],
        },
        {
          imgName: 'aws',
          icon: 'icon-cloud-aws-cloud',
          imgAlt: 'AWS',
          supportRegions: ['Hong Kong', 'N. Virginia', 'Oregon', 'Ireland', 'Frankfurt', 'Singapore', 'Mumbai'],
          mapValues: [
            { name: 'United States', value: 1 },
            { name: 'Singapore', value: 1 },
            { name: 'Germany', value: 1 },
            { name: 'Ireland', value: 1 },
            { name: 'India', value: 1 },
            { name: 'China', value: 1 },
          ],
        },
        {
          imgName: 'gcp',
          icon: 'icon-cloud-gcp-cloud',
          imgAlt: 'Google Cloud',
          supportRegions: ['Taiwan', 'South Carolina', 'Oregon', 'Frankfurt', 'Finland', 'Mumbai', 'Singapore'],
          mapValues: [
            { name: 'United States', value: 1 },
            { name: 'Germany', value: 1 },
            { name: 'Finland', value: 1 },
            { name: 'India', value: 1 },
            { name: 'Singapore', value: 1 },
            { name: 'China', value: 1 },
          ],
        },
      ],
      regionMarks: [
        {
          name: 'Southeast Asia',
          left: '76%',
          top: '42.6%',
          nameMarginLeft: '-20px',
          nameMarginTop: '24px',
          regionsTips: 'Azureをサポート',
        },
        {
          name: 'Singapore',
          left: '77.4%',
          top: '56.1%',
          nameMarginLeft: '5px',
          nameMarginTop: '0',
          regionsTips: 'AWSとGoogle Cloudをサポート',
        },
        {
          name: 'Mumbai',
          left: '69.8%',
          top: '45.2%',
          nameMarginLeft: '-70px',
          nameMarginTop: '0',
          regionsTips: 'AWSとGoogle Cloudをサポート',
        },
        {
          name: 'Ireland',
          left: '47%',
          top: '22.5%',
          nameMarginLeft: '-24px',
          nameMarginTop: '20px',
          regionsTips: 'AWSをサポート',
        },
        {
          name: 'Frankfurt',
          left: '51.8%',
          top: '22.6%',
          nameMarginLeft: '5px',
          nameMarginTop: '0',
          regionsTips: 'AWSとGoogle Cloudをサポート',
        },
        {
          name: 'Germany West Central',
          left: '51.6%',
          top: '23.9%',
          nameMarginLeft: '-24px',
          nameMarginTop: '18px',
          regionsTips: 'Azureをサポート',
        },
        {
          name: 'East US',
          left: '24%',
          top: '29%',
          nameMarginLeft: '5px',
          nameMarginTop: '0',
          regionsTips: 'Azureをサポート',
        },
        {
          name: 'Oregon',
          left: '15.8%',
          top: '32.3%',
          nameMarginLeft: '5px',
          nameMarginTop: '0',
          regionsTips: 'AWSとGoogle Cloudをサポート',
        },
        {
          name: 'N. Virginia',
          left: '27%',
          top: '34%',
          nameMarginLeft: '5px',
          nameMarginTop: '0',
          regionsTips: 'AWSをサポート',
        },
        {
          name: 'South Carolina',
          left: '26%',
          top: '35.4%',
          nameMarginLeft: '-20px',
          nameMarginTop: '20px',
          regionsTips: 'Google Cloudをサポート',
        },
        {
          name: 'Finland',
          left: '56.2%',
          top: '15%',
          nameMarginLeft: '5px',
          nameMarginTop: '0px',
          regionsTips: 'Google Cloudをサポート',
        },
        {
          name: 'Hong Kong',
          left: '80.6%',
          top: '41.7%',
          nameMarginLeft: '-20px',
          nameMarginTop: '16px',
          regionsTips: 'AWSをサポート',
        },
        {
          name: 'Taiwan',
          left: '82.8%',
          top: '41.8%',
          nameMarginLeft: '5px',
          nameMarginTop: '0px',
          regionsTips: 'Google Cloudをサポート',
        },
      ],
      supportRegionText: 'デプロイメント可能な地域',
    },
    'latest-news': {
      title: 'EMQX Cloudの掲示板',
      viewDetails: '詳しくはこちら',
    },
    'start-free': {
      title: '無料体験の開始',
      description: 'わずか数分で14日間の無料トライアルを開始して、より多くの機能とエクスペリエンスを探索できます。',
      quickStart: 'クイックスタート',
      quickStartLink: 'https://docs.emqx.com/en/cloud/latest/quick_start/introduction.html',
    },
  },
}
