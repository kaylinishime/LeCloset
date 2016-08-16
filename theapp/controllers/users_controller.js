var User = require("../models/user");

function home (req, res, next) {
  if (req.user) {
    console.log(req.user._id);
  }
  res.render('index', { user: req.user });
}

function show (req, res, next) {
res.render('profiles', { user: req.user });
}

function close (req, res, next) {
  res.render('close');
}

function edit (req, res, next) {

}

function update(req, res, next) {
    // User.findById(req.params.id, function(err, user) {
    User.findById(req.user._id, function(err, user) {
      if (err) {
        res.json({message: `Could not find user because ${err}`});
      }
      else if (!user) {
        res.json({message: "No user with this id."});
      }
      else {
        if(req.body.gender) user.gender = req.body.gender;
        user.save(function(err, user) {
          if (err) {
            res.json({error: err})
          }
          else {
            res.json(user);
          }
        });
      };
    });
};

function destroy (req, res, next) {

}

module.exports = {
  home:     home,
  show:     show,
  close:    close,
  edit:     edit,
  update:   update,
  destroy:  destroy,
}
