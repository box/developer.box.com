---
type: quick-start
hide_in_page_nav: true
category_id: collaborations
subcategory_id: collaborations/connect-slack-to-group-collabs
is_index: false
id: collaborations/connect-slack-to-group-collabs/handle-slack-events
rank: 4
total_steps: 6
sibling_id: collaborations/connect-slack-to-group-collabs
parent_id: collaborations/connect-slack-to-group-collabs
next_page_id: collaborations/connect-slack-to-group-collabs/connect-box-functions
previous_page_id: collaborations/connect-slack-to-group-collabs/scaffold-application-code
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/connect-slack-to-group-collabs/4-handle-slack-events.md
fullyTranslated: true
---
# Slackイベントの処理

アプリケーションのスキャフォールドを設定したら、次に、User Eventの処理機能と、Slackから送信されるスラッシュコマンドの処理機能を構築します。最終的に、これらの機能はそれぞれBox APIエンドポイントに渡されて、グループおよびコンテンツのコラボレーションタスクを実行します。

この手順では、直前の手順で作成した空の関数を拡張します。これらの関数では、以下のタスクを実行します。

* Slackからの新しいイベントとスラッシュコマンドをリッスンする
* これらのイベントとコマンドを処理して適切な関数に送る
* ボットが初めてチャンネルに追加されたときにBoxグループに追加されるようにチャンネル内のすべてのSlackユーザーを処理する
* Slackユーザーのプロフィール情報を取得してそのメールアドレスを取得する

## Slackイベントのリッスン

Slackアプリケーションを構成したときに、3つのイベントのアプリケーションコードにイベントを送信するようSlackアプリケーションに指示しました。

* ユーザーがチャンネルに参加したとき。
* ユーザーがチャンネルから退出したとき。
* ユーザーが`/boxadd`スラッシュコマンドを入力したとき。

このアプリケーションには、Slackからのこれらのメッセージをリッスンする公開ルートが必要です。このメッセージのペイロードは、次のようになります。

<Tabs>

<Tab title="「/boxadd」コマンド">

```json
{
  "token": "cF1PwB1eIMcRHZWwFHJR1tgs",
  "team_id": "T932DQSV12P",
  "team_domain": "slacktest",
  "channel_id": "C078N43MFHU",
  "channel_name": "bottest",
  "user_id": "U016JCDPN56",
  "user_name": "testuser",
  "command": "/boxadd",
  "text": "file 123456",
  "response_url": "https://hooks.slack.com/commands/T541DQSV12P/3977594927231/ankvsRb42WKnKPRp002FeyTx",
  "trigger_id": "1189442196855.1183332180295.cca20c3ca1ea193dab432ad8e9e95431"
}

```

</Tab>

<Tab title="「member_joined_channel」イベント">

```json
{
  "token": "cF1PwB1eIMcRHZWwFHJR1tgs",
  "team_id": "T932DQSV12P",
  "api_app_id": "A321V573PQT",
  "event": {
    "type": "member_joined_channel",
    "user": "U0431JM4RLZ",
    "channel": "C078N43MFHU",
    "channel_type": "C",
    "team": "T932DQSV12P",
    "inviter": "U016JCDPN56",
    "event_ts": "1592858788.000700"
  },
  "type": "event_callback",
  "event_id": "Ev032NRJYASJ",
  "event_time": 1592858788,
  "authed_users": [ "U0431JM4RLZ" ]
}

```

</Tab>

<Tab title="「member_left_channel」イベント">

```json
{
  "token": "cF1PwB1eIMcRHZWwFHJR1tgs",
  "team_id": "T932DQSV12P",
  "api_app_id": "A321V573PQT",
  "event": {
    "type": "member_left_channel",
    "user": "U0431JM4RLZ",
    "channel": "C078N43MFHU",
    "channel_type": "C",
    "team": "T932DQSV12P",
    "event_ts": "1593033236.000600"
  },
  "type": "event_callback",
  "event_id": "Ev032NRJYASJ",
  "event_time": 1593033236,
  "authed_users": [ "U0431JM4RLZ" ]
}

```

</Tab>

</Tabs>

<Choice option="programming.platform" value="node" color="none">

これらのイベントの処理を開始するには、任意のエディタに`process.js`を読み込み、`app.post("/event" ...`リスナーを次の内容に置き換えます。

```js
app.post("/event", (req, res) => {
    if (req.body.token !== slackConfig.verificationToken) {
        res.send("Slack Verification Failed");
    }

    handler.process(res, req.body);
});

```

イベントが成功すると、リスナーではSlackアプリケーションからの確認トークンを使用して、メッセージがSlackから届いたことを確認します。メッセージが有効なリクエストであれば、イベントペイロードがイベント処理関数に送信されます。

</Choice>

<Choice option="programming.platform" value="java" color="none">

任意のエディタに`Application.java`を読み込み、`@PostMapping("/event")`ブロックを次の内容に置き換えます。

```java
@PostMapping("/event")
@ResponseBody
public void handleEvent(@RequestBody String data, @RequestHeader("Content-Type") String contentType, HttpServletResponse response) throws Exception {
    int code = HttpServletResponse.SC_OK;
    java.io.PrintWriter wr = response.getWriter();
    response.setStatus(code);

    if (contentType.startsWith(MediaType.APPLICATION_JSON_VALUE)) {
        wr.write("Adding content to group");
    } else {
        wr.print(response);
    }

    wr.flush();
    wr.close();

    if (! contentType.startsWith(MediaType.APPLICATION_JSON_VALUE)) {
        JSONObject returnJSON = new JSONObject();
        String[] inputParts = data.split("&");

        for (String part: inputParts) {
            String[] keyval = part.split("=");

            try {
                keyval[1] = java.net.URLDecoder.decode(keyval[1], StandardCharsets.UTF_8.name());
            } catch (UnsupportedEncodingException e) {
                System.err.println(e);
            }

            returnJSON.put(keyval[0], keyval[1]);
        }

        data = returnJSON.toString();
    }

    processEvent(data);
}

```

イベントが成功すると、ハンドラは、コードを処理する前に、直ちにHTTP200レスポンスを返します。スラッシュコマンドはURLでエンコードされた文字列として送信されるのに対し、メンバーの参加/退出イベントはJSONとして送信されます。スラッシュコマンドが検出されると、処理中のメッセージで応答します。それ以外の場合は、`HttpServletResponse`レスポンスを送信します。

<Message type="notice">

この例では、イベントがすべて処理される前に`HTTP 200`レスポンスが送信されます。その理由は、Slackではイベントの送信後3秒以内にレスポンスを必要とするためです。コードの実行時間が3秒を超える場合は、重複したイベントがSlackによって送信されます。

</Message>

イベント処理を容易にするには、すべてのイベントオブジェクトをJSONに標準化します。コンテンツタイプがJSONでない場合は、URLでエンコードされた文字列になります。それが検出されると、その文字列は、JSONオブジェクトに変換されてから`processEvent`に送信されます。

`processEvent`を以下の内容に置き換えます。

```java
@Async
public void processEvent(String data) throws Exception {
    Object dataObj = new JSONParser().parse(data);
    JSONObject inputJSON = (JSONObject) dataObj;
    String token = (String) inputJSON.get("token");

    if (token.equals(slackConfig.verificationToken)) {
        // INSTANTIATE BOX CLIENT

        process(inputJSON);
    } else {
        System.err.println("Invalid event source");
    }
}

```

このメソッドは、JSONイベント文字列をJSONオブジェクトに変換した後、確認トークンを比較して、イベントがSlackから送信されたかどうかを確認します。有効な場合は、イベントが`process`に転送されます。

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

## Slackイベントの処理

次に、受信したイベントを判定し、アプリケーションの適切な機能にそのイベントを渡します。

<Choice option="programming.platform" value="node" color="none">

`process`関数を次の内容に置き換えます。

```js
function process(res, data) {
    if (data.type && data.type === "event_callback") {
        const eventType = data.event.type;
        const channel = data.event.channel;
        const userId = data.event.user;

        getSlackUser(userId, function (user) {
            processUser(user, eventType, channel);
        });

        res.send();
    } else if (data.command && data.command === "/boxadd") {
        const [itemType, itemId] = data.text.split(" ");
        if (["file", "folder"].includes(itemType) && !isNaN(itemId)) {
            const userId = data.user_id;

            getSlackUser(userId, function (user) {
                processContent(user, data.channel_id, itemType, itemId);
            });
            res.send("Adding content");
        } else {
            res.send("Invalid input. Example usage: /boxadd file 123456");
        }
    } else {
        res.send("Invalid action");
    }
}

```

この関数の目的は、SlackからのペイロードがUser Eventとスラッシュコマンドのどちらであるかを判断し、必要な情報をすべて取得して、結果を処理するために適切な関数に転送することです。

ペイロードがUser Eventの場合 (`event_callback`に設定されている`data.type`によって示されます)、いくつかの情報を抽出します。

* `eventType`: ユーザーがチャンネルから退出する (`member_left_channel`) かチャンネルに参加する (`member_joined_channel`) かを決定するイベントのタイプ。
* `channel`: チャンネルID。Boxグループ名として使用されます。
* `userId`: ユーザーのID。同じメールアドレスを使用するBoxのユーザープロフィールにバインドされるプロフィールのメールアドレスを検索するためのものです。

その後、process関数は`getSlackUser`を呼び出してユーザーのプロフィールを取得します。取得したユーザープロフィールは`processUser`関数に送信され、Boxグループでユーザーが追加または削除されます。

ペイロードがスラッシュコマンドの場合 (`/boxadd`に設定されている`data.command`によって示されます)、`file 1234`のように、Box IDとファイルかフォルダかを表すコマンドのコンテンツは抽出され、個々の値を取得するために分割されます。これらの値は、適切なコンテンツであるかどうかが検証されます。

検証後、Slackユーザーのプロフィールは、メールアドレスを取得するために取得されます。その後、このユーザープロフィールは、BoxグループとBoxコンテンツでコラボレーションするために`processContent`に送信され、すべてのユーザーにアクセス権限が付与されます。

<Message type="notice">

この手順でSlackユーザーのメールアドレスを取得する理由は、ファイルまたはフォルダの所有者がアプリケーションのサービスアカウントではなくユーザーであるためです。(コラボレーションの作成によって) コンテンツを共有する際は、そのファイルまたはフォルダに対して共有権限を持つユーザーが操作を行う必要があります。そのため、Slackユーザーの代理でコラボレーションを作成できるように、SlackユーザーのメールアドレスをBoxユーザーのメールアドレスと照合する必要があります。

</Message>

</Choice>

<Choice option="programming.platform" value="java" color="none">

`process`メソッドを次の内容に置き換えます。

```java
public void process(JSONObject inputJSON) throws Exception {
    if (inputJSON.containsKey("event")) {
        JSONObject event = (JSONObject) inputJSON.get("event");
        String eventType = (String) event.get("type");
        String eventUserId = (String) event.get("user");
        String eventChannel = (String) event.get("channel");

        processUser(getSlackUser(eventUserId), eventType, eventChannel);
    } else if (inputJSON.containsKey("command")) {
        String eventCommand = (String) inputJSON.get("command");
        if (eventCommand.equals("/boxadd")) {
            String eventChannelId = (String) inputJSON.get("channel_id");
            String eventUserId = (String) inputJSON.get("user_id");
            String cInput = (String) inputJSON.get("text");
            String[] cInputParts = cInput.split(" ");

            if (cInputParts[0].matches("file|folder")) {
                processContent(getSlackUser(eventUserId), eventChannelId, cInputParts[0], cInputParts[1]);
            }
        }
    } else {
        System.err.println("Invalid event action");
    }
}

```

このメソッドの目的は、SlackからのペイロードがUser Eventとスラッシュコマンドのどちらであるかを判断し、必要な情報をすべて取得して、結果を処理するために適切なメソッドに転送することです。

ペイロードがUser Eventの場合 (JSONペイロードに存在するイベントノードによって示されます)、いくつかの情報を抽出します。

* `eventType`: ユーザーがチャンネルから退出する (`member_left_channel`) かチャンネルに参加する (`member_joined_channel`) かを決定するイベントのタイプ。
* `eventUserId`: ユーザーのID。同じメールアドレスを使用するBoxのユーザープロフィールにバインドされるプロフィールのメールアドレスを検索するためのものです。
* `eventChannel`: チャンネルID。Boxグループ名として使用されます。

その後、`processUser`に転送し、`getSlackUser`メソッドからの戻り値 (ユーザーオブジェクト)、イベントのタイプ、チャンネルを渡します。

ペイロードがスラッシュコマンドの場合 (JSONペイロードに存在する`command`ノードによって示されます)、いくつかの情報を抽出します。

* `eventChannelId`: Boxグループ名として使用するSlackチャンネルID。
* `eventUserId`: コマンドを発行したユーザーのID。
* `cInputParts`: `file 1234`などの文字列からのコマンド入力のタイプとID。

その後、`processContent`に転送し、`getSlackUser`メソッドからの戻り値 (ユーザーオブジェクト)、チャンネルID、コンテンツタイプ (ファイルまたはフォルダ)、およびBoxに保存されているファイルまたはフォルダのコンテンツIDを渡します。

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

## Slackユーザーの処理

次に、User Eventの処理方法を定義する必要があります。ここで説明すべきイベントは以下の3つです。

* ボットがチャンネルに追加された。
* 通常のユーザーがチャンネルに参加した。
* 通常のユーザーがチャンネルから退出した。

<Choice option="programming.platform" value="node" color="none">

`processUser`関数を次の内容に置き換えます。

```js
function processUser(user, event, channel) {
    getGroupId(channel, function (groupId) {
        // if bot was added, add all channel users
        if (user.is_bot) {
            processSlackChannel(channel, groupId);
        } else if (
            user.profile &&
            user.profile.email &&
            event === "member_joined_channel"
        ) {
            addGroupUser(groupId, user.profile.email);
        } else if (
            user.profile &&
            user.profile.email &&
            event === "member_left_channel"
        ) {
            removeGroupUser(groupId, user.profile.email);
        }
    });
}

```

</Choice>

<Choice option="programming.platform" value="java" color="none">

`processUser`メソッドを次の内容に置き換えます。

```java
public void processUser(JSONObject userResponse, String event, String channel) throws Exception {
    String groupId = getGroupId(channel);

    JSONObject userObj = (JSONObject) userResponse.get("user");

    Boolean isBot = (Boolean) userObj.get("is_bot");
    JSONObject userProfile = (JSONObject) userObj.get("profile");
    String userEmail = (String) userProfile.get("email");

    if (isBot) {
        processSlackChannel(channel, groupId);
    } else if (event.equals("member_joined_channel")) {
        addGroupUser(groupId, userEmail);
    } else if (event.equals("member_left_channel")) {
        removeGroupUser(groupId, userEmail);
    }
}

```

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

このコードでは、最初に、この次の手順で定義するチャンネルのBoxグループIDを取得します。取得後、以下のようにユーザーが処理されます。

* ユーザーがボットの場合は、Boxグループを初期化し、チャンネルの現在のユーザーをすべてBoxユーザーとしてグループに追加する必要があります。これは、既存のチャンネルに追加されるボットを構成するためです。この処理は、以前ユーザーが存在していたチャンネルにボットが再度追加される場合には無視されます。
* ユーザーがチャンネルに参加した場合は、グループにユーザーを追加する必要があります。
* ユーザーがチャンネルから退出した場合は、グループからユーザーを削除する必要があります。

## Slackチャンネルユーザーの処理

ボットは、初めてチャンネルに追加されたときに、現在チャンネルに含まれている全ユーザーのリストを取得し、そのユーザーを含むBoxグループを作成してチャンネルの基礎を作成する必要があります。

<Choice option="programming.platform" value="node" color="none">

`processSlackChannel`関数を次の内容に置き換えます。

```js
function processSlackChannel(channel, groupId) {
    const limit = 100;
    const channelUsersPath = `https://slack.com/api/conversations.members?token=${slackConfig.botToken}&channel=${channel}&limit=${limit}`;

    axios.get(channelUsersPath).then((response) => {
        response.data.members.forEach((uid) => {
            getSlackUser(uid, function (user) {
                if (user.profile.email && !user.is_bot) {
                    addGroupUser(groupId, user.profile.email);
                }
            });
        });
    });
}

```

</Choice>

<Choice option="programming.platform" value="java" color="none">

`processSlackChannel`メソッドを次の内容に置き換えます。

```java
public void processSlackChannel(String channel, String groupId) throws Exception {
    String limit = "100";
    String channelUsersPath = String.format("%s/conversations.members?token=%s&channel=%s&limit=%s", slackConfig.slackApiUrl, slackConfig.botToken, channel, limit);

    JSONObject channelUserList = sendGETRequest(channelUsersPath);
    JSONArray channelUserIds = (JSONArray) channelUserList.get("members");

    @SuppressWarnings("rawtypes")
    Iterator i = channelUserIds.iterator();
    while(i.hasNext()) {
        String uid = (String)i.next();

        JSONObject userResponse = (JSONObject) getSlackUser(uid.toString());
        JSONObject userObj = (JSONObject) userResponse.get("user");
        JSONObject userProfile = (JSONObject) userObj.get("profile");
        Boolean isBot = (Boolean) userObj.get("is_bot");

        String userEmail = new String();
        if (!isBot) {
            userEmail = (String) userProfile.get("email");
        }

        if (!userEmail.isEmpty() && !isBot) {
            addGroupUser(groupId, userEmail);
        }
    }
}

```

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

このコードは、複数の処理を順番に実行します。

* 最初に、Slack APIを呼び出し、チャンネルのすべてのメンバーを取得します。
* `limit`を調整して、チャネルのユーザーをさらに収集できます。
* 見つかったユーザーごとに、`getSlackUser`を呼び出してそのユーザーのプロフィールを取得し、メールアドレスをBoxユーザーのメールアドレスにマップできます。
* 各ユーザーは`addGroupUser`に送信され、グループに追加されます。

## Slackユーザープロフィールの取得

Slackに関連した最後の関数は、他の関数によって使用されるユーティリティメカニズムです。この関数は、Slack APIを呼び出して、Slackイベント/コマンドが提供するユーザーIDまたはチャンネルユーザーのリストを取得したときに提供されるユーザーIDが指定されたユーザープロフィールを取得します。メールアドレスを使用してSlackユーザーをBoxユーザーと照合しているため、ユーザープロフィールの検索では、メールアドレスのフィールドに注意します。

<Message type="notice">

Boxのメールアドレスは一意であり、複数のアカウントに使用することはできません。つまり、ユーザーアカウントの検索に使用すると効果的です。

</Message>

<Choice option="programming.platform" value="node" color="none">

`getSlackUser`関数を次の内容に置き換えます。

```js
function getSlackUser(userId, callback) {
    const userPath = `https://slack.com/api/users.info?token=${slackConfig.botToken}&user=${userId}`;

    axios.get(userPath).then((response) => {
        if (response.data.user && response.data.user.profile) {
            callback(response.data.user);
        } else {
            console.log("No user data found");
        }
    });
}

```

この関数では、Slackユーザープロフィールエンドポイントを呼び出した後、指定したコールバックにユーザープロフィール情報 (有効な場合) を送信します。

</Choice>

<Choice option="programming.platform" value="java" color="none">

`getSlackUser`メソッドを次の内容に置き換えます。

```java
public JSONObject getSlackUser(String userId) throws Exception {
    String usersPath = String.format("%s/users.info?token=%s&user=%s", slackConfig.slackApiUrl, slackConfig.botToken, userId);
    return sendGETRequest(usersPath);
}

```

このメソッドでは、ユーザープロフィールを取得するようSlackにリクエストを送信した後、そのリクエストのレスポンスを返します。このレスポンスはユーザープロフィールJSONオブジェクトになります。

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

## まとめ

* 受信イベントを確認し、処理するために転送しました。
* イベントを処理し、適切な関数に転送しました。
* チャンネル内のすべてのユーザーを処理する関数と1人のユーザーのSlackプロフィールを取得する関数を実装しました。

<Observe option="programming.platform" value="node,java">

<Next>

Slackの関数を設定しました

</Next>

</Observe>
