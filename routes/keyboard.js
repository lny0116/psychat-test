var express = require('express');
var router = express.Router();

const recommendService = require("../service/recommendService");

// Home Keyboard API
router.get('/', function(req, res, next) {
  res.json({
    "type": "buttons",
    "buttons": recommendService.findAllTypeList()
  });
});

module.exports = router;
