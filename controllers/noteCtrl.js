'use strict'

const passport = require('passport');
let allNotes;

module.exports.noteForm = (req, res, next) => {
    res.render('add-note')
};

// adds a new note
module.exports.postNote = (req, res, next) => {
  const { Note } = req.app.get('models');
  Note.create({
    userId: req.session.passport.user.id,
    title: req.body.title,
    body: req.body.body,
    links: req.body.links,
    date_added: new Date().toISOString()
  })
  .then( () => {
    console.log("DATE?!", req.body.date)
    res.redirect('notes');
  })
  .catch( (err) => {
    console.log(err);    
  });
};

// gets array of all user's notes
module.exports.getNotes = (req, res, next) => {
  const { Note } = req.app.get('models');
  Note.findAll({
    raw:true
    // order: ['date_added']
  })
  .then( (data) => {
    allNotes = data;
    res.render('view-notes', { allNotes });
  })
  .catch( (err) => {
    console.log(err);    
  });
};

// gets data for viewing details for one note
module.exports.getSingleNote = (req, res, next) => {
  const { Note } = req.app.get('models'); 
  Note.findOne({
    raw:true,
    where: {
      userId: req.session.passport.user.id,
      id: req.params.id
    } 
  })
  .then( (singleNote) => {
      res.render('note-details', {singleNote});        
  })
  .catch( (err) => {
    console.log('error!')
    next(err);
  });
};

module.exports.deleteNote = (req, res, next) => {
  const { Note } = req.app.get('models'); 
  Note.destroy({
    where: {
      userId: req.session.passport.user.id,
      id: req.params.id
    } 
  })
  .then( () => {
      res.redirect('/notes');        
  })
  .catch( (err) => {
    console.log('error!')
    next(err);
  });
};