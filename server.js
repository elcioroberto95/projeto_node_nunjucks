const express = require('express');
const nunjucks = require('nunjucks');

const videos = require('./data')
const profile = require('./user')
const server = express();

server.use(express.static('public'));
server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});
server.get('/', function (req, res) {
  res.render('about', {
    items: profile
  })
});
server.get('/classes', function (req, res) {
  res.render('classes', {
    items: videos
  })
});

server.get('/video', function (req, res) {
  const id = req.query.id
  var video = videos.find((video) => video.id = id);
  if (!video) {
    video = 'video not found';
  }

  res.render('video', {
    items: video
  });

})
server.listen(5000, () => {
  console.log('Servidor inicializado');
})