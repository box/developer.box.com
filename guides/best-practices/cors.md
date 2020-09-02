---
rank: 3
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/branding-guidelines
category_id: best-practices
subcategory_id: null
is_index: false
id: best-practices/cors
type: guide
total_steps: 3
sibling_id: best-practices
parent_id: best-practices
next_page_id: best-practices
previous_page_id: best-practices/branding-guidelines
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/best-practices/cors.md
---
# クロスオリジンリソース共有

クロスオリジンリソース共有(CORS)とは、追加のHTTPヘッダーを使用して、あるオリジンで動作しているウェブアプリケーションに、別のオリジンから選択されたリソースへのアクセス権限を与えるようブラウザに指示するメカニズムです。ウェブアプリケーションは、それ自体のオリジンとは異なるオリジン(ドメイン、プロトコル、またはポート)のリソースをリクエストするときに、クロスオリジンHTTPリクエストを実行します。

Boxの場合、CORSが機能するのは、アプリケーションがブラウザ環境からBox APIにアクセスしようとするときです。Box APIでは、アプリごとにCORSを適用し、デフォルトではブラウザがリクエストを完了するための適切なHTTPヘッダーが送信されません。

<Message warning>

クロスオリジンリソース共有(CORS)は、ブラウザを使用してウェブページから送信されるBox APIリクエストのみに適用でき、ブラウザによって渡される`HTTP Origin`ヘッダーを利用します。

</Message>

## ドメインのCORSの有効化

アプリケーションが動作するドメインでCORSを有効にするには、開発者コンソールに移動して、アプリケーションを選択し、\[構成]パネルの一番の下までスクロールしてCORSドメインの設定を見つけます。

アプリケーションでのAPIリクエストの発信元になると予想されるすべてのオリジンをカンマ区切りリストとして追加します。ドメインにはスキーマ(`http`または`https`)が必要で、`*.example.com`のようにサブドメインのワイルドカードを含めることができます。

## CORSに類似したエラー

ブラウザによっては、CORSがアプリケーションに対して有効になっている場合でも、CORSに類似したエラーが返されることがあります。

そのような場合は、HTTP応答コード(`400`や`401`など)が含まれることがよくあり、トラブルシューティングの際に注目すべき方向が示されます。
