import { v4 } from 'uuid';
import database from './database.js';
import crypto from './crypto.js';

export const createRecord = (tableName) => {
  console.log("Dwdwdwdwdw")
  return async (req, res, next) => {
    if (Object.keys(req.body).length != 0) {
      console.log(JSON.stringify(req.body) + "    " + tableName)
      try {
        if (Object.keys(req.body).includes('id')) {
          console.log("iddddd")
          await database.knex(tableName)
            .insert({
              ...req.body
            })
            .then(function (result) {
              res.sendStatus(200);
              next(console.log(" record added"));
            })
          
        } else {
          console.log("no iddddd")
          const id = v4();
          console.log(id)
          await database.knex(tableName)
            .insert({
              id,
              ...req.body
            })
            .then(function (result) {
              res.sendStatus(200);
              next(console.log(" record added"));
            })
        }
      } catch (error) {
        res.sendStatus(500);
      }
    } else {
      res.sendStatus(400);
    }
  }
}
export const getSingleRecord = (tableName) => {
  return async (req, res, next) => {
    try {
      const record = await database.knex(tableName)
        .where('id', req.params.id)
        .first();

      if (!record) {
        res.sendStatus(404);
      } else {
        res.send(record);
        next(console.log(``));
      }
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
export const getAllRecords = (tableName) => {
  return async (req, res, next) => {
    try {
      const record = await database.knex(tableName);

      if (!record) {
        res.sendStatus(404);
        return;
      } else {
        res.send(record);
        next(console.log(''));
      }
    } catch (error) {
      res.sendStatus(500);
    }
  }
}
export const deleteRecord = (tableName) => {
  return async (req, res, next) => {
    try {
      const count = await database.knex(tableName)
        .del()
        .where('id', req.params.id);

      if (count === 0) {
        res.sendStatus(404);
        return;
      } else {
        res.sendStatus(200);
        next('');
      }
    }
    catch (error) {
      res.sendStatus(500);
    }
  }
}

export const updateRecord = (tableName) => {
  return async (req, res, next) => {
    try {
      await database.knex(tableName)
        .where({ id: req.params.id })
        .update({
          ...req.body
        })
        .then(function (result) {
          res.sendStatus(200);
          next(console.log(""));
        })
    } catch (error) {
      res.sendStatus(500);
    }
  }
}






