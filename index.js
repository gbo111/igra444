
const express = require('express');
const Datastore = require('nedb');
const app = express();
require('dotenv').config();


const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('Starting server at ${port}')});
app.use(express.static('Spomin'));
app.use(express.json({ limit: '1mb' }));

 var Cryptr = require('cryptr'),
 cryptr = new Cryptr('gbo');


const databaseEasy = new Datastore('databaseEasy.db');
databaseEasy.loadDatabase();

const databaseNormal = new Datastore('databaseNormal.db');
databaseNormal.loadDatabase();

const databaseHard = new Datastore('databaseHard.db');
databaseHard.loadDatabase();


const databaseEasyAlldata = new Datastore('databaseEasyAlldata.db');
databaseEasyAlldata.loadDatabase();

const databaseNormalAlldata = new Datastore('databaseNormalAlldata.db');
databaseNormalAlldata.loadDatabase();

const databaseHardAlldata = new Datastore('databaseHardAlldata.db');
databaseHardAlldata.loadDatabase();


//HighScore

app.get('/apiEasy', (request, response) => {

  databaseEasy.find({},(err, data) => {
    response.json(data);
    if (err) {
      response.err();
      return;
    }
  })
})

app.get('/apiNormal', (request, response) => {

  databaseNormal.find({},(err, data) => {
    response.json(data);
    if (err) {
      response.err();
      return;
    }
  })
})

app.get('/apiHard', (request, response) => {

  databaseHard.find({},(err, data) => {
    response.json(data);
    if (err) {
      response.err();
      return;
    }
  })
})

//HighScoreEnd

app.post('/api', (request, response) => {
  console.log('I got a request!');
    const body = request.body;


//     databaseEasyAlldata.insert([
//     {"timeX":"23","time":"0min : 23sec","moves":12,"name":"Rok Hočevar","nick":"Rokec","sola":"Šcnm","mail":"rhocevar6rok23452345@gmail.com","gdpr":"on","timeStamp":"1650617844","_id":"DkeZNhLeqt2jJuye"},
//     {"timeX":"20","time":"0min : 20sec","moves":12,"name":"Nejc Korošec","nick":"Nejko","sola":"SPSŠ ZREČE","mail":"nejc.korosec21@gmail.com","gdpr":"on","mailing":"on","timeStamp":"1650168961","_id":"NuoML3xECugNG1wQ"},
//     {"timeX":"21","time":"0min : 21sec","moves":14,"name":"Lukas Lešnjak Pelko","nick":"Motorhead","sola":"ŠCNM","mail":"vy5k45@gmail.com","gdpr":"on","mailing":"on","timeStamp":"1650617503","_id":"fafIsrJ9XRZjtuVx"}
// ], function (err, newDocs) {
//     });
//
//     databaseEasy.insert([
//       {"timeX":"23","time":"0min : 23sec","moves":12,"nick":"Rokec","_id":"0dB24smsyAei8QmT"},
//       {"timeX":"21","time":"0min : 21sec","moves":14,"nick":"Motorhead","_id":"15z1iXQaRZS3Ds6V"},
//       {"timeX":"20","time":"0min : 20sec","moves":12,"nick":"Nejko","_id":"P1k3LefnFkVjodcX"}
// ], function (err, newDocs) {
//     });
//
//
//
//     databaseNormalAlldata.insert([
//       {"timeX":"44","time":"0min : 44sec","moves":25,"name":"Nick Bohorč","nick":"Bohorč","sola":"SCNM","mail":"nickbohorc33@gmail.com","gdpr":"on","mailing":"on","timeStamp":"1650617567","_id":"8IfMe94Fe8qoeaEY"},
//       {"timeX":"38","time":"0min : 38sec","moves":18,"name":"Domen Janežič","nick":"Domen","sola":"Srednja šola tehničnih strok šiška","mail":"domen.janezic11@gmail.com","gdpr":"on","mailing":"on","timeStamp":"1650183180","_id":"8bvh5NpALYvRaoT3"},
//       {"timeX":"38","time":"0min : 38sec","moves":27,"name":"Aleks Smolič","nick":"Smolič","sola":"Mehatronika","mail":"aleks.smolic@gmail.com","gdpr":"on","mailing":"on","timeStamp":"1650617187","_id":"wC9qqr4fxdtmraNk"}
//
// ], function (err, newDocs) {
//     });
//
//     databaseNormal.insert([
//       {"timeX":"44","time":"0min : 44sec","moves":25,"nick":"Bohorč","_id":"ZkxcSln4Y7Ry0O42"},
//       {"timeX":"38","time":"0min : 38sec","moves":27,"nick":"Smolič","_id":"gYN8eJKZXVak3ehW"},
//       {"timeX":"38","time":"0min : 38sec","moves":18,"nick":"Domen","_id":"v6V58YMq0XVRasRu"}
// ], function (err, newDocs) {
//     });
//
//
//
//     databaseHardAlldata.insert([
//       {"timeX":"73","time":"1min : 13sec","moves":34,"name":"Domen Janežič","nick":"Domen","sola":"Srednja šola tehničnih strok šiška","mail":"domen.janezic11@gmail.com","gdpr":"on","mailing":"on","timeStamp":"1650043220","_id":"Fs0xcE8PjFiF4sC8"},
//       {"timeX":"57","time":"0min : 57sec","moves":32,"name":"Luka Cvitko","nick":"lukac","sola":"SCNM","mail":"lukacvitko005@gmail.com","gdpr":"on","timeStamp":"1650365414","_id":"NlgTl7B9S08vlQq6"},
//       {"timeX":"73","time":"1min : 13sec","moves":38,"name":"Luka cvitko","nick":"luka","sola":"SCNM ","mail":"lukacvitko005@gmail.com","gdpr":"on","timeStamp":"1650611147","_id":"ini7Hu9RyinKd9Jm"}
//
// ], function (err, newDocs) {
//     });
//
//     databaseHard.insert([
//       {"timeX":"73","time":"1min : 13sec","moves":34,"nick":"Domen","_id":"0LTzwKnIGAYnKtJE"},
//       {"timeX":"73","time":"1min : 13sec","moves":38,"nick":"luka","_id":"hlTG6xtg4onfTta2"},
//       {"timeX":"57","time":"0min : 57sec","moves":32,"nick":"lukac","_id":"k1RaarSwtAv9Akj6"}
// ], function (err, newDocs) {
//     });




if ((body.timeEnd == (body.timeRe) ||
                          (body.timeRe + (1||2||3)) ||
                          (body.timeRe - (1||2||3))) &&
                          (body.timeEnd == body.timeSub) &&
                          (body.diff == "easy") &&
                          (body.moves1 == body.m2)
                        ){



     databaseEasy.insert({
     timeX: body.timeSub,
     time: body.timeFinal,
     moves: body.m2,
     nick: body.nick
     });

     databaseEasyAlldata.insert({
     timeX: body.timeSub,
     time: body.timeFinal,
     moves: body.m2,
     name: body.name,
     nick: body.nick,
     sola: body.sola,
     mail: body.mail,
     gdpr: body.gdpr,
     mailing: body.mailing,
     timeStamp: body.timeStampStart

     });
}

if ((body.timeEnd == (body.timeRe) ||
                          (body.timeRe + (1||2||3)) ||
                          (body.timeRe - (1||2||3))) &&
                          (body.timeEnd == body.timeSub) &&
                          (body.diff == "normal") &&
                          (body.moves1 == body.m2)
                        ){

     databaseNormal.insert({
     timeX: body.timeSub,
     time: body.timeFinal,
     moves: body.m2,
     nick: body.nick
     });

     databaseNormalAlldata.insert({
     timeX: body.timeSub,
     time: body.timeFinal,
     moves: body.m2,
     name: body.name,
     nick: body.nick,
     sola: body.sola,
     mail: body.mail,
     gdpr: body.gdpr,
     mailing: body.mailing,
     timeStamp: body.timeStampStart

     });
}

if ((body.timeEnd == (body.timeRe) ||
                          (body.timeRe + (1||2||3)) ||
                          (body.timeRe - (1||2||3))) &&
                          (body.timeEnd == body.timeSub) &&
                          (body.diff == "hard") &&
                          (body.moves1 == body.m2)
                        ){

     databaseHard.insert({
     timeX: body.timeSub,
     time: body.timeFinal,
     moves: body.m2,
     nick: body.nick
     });

     databaseHardAlldata.insert({
     timeX: body.timeSub,
     time: body.timeFinal,
     moves: body.m2,
     name: body.name,
     nick: body.nick,
     sola: body.sola,
     mail: body.mail,
     gdpr: body.gdpr,
     mailing: body.mailing,
     timeStamp: body.timeStampStart

     });
}


    response.json({
    sfth: 8,
    gfhthzuj: 12,
    dgghg: 16,

    timeEnd:  body.timeEnd,
    timeFinal: body.timeF,
    timeRe: body.timeStampEnd - body.timeStampStart,
    moves1: body.m1


  });
 });
