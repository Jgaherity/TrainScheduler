
$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyB5_zoYC3_-ZkZUsgvktgFoM-i27lVt-Ls",
        authDomain: "trainscheduler-f957a.firebaseapp.com",
        databaseURL: "https://trainscheduler-f957a.firebaseio.com",
        projectId: "trainscheduler-f957a",
        storageBucket: "trainscheduler-f957a.appspot.com",
        messagingSenderId: "676667446301"
      };
      
      firebase.initializeApp(config);

    //Run Clock  
    setInterval(function(){
        $('.current-time').html(moment().format('hh:mm:ss A'))
    }, 1000);

    //when clicking submit: 
    $('.submit').on('click', function(e) {
        //console.log("test submit");

        var trainName = $("#trainNameInput").val().trim();
        var trainDestination = $("#destinationInput").val().trim();
        var trainTime = $("#trainTimeInput").val().trim();
        var trainFrequency = $("#frequencyInput").val().trim();

        console.log(trainName);
        console.log(trainDestination);
        console.log(trainTime);
        console.log(trainFrequency);


        //push to firebase 
        dataRef.ref().child('trains').push({
            // trainName: trainName,
            // trainDestination: trainDestination,
            // trainTime: trainTime,
            // trainFrequency: trainFrequency,
        });
  
        //need to post to table as well. 


    });


});