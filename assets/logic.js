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

$(".addTrain").on("click", function (e) {
  e.preventDefault();

  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  firstTrainTime = $("#firstTrainTime").val();
  frequency = $("#frequency").val().trim();

  console.log("buttonclicked")

  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

// database.ref().on("child_added", function (childsnapshot) {

//   var childEmployee = childsnapshot.val();

//   console.log(childEmployee.name);
//   console.log(childEmployee.role);
//   console.log(childEmployee.startDate);
//   console.log(childEmployee.rate);

//   var employeeDiv = $("<tr scope='row'>");
//   //employeeDiv.attr("scope", "row");

//   var nameTd = $("<td>").text(childEmployee.name);
//   var roleTd = $("<td>").text(childEmployee.role);
//   var dateTd = $("<td>").text(childEmployee.startDate);
//   var rateTd = $("<td>").text(childEmployee.rate);

//   employeeDiv.append(nameTd);
//   employeeDiv.append(roleTd);
//   employeeDiv.append(dateTd);
//   employeeDiv.append(rateTd);

//   $(".employeeList").append(employeeDiv);

// });