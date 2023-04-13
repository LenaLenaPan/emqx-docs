export default {
  'emqx-terraform': {
    title: 'EMQX Terraform',
    description:
      'Terraformによって、主流のパブリッククラウドでEMQX Enterpriseクラスタを含むすべてのインフラをワンクリックで導入できます。',
    banner: {
      title: 'Terraform EMQX Module',
      summary:
        'Terraformによって、主流のパブリッククラウドでEMQX Enterpriseクラスタを含むすべてのインフラをワンクリックで導入できます。パブリッククラウド上でEMQX Enterpriseクラスタを導入する最も迅速な方法です。',
      getStared: '無料トライアル',
    },
    overview: {
      title: 'Terraformとは',
      contents:
        'Terraformは宣言式コーデイングツールで、開発者はHCL（HashiCorp構成言語）の高度な構成言語でインフラを記述し、そして、状態ファイルを通じてインフラのライフサイクルを管理することができます。それは、計算インスタンス、ストレージ、ネットワークなどの下位層のコンポーネント、DNS、LBSなどの上位層のコンポーネントが含まれます。',
    },
    benefits: {
      title: '核心価値',
      list: [
        {
          title: '高い効率',
          contents: 'ワンクリック導入は、いくつかのコマンドのみ実行し、面倒なページ操作を必要としません。',
        },
        {
          title: '統合性 ',
          contents: 'CI/CDをより容易に統合し、インフラを自動的にテストします。',
        },
        {
          title: '保守性',
          contents:
            'リソース間の依存関係を維持する必要がなく、インフラの状態を保存することができ、システム（IaC）内の各コンポーネントの変更を追跡し、他の人と共有することができます。',
        },
        {
          title: '高い信頼性',
          contents:
            'インフラが膨大な場合、リソースを誤って配置したり、間違った順序でサービスを提供したりすることが発生しやすい。 IaC（Infrastructure as Code）の助けを借りて、リソースは常に宣言どおりに供給され、構成されます。',
        },
      ],
    },
    features: {
      title: '核心機能',
      list: [
        {
          title: 'IaC',
          contents:
            'コードによってリソースの状態を維持することで、状態をバージョン管理することができ、インフラを共有することができます。',
        },
        {
          title: '実行計画',
          contents:
            'Planで実際に導入する前にチェックし、導入しようとする各コンポーネントを含むリストを生成し、このリストのチェックによってミスの発生を回避します。',
        },
        {
          title: 'リソース図',
          contents:
            '構築されたすべてのリソースのグラフは、相互依存のないリソースを並列に作成および変更できます。したがって、Terraformはインフラを効率的に構築することができ、オペレータもグラフを通じてインフラの依存関係を深く理解することができます。',
        },
        {
          title: '自動化変更',
          contents:
            '人工的なインタラクションを必要とせずに、複雑な変更セットをインフラに適用できます。前述の実行計画とリソース図を通じて、Terraformが何を変え、どの順序で変わるのかを正確に知ることができるため、多くの可能性のあるヒューマンエラーを回避することができます。',
        },
      ],
    },
    'get-started': {
      title: '今すぐ開始',
      list: [
        {
          icon: 'icon-aws',
          contents: 'Terraformを利用して、 AWSでEMQX Enterpriseをデプロイメント',
          link: 'https://github.com/emqx/terraform-emqx-emqx-aws',
          linkText: '今すぐ開始',
        },
        {
          icon: 'icon-alicloud',
          contents: 'Terraformを利用して、 アリババ・クラウドでEMQX Enterpriseをデプロイメント',
          link: 'https://github.com/emqx/terraform-emqx-emqx-alicloud',
          linkText: '今すぐ開始',
        },
        {
          icon: 'icon-azure',
          contents: 'Terraformを利用して、 AzureでEMQX Enterpriseをデプロイメント',
          link: 'https://github.com/emqx/terraform-emqx-emqx-azure',
          linkText: '今すぐ開始',
        },
        {
          icon: 'icon-gcp',
          contents: 'Terraformを利用して、 GCPでEMQX Enterpriseをデプロイメント',
          link: 'https://github.com/emqx/terraform-emqx-emqx-gcp',
          linkText: '今すぐ開始',
        },
      ],
    },
  },
}
