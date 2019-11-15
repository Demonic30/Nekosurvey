var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://dpypebjgwshfqv:54aecf7e68a2751929d3238e772ab2a99b4e583d88c817bdeebb0fd09d8b5f89@ec2-54-235-104-136.compute-1.amazonaws.com:5432/d4p6ukgjp7bm8q?ssl=true')

db.any("select * from questions ")
    .then(data => { console.log(data) })
    .catch(error => { console.log(error) });

