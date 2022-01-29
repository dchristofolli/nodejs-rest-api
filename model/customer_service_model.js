const connection = require('../infrastructure/connection')
const moment = require('moment')

class CustomerService{
    add(customerService, res){
        const moment_pattern = 'YYYY-MM-DD HH:mm:ss';
        const creation_date = moment(new Date()).format(moment_pattern)
        const date = moment(customerService.date, 'DD/MM/YYYY').format(moment_pattern)
        const datedCustomerService = {...customerService, creation_date, date}
        const sql = 'INSERT INTO CUSTOMER_SERVICE SET ?';
        connection.query(sql, datedCustomerService, (error, result) => {
            if(error){
                res.status(400).json(error)
            }else{
                res.status(201).json(result)
            }
            
        })
    }
}
module.exports = new CustomerService