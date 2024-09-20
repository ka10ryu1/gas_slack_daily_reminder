// 参考記事はこちら https://auto-worker.com/blog/?p=4381
function slackDailyReminder() {
    //SlackAPIの投稿用のトークンを設定する
    let slackToken = 'Slack APIのトークンをここに入力する';
    //ライブラリから導入したSlackAppを定義し、トークンを設定する
    let slackApp = SlackApp.create(slackToken);
    //Slackボットがメッセージを投稿するチャンネル(randomを設定)を定義する(個人IDを指定すればDMも可)
    let channelId = "SlackのチャンネルIDをここに入力する";
    //実行ユーザーのデフォルトであるGoogleカレンダーを取得する
    let myCalendar = CalendarApp.getDefaultCalendar();
    //Googleカレンダーの予定取得する日(今日)を設定する
    let calDate = new Date();
    //今日1日のGoogleカレンダーのイベントを取得する
    let myEvent = myCalendar.getEventsForDay(calDate);
    //Slackに通知するGoogleカレンダーの予定メッセージを作成
    calDate = Utilities.formatDate(calDate,'JST','MM/dd E');
    let message = "-- " + calDate + " --\n";
    if (myEvent.length > 0){
        for(let i = 0; i < myEvent.length; i++){
            //予定の開始時刻・終了時刻の時間＋分を取得する。分は0~9の場合0を付与する
            let startH = myEvent[i].getStartTime().getHours();
            let startM = myEvent[i].getStartTime().getMinutes();
            if(startM < 10) startM = "0" + startM;
            let endH = myEvent[i].getEndTime().getHours();
            let endM = myEvent[i].getEndTime().getMinutes();
            if(endM < 10) endM = "0" + endM;   
            message += startH +":"+  startM + "-" + endH +":"+  endM + " " + myEvent[i].getTitle() + "\n";
        }
    }else{
        message = "-- " + calDate + " 予定なし --";
    }
    //SlackAppオブジェクトのpostMessageメソッドでボット投稿を行う
    slackApp.postMessage(channelId, message);
}