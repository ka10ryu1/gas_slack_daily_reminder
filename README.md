- [gas\_slack\_daily\_reminder](#gas_slack_daily_reminder)
  - [GASのセットアップ](#gasのセットアップ)
    - [Slackアプリの作成](#slackアプリの作成)
    - [Slack APIのスコープ＆パーミッション設定](#slack-apiのスコープパーミッション設定)
    - [Slackボット追加・作成とワークスペースにインストール](#slackボット追加作成とワークスペースにインストール)
    - [Slack APIのボット用トークンを発行](#slack-apiのボット用トークンを発行)
    - [GASによるslack APIの利用手順（ライブラリ導入）](#gasによるslack-apiの利用手順ライブラリ導入)
  - [GASの作成](#gasの作成)
    - [ユーザーIDを調べる方法](#ユーザーidを調べる方法)


# gas_slack_daily_reminder
Googleカレンダーの当日の予定をSlackに投稿するアプリ

## GASのセットアップ

[参考記事](https://auto-worker.com/blog/?p=2904)


### Slackアプリの作成

1. [Slack APIのページ](https://api.slack.com/apps) にアクセスし、「Create an App」をクリック(すでに作成済みの場合は、右上の「Create New App」)
1. 「アプリ名（App Name）」と「利用するSlackワークスペース名（Development Slack Workspace）」を入力し、「Create App」ボタンをクリック
   
### Slack APIのスコープ＆パーミッション設定

1. SlackアプリのSettingメニューにある「OAuth & Permissions」を選択
1. Scopesメニューから「Add an OAuth Scope」ボタンをクリック
1. Slack botで必要なとなる「chat:write」、「chat:write.public」、「chat:write.customize」を選択し、保存

### Slackボット追加・作成とワークスペースにインストール

1. Settingメニューから「App Home」を選択し、「App Display Name」で「Edit」ボタンをクリック
1. チャット上で表示されるbotの名前と、デフォルトのユーザー名を入力し、「Add」ボタンをクリック
1. 「Bot user added!」というメッセージが上部に表示されると、Slack botの追加・作成が完了
1. Slack botが作成できたら、「Install App」を選択し、「Install to Workspace」ボタンをクリックし、Slack botをワークスペースにインストール 
1. Slackのワークスペースに対し、Slack botの権限リクエスト画面が表示されるので、実行内容を確認した上で、「許可する」ボタンをクリック

### Slack APIのボット用トークンを発行

「Bot User OAuth Token」に表示されている文字列の右側にある「Copy」ボタンをクリックして、トークンを控える

### GASによるslack APIの利用手順（ライブラリ導入）

1. GASのスクリプトエディタエディタの画面でライブラリの横にある＋アイコンをクリックし、ライブラリを追加
1.  ライブラリの追加画面で、スクリプトIDの入力欄にSlackAppのスクリプトIDを入力し、検索ボタンをクリック
    - SlackAppのスクリプトID：`1on93YOYfSmV92R5q59NpKmsyWIQD8qnoLYk-gkQBI92C58SPyA2x1-bq`
1. IDが「SlackApp」になっていることを確認し、バージョンも最も大きい数字のものにして「追加」ボタンをクリック

## GASの作成

[参考記事](https://auto-worker.com/blog/?p=4381)

1. スプレッドシートのメニュー「ツール＞スクリプトエディタ」を選択するなどして、スクリプトエディタを開き `slack_daily_remainder.js` の中身をコピペする
1. `slackToken変数` に、事前取得した `Slack APIのトークン` を設定
1. `channelId` に予定を通知したいチャンネル名（または個人宛のDMの場合はユーザーID）を設定
1. GASスクリプトエディタ画面の左メニューにある時計アイコンの「トリガー」を選択し、トリガーを追加
1. 実行する関数を「slackDailyReminder」とし、日付ベースのタイマーで実行した時刻を選択し、保存ボタンを押す

### ユーザーIDを調べる方法

[参考記事](https://auto-worker.com/blog/?p=27)

1. チャネルなどに表示されている調べたいユーザーをクリック
1. プロフ画像やメニューが表示されるので「プロフィールを表示」を選択
1. 画面の右側のユーザー情報が表示されるので、【…】ボタンをクリック
1. 「メンバーIDをコピー」をクリック
