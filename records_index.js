const express = require("express");
// express -v not working even though I have it
const supabaseClient = require(`@supabase/supabase-js`);
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
const supabaseUrl = 'https://tdhnnczikumtzywdgdsq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaG5uY3ppa3VtdHp5d2RnZHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTk0NjEsImV4cCI6MjA2MjczNTQ2MX0.DMWY9CV-lZnvFYrCmjiGw91aOIfBHFLjkOq_bdP5ufA';
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/users', async (req, res) => {
    console.log('Attempting to GET all users!');

    const { data, error } = await supabase.from('user').select();

    res.send(data)
});

app.listen(port, () => {
    console.log('App is active on port', port);
});