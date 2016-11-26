"use strict";

const Model = require('objection').Model;

class User extends Model {
    static get tableName() {
        return "user";
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'name',
                'email',
                'password_digest'
            ],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                email: { type: 'string' },
                password_digest: { type: 'string' }
            }
        };
    }


}