'use strict';

const fs      = require('fs');
const cfg     = require('../config.js');
const pkg     = require('../package.json');
const Discord = require('discord.js');
const bot     = new Discord.Client();
var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/messages/send', function (req, res) {
  if(cfg.api_key == req.body.api_key){
    if(!req.body.users || !req.body.message){
      var answer = "Missing Parameters"
      var status_code = 422
    }else{
      try{
        var users = JSON.parse(req.body.users)
        var answer = []
        users.forEach(function(user){
          answer.push(send_message(user,req.body.message))
        })
        var status_code = 200
      }catch(error){
        var answer = "Something is wrong with the User Array"
        var status_code = 422
      }
    }
  }else{
    var answer = "Unauthorized"
    var status_code = 401
  }
  res.send(answer,status_code)
})


bot.login(cfg.token).then(() => {
  console.log('Running!');
});

app.listen(cfg.port);


function send_message(user_id,message){
  try{
    var user = bot.users.get(user_id+"")
    var msg_tmp = message.split("%?username?%").join(user.username).split("\\n").join("\n")
    user.sendMessage(msg_tmp)
    return [user_id,"success"]
  }catch(err){
    console.log(err)
    return [user_id,"error"]
  }
}

