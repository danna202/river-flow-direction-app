const {Client} = require('pg');

const client = new new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'postgres',
    database: 'postgres'
});

client.connect();

client.query('SELECT * FROM users', (err, res) => {
    console.log(err, res);
    client.end();
}
);


