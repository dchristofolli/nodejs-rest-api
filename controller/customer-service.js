
module.exports = app => {
    app.get('/customer-services', (req, res) => res.send('You are on customer service route'))
    app.post('/customer-services', (req,res) => {
        console.log(req.body)
        res.send('You are on customer service route and making a post')
    })
}