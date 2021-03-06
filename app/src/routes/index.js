'use strict';
const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl.js');

router.get('/', ctrl.output.home);

router.get('/api/getVisitors', ctrl.data.visitors);

// router.get('/login', ctrl.output.login);
// router.post('/login', ctrl.process.login);

// router.get('/register', ctrl.output.register);
// router.post('/register', ctrl.process.register);

module.exports= router;

//여기는 라우팅을 어떻게 할지 즉 사용자의 req.url에 따른 연결을 중간처리하는 곳`