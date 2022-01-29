const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/connection')
const Tables = require('./infrastructure/tables')

connection.connect((error=>{
    if(error){
        console.error(error)
    }
    else{
        console.log('Connected')
        Tables.init(connection)
        const app = customExpress()
        app.listen(3000, ()=> console.log('server running on port 3000'))
    }
}))
