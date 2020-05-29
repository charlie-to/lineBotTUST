var express = require('express');
var router = express.Router();

//hook確認
router.get('/', function(req, res, next) {
  res.json({ test:"hook" }); // return result of json
});

module.exports = router;
