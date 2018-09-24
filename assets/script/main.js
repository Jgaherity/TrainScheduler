 
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
 
      //create a variable to reference the database
      var database=firebase.database();
 
    //Run Clock 
    setInterval(function(){
        $('.current-time').html(moment().format('hh:mm:ss A'))
    }, 1000);
 
    //initial values
    var trainName;
    var trainDestination;
    var trainTime;
    var trainFrequency;
 
    //when clicking submit:
    $('.submit').on('click', function(event) {
        event.preventDefault();
        //console.log("test submit");
 
        trainName = $("#trainNameInput").val().trim();
        trainDestination = $("#destinationInput").val().trim();
        trainTime = $("#trainTimeInput").val().trim();
        trainFrequency = $("#frequencyInput").val().trim();
 
        //check if values were grabbed
        console.log(trainName);
        console.log(trainDestination);
        console.log(trainTime);
        console.log(trainFrequency);
 
        database.ref().set({
            trainName: trainName,
            trainDestination: trainDestination,
            trainTime: trainTime,
            trainFrequency: trainFrequency,
 
        });
 
        // $("table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
        $("table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td>");
 
    });




        // // Firebase watcher + initial loader HINT: .on("value")
         database.ref().on("value", function(snapshot) {
 
             // Log everything that's coming out of snapshot
             console.log(snapshot.val());
             console.log(snapshot.val().trainName);
             console.log(snapshot.val().trainDestination);
             console.log(snapshot.val().trainTime);
             console.log(snapshot.val().trainFrequency);
     
             // Change the HTML to reflect
             $("#trainName").text(snapshot.val().trainName);
             $("#destination").text(snapshot.val().trainDestination);
             $("#frequency").text(snapshot.val().trainFrequency);
             $("#minAway").text(snapshot.val().trainTime);
     
             // Handle the errors
           }, function(errorObject) {
             console.log("Errors handled: " + errorObject.code);
         });
     
 
});
 

 