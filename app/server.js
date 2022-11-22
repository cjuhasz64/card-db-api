import database from './database.js';
import { TableName } from './enums.js';

import express, { json } from 'express';
import { createRecord, getSingleRecord, getAllRecords, deleteRecord, updateRecord } from './resources.js';

const app = express();

app.use(express.json());


app.post('/users', createRecord(TableName.USERS));
app.get('/users/:id', getSingleRecord(TableName.USERS));
app.get('/users', getAllRecords(TableName.USERS));
app.delete('/users/:id', deleteRecord(TableName.USERS));
app.put('/users/:id', updateRecord(TableName.USERS));

app.post('/games', createRecord(TableName.GAMES));
app.get('/games/:id', getSingleRecord(TableName.GAMES));
app.get('/games', getAllRecords(TableName.GAMES));
app.delete('/games/:id', deleteRecord(TableName.GAMES));
app.put('/games/:id', updateRecord(TableName.GAMES));

app.post('/featureds', createRecord(TableName.FEATUREDS));
app.get('/featureds/:id', getSingleRecord(TableName.FEATUREDS));
app.get('/featureds', getAllRecords(TableName.FEATUREDS));
app.delete('/featureds/:id', deleteRecord(TableName.FEATUREDS));
app.put('/featureds/:id', updateRecord(TableName.FEATUREDS));

app.post('/teams', createRecord(TableName.TEAMS));
app.get('/teams/:id', getSingleRecord(TableName.TEAMS));
app.get('/teams', getAllRecords(TableName.TEAMS));
app.delete('/teams/:id', deleteRecord(TableName.TEAMS));
app.put('/teams/:id', updateRecord(TableName.TEAMS));

app.post('/cards', createRecord(TableName.CARDS));
app.get('/cards/:id', getSingleRecord(TableName.CARDS));
app.get('/cards', getAllRecords(TableName.CARDS));
app.delete('/cards/:id', deleteRecord(TableName.CARDS));
app.put('/cards/:id', updateRecord(TableName.CARDS));

app.post('/sets', createRecord(TableName.SETS));
app.get('/sets/:id', getSingleRecord(TableName.SETS));
app.get('/sets', getAllRecords(TableName.SETS));
app.delete('/sets/:id', deleteRecord(TableName.SETS));
app.put('/sets/:id', updateRecord(TableName.SETS));

app.post('/varieties', createRecord(TableName.VARIETIES));
app.get('/varieties/:id', getSingleRecord(TableName.VARIETIES));
app.get('/varieties', getAllRecords(TableName.VARIETIES));
app.delete('/varieties/:id', deleteRecord(TableName.VARIETIES));
app.put('/varieties/:id', updateRecord(TableName.VARIETIES));

app.post('/featureds_multi', createRecord(TableName.FEATUREDS_MULTI));
app.get('/featureds_multi/:id', getSingleRecord(TableName.FEATUREDS_MULTI));
app.get('/featureds_multi', getAllRecords(TableName.FEATUREDS_MULTI));
app.delete('/featureds_multi/:id', deleteRecord(TableName.FEATUREDS_MULTI));
app.put('/featureds_multi/:id', updateRecord(TableName.FEATUREDS_MULTI));










app.listen(3000, () =>{
    console.log(TableName.USERS);
})



 

// database.knex.schema.createTable('varieties', function (table) {
//     table.string('id');
//     table.string('name');
//     table.string('username');
//     table.timestamps();
// })
// .then(function (id) {
//     console.log('table added');
// })
// .catch(function (error) { 
//     console.error(error); 
// });