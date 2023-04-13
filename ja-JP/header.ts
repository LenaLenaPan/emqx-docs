export default {
  header: {
    signIn: 'ログイン',
    account: 'マイアカウント',
    cloudConsole: 'EMQXクラウドコンソール',
    xmeterConsole: 'Xmeterクラウドコンソール',
    applyEMQXLicense: 'EMQXライセンス申請',
    applyNeuronLicense: 'Neuronライセンス申請',
    userSetting: 'ユーザー設定',
    signOut: 'ログアウト',
    pricing: '料金',
    contact: 'お問い合わせ',
    tryFree: {
      title: '無料トライアル',
      link: '/try?product=cloud',
    },
    navs: ['製品', 'ソリューション', '資料', 'コミュニティ', '会社'],
    panels: {
      products: {
        cloud: {
          icon: 'icon-cloud',
          link: '/cloud',
          text: 'クラウドサービス EMQX Cloud',
          list: [
            {
              text: 'Serverlessタイプ',
              link: '/cloud/serverless-mqtt',
            },
            {
              text: '専用タイプ',
              link: '/cloud/dedicated',
            },
            {
              text: 'BYOCタイプ (Bring Your Own Cloud)',
              link: '/cloud/byoc',
            },
            {
              text: '料金',
              link: '/cloud/pricing',
            },
          ],
          signIn: '登録',
          console: 'コンソール',
        },
        enterprise: {
          icon: 'icon-emqx',
          link: '/products/emqx',
          text: 'プライベート EMQX Enterprise',
          list: [
            { text: 'Kubernetes Operator', link: '/emqx-kubernetes-operator' },
            { text: 'EMQX Terraform', link: '/emqx-terraform' },
            { text: '展開方式', link: '/deployments' },
            { text: '無料トライアル', link: '/try?product=enterprise' },
          ],
        },
        integrations: {
          title: '統合',
          link: '/integrations',
        },
        sdks: {
          title: 'SDKs',
          link: '/mqtt-client-sdk',
        },
        edgeComputing: 'エッジコンピューティング',
        serviceTools: 'ツール',
        learnMore: '詳細はこちら',
      },
      solutions: {
        byTechnologies: {
          title: '技術別',
          list: [
            {
              icon: 'icon-connect',
              link: '/solutions/iot-device-connectivity',
              title: '接続',
              description: '大規模デバイスへのアクセス',
            },
            {
              icon: 'icon-move',
              link: '/solutions/reliable-mqtt-messaging',
              title: '移動',
              description: 'リアルタイムメッセージングエンジン',
            },
            {
              icon: 'icon-process',
              link: '/solutions/mqtt-data-processing',
              title: '処理',
              description: 'メッセージルールのエンジン',
            },
            {
              icon: 'icon-integrate',
              link: '/solutions/mqtt-data-integration',
              title: 'Integrate',
              description: 'Out of Box Data Integration',
            },
          ],
        },
        byIndustries: {
          title: '業界別',
          allIndustry: 'すべての業界',
          list: [
            {
              link: '/solutions/industries/automotive',
              title: '自動車とトラベル',
            },
            {
              link: '/solutions/industries/manufacturing',
              title: '工業生産',
            },
            {
              link: '/solutions/industries/energy-utilities',
              title: 'エネルギー・電力',
            },
            {
              link: '/solutions/industries/oil-gas',
              title: '石油・石油化学',
            },
            {
              link: '/solutions/industries/carrier',
              title: '電気通信事業者',
            },
            {
              link: '/solutions/industries/transportation',
              title: '交通・ロジスティックス',
            },
            {
              link: '/solutions/industries/finance-pay',
              title: '金融サービス',
            },
            {
              link: '/solutions/industries/ict',
              title: 'ICT',
            },
            {
              link: '/solutions/industries/retail',
              title: '小売り',
            },
          ],
        },
        byUseCases: {
          title: '適用シナリオ別',
          allUseCases: 'すべての適用シナリオ',
          list: [
            {
              link: '/use-cases/confluent-kafka',
              title: 'Confluent/Kafka',
            },
            {
              link: '/use-cases/mqtt-sparkplug',
              title: 'MQTT Sparkplug',
            },
            {
              link: '/use-cases/mqtt-security',
              title: 'MQTTセキュリティ',
            },
            {
              link: '/use-cases/smart-cockpit',
              title: 'スマートコックピット',
            },
            {
              link: '/use-cases/internet-of-vehicles',
              title: 'IoV',
            },
            {
              link: '/use-cases/v2x',
              title: 'V2X　路車協調',
            },
            {
              link: '/use-cases/industrial-iot',
              title: '産業用インターネット',
            },
            {
              link: '/use-cases/construction-machinery-iot',
              title: '建設機械IoT',
            },
            {
              link: '/use-cases/smart-grid',
              title: '電力IoT',
            },
            {
              link: '/use-cases/smart-bank',
              title: 'スマート銀行',
            },
            {
              link: '/use-cases/oil-extraction-transportation',
              title: '石油の採掘と貯蔵・輸送',
            },
            {
              link: '/use-cases/new-energy',
              title: '新エネルギー発電・蓄エネ',
            },
            {
              link: '/use-cases/smart-water',
              title: 'スマート水道業務',
            },
            {
              link: '/use-cases/smart-parking',
              title: 'スマート駐車場',
            },
            {
              link: '/use-cases/digital-twin',
              title: 'デジタルツイン',
            },
            // {
            //   link: '/use-cases/aiot',
            //   title: 'AIoT',
            // },
          ],
        },
        customerStories: {
          title: 'お客様の成功事例',
          allCustomerStories: 'すべてのお客様の成功事例',
          // TODO: Need to translate the following content
          list: [
            {
              link: '/customers/saic-volkswagen',
              title: 'SAIC Volkswagen',
            },
            {
              link: '/customers/sgitg-sgcc',
              title: 'SGITG',
            },
            {
              link: '/customers/china-telecom',
              title: 'E-Surfing',
            },
            // {
            //   link: '/customers/rising',
            //   title: 'SANY Rising',
            // },
            {
              link: '/customers/ev-power',
              title: 'EV Power',
            },
          ],
          // TODO: end
        },
      },
      community: {
        list: [
          {
            icon: 'icon-community',
            link: '/community',
            title: '概要',
            description: '多くのIoT愛好家と一緒に交流',
          },
          // TODO: Need to translate the following content
          {
            icon: 'icon-forums',
            link: '/community#get-help',
            title: 'Forums',
            description: 'Community Discussion Forums',
          },
          // TODO: end
          {
            icon: 'icon-events',
            link: '/events',
            title: 'イベント',
            description: '無料の技術イベント情報の入手',
          },
          {
            icon: 'icon-groups',
            link: 'https://www.meetup.com/pro/eugs',
            title: 'グループ',
            description: 'お住まいの地域のEMQユーザーとエンジニアに面会',
          },
        ],
      },
      learn: {
        docs: {
          title: 'ドキュメント',
          enterprise: 'EMQX Enterprise',
          cloud: 'EMQX Cloud',
          emqx: 'EMQX',
          neuron: 'Neuron',
          nanomq: 'NanoMQ',
          ekuiper: 'eKuiper',
          emqxKubernetes: 'EMQX on Kubernetes',
          enterpriseList: [
            { text: '使用開始', link: 'https://docs.emqx.com/en/enterprise/latest/getting-started/install-ee.html' },
            { text: 'サービス統合', link: 'https://docs.emqx.com/en/enterprise/latest/rule/rule-engine.html' },
            { text: 'SDKs', link: 'https://docs.emqx.com/en/enterprise/latest/development/client.html' },
            { text: 'FAQ', link: 'https://docs.emqx.com/en/enterprise/latest/faq/faq.html' },
          ],
          cloudList: [
            { text: 'クイックスタート', link: 'https://docs.emqx.com/en/cloud/latest/quick_start/introduction.html' },
            {
              text: 'デプロイメントの作成',
              link: 'https://docs.emqx.com/en/cloud/latest/create/overview.html',
            },
            {
              text: 'デプロイメントの接続',
              link: 'https://docs.emqx.com/en/cloud/latest/connect_to_deployments/overview.html',
            },
            { text: 'FAQ', link: 'https://docs.emqx.com/en/cloud/latest/faq/normal_a.html' },
          ],
        },
        title: '資料',
        list: [
          {
            list: [
              {
                link: '/blog',
                title: 'ブログ',
              },
              {
                link: '/resources?type=videos',
                title: '映像',
              },
              {
                link: '/resources?type=presentations',
                title: 'スライドショー',
              },
              {
                link: '/resources?type=white-papers',
                title: 'ホワイトペーパー',
              },
              {
                link: '/resources?type=reports',
                title: '試験報告書',
              },
              {
                link: '/training',
                title: 'トレーニング',
              },
            ],
          },
          {
            list: [
              {
                link: '/mqtt',
                title: 'MQTT導入とプライムコスト',
              },
              {
                link: '/mqtt/mqtt5',
                title: 'MQTT 5探究',
              },
              {
                link: '/mqtt/public-mqtt5-broker',
                title: 'MQTTパブリックサーバー',
              },
              {
                link: 'https://mqttx.app/web',
                title: 'MQTTオンラインクライアント',
              },
              {
                link: 'https://github.com/emqx/emqtt-bench',
                title: 'MQTT Bench',
              },
              {
                link: '/products/xmeter/jmeter-mqtt',
                title: 'JMeter MQTT',
              },
            ],
          },
        ],
      },
      company: {
        list: [
          {
            title: '会社',
            list: [
              {
                icon: 'icon-about',
                link: '/about',
                title: '企業情報',
              },
              {
                icon: 'icon-news',
                link: '/news',
                title: 'ニュースリリース',
              },
              {
                icon: 'icon-events',
                link: '/events',
                title: 'イベント情報',
              },
              {
                icon: 'icon-careers',
                link: 'https://www.emqx.com/en/careers',
                title: '採用情報',
              },
            ],
          },
          {
            title: 'サポートとサービス',
            list: [
              {
                icon: 'icon-support',
                link: '/support',
                title: '技術サポート',
              },
              {
                icon: 'icon-consulting',
                link: '/consulting',
                title: '問い合わせ',
              },
              {
                icon: 'icon-contact',
                link: '/contact',
                title: 'お問い合わせ',
              },
            ],
          },
          {
            title: 'パートナー',
            list: [
              {
                icon: 'icon-partner-overview',
                link: '/partners',
                title: '概要',
              },
              {
                icon: 'icon-find-partner',
                link: '/partners/list',
                title: 'パートナーを募集',
              },
              {
                icon: 'icon-become-partner',
                link: '/apply-partners',
                title: 'パートナーとなります',
              },
            ],
          },
        ],
        promo: {
          title: 'At EMQ, We Code the Future',
          buttonTitle: 'EMQに参加',
          link: '/careers',
        },
      },
    },
  },
}
