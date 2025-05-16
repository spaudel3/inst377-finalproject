const express = require("express");
const supabaseClient = require(`@supabase/supabase-js`);
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// const supabaseUrl = process.env.SUPABASE_URL;
const supabaseUrl = 'https://tdhnnczikumtzywdgdsq.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaG5uY3ppa3VtdHp5d2RnZHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTk0NjEsImV4cCI6MjA2MjczNTQ2MX0.DMWY9CV-lZnvFYrCmjiGw91aOIfBHFLjkOq_bdP5ufA';
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
    res.sendFile('records_home.html', { root: __dirname });
});

app.get('/users', async (req, res) => {
    console.log('Attempting to GET all users!');

    const { data, error } = await supabase.from('user').select();

    if(error) {
        console.log(`Error: ${error}`);
        res.statusCode = 500;
        res.send(error);
    }

    res.send(data)
});

app.post('/user', async (req, res) => {
    console.log('Adding User')

    console.log(req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const monster = req.body.monster;

    const { data, error } = await supabase
    .from('user')
    .insert({ user_first_name: firstName, user_last_name: lastName, user_favorite_hero: monster })
    .select()

    if(error) {
        console.log(`Error: ${error}`);
        res.statusCode = 500;
        res.send(error);
    }

    res.send(data);
})

app.listen(port, () => {
    console.log('App is active on port', port);
});