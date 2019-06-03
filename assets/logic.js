var firebaseConfig = {
  apiKey: "AIzaSyAUogC_ZFqrJ4gPt1vaTwTda1N9biuaqnU",
  authDomain: "traintime-ff56e.firebaseapp.com",
  databaseURL: "https://traintime-ff56e.firebaseio.com",
  projectId: "traintime-ff56e",
  storageBucket: "",
  messagingSenderId: "1090698134289",
  appId: "1:1090698134289:web:68a7224e48a27e9d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// Initialize var
var trainName = "";
var destination = "";
var firstTrainTime = "";
var frequency = 0

$(".addTrain").on("click", function (event) {
  event.preventDefault();

  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  frequency = $("#frequency").val().trim();
  firstTrainTime = $("#firstTrainTime").val();
  frequency = $("#frequency").val().trim();

  database.ref().push({
    trainName: trainName,
    destination: destination,
    frequency: frequency,
    firstTrainTime: firstTrainTime,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

database.ref().on("child_added", function (childSnapshot) {

  // stores all child elements into a variable
  var childTrainName = childSnapshot.val().trainName;
  var childDestination = childSnapshot.val().destination;
  var childFrequency = childSnapshot.val().frequency;
  var childFirstTrainTime = childSnapshot.val().firstTrainTime;


  // Train Info
  console.log(childTrainName);
  console.log(childDestination);
  console.log(childFirstTrainTime);
  console.log(childFrequency);

  var nextArrival = 

  // Creating new row to display
  var newRow = $("<tr  scope='row'>").append(
    $("<td>").text(childTrainName),
    $("<td>").text(childDestination),
    $("<td>").text(childFrequency),
);

// Appends new row to the table
$(".train-list").append(newRow);

});