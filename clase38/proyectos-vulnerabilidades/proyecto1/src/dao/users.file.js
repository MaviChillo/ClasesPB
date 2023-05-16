import fs from 'fs';
import __dirname from '../utils.js';

//esto tampoco se usa

export default class UserService {
    constructor() {
        this.path(`${__dirname}/files/users.json`)
    }
}