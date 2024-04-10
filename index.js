const pg = require('pg')

const client = new pg.Client({
    user: 'postgres',
    password : 'password',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    ssl : {
        rejectUnauthorized: false
    }
})

client.connect()
.then(
    () => {
        console.log('conectado a postgres');
    }
)
.catch(
    (err) => {
        console.error('Error de conexion');
        console.log(err);
    }
)

console.log("Hola mundo")
