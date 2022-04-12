const { Router } = require('express');
const router = Router();
const controller = require('./controller/index')

router.get('/:number', controller.translateNumber);


module.exports = router;
