(function() {
  const config = {
    apiKey: "AIzaSyApzbcwaAalD2mLppg1eoJujSywPrJMcwU",
    authDomain: "resvera-vip.firebaseapp.com",
    databaseURL: "https://resvera-vip-default-rtdb.firebaseio.com",
    projectId: "resvera-vip",
    storageBucket: "resvera-vip.appspot.com",
    messagingSenderId: "288373808324",
    appId: "1:288373808324:web:80db183ba424a41f233d91",
    measurementId: "G-5LQ9988FN1"
  };

  firebase.initializeApp(config);
  const bigTextEvaluationStudents = document.getElementById('bigTextEvaluationStudents');
  const dbBigTextEvaluationStudentsRef = firebase.database().ref().child('bigTextEvaluationStudents');
  dbBigTextEvaluationStudentsRef.on('value', snap => bigTextEvaluationStudents.innerText = snap.val());

  var table = document.querySelector('#table1 tbody');
  const dbEvaluationStudentsRef = firebase.database().ref().child('users');
  dbEvaluationStudentsRef.on('value', snap => {
    while(table.hasChildNodes()) {
		    table.removeChild(table.firstChild);
	  }

    var students = snap.val();
    for(var i in students) {
      var row = table.insertRow(-1);
      for(var j in students[i]) {
				cell = row.insertCell(-1);
				cell.innerHTML = students[i][j];
			}
		}
  });
}());

