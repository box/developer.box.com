---
rank: 8
related_endpoints: []
related_pages:
  - sdks-and-tools
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/sdks
is_index: false
id: tooling/sdks/python-gen
type: guide
total_steps: 11
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/dotnet-gen
previous_page_id: tooling/sdks/typescript-gen
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/python-gen.md
fullyTranslated: true
---
# 公式サポートが終了したBoxの次世代Python SDK

<Message type="warning">

日本時間2025年9月18日をもって、Boxの次世代SDKは、個別のアーティファクトとしてサポートされなくなりました。

既存のコードは、変更しなくても引き続き動作します。Boxの次世代SDKをベースにしたアプリケーションは影響なく引き続きご利用いただけますが、新機能、更新、バグ修正は提供されなくなります。

**新機能や更新を含む、今後の開発はすべて、BoxコアSDKを通じて提供されます。スタンドアロンの生成されたアーティファクトは、BoxコアSDKのバージョン`v10`で導入されました。これは、現在、個別の[ブランチ][sdk-branch]として提供されています。**

</Message>

Boxの次世代SDKからBoxコアSDK `v10`への切り替え方法については、[移行ガイド][migration]を参照してください。

詳細については、[SDKのバージョン戦略に関するドキュメント][versioning]を参照してください。

[versioning]: g://tooling/sdks/sdk-versioning

[migration]: https://github.com/box/box-python-sdk/blob/main/migration-guides/from-box-python-sdk-gen-v1-to-box-python-sdk.md

[sdk-branch]: https://github.com/box/box-python-sdk/tree/main
