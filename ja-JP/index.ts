export default {
  index: {
    title: 'IoT向けの現代データインフラ',
    description:
      'EMQはIoT向けの現代データインフラを提供し、クラウドエッジ端末が統一されたIoTデータ「接続、移動、処理、統合」を通じて、「未来向け」のIoTソリューションの構築に役に立ちます。',
    keywords: 'MQTT、IoT、IoTアプリ、ルールエンジン、coap',
    banner: {
      new: '最新情報',
      // TODO: Need to translate the following content
      title: 'IoT向けの{0}{1}{2}',
      titleSlots: ['现代数据基础设施'],
      summary: ['云边端物联网数据「连接、移动、处理和集成」，助力企业数字化、实时化、智能化转型升级。'],
      // end
      startFree: '無料トライアル',
    },
    features: {
      title: 'EMQと共に未来を{0}',
      titleSlots: ['「接続」'],
      learnMore: '詳細はこちら',
      list: [
        {
          keyWords: '接続',
          title: '柔軟な信頼性の高いマルチプロトコル、大量のIoTデバイスへの接続',
          content:
            'オープンスタンダードのMQTTとCoAPプロトコルにより、信頼性、効率性、安全性の高い方法で{0}、IoTビジネスを着実に開始します。',
          contentSlots: ['数億のIoTデバイスを接続して'],
          link: '/solutions/iot-device-connectivity',
        },
        {
          keyWords: '移動',
          title: 'リアルタイムメッセージングエンジン、双方向データ移動と配信',
          content:
            '{0}より世界をリードするMQTTメッセージングサーバは、あらゆる場所で高性能、高信頼性でリアルタイムの双方向移動とIoTデータの配信を行っています。',
          contentSlots: ['100万レベルのスループット、ミリ秒レベルのレイテンシー'],
          link: '/solutions/reliable-mqtt-messaging',
        },
        // TODO: Need to translate the following content
        {
          keyWords: '处理',
          title: 'SQL 规则引擎，实时处理 MQTT 消息数据',
          content:
            '使用强大的基于 SQL 的规则引擎或流处理引擎，以灵活、丰富的操作实时提取、过滤、转换和处理物联网数据。',
          contentSlots: [],
          link: '/solutions/mqtt-data-processing',
        },
        {
          keyWords: '集成',
          title: '可视化编排，一站式数据与云服务集成',
          content:
            '使用开箱即用的数据桥接，只需简单点击操作就能与 40 多个云服务、数据库和企业系统无缝集成，快速构建物联网应用。',
          contentSlots: [],
          link: '/solutions/mqtt-data-integration',
        },
        // end
      ],
    },
    customers: {
      title: 'グローバル {0} 企業家のお客様からの信頼',
      titleSlots: ['400+'],
      learnMore: 'より詳しくは',
    },
    ourProducts: {
      title: 'エッジからクラウドまでの統合IoTデータ処理',
      learnMore: '詳細はこちら',
      cloud: {
        className: 'cloud',
        icon: 'icon-cloud',
        title: 'EMQX Cloud',
        summary: 'フルマネージド型MQTTメッセージングクラウドサービス',
        link: '/cloud',
      },
      enterprise: {
        className: 'enterprise',
        icon: 'icon-emqx',
        title: 'EMQX Enterprise',
        summary: 'クラウドネイティブ分散型MQTTプラットフォーム',
        link: '/products/emqx',
      },
      neuron: {
        className: 'neuron',
        icon: 'icon-neuron',
        title: 'Neuron',
        summary: '工業プロトコルゲートウェイソフトウェア',
        link: '/products/neuron',
      },
      nanomq: {
        className: 'nanomq',
        icon: 'icon-nanomq',
        title: 'NanoMQ',
        summary: '超軽量エッジMQTTメッセージングサーバー',
        link: '/products/nanomq',
      },
      mqttx: {
        className: 'mqttx',
        icon: 'icon-mqttx',
        title: 'MQTT X',
        summary: 'MQTT 5.0デスクトップとCLIクライアント',
        link: '/products/mqttx',
      },
    },
    community: {
      title: 'EMQの掲示板',
      news: 'ニュース',
      event: 'イベント',
      learn: '学習',
      learnMore: '詳しくはこちら',
    },
    getStarted: {
      title: '今すぐ開始',
      getStarted: '無料トライアル',
      contactUs: 'お問い合わせ',
    },
  },
}
