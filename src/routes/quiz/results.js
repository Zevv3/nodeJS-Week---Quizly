const axios = require('axios')

module.exports = async (req,res) => {
    const query = `
    query submissionById($id: ID!){
        submissionById(id: $id) {
            id,
            quiz {
                title
            },
            user {
                id
            },
            score
        }
    }`
    
    let submission = {}

    try {
        const { data } = await axios.post("http://localhost:3000/graphql",
            {
                query,
                variables: {
                id: req.params.id
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            submission = data.data.submissionById

            if (submission.user.id !== req.verifiedUser.user._id) {
                res.redirect('/submissions')
            }
    }
    catch(err) {
        console.log(err.response.data);
        res.redirect('/')
    }
    res.render('quiz-results', { submission })
}