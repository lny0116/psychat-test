var express = require('express');
var router = express.Router();

// message api
router.post('/', function (req,res,next){
    console.log(req.body); //확인용
    var msg = req.body.content;
    console.log('전달받은 메시지: ' + msg); //확인용

    var send = {}; //응답할 데이터

    switch (msg){
        case '성격':
            send = {
                "message": {
                    "text": "성격 테스트",
                    "message_button":{
                        "label": "성격 테스트",
                        "url": "http://coupon.coupon.com/~~"
                    }
                }
            }
            break;
        case '연애':
            send = {
                "message": {
                    "text": "성격 테스트",
                    "message_button":{
                        "label": "성격 테스트",
                        "url": "http://coupon.coupon.com/~~"
                    }
                }
            }
            break;
    }
    res.json(send);
})

module.exports = router;
