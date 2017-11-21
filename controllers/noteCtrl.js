'use strict'

const passport = require('passport');
let allNotes;

module.exports.noteForm = (req, res, next) => {
    res.render('add-note')
};

module.exports.postNote = (req, res, next) => {
  const { Note } = req.app.get('models');
  Note.create({
    userId: req.session.passport.user.id,
    title: req.body.title,
    body: req.body.body,
    date_added: req.body.date
  })
  .then( () => {
    res.redirect('notes');
    // console.log("hi")
  })
  .catch( (err) => {
    console.log(err);    
  });
};

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

module.exports.getSingleNote = (req, res, next) => {
  const { Note } = req.app.get('models'); 
      // console.log(req.session.passport.user.id)
  Note.findOne({
    where: {
      userId: req.session.passport.user.id,
      id: req.params.id
    } 
  })
  .then( (data) => {
      // const {dataValues:note} = data;
      console.log("SINGLE NOTE", data)
      // res.render('note-details', {note});        
  })
  .catch( (err) => {
    console.log('error!')
    next(err);
  });
};

// module.exports.getCurrentNote = (req, res, next) => {
//   const { Note, Tag } = req.app.get('models');
//   Note.findOne({
//     where: {
//       userId: req.session.passport.user.id,
//       id: req.params.id
//     }
//   })
//   .then( (data) => {

//   })
// }
// module.exports.addNote = (req, res, next) => {
//   const { Note, Tag } = req.app.get('models');
//   Note.findOne({
//     where: {
//       userId: req.session.passport.user.id,
//       id: req.params.id
//     }
//   }) 
//   Note.create({
//     userId: req.session.passport.user.id,
//     title: req.body.title,
//     quantity: req.body.quantity,
//     price: req.body.price,
//     category: req.body.category,
//     categoryId: req.body.selectval,
//     date_added: req.body.date
//   })
//   .then( () => {
//     res.redirect('products');
//   })
//   .catch( (err) => {
//     console.log(err);    
//   });
// };

// module.exports.createNote = (req, res, next) => {
//   let currentUser = req.session.passport.user.id; 
//   const { Note } = req.app.get('models');
//   let newNote = {
//     userId: req.session.passport.user.id,
//     created_at: new Date().toISOString()
//   }
//   Note.create(newNote) 
//   .then( () => {
//     res.redirect('note/:id')
//   })
//   .catch( (err) => {
//     console.log(err);    
//   });
// };