import { v4 } from 'uuid';
import database from '../database.js';
import crypto from '../crypto.js';

try {
    const id = v4();
    const password_hash = await crypto.hashPassword('password');
    await database.knex('users')
        .insert({
            id,
            "name":"cameron",
            "username":"cameron",
            "email":"cameron",
            "password_hash": password_hash,
            "created_at": new Date(),
            "updated_at": new Date()
        })
        .then(function () {  
            console.log("successful seeding user")
        })
} catch (error) {
    console.log(error)
}
 