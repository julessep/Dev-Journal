'use strict';

const { Router } = require('express');
const router = Router();

const {
  getNotes,
  addNote,
  getCurrentNote,
  createNote,
  noteForm,
  postNote
} = require('../controllers/noteCtrl.js');

// router.post('/note', isLoggedIn, createNote);
router.get('/note', noteForm);
router.get('/notes', getNotes);
router.post('/note', postNote);

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/login');
}
