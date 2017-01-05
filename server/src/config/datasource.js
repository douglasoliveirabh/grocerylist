import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

let database = null;

const loadModels = (mongoose, Schema) => {
    const dir = path.join(__dirname, '../models');
    let models = [];
    fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir, file);
        const model = require(modelDir).default(mongoose, Schema);        

        models[model.modelName] = model;        
    });    

    return models;
}

export default (app) =>{
    if(!database){
        const config = app.config;
        const Schema = mongoose.Schema;

        mongoose.Promise = global.Promise;

        database = {            
            Schema,
            mongoose,
            models: {}
        }

        database.models = loadModels(mongoose, Schema);
        mongoose.connect(config.database.connectionstring,
                         config.database.options, 
                         (err) => {
                             if(!err){
                                 return database;
                             }
                         })
            
    }

    return database;
}
