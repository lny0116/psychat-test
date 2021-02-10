var express = require('express');
var router = express.Router();

// message api
router.post('/', function (req,res,next){
    console.log(req.body); //확인용 지워야할걸
    var msg = req.body.content;
    console.log('전달받은 메시지: ' + msg); //확인용 지워야할걸?

    var send = {}; //응답할 데이터
    var txt = `${msg}` ;
    var msg = txt.replace(/[a-z0-9ㄱ-ㅎㅏ-ㅣ]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]|[\s]/gi, "");
    //한글만 허용(자음,모음,영어,특수문자,숫자 불가), 모든 공백 지움
    console.log(msg); //확인용 지워

    switch (msg){
        case '성격':
        case '성격테스트':
        case '내성격테스트':
        case '내성격':
            send = {
                "message": {
                    "text": "성격 테스트",
                }
            }
            break;
        case '연애':
        case '사랑':
        case '연애테스트':
        case '사랑테스트':
        case '사랑해':
        case '나랑사귀자':
        case '사귈래':
        case '연애하고싶다':
        case '야나랑사귈래':
        case '야사귈래':
            send = {
                "message": {
                    "text": "연애 테스트",
                    "message_button":{
                        "label": "연애 테스트",
                        "url": "http://coupon.coupon.com/~~"
                    }
                },
                "keyboard": {
                    "type": "buttons",
                    "buttons": [
                        "다른 테스트 알아보기"
                    ]
                }
            }
            break;
        case '욕들':
            send = {
                "message": {
                    "text": "진단 테스트",
                }
            }
            break;

        default:
            send={
                "message":{
                    "text": "어떤 테스트를 원하는지 모르겠어요."
                }
            }
    }
    res.json(send);
})

module.exports = router;
