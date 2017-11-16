'use strict'

const passport = require('passport');
// let currentNote = req.params.id;

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
    // res.redirect('notes');
    console.log("hi")
  })
  .catch( (err) => {
    console.log(err);    
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