export default {
  emqx: {
    title: 'EMQXエンタープライズ版： エンタープライズクラスMQTTのIoTアクセスプラットフォーム',
    titleTemplate: '%s',
    description:
      'EMQXエンタープライズ版：「無制限の接続、任意の統合、どこでも実行可能」弾力性のある高性能IoTアクセスプラットフォーム、信頼性の高いデータ収集・伝送・処理・統合機能により、企業にとりIoT時代の重要なアプリの構築に役に立ちます。',
    keywords: 'IoT、IoTプラットフォーム、IoT、ルールエンジン、MQTT',
    navs: [
      {
        text: 'ドキュメント',
        link: 'https://docs.emqx.com/en/enterprise/latest/',
      },
      {
        text: 'ライセンス取得',
        link: '/apply-licenses/emqx',
      },
      {
        text: '料金',
        link: '/pricing?product=enterprise',
      },
    ],
    banner: {
      title: 'エンタープライズクラスMQTTのIoTアクセスプラットフォーム',
      content:
        '「無制限の接続、任意の統合、どこでも実行可能」大規模・分散型IoTアクセスプラットフォームは、信頼性が高く高性能なIoTリアルタイムデータの移動、処理、および統合を可能にし、企業にとりIoT時代の重要なアプリを迅速に構築するのに役立ちます。',
      startTrial: '無料トライアル',
      contactSales: '商品への問い合わせ',
    },
    customer: {
      title: '世界中400社の顧客から信頼されています',
    },
    why: [
      {
        title: '大規模な接続',
        content:
          '単一ノードで500万のMQTTデバイス接続をサポートし、クラスターは1億の同時MQTT接続をサポートできるように水平拡張できます。',
      },
      {
        title: '高信頼性',
        content:
          '柔軟なスケーリングで、シングルポイント障害が発生しません。組み込みRocksDBはMQTTメッセージを確実に永続化し、データの損失を防ぎます。',
      },
      {
        title: 'データセキュリティ',
        content:
          'エンドツーエンドのデータ暗号化(国家機密サポート)、細かい粒度のアクセス制御、データセキュリティの保証、および企業のコンプライアンス要件を満たします。',
      },
      {
        title: 'マルチプロトコル',
        content:
          'MQTT、HTTP、QUIC、WebSocket、LwM2M/CoAP、または専用プロトコルで接続されるあらゆるデバイスをサポートします。',
      },
      {
        title: '高性能',
        content:
          '単一のノードが、毎秒数百万のMQTTメッセージのリアルタイムの受信、処理、配信をサポートします。ミリ秒レベルのメッセージ配信遅延。',
      },
      {
        title: '運用・保守しやすい',
        content:
          'グラフィカルな設定、運用、管理で、稼働状況をリアルタイムで監視します。エンドツーエンドの問題分析のためのMQTTトレースをサポートします。',
      },
    ],
    useCases: {
      title: 'MQTTアクセスプラットフォームはさまざまな業界で広く使用されています',
      learnMore: '詳細はこちら',
      list: [
        {
          image: 'use-case-automative',
          tabName: '自動車とトラベル',
          keyword: '自動車とトラベル',
          title: 'EMQで人、自動車、道路、クラウドを接続し',
          content:
            'MQTTプロトコルを通じて、EMQのIoTインフラソフトウェアに基づいて、人、自動車、道路、およびクラウドの接続を実現します。完成車両メーカー、T1サプライヤー、アフターマーケットサービスプロバイダー、トラベルサービス会社に、インテリジェントネットワーキング、自動運転、V2X IoTインフラソリューションを提供します。',
          link: '/solutions/industries/automotive',
        },
        {
          image: 'use-case-manufacturing',
          tabName: '工業生産',
          keyword: '工業生産',
          title: '革新的なIoT技術で産業のデジタルトランスフォーメーションを強化',
          content:
            '製造業は、体系の再構築、ダイナミックな変革、パラダイムシフトの新たな段階に入っています。EMQクラウドエッジ一体化ソリューションは、生産データの相互接続を実現し、情報の孤島化を打破し、エッジデータの価値を活用し、エンタープライズクラウドエッジ端末のリアルタイムのデータ接続、移動、処理および分析を実現し、製造業のデジタル化、ネットワーク化、インテリジェント化を支援します。',
          link: '/solutions/industries/manufacturing',
        },
        {
          image: 'use-case-energy-utilities',
          tabName: 'エネルギー・電力',
          keyword: 'エネルギー・電力',
          title: 'エネルギー、データ、業務の「スリーインワン」、EMQに基づくスマートエネルギーシステムを構築',
          content:
            'EMQは、革新的な技術に基づいて信頼性の高いIoTデータインフラソフトウェアを構築し、スマートで安定した電力エネルギーIoTの構築を支援し、エネルギーフロー、データフロー、および業務フローの統合を促進し、「スリーインワン」のスマートユビキタス電力エネルギーIoTシステムに強固な基本保証を提供します。',
          link: '/solutions/industries/energy-utilities',
        },
        {
          image: 'use-case-oil-gas',
          tabName: '石油・石油化学',
          keyword: '石油・石油化学',
          title: 'EMQ IoTインフラに頼って、従来の石油・石油化学産業を復活させます',
          content:
            'EMQ IoTインフラソフトウェアを通じて、石油・石油化学産業における探査、生産、貯蔵・輸送、加工などの主要な部分に対して効率的で、安定した、安全なIoTクラウド・エッジ一体化データ収集、送信、処理、分析ソリューションを提供し、生産効率を向上させ、運用コストを削減し、最先端のIoT技術で石油・石油化学産業に新たな活力を注入します。',
          link: '/solutions/industries/oil-gas',
        },
        {
          image: 'use-case-carrier',
          tabName: '電気通信事業者',
          keyword: '電気通信事業者',
          title: '5G時代で、電気通信業界にクラウド・エッジ連携のためのIoT機能のベースを提供します',
          content:
            'EMQクラウド・エッジ連携のIoTインフラソフトウェアは、業界・ネットワークに跨って、マルチプロトコルでサポートされる数十億レベルのデバイスのアクセス機能を提供し、事業者による産業、車両のインターネット、スマートシティなどの垂直産業に向けたIoTアプリの作成や、産業のデジタルトランスフォーメーションの強化を支援します。',
          link: '/solutions/industries/carrier',
        },
        {
          image: 'use-case-transportation',
          tabName: '交通・ロジスティックス',
          keyword: '交通・ロジスティックス',
          title:
            '「人は移動が快適になり、モノは流れが最適化される」デジタル化交通ロジスティクスシステムの実現に役に立ちます',
          content:
            'EMQは、交通ロジスティクス業界向けのIoTインフラソフトウェアを提供し、都市交通、都市間高速道路、輸送・ロジスティクス、空港などの分野で、5Gベースの相互接続輸送システムを構築し、輸送モードの認識と調整を実現し、輸送効率を向上させます。',
          link: '/solutions/industries/transportation',
        },
        {
          image: 'use-case-finance-payment',
          tabName: '金融サービス',
          keyword: '金融サービス',
          title: 'EMQは、IoT技術により金融サービス業界で最善を尽くすことを可能にします',
          content:
            '個人金融業務の手続きから金融サービス企業のデジタル化変革まで、カウンター印鑑管理、スマートテールキャビネットからマートサービスステーションの構築まで、EMQはIoT技術と金融サービスを効果的に組み合わせています。',
          link: '/solutions/industries/finance-pay',
        },
        {
          image: 'use-case-ict',
          tabName: 'ICT',
          keyword: 'ICT',
          title: 'EMQは、ICT企業にIoT業務革新のエンジンを提供します',
          content:
            'EMQが提供するIoTインフラソフトウェアを通じて、ICT企業にエッジからクラウドまでのIoTデータアクセス機能、および独自の業務システムの迅速な統合機能を提供し、ICT企業が従来のIT業務を産業IoT分野へ伸ばして、新しい業務の成長に駆動力を提供します。',
          link: '/solutions/industries/ict',
        },
        {
          image: 'use-case-retail',
          tabName: '小売り',
          keyword: '小売り',
          title: 'EMQで小売業者と消費者をつなぎ、小売業の新しい変革を実現',
          content:
            'IoTが小売市場への継続的な浸透に伴い、IoTアプリは、小売業者の店舗管理機能を高めて、リソース割り当てを最適化し、顧客体験を改善し、運用コストを削減します。EMQは、完全なIoTインフラソリューションを提供し、店舗側での大量かつ多次元のデータの収集、送信、処理、分析により、小売企業の業務の洞察力を向上させ、顧客の行動と願望をより適切に分析し、新しい小売業の変革を支援します。',
          link: '/solutions/industries/retail',
        },
      ],
    },
    features: {
      learnMore: '詳細はこちら',
      tryFree: '無料トライアル',
      list: [
        {
          title: '任意のデバイスへの接続',
          content:
            '基準プロトコルMQTT、HTTP、QUIC、およびLwM2M/CoAPのオープンにより、任意のデバイスに接続します。TLS/SSLおよびX.509証明書に基づいて通信安全を確保します。',
          link: '/solutions/iot-device-connectivity',
        },
        {
          title: '信頼性の高い配信',
          content:
            '永続セッション、オフラインメッセージキュー、およびRocksDBに基づくデータ永続レイヤーにより、信頼性の低いネットワーク上でも高速で信頼性の高いデータ配信が保証されます。',
          link: '/solutions/reliable-mqtt-messaging',
        },
        {
          title: 'リアルタイムデータ処理',
          content:
            '組み込みのSQLに基づくルールエンジン、Schema Registry、メッセージコーデック、Flow Editorを使用して、IoTデータをリアルタイムで抽出、フィルター処理、および変換します。',
          link: '/solutions/mqtt-data-processing',
        },
        {
          title: 'エンタープライズデータ統合',
          content:
            'IoTデータを40以上、Kafka、AWS RDS、MongoDB、Oracle、SAP、およびシーケンシャルデータベースを含むクラウドサービスおよびエンタープライズシステムとシームレスに統合します。',
          link: '/integrations',
        },
      ],
    },
    platform: {
      title: 'プラットフォーム機能',
      list: [
        {
          icon: 'icon-development-productivity',
          title: '研究開発効率の向上',
          content: [
            'MQTT 5.0および3.x仕様と100%互換性があります。',
            'MQTT QoS 0、1、および2のメッセージングを全面的にサポートします。',
            'マルチプロトコルのアクセス：MQTT、LwM2M/CoAP、Stomp、JT808、OCPPなど。',
            '40種類以上のエンタープライズシステムと双方向データを統合しています。',
            '20以上の拡張用のフックとコールバックがあります。',
            'すべてのMQTTクライアントツールおよびSDKに適しています。',
          ],
        },
        {
          icon: 'icon-operational-excellence',
          title: '運用・保守負担の軽減',
          content: [
            'グラフィカルなリアルタイム管理と監視。',
            '統合されたログ、メトリック、およびトレース。',
            '豊富なCLIツールとHTTP APIｓ。',
            'プライベートクラウド、パブリッククラウド、ハイブリッドクラウドの導入をサポートします。',
            'メインアーキテクチャなしのクラスタにより、高可用性の保障を実現します。',
            'Kubernetes OperatorとTerraformで柔軟なDevOps自動化を実現します。',
          ],
        },
        {
          icon: 'icon-enterprise-ready',
          title: 'エンタープライズクラス保障',
          content: [
            '細かい粒度の権限管理と通信の暗号化により、エンタープライズデータのセキュリティを保障します。',
            'クラスターは数十ノードまで水平拡張でき、1億規模のデバイスアクセスを満たします。',
            '最大99.999%の可用性により、基幹業務の実行を保証します。',
            '年間サブスクリプションで、1回限りの投資の必要がないため、企業の支出を節約します',
            'グローバル範囲で24時間365日対応の技術サポート。',
            'クラウドネイティブ設計により、業務発展に合わせてどの段階でもクラウド接続に移行できます。',
          ],
        },
      ],
    },
    deploy: {
      title: 'どこでもEMQX Enterpriseを実行',
      subTitle:
        '企業内部、またはプライベートクラウド、ハイブリッドクラウド、パブリッククラウドですばやく簡単に導入可能',
      download: '無料トライアル',
      pricing: '料金',
    },
    'why-emqx': {
      title: 'Why EMQX Enterprise',
      list: [
        {
          title: 'マルチプロトコルのサポート',
          summary: 'MQTT、HTTP、QUIC、WebSocket、LwM2M/CoAP、または専用プロトコルで接続されるあらゆるデバイス。',
        },
        {
          title: 'ワンストップ・アクセス・プラットフォーム',
          summary: '大規模・分散型MQTT Brokerを強力な組み込みIoTルールエンジンと組み合わせます。',
        },
        {
          title: '基幹業務の信頼性',
          summary: '基幹業務のIoTアプリ向けに、信頼性が高く高性能なデータの移動、処理、および統合を実現します。',
        },
        {
          title: '柔軟なデータ統合',
          summary: 'IoTデータをKafka、RDS、SAPなどのエンタープライズシステムに簡単かつ柔軟に統合します。',
        },
      ],
    },
    overview: [
      {
        keyWords: '接続',
        title: '任意規模で任意デバイスを接続',
        content:
          '基準IoTプロトコルMQTT、LwM2M、およびCoAPのオープンにより、任意のデバイスを接続し、TLS/SSLおよびX.509証明書に基づく認証メカニズムにより、通信セキュリティを保証します。EMQX Enterpriseクラスターを使用すると、数千万の同時MQTT接続に簡単かつ柔軟に拡張できます。',
        slots: [],
        link: '/resources/emqx-ten-million-connections-performance-test-report',
        linkText: '詳細はこちら',
      },
      {
        keyWords: '移動',
        title: 'IoTデータをリアルタイムでどこにでも移動',
        content:
          'テレメトリデータがデバイスからクラウドに送信される場合でも、制御コマンドがクラウドからデバイスに送信される場合でも、EMQX Enterpriseは、数百万レベルの高性能、低遅延、高信頼性、リアルタイムでIoTデータを任意の場所への移動をサポートします。IoT業務における各種類のデータ移動配信の要件を満たします。',
        slots: [],
      },
      {
        keyWords: '処理',
        title: 'SQLのルールエンジンに基づいてIoTデータを処理',
        content:
          '強力な組み込みルールエンジンを使用して、デバイスと業務システム間のIoTデータをリアルタイムで抽出、フィルター、強化、および変換します。単純なSQLステートメントを作成することで、業務ニーズに応じてデータを迅速かつ柔軟に処理し、IoTアプリの開発を簡素化し、業務の提供を加速します。',
        slots: [],
      },
      {
        keyWords: '統合',
        title: 'エンタープライズシステムとの迅速かつ柔軟なローコード統合',
        content:
          '可視化のインターフェースで簡単に設定でき、SQL文に基づく{0}、コーデイングしなくてもIoTデータをKafka、さまざまなSQL/NoSQL/シーケンシャルデータベース、およびSAPなどのエンタープライズシステムと統合できるため、迅速なアプリ統合と業務イノベーションの実現に役立ちます。',
        slots: ['规则引擎和流式处理'],
      },
    ],
    benefits: {
      title: '優位性',
      list: [
        {
          title: '完全なMQTTプロトコル',
          contents: [
            'MQTT 3.xおよびMQTT 5.0プロトコル標準を全面的にサポートします',
            'QoS0、1、および2のMQTTメッセージングを全面的にサポートします',
            'すべてのMQTTクライアントとライブラリ(Eclipse Pahoなど)をサポートします',
          ],
        },
        {
          title: 'データセキュリティとプライバシー',
          contents: [
            'MQTT over TLS/SSLとQUICに基づいてデータセキュリティを確保します',
            'LDAP、JWT、PSK、X.509証明書などの複数の認証',
            'データプライバシー保護はEUのGDPR法に準拠しています',
          ],
        },
        {
          title: 'クラウドネイティブ',
          contents: ['基于 Kubernetes 云原生技术，无论是私有部署还是全托管服务，都可以一键轻松部署、监控、伸缩及升级'],
          link: '/emqx-kubernetes-operator',
        },
        {
          title: '任意の導入',
          contents: [
            '物理マシン、コンテナー/K8s、プライベート・クラウド、ハイブリッド・クラウド、パブリック・クラウド(アリババ・クラウド、ファーウェイ・クラウド、AWSなど)の任意場所で実行し、位置、ベンダーに制限されません。',
          ],
        },
        {
          title: '低い総所有コスト',
          contents: [
            'ネットワークとサーバーハードウェアリソースの効率的な利用',
            '年払いで、費用のかかる1回限りの購入は不要',
            '高い投資収益率で、総所有コストを低減します',
          ],
        },
        {
          title: 'グローバル技術サポートチーム',
          contents: [
            '北米、ヨーロッパ、日本、中国に7支店',
            'ヨーロッパ、北米、インドに10社近くのパートナー',
            '世界範囲内の24時間365日の技術サポートサービス',
          ],
        },
      ],
    },
    integrations: {
      title: '統合',
      list: [
        {
          icon: 'logo-kafka',
          text: 'Integration with Kafka and Confluent',
          link: 'https://docs.emqx.com/en/enterprise/latest/rule/bridge_kafka.html',
        },
        {
          icon: 'logo-mongodb',
          text: 'Integration with MongoDB',
          link: 'https://docs.emqx.com/en/enterprise/latest/rule/backend_mongodb.html',
        },
        {
          icon: 'logo-influxdb',
          text: 'Integration with InfluxDB',
          link: 'https://docs.emqx.com/en/enterprise/latest/rule/backend_influxdb.html',
        },
        {
          icon: 'logo-timescaledb',
          text: 'Integration with TimescaleDB',
          link: 'https://docs.emqx.com/en/enterprise/latest/rule/backend_timescaledb.html',
        },
        {
          icon: 'logo-mysql',
          text: 'Integration with RDS — MySQL',
          link: 'https://docs.emqx.com/en/enterprise/latest/rule/backend_mysql.html',
        },
        {
          icon: 'logo-postgresql',
          text: 'Integration with RDS — PostgreSQL',
          link: 'https://docs.emqx.com/en/enterprise/latest/rule/backend_pgsql.html',
        },
        {
          icon: 'logo-mariadb',
          text: 'Integration with RDS — MariaDB',
          link: 'https://docs.emqx.com/en/enterprise/latest/rule/backend_mysql.html',
        },
        {
          icon: 'logo-oracle',
          text: 'ORACLE',
          link: 'https://docs.emqx.com/en/enterprise/latest/rule/backend_oracle.html',
        },
        {
          icon: 'logo-clickhouse',
          text: 'Integration with ClickHouse',
          link: 'https://docs.emqx.com/en/enterprise/latest/rule/backend_clickhouse.html',
        },
        {
          icon: 'logo-rabbitmq',
          text: 'Integration with RabbitMQ',
          link: 'https://docs.emqx.com/en/enterprise/latest/rule/bridge_rabbitmq.html',
        },
        {
          icon: 'logo-sap',
          text: 'SAP',
          link: '',
        },
        {
          icon: 'logo-sqlserver',
          text: 'SQL SERVER',
          link: 'https://docs.emqx.com/en/enterprise/latest/rule/backend_sqlserver.html',
        },
      ],
      btn: {
        text: 'より詳しくは',
        link: '/integrations',
      },
    },
    'get-started': {
      title: '今すぐ開始',
      list: [
        {
          title: 'EMQX Enterprise',
          subTitle: 'エンタープライズクラスのプライベートデプロイで､セルフマネジメント',
          subTitleSlot: 'お見積り依頼 →',
          features: [
            'クロスプラットフォームに跨るマルチクラウドの導入',
            'クラウドネイティブの操作とメンテナンス',
            '複数のサービスとデータベースを統合します',
            '24時間365日対応のグローバルサポートチーム',
            '年間サブスクリプションにで代金支払います',
          ],
          link: '/try?product=enterprise',
          linkText: '無料トライアル',
        },
        {
          title: 'EMQX Business Critical',
          subTitle:
            '重要な応用シナリオで、マルチテナントおよびマルチクラスターに効率的なオーケストレーションおよびガバナンスサービスを提供します。',
          features: [
            'マルチクラスタのフルライフサイクル管理',
            'マルチテナント管理',
            '高可用性と災害バックアップ',
            'グローバル専門家サービス',
            '按年订阅付费',
          ],
          link: '/contact?product=emqx',
          linkText: 'お問い合わせ',
        },
        {
          title: 'EMQX Cloud',
          subTitle: 'フルマネージド型MQTTメッセージングクラウドサービス',
          subTitleSlot: '$0.18/1時間から',
          features: [
            'フルマネージド型の運用・保守と監視',
            '複数地域でデプロイメントを行います',
            '簡単なデプロイメントと管理',
            'ノンストップの容量スケーリング',
            '按量付费',
          ],
          link: '/cloud',
          linkText: 'トライアル開始',
        },
      ],
    },
    resources: {
      title: 'リソースサポート',
      list: [
        {
          image: 'docs.png',
          title: '柔軟なスケーリングIoTメッセージングプラットフォーム',
          summary: 'マウスを軽くクリックするだけで、試用版のダウンロードから一歩一歩とIoTアプリの構築を開始します。',
          link: 'https://docs.emqx.com/en/enterprise/latest/',
          linkText: 'ドキュメントの確認',
        },
        {
          image: 'partners.png',
          title: '強力なパートナーエコシステム',
          summary:
            'デバイスエンドポイントからエンタープライズシステムまで、当社のエコシステムにおいて20社以上のパートナーが、アイデアを実現し、お客様の企業にIoT業務を解き放つことに取り組んでいます。',
          link: '/partners',
          linkText: 'パートナーを募集',
        },
        {
          image: 'support.png',
          title: '専門的なサポートとサービスチーム',
          summary:
            '専門家のサポートとサービスにより、カスタマイズされたベストプラクティスのIoTソリューションを設計、導入および展開します。',
          link: '/contact?product=emqx',
          linkText: '専門家のサポートを受けられます',
        },
      ],
    },
  },
}
