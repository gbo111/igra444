
const express = require('express');
const Datastore = require('nedb');
const app = express();

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



     if ((body.timeEnd == (body.timeRe) ||
                          (body.timeRe + 1) ||
                          (body.timeRe - 1)) &&
                          (body.timeEnd == body.timeSub) &&
                          (body.diff == "easy") &&
                          (body.moves1 == body.m2)) {

      databaseEasy.insert({
      time: body.timeFinal,
      moves: body.m2,
      name: body.name

      });



    } if ((body.timeEnd == (body.timeRe) ||
                                (body.timeRe + 1) ||
                                (body.timeRe - 1)) &&
                                (body.timeEnd == body.timeSub) &&
                                (body.diff == "normal") &&
                                (body.moves1 == body.m2)) {

       databaseNormal.insert({
       time: body.timeFinal,
       moves: body.m2,
       name: body.name

       });
    } if ((body.timeEnd == (body.timeRe) ||
                                (body.timeRe + 1) ||
                                (body.timeRe - 1)) &&
                                (body.timeEnd == body.timeSub) &&
                                (body.diff == "hard") &&
                                (body.moves1 == body.m2)) {

          databaseHard.insert({
          time: body.timeFinal,
          moves: body.m2,
          name: body.name

          });

    }

///////////////////////////////////////////////////

    if ((body.timeEnd == (body.timeRe) ||
                         (body.timeRe + 1) ||
                         (body.timeRe - 1)) &&
                         (body.timeEnd == body.timeSub) &&
                         (body.diff == "easy") &&
                         (body.moves1 == body.m2)) {

     databaseEasyAlldata.insert({
     time: body.timeFinal,
     moves: body.m2,
     name: body.name,
     sola: body.sola,
     mail: body.mail

     });



   } if ((body.timeEnd == (body.timeRe) ||
                               (body.timeRe + 1) ||
                               (body.timeRe - 1)) &&
                               (body.timeEnd == body.timeSub) &&
                               (body.diff == "normal") &&
                               (body.moves1 == body.m2)) {

      databaseNormalAlldata.insert({
      time: body.timeFinal,
      moves: body.m2,
      name: body.name,
      sola: body.sola,
      mail: body.mail

      });
   } if ((body.timeEnd == (body.timeRe) ||
                               (body.timeRe + 1) ||
                               (body.timeRe - 1)) &&
                               (body.timeEnd == body.timeSub) &&
                               (body.diff == "hard") &&
                               (body.moves1 == body.m2)) {

         databaseHardAlldata.insert({
         time: body.timeFinal,
         moves: body.m2,
         name: body.name,
         sola: body.sola,
         mail: body.mail

         });

   }



    response.json({
    sfth: 8,
    gfhthzuj: 12,
    dgghg: 16,

    timeEnd:  body.time,
    timeFinal: body.timeF,
    timeRe: body.timeStampEnd - body.timeStampStart,
    moves1: body.m1


  });
 });
