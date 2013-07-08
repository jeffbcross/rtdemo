var io = require('socket.io').listen(1234)
  , servo;

io.sockets.on('connection', function (socket) {
  var five = require("johnny-five"),
    board = new five.Board();
  console.log('board created');
  board.on("ready", function() {
    console.log('board ready');
    servo = new five.Servo(6);
    socket.emit('arduino-connected');

    servo.on('move', function (deg) {
      socket.emit('update', deg);
    });

    servo.center();
  });

  socket.on('write', function (data) {
    if (servo) servo.move(data);
  });
});