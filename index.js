
const express = require('express');
const Datastore = require('nedb');
const app = express();
require('dotenv').config();


const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('Starting server at ${port}')});
app.use(express.static('Spomin'));
app.use(express.json({ limit: '1000mb' }));



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

//////////////////////////////////////////////////////////////
////_MAX TimeStamp

const tsMax_easy = new Datastore('tsMax_easy.db');
tsMax_easy.loadDatabase();

const tsMax_normal = new Datastore('tsMax_normal.db');
tsMax_normal.loadDatabase();

const tsMax_hard = new Datastore('tsMax_hard.db');
tsMax_hard.loadDatabase();


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

//_export_

app.get('/apiEasy1', (request, response) => {

  databaseEasyAlldata.find({},(err, data) => {
    response.json(data);
    if (err) {
      response.err();
      return;
    }
  })
})

app.get('/apiNormal1', (request, response) => {

  databaseNormalAlldata.find({},(err, data) => {
    response.json(data);
    if (err) {
      response.err();
      return;
    }
  })
})

app.get('/apiHard1', (request, response) => {

  databaseHardAlldata.find({},(err, data) => {
    response.json(data);
    if (err) {
      response.err();
      return;
    }
  })
})

/////////////////////////////////////////////////////////////


//_export_MAXst



app.post('/apiEasyTS', (request, response) => {
    const body = request.body;

    tsMax_easy.insert({
    timeStamp: body.timeStamp
    });

    response.json({
    timeStamp: body.timeStamp
    });
  });

  app.get('/apiTSmaxEasy', (request, response) => {

    tsMax_easy.find({},(err, data) => {
      response.json(data);
      if (err) {
        response.err();
        return;
      }
    })
  })
/////////////////////////////////////////////////////////////

app.post('/apiNormalTS', (request, response) => {
    const body = request.body;

    tsMax_normal.insert({
    timeStamp: body.timeStamp
    });

    response.json({
    timeStamp: body.timeStamp
    });
  });

app.get('/apiTSmaxNormal', (request, response) => {

  tsMax_normal.find({},(err, data) => {
    response.json(data);
    if (err) {
      response.err();
      return;
    }
  })
})
////////////////////////////////////////////////////////////////

app.post('/apiHardTS', (request, response) => {
    const body = request.body;

    tsMax_hard.insert({
    timeStamp: body.timeStamp
    });

    response.json({
    timeStamp: body.timeStamp
    });
  });

app.get('/apiTSmaxHard', (request, response) => {

  tsMax_hard.find({},(err, data) => {
    response.json(data);
    if (err) {
      response.err();
      return;
    }
  })
})


// app.post('/apiTSmaxNormal', (request, response) => {
//     const body = request.body;}
// );
//
// app.post('/apiTSmaxHard', (request, response) => {
//     const body = request.body;}
// );

//_export_end

app.post('/api', (request, response) => {
  console.log('I got a request!');
    const body = request.body;


//     databaseEasyAlldata.insert([
//     {"timeX":"23","time":"0min : 23sec","moves":12,"name":"Rok Hočevar","nick":"Rokec","sola":"Šcnm","mail":"rhocevar6rok23452345@gmail.com","gdpr":"on","timeStamp":"1650617844"},
//     {"timeX":"20","time":"0min : 20sec","moves":12,"name":"Nejc Korošec","nick":"Nejko","sola":"SPSŠ ZREČE","mail":"nejc.korosec21@gmail.com","gdpr":"on","mailing":"on","timeStamp":"1650168961"},
//     {"timeX":"21","time":"0min : 21sec","moves":14,"name":"Lukas Lešnjak Pelko","nick":"Motorhead","sola":"ŠCNM","mail":"vy5k45@gmail.com","gdpr":"on","mailing":"on","timeStamp":"1650617503"}
// ], function (err, newDocs) {
//     });
//
//     databaseEasy.insert([
//       {"timeX":"23","time":"0min : 23sec","moves":12,"nick":"Rokec"},
//       {"timeX":"21","time":"0min : 21sec","moves":14,"nick":"Motorhead"},
//       {"timeX":"20","time":"0min : 20sec","moves":12,"nick":"Nejko"}
// ], function (err, newDocs) {
//     });
//
//
//
//     databaseNormalAlldata.insert([
//       {"timeX":"44","time":"0min : 44sec","moves":25,"name":"Nick Bohorč","nick":"Bohorč","sola":"SCNM","mail":"nickbohorc33@gmail.com","gdpr":"on","mailing":"on","timeStamp":"1650617567"},
//       {"timeX":"38","time":"0min : 38sec","moves":18,"name":"Domen Janežič","nick":"Domen","sola":"Srednja šola tehničnih strok šiška","mail":"domen.janezic11@gmail.com","gdpr":"on","mailing":"on","timeStamp":"1650183180"},
//       {"timeX":"38","time":"0min : 38sec","moves":27,"name":"Aleks Smolič","nick":"Smolič","sola":"Mehatronika","mail":"aleks.smolic@gmail.com","gdpr":"on","mailing":"on","timeStamp":"1650617187"}
//
// ], function (err, newDocs) {
//     });
//
//     databaseNormal.insert([
//       {"timeX":"44","time":"0min : 44sec","moves":25,"nick":"Bohorč"},
//       {"timeX":"38","time":"0min : 38sec","moves":27,"nick":"Smolič"},
//       {"timeX":"38","time":"0min : 38sec","moves":18,"nick":"Domen"}
// ], function (err, newDocs) {
//     });
//
//
//
//     databaseHardAlldata.insert([
//       {"timeX":"73","time":"1min : 13sec","moves":34,"name":"Domen Janežič","nick":"Domen","sola":"Srednja šola tehničnih strok šiška","mail":"domen.janezic11@gmail.com","gdpr":"on","mailing":"on","timeStamp":"1650043220"},
//       {"timeX":"57","time":"0min : 57sec","moves":32,"name":"Luka Cvitko","nick":"lukac","sola":"SCNM","mail":"lukacvitko005@gmail.com","gdpr":"on","timeStamp":"1650365414"},
//       {"timeX":"73","time":"1min : 13sec","moves":38,"name":"Luka cvitko","nick":"luka","sola":"SCNM ","mail":"lukacvitko005@gmail.com","gdpr":"on","timeStamp":"1650611147"}
//
// ], function (err, newDocs) {
//     });
//
//     databaseHard.insert([
//       {"timeX":"73","time":"1min : 13sec","moves":34,"nick":"Domen"},
//       {"timeX":"73","time":"1min : 13sec","moves":38,"nick":"luka"},
//       {"timeX":"57","time":"0min : 57sec","moves":32,"nick":"lukac"}
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
     drzava: body.drzava,
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
     drzava: body.drzava,
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
     drzava: body.drzava,
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
