---
type: quick-start
hide_in_page_nav: true
category_id: collaborations
subcategory_id: collaborations/connect-slack-to-group-collabs
is_index: false
id: collaborations/connect-slack-to-group-collabs/scaffold-application-code
rank: 3
total_steps: 6
sibling_id: collaborations/connect-slack-to-group-collabs
parent_id: collaborations/connect-slack-to-group-collabs
next_page_id: collaborations/connect-slack-to-group-collabs/handle-slack-events
previous_page_id: collaborations/connect-slack-to-group-collabs/configure-box
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/connect-slack-to-group-collabs/3-scaffold-application-code.md
fullyTranslated: true
---
# アプリケーションコードのスキャフォールディング

SlackおよびBoxアプリケーションを構成したら、Slackから送信されるスラッシュコマンドやイベントをリッスンするアプリケーションのコードを作成できます。

このアプリケーションは、以下の3つの機能に分割されます。

* 最初のアプリケーションスケルトンと構成情報を設定する
* Slackイベントとスラッシュコマンドのハンドラを設定する
* このハンドラをBoxの必要な関数に関連付ける

## 依存関係とスキャフォールドコードの追加

最初に、アプリケーションの実行に必要なファイルと最小限のコードのスキャフォールディングを行います。

<Choice option="programming.platform" value="node" color="none">

* アプリケーション用に新しいローカルディレクトリを作成するか、[手順1][step1]のSlackイベントURLチャレンジ用に作成した既存のコードを読み込みます。
* ローカルディレクトリ内で新しい`package.json`ファイルを作成するか既存のファイルを更新します。任意のエディタでそのファイルを開き、以下の内容をコピーして貼り付け、ファイルを保存して終了します。

```json
{
  "name": "box-slack",
  "version": "1.0.0",
  "description": "Box Slack integration",
  "main": "process.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node process.js"
  },
  "author": "Box",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.19.2",
    "body-parser": "^1.19.0",
    "box-node-sdk": "^1.33.0",
    "express": "^4.17.1"
  }
}

```

* ターミナル/コンソールから`npm install`を実行し、依存関係をインストールします。
* ローカルディレクトリに2つのファイル (`process.js`および`slackConfig.json`) を作成します。
* `slackConfig.json`を開いて、以下のデフォルト構成を保存します。

```json
{
  "verificationToken": "TOKEN",
  "botToken": "TOKEN"
}

```

* 上記の2つの値は、Slackアプリケーションから取得した詳細情報に置き換える必要があります。`TOKEN`文字列を適切な値に置き換えてください。
  * `verificationToken`: Slackアプリケーションの構成ページを読み込みます。\[**Basic Information (基本情報)**] ページで、\[**App Credentials (アプリの資格情報)**] セクションまで下にスクロールし、\[**Verification Token (確認トークン)**] の文字列を使用できます。
  * `botToken`: Slackアプリケーションで、\[**OAuth & Permissions (OAuthと権限)**] ページに移動し、上部にある \[**Bot User OAuth Access Token (ボットユーザーOAuthアクセストークン)**] の文字列を使用できます。この文字列は、ボットがSlackワークスペースに追加されたときに自動入力されています。
* 空の`process.js`ファイルを開き、次のコードをコピーして貼り付け、ファイルを保存します。

```js
const box = require("box-node-sdk");

const slackConfig = require("./slackConfig.json");
const boxConfig = require("./boxConfig.json");

const express = require("express");
const app = express();
const axios = require("axios");
const util = require("util");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// INSTANTIATE BOX CLIENT

app.post('/event', (req, res) => {
    //HANDLE INCOMING EVENTS
});

const handler = (() => {
    function process(res, data) {
        // PROCESS EVENTS
    }

    function processUser(user, event, channel) {
        // PROCESS USER ADD / REMOVE REQUEST
    }

    function addGroupUser(groupId, email) {
        // ADD USER TO BOX GROUP
    }

    function removeGroupUser(groupId, email) {
        // REMOVE USER FROM BOX GROUP
    }

    function processContent(user, channel, type, fid) {
        // COLLABORATE CONTENT WITH GROUP
    }

    function processSlackChannel(channel, gid) {
        // ADD ALL SLACK CHANNEL USERS TO GROUP
    }

    function getSlackUser(userId, _callback) {
        // GET SLACK USER PROFILE
    }

    function getGroupId(groupName, _callback) {
        // GET AND CREATE BOX GROUP
    }

    return {
        process
    };
})();

const port = process.env.PORT || 3000;
app.listen(port, function(err) {
  console.log("Server listening on PORT", port);
});

```

このコードには、SlackとBox間の通信を処理するのに必要となる主要な関数がすべて含まれています。これらの関数について、上から順に説明します。

* `/event`ハンドラ: 入ってくるSlackトラフィックをすべて取得し、内容を確認して、`process`関数に転送します。
* `process`: Slackイベントを解析し、Boxグループの処理 (ユーザーチャンネルイベント) またはグループへのBoxコンテンツの追加 (スラッシュコマンド) のいずれかにそのイベントを転送します。
* `processUser`: 適切な関数に転送することでBoxグループのユーザーを追加または削除して、User Eventを処理します。
* `addGroupUser`: Boxグループにユーザーを追加します。
* `removeGroupUser`: Boxグループからユーザーを削除します。
* `processContent`: BoxグループとBoxコンテンツのコラボレーションを行います。
* `processSlackChannel`: すべてのSlackチャンネルユーザーをBoxグループに追加します。
* `getSlackUser`: SlackユーザーのプロフィールをSlackユーザーIDから取得します (ユーティリティ関数)。
* `getGroupId`: Boxグループ名からBoxグループIDを取得します (ユーティリティ関数)。

</Choice>

<Choice option="programming.platform" value="java" color="none">

Slackの資格情報とURLを保持するための構成ファイルを作成する必要があります。

* `Application.java`ファイルが配置されている`src/main/java`パスに、`slackConfig.java`という名前の新しいJavaクラスファイルを作成します。
* ファイルを開き、次の内容を保存します。

```java
package com.box.slack.box;

public class slackConfig {
    public static String verificationToken = "TOKEN";
    public static String botToken = "TOKEN";
    public static String slackApiUrl = "https://slack.com/api";
}

```

* 上記の2つの値は、Slackアプリケーションから取得した詳細情報に置き換える必要があります。`TOKEN`文字列を適切な値に置き換えてください。
  * `verificationToken`: Slackアプリケーションの構成ページを読み込みます。\[**Basic Information (基本情報)**] ページで、\[**App Credentials (アプリの資格情報)**] セクションまで下にスクロールし、\[**Verification Token (確認トークン)**] の文字列を使用できます。
  * `botToken`: Slackアプリケーションで、\[**OAuth & Permissions (OAuthと権限)**] ページに移動し、上部にある \[**Bot User OAuth Access Token (ボットユーザーOAuthアクセストークン)**] の文字列を使用できます。この文字列は、ボットがSlackワークスペースに追加されたときに自動入力されています。
* 以前のSlackイベントチャレンジの設定で作成した`Application.java`ファイルを開き、ファイルの内容を次の内容に置き換えます。

```java
package com.box.slack.box;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;

import javax.servlet.http.HttpServletResponse;

import org.jose4j.json.internal.json_simple.JSONArray;
import org.jose4j.json.internal.json_simple.JSONObject;
import org.jose4j.json.internal.json_simple.parser.JSONParser;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.box.sdk.BoxAPIConnection;
import com.box.sdk.BoxCollaborator;
import com.box.sdk.BoxCollaboration;
import com.box.sdk.BoxConfig;
import com.box.sdk.BoxDeveloperEditionAPIConnection;
import com.box.sdk.BoxFile;
import com.box.sdk.BoxFolder;
import com.box.sdk.BoxGroup;
import com.box.sdk.BoxGroupMembership;
import com.box.sdk.BoxUser;

@RestController
@EnableAutoConfiguration
public class Application extends slackConfig {
    private Reader fileReader;
    private BoxConfig boxConfig;
    private BoxAPIConnection boxAPI;

    @PostMapping("/event")
    @ResponseBody
    public void handleEvent(@RequestBody String data, @RequestHeader("Content-Type") String contentType, HttpServletResponse response) throws Exception {
        // HANDLE EVENTS
    }

    @Async
    public void processEvent(String data) throws Exception {
        // VERIFY EVENTS
    }

    public void process(JSONObject inputJSON) throws Exception {
        // PROCESS EVENTS
    }

    public void processUser(JSONObject userResponse, String event, String channel) throws Exception {
        // PROCESS USER ADD / REMOVE REQUEST
    }

    public void addGroupUser(String groupId, String userEmail) {
        // ADD USER TO BOX GROUP
    }

    public void removeGroupUser(String groupId, String userEmail) {
        // REMOVE USER FROM BOX GROUP
    }

    public void processContent(JSONObject userResponse, String channel, String fType, String fId) {
        // COLLABORATE CONTENT WITH GROUP
    }

    public void processSlackChannel(String channel, String groupId) throws Exception {
        // ADD ALL SLACK CHANNEL USERS TO GROUP
    }

    public JSONObject getSlackUser(String userId) throws Exception {
        // GET SLACK USER PROFILE
    }

    public String getGroupId(String groupName) {
        // GET AND CREATE BOX GROUP
    }

    public JSONObject sendGETRequest(String reqURL) throws Exception {
        StringBuffer response = new StringBuffer();

        URL obj = new URL(reqURL);
        HttpURLConnection httpURLConnection = (HttpURLConnection) obj.openConnection();
        httpURLConnection.setRequestMethod("GET");

        int responseCode = httpURLConnection.getResponseCode();
        if (responseCode == HttpURLConnection.HTTP_OK) {
            BufferedReader in = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
            String inputLine;

            while ((inputLine = in .readLine()) != null) {
                response.append(inputLine);
            } in .close();
        } else {
            System.err.println("GET request failed");
        }

        Object dataObj = new JSONParser().parse(response.toString());
        JSONObject outputJSON = (JSONObject) dataObj;

        return outputJSON;
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

```

このコードには、SlackとBox間の通信を処理するのに必要となる主要な関数がすべて含まれています。これらの関数について、上から順に説明します。

* `handleEvent`: 入ってくるSlackトラフィックをすべて取得し、HTTP 200レスポンスで応答して、イベントが受信されたことをSlackに通知します。スラッシュコマンドにより、ペイロードが`application/json`ではなく`application/x-www-form-urlencoded`として送信されるため、そのペイロードをJSONオブジェクトに変換して入力を標準化します。
* `processEvent`: イベントがSlackから送信されたかどうかを確認し、Boxクライアントをインスタンス化して、処理のために転送します。
* `process`: Slackイベントを解析し、Boxグループの処理 (ユーザーチャンネルイベント) またはグループへのBoxコンテンツの追加 (スラッシュコマンド) のいずれかに転送します。
* `processUser`: 適切な関数に転送することで、Boxグループのユーザーを追加または削除するためのUser Eventの要件を処理します。
* `addGroupUser`: Boxグループにユーザーを追加します。
* `removeGroupUser`: Boxグループからユーザーを削除します。
* `processContent`: BoxグループとBoxコンテンツのコラボレーションを行います。
* `processSlackChannel`: すべてのSlackチャンネルユーザーをBoxグループに追加します。
* `getSlackUser`: SlackユーザープロフィールをSlackユーザーIDから取得するユーティリティ関数。
* `getGroupId`: Boxグループ名からBoxグループIDを取得します (ユーティリティ関数)。
* `sendGETRequest`: HTTP GETリクエストを送信するユーティリティ関数。

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

## まとめ

* 最小限のアプリケーションスキャフォールドを作成し、基本的な構成の詳細を指定しました。
* プロジェクトの依存関係をすべてインストールしました。

<Observe option="programming.platform" value="node,java">

<Next>

ローカルアプリケーションの設定が完了しました

</Next>

</Observe>

[step1]: g://collaborations/connect-slack-to-group-collabs/configure-slack
