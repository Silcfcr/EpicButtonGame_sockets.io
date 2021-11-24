// npm init -y
// npm i express
//npm i ejs 
// npm install express-session
// mkdir views // create views folder
// touch index.ejs // create index.ejs file in views folder


const { application } = require('express');
const express = require( 'express' );
// var session = require('express-session');

const app = express();
// to use ejs
// app.use(session({ secret: 'codingdojorocks' }));

app.use(express.static(__dirname + "/public"));

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

const server = app.listen(8888)
const io = require ('socket.io')(server);

let count = 0; 

app.get( '/', function( request, response ){
    data = {
        count: count
    }

    response.render( 'index', data );
});
// app.use( express.urlencoded({extended:true}) );


io.on( 'connection', function( socket ){
    console.log( "Someone just connected!" );

    

    socket.on( 'button_clicked', function(){
        count ++;
        console.log( "count in server side is " + count);
        io.sockets.emit( 'showAll', count )
    });

    socket.on( 'reset_clicked', function(){
        count = 0;
        io.sockets.emit( 'showAll', count )
    });

    
});
