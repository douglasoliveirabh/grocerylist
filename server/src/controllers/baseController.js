import errorResponse from './errorresponse';
import defaultResponse from './defaultresponse';
import mongoose from 'mongoose';

class BaseController {

    constructor(model) {
        this.Model = model;
    }

    GetAll() {
        return this
            .Model
            .find()
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
    }

    GetById(id) {
        return this
            .Model
            .findById(id)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
    }

    Create(newModel) {
        return this
            .Model
            .create(newModel)
            .then(result => defaultResponse(result, 201))
            .catch(error => errorResponse(error.message));
    }

    Update(id, updatedModel) {
        return this
            .Model
            .update({ _id: id }, updatedModel)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message));
    }
}


export default BaseController;