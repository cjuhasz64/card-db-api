import { TableName } from './enums.js';

import express, { json } from 'express';
import cors from 'cors';
import { createRecord, getSingleRecord, getAllRecords, deleteRecord, updateRecord } from './resources.js';


class Server {
    app = express();
    apiV1 = express.Router();

    constructor() {
        this.app.use(json());
        this.app.use(cors());
        this.app.use('/api/v1', this.apiV1);

        this.defineRoutes();
        
        this.app.listen(3000, () =>{
            console.log('server start');
        })
    }

    defineRoutes() {
        this.apiV1.post('/users', createRecord(TableName.USERS));
        this.apiV1.get('/users/:id', getSingleRecord(TableName.USERS));
        this.apiV1.get('/users', getAllRecords(TableName.USERS));
        this.apiV1.delete('/users/:id', deleteRecord(TableName.USERS));
        this.apiV1.put('/users/:id', updateRecord(TableName.USERS));

        this.apiV1.post('/games', createRecord(TableName.GAMES));
        this.apiV1.get('/games/:id', getSingleRecord(TableName.GAMES));
        this.apiV1.get('/games', getAllRecords(TableName.GAMES));
        this.apiV1.delete('/games/:id', deleteRecord(TableName.GAMES));
        this.apiV1.put('/games/:id', updateRecord(TableName.GAMES));

        this.apiV1.post('/features', createRecord(TableName.FEATURES));
        this.apiV1.get('/features/:id', getSingleRecord(TableName.FEATURES));
        this.apiV1.get('/features', getAllRecords(TableName.FEATURES));
        this.apiV1.delete('/features/:id', deleteRecord(TableName.FEATURES));
        this.apiV1.put('/features/:id', updateRecord(TableName.FEATURES));

        this.apiV1.post('/teams', createRecord(TableName.TEAMS));
        this.apiV1.get('/teams/:id', getSingleRecord(TableName.TEAMS));
        this.apiV1.get('/teams', getAllRecords(TableName.TEAMS));
        this.apiV1.delete('/teams/:id', deleteRecord(TableName.TEAMS));
        this.apiV1.put('/teams/:id', updateRecord(TableName.TEAMS));

        this.apiV1.post('/cards', createRecord(TableName.CARDS));
        this.apiV1.get('/cards/:id', getSingleRecord(TableName.CARDS));
        this.apiV1.get('/cards', getAllRecords(TableName.CARDS));
        this.apiV1.delete('/cards/:id', deleteRecord(TableName.CARDS));
        this.apiV1.put('/cards/:id', updateRecord(TableName.CARDS));

        this.apiV1.post('/sets', createRecord(TableName.SETS));
        this.apiV1.get('/sets/:id', getSingleRecord(TableName.SETS));
        this.apiV1.get('/sets', getAllRecords(TableName.SETS));
        this.apiV1.delete('/sets/:id', deleteRecord(TableName.SETS));
        this.apiV1.put('/sets/:id', updateRecord(TableName.SETS));

        this.apiV1.post('/varieties', createRecord(TableName.VARIETIES));
        this.apiV1.get('/varieties/:id', getSingleRecord(TableName.VARIETIES));
        this.apiV1.get('/varieties', getAllRecords(TableName.VARIETIES));
        this.apiV1.delete('/varieties/:id', deleteRecord(TableName.VARIETIES));
        this.apiV1.put('/varieties/:id', updateRecord(TableName.VARIETIES));
        
        this.apiV1.post('/features_link', createRecord(TableName.FEATURES_LINK));
        this.apiV1.get('/features_link/:id', getSingleRecord(TableName.FEATURES_LINK));
        this.apiV1.get('/features_link', getAllRecords(TableName.FEATURES_LINK));
        this.apiV1.delete('/features_link/:id', deleteRecord(TableName.FEATURES_LINK));
        this.apiV1.put('/features_link/:id', updateRecord(TableName.FEATURES_LINK));   
    }
}

export default new Server();



 

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