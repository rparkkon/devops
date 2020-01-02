//import sql from 'mssql'

const config = {
    user: 'sa',
    password: 'x1pekka',
    server: '192.168.0.63\\S10', // You can use 'localhost\\instance' to connect to named instance
    database: 'MediTree',
    port: 49882, 
    options: {
        trustedConnection: false,        
        encrypt: false // Use this if you're on Windows Azure
    }
}

var sql = require('mssql')
console.log('getInfo 01: ', sql)
console.dir(sql)

const getInfo = async (value) => {
    console.log('getInfo 2: ', value)
    try {
        let pool = await sql.connect(config)
        console.log('pool :',  pool)
        let result1 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .query('select * from mytable where id = @input_parameter')
            
        console.dir(result1)
    
        // Stored procedure
        
        let result2 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .output('output_parameter', sql.VarChar(50))
            .execute('procedure_name')
        
        console.dir(result2)
    } catch (err) {
        console.log("error: ", err)
        // ... error checks
    }
}


const getInfo1 = (value) => {
    console.log('getInfo:', value)

    sql.connect(config).then(pool => {
        console.log('getInfo Query')
        // Query
        
        return pool.request()
        .input('input_parameter', sql.Int, value)
        .query('select * from organis')
     //   .query('select * from mytable where id = @input_parameter')

    }).then(result => {
        console.dir(result)
    }).catch(err => {
        // ... error checks
    })
    
    sql.on('error', err => {
        // ... error handler
    })
}

export default { getInfo, getInfo1 }