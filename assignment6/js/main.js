$( document ).ready( function() {
   // $('#csubmit').on('click',getQuestions);
    $( "#gametable" ).click( displayQuestion );
} );
var questions = {};
var questionsCount = 0;
var categories = [];
var teams = [];
var teamScores = [];
var questiononboard = false;
function Question( a, b, c ) {
    this.question = a;
    this.answer = b;
    this.points = c;
}

function displayQuestion( e ) {
    console.log( "in main.js displayQuestion" );
    var node = e.target;
    if ( !questiononboard && $( node ).attr( "data-question" ) &&  !$( node ).hasClass( "strikethrough" ) ) {
        //alert($(node).attr('data-question'));
       // $("#prompt").css("height","60%");
       $( "#prompt" ).height( $( "#gametable" ).height() * 0.8 );
       $( "#prompt" ).css( "margin-top", $( "#gametable" ).height() * 0.1 );
        $( "#prompt" ).css( "display", "block" );
        $( "#ask" ).text( $( node ).attr( "data-question" ) );
        $( "#ask" ).attr( "data-points", $( node ).attr( "data-points" ) );
        $( "#answer" ).css( "visibility", "hidden" );
        $( "#answer" ).text( $( node ).attr( "data-answer" ) );
        $( "#closebtn" ).on( "click", function( e ) {closePrompt( node ); } );
         questiononboard = true;
    }
    return false;
}

function showAnswer() {
    $( "#answer" ).css( "visibility", "visible" );
    console.log( "worked?" );
}

function closePrompt( node ) {
    //$("#prompt").css("display","none");
    $( "#prompt" ).hide( "slide" );
    $( node ).addClass( "strikethrough" );
     //$('#gametable').on('click');
     questiononboard = false;
}
