var express = require('express');
var router = express.Router();

const recommendService = require("../service/recommendService");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: '심테모(심리 테스트 모음 사이트)',
    dataList: recommendService.findAll()
  });
});

router.get('/type/:type', function(req, res, next) {
  const type = req.params.type;

  res.render('index', {
    title: '심테모(심리 테스트 모음 사이트)',
    dataList: recommendService.findByType(type)
  });
});

module.exports = router;