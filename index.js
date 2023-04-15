import express from 'express';
import Joi from 'joi';
import { pool } from './config';
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/api/add-user', (req, res) => {
    // Define a schema for validating request body
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().email().required()
    });
    console.log(req.body, 'req.body');
    const { error, value } = schema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    pool.query('INSERT INTO user_login SET ?', value, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        res.status(201).send('User created successfully');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
