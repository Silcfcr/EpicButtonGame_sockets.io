console.log("connection!")
let socket = io( 'http://localhost:8888' );

$( '.buttonClicker' ).on( 'submit', function(event){
    event.preventDefault();
    console.log("Hello!")

    socket.emit( 'button_clicked' );
});

socket.on( 'showAll', function( data ){
    console.log(data + " Client side");
    let newH1 = `The button has been pushed ${data} times(s)`;
    $( '.counter' ).text( newH1 );
});


$( '.reset' ).on( 'submit', function(event){
    event.preventDefault();
    console.log("Hello reset!")
    socket.emit( 'reset_clicked' );
});

