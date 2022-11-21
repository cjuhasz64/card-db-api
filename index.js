import database from './database.js';
import { TableName } from './enums.js';

import express, { json } from 'express';
import { v4 } from 'uuid';
import { createRecord, getSingleRecord, getAllRecords, deleteRecord, updateRecord } from './resources.js';

const app = express();

app.use(express.json());

// app.get('/users', (req, res) => {
    

//     console.log(req.body)
//     res.send(201)

// })


app.post('/users', createRecord(TableName.USERS));
app.get('/users/:id', getSingleRecord(TableName.USERS));
app.get('/users', getAllRecords(TableName.USERS));
app.delete('/users/:id', deleteRecord(TableName.USERS));
app.put('/users/:id', updateRecord(TableName.USERS));



app.listen(3000, () =>{
    console.log(TableName.USERS);
})





// database.knex.schema.createTable('users', function (table) {
//     table.string('id');
//     table.string('name');
//     table.string('age');
//     table.string('gender');
//     table.timestamps();
// })
// .then(function (id) {
//     console.log('table added');
// })
// .catch(function (error) { 
//     console.error(error); 
// });