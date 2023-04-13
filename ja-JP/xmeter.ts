export default {
  xmeter: {
    title: 'XMeter：フルマネージド型MQTT負荷テストクラウドサービス',
    description:
      'Xmeterは、IoT向けの大規模・継続性能テストクラウドプラットフォームで、JMeterスクリプトと完全に互換性があり、MQTT、LwM2M/CoAPなどのIoTプロトコルテストをサポートします。',
    navs: [
      {
        text: '使用方法',
        link: '#how-it-works',
      },
      {
        text: '料金',
        link: '#pricing',
      },
      {
        text: 'ドキュメント',
        link: 'https://docs.emqx.com/zh/xmeter-cloud/latest/',
      },
    ],
    banner: {
      title: 'フルマネージド型MQTT負荷テストクラウドサービス',
      content: ['基于 JMeter，运行 MQTT 负载和场景测试最简单、最快速的方法。'],
      tryFree: '無料トライアル',
      startTrial: '無料トライアル',
      contact: 'お問い合わせ',
    },
    'why-xmeter': {
      title: 'Why XMeter',
      list: [
        { title: 'フルマネージド型', summary: '一键发起 MQTT 性能测试，无需手动部署测试资源' },
        { title: 'JMeter', summary: '基于 Apache JMeter 开源项目，完全兼容 JMeter 测试脚本' },
        { title: 'MQTT & IoT ', summary: '专为 IoT 应用设计开发，100% 支持 MQTT协议测试，并支持其他 IoT 协议测试' },
        { title: '使用しやすい', summary: '仅需 3 步完成 MQTT 测试配置，免除编写场景脚本的负担' },
        { title: '必要に応じて支払います', summary: '按使用的测试机规模与消息流量收费，成本清晰可控' },
        { title: 'コストが低い', summary: '测试资源云上按需创建，测试环境高度自动化，节省大量时间和人力成本' },
      ],
    },
    'how-it-works': {
      title: 'XMeter Cloudの使用方法',
      subTitle:
        '3つのステップでMQTTテスト構成を完了し、ワンクリックで性能テストを開始し、リアルタイムで可視化テストデータを確認します。',
      list: [
        {
          title: 'テストの新規作成',
          contents:
            'MQTTサーバへの接続情報を設定し、テストシナリオを簡単に選択し、テストスクリプトを作成する必要がありません。',
        },
        {
          title: 'テストの開始',
          contents:
            'ワンクリックで性能試験を投入し、しばらく待てばテストを開始し、テストリソースが自動的に作成され、追加導入を必要としません。',
        },
        {
          title: '報告書の確認',
          contents:
            '一目瞭然のグラフィカルな試験報告書をリアルタイムで確認し、テストが完了してからいつでも完全な報告書をダウンロードできます。',
        },
      ],
    },
    pricing: {
      title: 'XMeter Cloud料金プラン',
      standard: {
        title: 'ベーシック版',
        price: '分単位の課金：<span class="value">$4.90 </span>/ 分',
        startTrial: '無料トライアル',
        list: [
          'パブリックネットワークテストをサポート',
          '最大1000接続',
          '最大1秒あたり1000メッセージ・スループット',
          '8/5 技术支持',
        ],
      },
      professional: {
        title: 'プロフェッショナル版',
        desc: '大規模・継続性能テストサービス',
        contact: 'お問い合わせ',
        list: [
          'プライベートネットワークテストをサポート',
          '接続数の制限なし',
          'メッセージ・スループットの制限なし',
          '24/7 テクニカルサポート',
        ],
      },
    },
    resources: {
      title: 'リソース',
      learnMore: '詳しくはこちら',
      viewMore: 'より詳しくは',
      list: [
        {
          title: 'EMQX単一ノードメッセージ・スループット性能試験報告書',
          summary: 'EMQX単一ノードの10万同時接続をテストし、20万QoS 1メッセージ・スループットをサポートします。',
          link: 'https://xmeter-cloud.emqx.com/commercialPage.html#/collaboration_reports/928993483/monitor',
        },
        {
          title: 'EMQX Redisストレージ性能試験報告書',
          summary: 'EMQX単一ノードの秒あたり10万QoS 1メッセージをRedisへ持続化することをテストします。',
          link: 'https://xmeter-cloud.emqx.com/commercialPage.html#/collaboration_reports/2018711323/monitor',
        },
        {
          title: 'EMQX PostgreSQLストレージ性能試験報告書',
          summary: 'EMQX単一ノードの秒あたり10万QoS 1メッセージをPostgreSQLへ持続化することをテストします。',
          link: 'https://xmeter-cloud.emqx.com/commercialPage.html#/collaboration_reports/518609441/monitor',
        },
        {
          title: 'EMQX TimescaleDBストレージ性能試験報告書',
          summary: 'EMQX単一ノードの秒あたり10万QoS 1メッセージをTimescaleDBへ持続化することをテストします。',
          link: 'https://xmeter-cloud.emqx.com/commercialPage.html#/collaboration_reports/1707714407/monitor',
        },
        {
          title: 'EMQX MySQL性能試験報告書',
          summary: 'EMQX単一ノードの秒あたり5万QoS 1メッセージをMySQLへ持続化することをテストします',
          link: 'https://xmeter-cloud.emqx.com/commercialPage.html#/collaboration_reports/661839116/monitor',
        },
        {
          title: 'EMQXブリッジKafka性能試験報告書',
          summary: 'EMQX単一ノードの秒あたり10万QoS 1メッセージをKafkaクラスタへブリッジします',
          link: 'https://xmeter-cloud.emqx.com/commercialPage.html#/collaboration_reports/1088550014/monitor',
        },
      ],
    },
    startNow: {
      title: '今すぐ開始',
      startTrial: '無料トライアル',
      contactUs: 'お問い合わせ',
    },
  },
}
