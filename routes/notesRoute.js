'use strict';

const { Router } = require('express');
const router = Router();

const {
  getNotes,
  getSingleNote,
  showEditForm,
  noteForm,
  postNote,
  deleteNote
} = require('../controllers/noteCtrl.js');

router.get('/note', noteForm); 
router.post('/note', postNote); // for adding a note
router.get('/notes', getNotes); // get all user's notes
router.post('/notes/:id', deleteNote); // get all user's notes
router.get('/notes/:id', getSingleNote); //view note details
router.get('edit-note/:id', showEditForm)

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/login');
}
 