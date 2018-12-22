 const { EventEmitter } = require('events');

// const eventEm = new EventEmitter();

// eventEm.on('greet', function () {
//     console.log('i am hamdlimg greet event')
// })
// eventEm.once('hello', function () {
//     console.log('i am hamdlimg hello event')
// })
// eventEm.once('add', function (a=10,b=10) {
//     const result= a + b;
//     console.log(this);
// })

// eventEm.once('remove', ()=>{
//     console.log(this);
// })

// //Asynch events

// eventEm.on('async',function(){
//     setTimeout(function(){console.log('settimeImmediate')},2000)
// })

// eventEm.emit('greet');
// eventEm.emit('async');
// eventEm.emit('hello');

class Room extends EventEmitter {
    constructor(){
        super();
        this.on('init',function(){
            console.log('light system on');
            console.log('temo system on');
        })
        this.on('destroy',function(){
            console.log('light system off');
            console.log('temo system off');
        })
    }
    open(){
        this.emit('init');
    }
    close(){
        this.emit('destroy');
    }
}

const room = new Room();
//room.open();
//room.close();
setTimeout(()=>{room.open()},1000);
setTimeout(()=>{room.close()},5000);