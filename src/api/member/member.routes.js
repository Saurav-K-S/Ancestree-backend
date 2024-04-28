const express = require('express');
const memberRouter = express.Router();
const member = require('./member.controllers');
const { auth } = require('../../middlewares');
memberRouter.post('/create', auth, member.Create);
memberRouter.post('/create/pic', auth, member.UploadPic);
memberRouter.get('/view/:id', auth, member.View);
memberRouter.put('/edit', auth, member.Edit);
memberRouter.post('/search/pattern', auth, member.SearchPattern);
memberRouter.get('/search/:id', auth, member.Search);
module.exports = memberRouter;
