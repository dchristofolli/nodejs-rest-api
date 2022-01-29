class Tables {
    init(connection) {
        this.connection = connection

        this.createCustomService()
    }

    createCustomService() {
        const sql = 'CREATE TABLE IF NOT EXISTS CUSTOMER_SERVICE ( '+
            'id int NOT NULL AUTO_INCREMENT PRIMARY KEY, '+
            'customer varchar(50) NOT NULL, '+
            'pet_name varchar(20), '+
            'service varchar(20) NOT NULL, '+
            'date datetime NOT NULL, '+
            'creation_date datetime NOT NULL, '+
            'status varchar(20) NOT NULL, '+
            'annotations text)'

        this.connection.query(sql, erro => {
            if(erro) {
                console.log(erro)
            }
        })
    }
}

module.exports = new Tables