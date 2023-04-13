export default {
  'emqx-kubernetes-operator': {
    title: 'EMQX Kubernetes Operator',
    description:
      'EMQX Kubernetes Operatorは、Kubernetesの環境上でEMQX Enterpriseクラスタの迅速な作成および管理に役立ちます。',
    banner: {
      title: 'EMQX Kubernetes Operator',
      summary: 'KubernetesでEMQX Enterpriseクラスタを自動的に導入、構成、管理します。',
      quickStart: 'Operatorのクイックスタート',
      quickStartLink: 'https://github.com/emqx/emqx-operator/blob/main/docs/en_US/getting-started/getting-started.md',
    },
    overview: {
      title: 'EMQX Kubernetes Operatorとは何ですか。',
      contents:
        'EMQX Enterpriseは、クラウドネイティブのMQTTメッセージング・ミドルウェアです。{0}EMQXクラスタの導入と管理のプロセスを大幅に簡素化することができ、管理と構成のナレッジ要件も低くなります。導入と管理の作業を低コストで、マークアップされ、再現性のある能力に変更しています。',
      slots: [
        '当社は、Kubernetesの環境上でEMQX Enterpriseクラスタの迅速な作成と管理に役立つEMQX Kubernetes Operatorを提供しています。',
      ],
      learnMore: '詳細はこちら',
    },
    benefits: {
      title: 'EMQX Kubernetes Operatorの価値',
      list: [
        {
          title: 'EMQX Enterpriseクラスタを迅速に導入し、複雑な構成がありません',
          contents:
            'operatorとデフォルトのCustomResource構成を使用すると、Kubernetes上にEMQX Enterpriseクラスタを迅速に導入でき、MQTTサービスの体験に役立ちます。',
        },
        {
          title: 'カスタマイズされた変動スクロールに基づくEMQX Enterpriseクラスタ変更',
          contents:
            'EMQX Enterpriseクラスタを実行する際、クラスタインスタンスの構成を変更する場合、手動でインスタンスを再起動する必要がなく、サービスは中断せずに構成を更新できます。',
        },
        {
          title: 'EMQX Enterpriseの自動伸縮',
          contents:
            'より多くのデバイスにアクセスしてより複雑な業務を負荷するため、業務を中断せずにEMQX Enterpriseクラスタを拡張できます。',
        },
        {
          title: 'サービスを停止しなくても、EMQX Enterprise版へ更新可能',
          contents:
            'EMQX Operatorは、サービスを中断せずに、EMQX Enterpriseクラスタを迅速かつ安全にアップグレードでき、業務に影響をまったく与えません。',
        },
        {
          title: 'クラスタとノードの監視について、Prometheusと統合可能',
          contents:
            'EMQX OperatorはEMQXクラスタの動作に関する重要な指標を収集するとともに、これらのパフォーマンス指標をPrometheusにエクスポートし、独自の監視システムとの統合をサポートし、EMQXクラスタの動作状態をタイムリーに確認できます。',
        },
        {
          title: '公式EMQX Enterpriseコンテナミラーリングの統合',
          contents:
            '公式EMQX Enterpriseコンテナミラーリングをシームレスに統合し、開梱してすぐに使用できるようになっています。',
        },
      ],
      tryNow: '今すぐ試してみます',
      tryNowLink: 'https://github.com/emqx/emqx-operator/blob/main/docs/en_US/getting-started/getting-started.md',
    },
  },
}
