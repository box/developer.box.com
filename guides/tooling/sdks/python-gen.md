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

**All future development, including new features and updates, will be delivered through the Box core SDKs. The standalone generated artifact was introduced in the version `v10` of the Box core SDKs, and it is currently available as a separate [branch][sdk-branch].**

</Message>

Check the [migration guide][migration] to learn how to switch from the Box Next Generation SDK to the Box core SDK `v10`.

詳細については、[SDKのバージョン戦略に関するドキュメント][versioning]を参照してください。

[versioning]: g://tooling/sdks/sdk-versioning

[migration]: https://github.com/box/box-python-sdk/blob/sdk-gen/migration-guides/from-box-python-sdk-gen-v1-to-box-python-sdk.md

[sdk-branch]: https://github.com/box/box-python-sdk/tree/sdk-gen
