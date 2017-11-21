'use strict';

const { Router } = require('express');
const router = Router();

const {
  getNotes,
  getSingleNote,
  noteForm,
  postNote
} = require('../controllers/noteCtrl.js');

router.get('/note', noteForm); 
router.post('/note', postNote); // for adding a note
router.get('/notes', getNotes); // get all user's notes
router.get('/notes/:id', getSingleNote); //view note details

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/login');
}
 