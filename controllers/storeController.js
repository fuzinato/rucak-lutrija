const mongoose = require('mongoose');
const Store = mongoose.model('Store');


exports.homePage = (req, res) =>  {
  res.render('index');
};

exports.addStore = (req, res) =>  {
  res.render('editStore',{
    title: 'Add store'
  }) ;
};

exports.createStore = async (req, res) =>  {
  let store = await (new Store(req.body)).save();
  req.flash('success', `Successfully created ${store.name}.`)
  res.redirect('/');
};
