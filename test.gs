function myFunction() {

  let obj = { webhookEventId : 01, timestamp : 1.665623449219E12, mode :active, replyToken : 81, type : message, message : { id:16942045536565, text:うい, type:text }, source : { userId:Uce1b551fff1c120a1ec5637d0fb915b9, type:user }, deliveryContext : { isRedelivery:false } }

let obj2 =   { replyToken : "028fdeda663042fab158fcceb477ed47", timestamp : 1.665623806406E12, message : { id:16942069391083, text:サーフィン, type:text }, type : message, source : { userId:Uce1b551fff1c120a1ec5637d0fb915b9, type:user }, webhookEventId : "01GF7EMMPSE5AXQ32Z43MG1H3G", mode : active, deliveryContext : { isRedelivery:false } }

let messageType = obj.type

  console.log(messageType)
}
