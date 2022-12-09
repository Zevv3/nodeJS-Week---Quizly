// the .view files are .view because they are only rendering things
// There are no actions taking place like in our auth pages

module.exports = async(req,res) => {
    res.render('dashboard', { user: req.verifiedUser.user })
}