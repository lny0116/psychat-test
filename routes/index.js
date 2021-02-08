var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: '심테모(심리 테스트 모음 사이트)',
    dataList: [
      {
        title: "프리미엄 셀렉트샵 당신은 어떤 꽃인가요? MBTI LU42",
        url: "https://lu42.co.kr/campaign/flowergarden/mbti",
        type: "mbti",
      },
      {
        title: "프리미엄 셀렉트샵 당신은 어떤 꽃인가요? MBTI LU42",
        url: "https://lu42.co.kr/campaign/flowergarden/mbti",
        type: "mbti",
      },
    ]
  });
});

module.exports = router;
