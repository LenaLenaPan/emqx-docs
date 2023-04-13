export default {
  mqttx: {
    title: 'MQTTクライアントでMQTTサービスの快速テスト',
    description:
      'MQTT Xは、MQTTの学習、探索、開発、テストを迅速かつ簡単にさせるための強力なクロスプラットフォームMQTT 5.0デスクトップとCLIクライアントです。',
    keywords: 'MQTT X、オープンソース、オープンソースソフトウェア、MQTTプロトコル、MQTTサーバ',
    navs: [
      {
        text: 'Why MQTT X',
        link: '#features',
      },
      {
        text: 'MQTTサーバの準備',
        link: '#broker-ready',
      },
      {
        text: 'EMQXへの接続テスト',
        link: '#use-mqttx',
      },
      {
        text: '今すぐ開始',
        link: '#get-started',
      },
    ],
    banner: {
      title: 'MQTT 5.0クライアントツール',
      summary:
        'MQTT Xは、MQTTの学習、探索、開発を迅速かつ簡単にさせるための強力なクロスプラットフォームMQTT 5.0デスクトップとCLIクライアントです。',
      download: '今すぐダウンロード',
    },
    features: {
      title: 'なぜMQTT Xを使用しますか',
      list: [
        {
          icon: 'icon-features-1',
          title: 'MQTT 5.0プロトコルをサポート',
          contents: 'MQTT v5.0およびMQTT v3.1.1をサポート',
        },
        {
          icon: 'icon-features-2',
          title: 'WebSocket',
          contents: 'WebSocketでMQTTサーバへの接続をサポート ',
        },
        {
          icon: 'icon-features-3',
          title: 'クロスプラットフォーム',
          contents: 'Windows、macOS、LinuxなどのOSをサポート',
        },
        {
          icon: 'icon-features-4',
          title: 'スクリプト',
          contents: 'カスタマイズされたスクリプトでテストデータをシミュレーション',
        },
      ],
    },
    'broker-ready': {
      title: 'MQTTサーバの準備',
      list: [
        {
          icon: 'icon-cloud',
          title: 'EMQX Cloud',
          summary: 'わずか数分でMQTTサービスを新規作成します。',
          link: '/try?product=cloud',
          linkText: '14日間無料トライアル',
        },
        {
          icon: 'icon-mqtt5',
          title: 'オンラインMQTT 5サーバ',
          summary: '学習やテストに用いられるパブリックなオンラインMQTTサービスです。',
          link: '/mqtt/public-mqtt5-broker',
          linkText: '詳細はこちら',
        },
      ],
    },
    'use-mqttx': {
      title: 'どうやってEMQXへの接続テストを行いますか',
      learnMore: '詳細はこちら',
      list: [
        {
          image: 'connect.png',
          title: '接続',
          contents: '新規作成すれば接続：新規作成ページを開いてすばやく構成して保存すれば、MQTTサーバに接続可能です。',
          link: 'https://mqttx.app/docs#quickly-establish-a-connection',
        },
        {
          image: 'subscribe.png',
          title: 'サブスクリプション',
          contents:
            '複数トピックのサブスクライブ：接続すると、複数のトピックをすばやくサブスクライブでき、サブスクライブされたトピックの異なる色で標記をサポートします。',
          link: 'https://mqttx.app/docs#publish-and-subscription',
        },
        {
          title: 'パブリッシュ',
          contents:
            'メッセージボックスの編集モード：受信、配布メッセージが一目瞭然で、JSON、Base64、HexなどのPayloadフォーマットをサポートし、ワンクリックでパブリッシュ可能です。',
          link: 'https://mqttx.app/docs#publish-and-subscription',
        },
      ],
    },
    'get-started': {
      title: '今すぐ開始',
      downloadMQTTX: 'MQTT Xのダウンロード',
      tryCloud: 'EMQX Cloudのトライアル',
    },
  },
}
