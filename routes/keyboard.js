var express = require('express');
var router = express.Router();

// Home Keyboard API
router.get('/', function(req, res, next) {
  var data = ({
    "type": "buttons",
    "buttons": [
      "mbti 정석",
      "성격",
      "연애",
      "직장",
      "연예인",
      "환생",
      "여행",
      "음식",
      "동물"
    ]
  });
  res.json(data);
});




module.exports = router;
