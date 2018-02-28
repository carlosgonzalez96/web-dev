var app = angular.module( "myjeopardy", [ "ngAnimate" ] );
app.controller( "myCtrl", function( $scope, $http ) {
    $scope.ngteam1 = "Left";
    $scope.ngteam2 = "Right";
    $scope.ngscore = [ 0, 0, 0, 0 ];
    $scope.ngteams = [ "Portland", "Mumbai" ];
    $scope.questions = [];
    $scope.questionsCount = 0;
    $scope.categories = [];

	$scope.scoreFor = function( index ) {
	    $scope.ngscore[ index ] =  $scope.ngscore[ index ] + Math.floor( $( "#ask" ).attr( "data-points" ) );
        $( "#ask" ).attr( "data-points", 0 );
    };
    $scope.getQuestions = function(  ) {
        console.log( "Getting Questions" );
        $( "#landing" ).css( "display", "none" );
        var categories = [];
        for ( var i = 1; i < 17; i++ ) {
            if ( $( "#c" + i ).is( ":checked" ) ) {
                categories.push( $( "#c" + i ).val(  ) );
                $scope.categories.push( $( "#c" + i ).val(  ) );
            }
        }
        if ( categories.length != 5 ) {alert( "Please pick FIVE categories" ); return;}
        categories.forEach( function( cat ) {
            var url = "/jeopardy/questions/" + cat;
            $http.get( url ).then( function( response ) {
                var url = response.config.url;
                var cat = url.substr( url.lastIndexOf( "/" ) + 1 );
                console.log( "cat=" + cat );
                $scope.addQuestions( response.data, cat );
            } );
        } );
    };
    $scope.addQuestions = function( data, cat ) {
        console.log( "Adding Questions:" + cat );
        var questionSubSet = [];
        $( data ).each(
        function( i, val ) {
            for ( j = 0; j < 5; j++ ) {
                var myobj = val.questions[ j ];
                questionSubSet.push( new Question( myobj.question, myobj.answer, myobj.points ) );
                $scope.questionsCount++;

                //uestions.push( new Question( myobj.question,myobj.answer,myobj.points ) );
            }
        }
         );
        $scope.questions[ cat ] = questionSubSet;

        $( "#game" ).css( "display", "block" );
        $( "#results" ).css( "display", "block" );
    };
} );
