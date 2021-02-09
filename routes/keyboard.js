var express = require('express');
var router = express.Router();

// Home Keyboard API
router.get('/', function(req, res, next) {
  var data = ({
    "type": "buttons",
    "buttons": [
      "성격",
      "연애",
      "직장",
      "연예인",
      "환생",
      "여행"
    ]
  });
  res.json(data);
});




module.exports = router;
