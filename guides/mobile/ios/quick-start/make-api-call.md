---
type: quick-start
hide_in_page_nav: true
category_id: mobile
subcategory_id: mobile/ios
is_index: false
id: mobile/ios/quick-start/make-api-call
rank: 4
total_steps: 5
sibling_id: mobile/ios/quick-start
parent_id: mobile/ios/quick-start
next_page_id: mobile/ios/quick-start/next-steps
previous_page_id: mobile/ios/quick-start/configure-box-app
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/mobile/ios/quick-start/4-make-api-call.md
---
# API呼び出しの実行

BoxアプリケーションとiOSアプリケーションが**Box iOS SDK**を使用して作成、設定されたら、初めてのBox API呼び出しを実行できるようになります。

空のiOSアプリケーションを使用して、現在認証されているユーザーの名前を取得するためのリクエストをBoxに対してトリガーするボタンを作成します。

<Message warning>

これらの例で使用されているブロックアクションを使用した場合、処理は遅くなります。本番アプリでは、これらのブロックアクションを適切なタスク委任アクションやブロック以外のアクションに置き換える必要があります。

</Message>

## ボタンの作成

XcodeのSwiftアプリケーション内で、`ContentView.swift`を読み込みます。ファイルの先頭に`ContentView`の`struct`が表示されます。その中には、アプリをエミュレータで実行した場合にiOSアプリケーションに出力される基本の文字列があります。

```swift
import SwiftUI

struct ContentView: View {
  var body: some View {
    Text("Hello, World!")
  }
}
```

最初に、現在のユーザーを取得するための呼び出しをトリガーできるように、`Text`の出力行をボタンに置き換えます。その行を以下のボタンに置き換えます。

```swift
Button(action: {
  // Perform some action
}) {
  Text("Click to get current user")
}
.padding(10)
.cornerRadius(20)
.foregroundColor(.white)
.background(Color.blue)
```

次の手順では、Boxからユーザーの詳細を取得するアクションをボタンに追加します。

## API呼び出しのボタンアクションの追加

ユーザーがボタンをクリックしたときに、ユーザーの詳細が取得されるようにします。そのためには、**Box iOS SDK**のインポートを追加することと呼び出しを実行するボタンアクションを追加することという2つの処理が必要です。

`ContentView.swift`ファイルの先頭に、他のimportステートメントとともに`import BoxSDK`を追加します。

次に、現在はコメントのプレースホルダがあるボタンアクション内に、現在のユーザーを取得するためのiOS SDKへの呼び出しを追加します。API呼び出しが完了すると、開発者コンソールに認証メッセージが出力されます。実装を容易にするため、処理をブロックする`sleep(5)`呼び出しを配置しています。これは、リクエストが完了するのに十分な時間をとることで、Box iOS SDKから呼び出しを実行できるかどうかをテストするためです。

`{{YOUR DEVELOPER TOKEN}}`を実際の開発者トークンに置き換えます。

```swift
let client = BoxSDK.getClient(token: "{{YOUR DEVELOPER TOKEN}}")

client.users.getCurrent(fields:["name", "login"]) { (result: Result<User,
  BoxSDKError>) in
  guard case let .success(user) = result else {
      print("Error getting user information")
      return
  }
  print("Authenticated as \(user.name)")
}

sleep(5)
```

iOSエミュレータでサンプルアプリケーションをビルドして実行します。

<Message warning>

最後の手順で開発者トークンを作成してから1時間以上後にこのコードを実行する場合、開発者トークンは60分間しか保持されないため、[前の手順](g://mobile/ios/quick-start/configure-box-app/)と同じ方法を使用して、開発者トークンを取り消して新たに生成する必要があります。

</Message>

アプリケーションがエミュレータに読み込まれると、作成したボタンが表示されます。そのボタンをクリックしてAPIリクエストを開始します。

Xcodeの開発者コンソール内にAPIリクエストと応答が表示されます。最後の行には、指定したユーザーのprintステートメントが表示されています。

```bash
◁ Status code: 200: no error
◁ Headers: 
    ◁ Cache-Control, Value: no-cache, no-store
    ◁ BOX-REQUEST-ID, Value: 1c55151238444132eca16b4c2346d005
    ◁ Transfer-Encoding, Value: Identity
    ◁ content-type, Value: application/json
    ◁ Connection, Value: keep-alive
    ◁ Strict-Transport-Security, Value: max-age=31536000
◁ Body: {"type":"user","id":"123456789","name":"Test
          User","login":"testuser@test.com"}

Authenticated as Optional("Test User")
```

<Message notice>

Xcodeの開発者コンソールが表示されない場合は、メニューから\[**View**] -> \[**Debug Area**] -> \[**Activate Console**]をクリックします。

</Message>

これで、**Box iOS SDK**の設定が完了し、Box APIへの最初の呼び出しを実行できました。

## まとめ

* 空のiOSアプリケーションにボタンを追加しました。
* iOS SDKを使用して現在のユーザーを取得するリクエストを追加しました。

<Next>

API呼び出しが完了しました

</Next>
