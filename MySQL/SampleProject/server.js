const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const knex = require('knex')({
  client: 'mysql',
  debug: true,
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
  }
});
const bookshelf = require('bookshelf')(knex);
const User = bookshelf.Model.extend({
  idAttribute: 'id',
  tableName: 'users'
});

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.post("/submit/:name/:age",async (req,res) => {
  console.log("value inserted");
  let name=  req.params.name;
  let age=  req.params.age;
  let data = {'name': name , 'age' : age}
  // let value = await User.forge(data).save();

  try {
    let user = await new User().save(data,{patch: false});
  } catch (error) {
    console.log(error);
  }
  
})

  // let user = await new User({id: 2}).save(data, { method: 'update' });

  // let user = await new User({id: 2}).fetch();

  // user.save(data);

  // user.get('id');
  // user.toJSON()

  // user.set('name', 'ABC');
  // user.save();

  


app.get("/",async(req,res)=> {
  let val = await User.fetchAll();
  let value = val.toJSON();
  let count = await User.count();
  console.log('No of entries :'+ count);
  
  res.render("index",{
    task : value,
    msg : count
  })
});
app.listen(3000, () => console.log("App listening at port 3000"));