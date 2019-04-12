const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb+srv://lucaspesso4:hb-admin@hotelbuttler-server-an5bn.mongodb.net/hb-database?retryWrites=true', {
    useNewUrlParser: true
});
app.use(express.json());
app.use(require('./routes'));

app.listen(process.env.PORT || 3000);