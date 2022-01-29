const CustomerService = require('../model/customer_service_model')
module.exports = app => {
    app.get('/customer-services', (req, res) => {

    })

    app.post('/customer-services', (req,res) => {
        const customerService = req.body;
        CustomerService.add(customerService, res);
    })
}