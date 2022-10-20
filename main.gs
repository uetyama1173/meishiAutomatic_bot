// 応答メッセージURL
const REPLY = "https://api.line.me/v2/bot/message/reply";

// アクセストークン
const ACCESS_TOKEN = "0+GcPSHNdtmAvZUamTMwsO5jysGzWXkSDFjpfK7rgc4uZ4jadqaqcbslspAXE9peBm79mtOPZHRWFtw5c71AwPUa0447pl2sd3tFvw/SjkbjciBR/sSgT4ydl6/I1JUUxVVnEg7SqqgLF3cHnGhzNwdB04t89/1O/w1cDnyilFU=";

// スプレッドシート情報
const SHEET_ID = '1WkN0ZWYxLw0uSkchDMNnFB1cq9aGRgsrg6FbuIW4sII';
const sheet_data = SpreadsheetApp.openById(SHEET_ID).getSheetByName("meishi_table");
const sheet_debug = SpreadsheetApp.openById(SHEET_ID).getSheetByName("debug");
const sheet_chat = SpreadsheetApp.openById(SHEET_ID).getSheetByName("chat");

// Google Drive ID
const GOOGLE_DRIVE_ID = "15XRm2zildq7G00XocPB0iS1v5DUTHsai";


function doPost(e) {

  //ラインから受け取った情報を格納している
  let data = JSON.parse(e.postData.contents);

  //obj(data)のデータを取り出しているだけ
  let messageType = data.events[0].type
  let replyToken = data.events[0].replyToken;
  let useridname = data.events[0].source.userId;
  let timestampda = data.events[0].timestamp;
  // data.events[0].message.text == "名刺を作成する"

  //chatlog
  sheet_debug.appendRow([data.events[0]]);

  //メッセージタイプで判定を行う
  //ssRefの引数が0なら最終行を取得している
  let nextMode = "default"
  if (messageType == "message") {
    let textMessage = data.events[0].message.text
    if (data.events[0].message.text == "名刺を作成する") {
      sheet_data.appendRow([timestampda, useridname, textMessage, "done"])
      sendTextMessage(replyToken, "本名を教えてください")
    } if (ssRef(0) == "名刺を作成する") {
      sheet_data.appendRow([timestampda, useridname, textMessage, "done"])
      sendTextMessage(replyToken, "メールアドレスを教えてください")
    } if (ssRef(1) == "名刺を作成する") {
      sendTextMessage(replyToken, "電話番号を教えて下さい(ハイフン含めて)")
      sheet_data.appendRow([timestampda, useridname, textMessage, "done"])
    } if (ssRef(2) == "名刺を作成する") {
      sendTextMessage(replyToken, "団体名を教えてください")
      sheet_data.appendRow([timestampda, useridname, textMessage, "done"])
    } if (ssRef(3) == "名刺を作成する") {
      sendTextMessage(replyToken, "キャッチフレーズを教えてください")
      sheet_data.appendRow([timestampda, useridname, textMessage, "done"])
    } if (ssRef(4) == "名刺を作成する") {
      sendTextMessage(replyToken, "あなたの趣味は何ですか？")
      sheet_data.appendRow([timestampda, useridname, textMessage, "done"])
    } if (ssRef(5) == "名刺を作成する") {
      sendTextMessage(replyToken, "あなたのニックネームを教えてください")
      sheet_data.appendRow([timestampda, useridname, textMessage, "done"])
    } if (ssRef(6) == "名刺を作成する") {
      //季節の質問を送信
      sendMessage(replyToken)
      sheet_data.appendRow([timestampda, useridname, textMessage, "done"])
    }
  } else if (messageType == "postback") {
    let postbackdata = data.events[0].postback.data;
    sheet_data.appendRow([timestampda, useridname, postbackdata, "OK"])
    doGet()
    sendTextMessage(replyToken, `名刺ができたよ！下のリンクを押してね \n https://script.google.com/macros/s/AKfycbxw6d2H8ijMQxvKrxJxjkxVZL4heZcZ3Ew0d3MV-JesDR4Ms3hZ5-RfSsMrDcZmtKSY/exec`)
  }
}

//択一式の質問を送信
function sendMessage(replyToken) {


  let seasonQuestion = [
    {
      "type": "flex",
      "altText": "this is a flex message",
      "contents": {
        "type": "bubble",
        "hero": {
          "type": "image",
          "url": "https://uetyama1173.github.io/meishiAutomatic_bot/icooon-mono/seasonQ.jpg",
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover",
          "action": {
            "type": "uri",
            "uri": "http://linecorp.com/"
          }
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "好きな季節はなんですか？",
              "weight": "bold",
              "size": "xl",
              "margin": "none",
              "align": "center"
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "md",
              "contents": []
            }
          ],
          "borderColor": "#696969",
          "cornerRadius": "30px"
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "button",
              "style": "link",
              "height": "sm",
              "action": {
                "type": "postback",
                "label": "春",
                "data": "spring",
                "displayText": "春"
              }
            },
            {
              "type": "button",
              "style": "link",
              "height": "sm",
              "action": {
                "type": "postback",
                "label": "夏",
                "data": "summer",
                "displayText": "夏"
              }
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "margin": "sm"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "秋",
                "data": "autumn",
                "displayText": "秋"
              }
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "冬",
                "data": "winter",
                "displayText": "冬"
              }
            }
          ],
          "flex": 0
        }
      }

    }
  ]


  let postData = {
    "replyToken": replyToken,
    "messages": seasonQuestion
  };

  // リクエストヘッダ
  var headers = {
    "Content-Type": "application/json; charset=UTF-8",
    "Authorization": "Bearer " + ACCESS_TOKEN
  };
  // POSTオプション作成
  var options = {
    "method": "POST",
    "headers": headers,
    "payload": JSON.stringify(postData)
  };
  return UrlFetchApp.fetch(REPLY, options);


}

//テキストメッセージ送信
function sendTextMessage(replyToken, replyText) {
  const postData = {
    "replyToken": replyToken,
    "messages": [
      {
        "type": "text",
        "text": replyText
      }
    ]
  };
  const headers = {
    "Content-Type": "application/json; charset=UTF-8",
    "Authorization": "Bearer " + ACCESS_TOKEN
  };
  const options = {
    "method": "POST",
    "headers": headers,
    "payload": JSON.stringify(postData)
  };
  return UrlFetchApp.fetch(REPLY, options);
}




