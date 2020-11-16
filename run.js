var mysql      = require('mysql');
var fs = require("fs");
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'dbms_pr'
});
connection.connect();
function run(){
  var now = new Date().valueOf();
  console.log(now);
  var x = fs.readFileSync("Merged_cus.json","utf8");
  x = JSON.parse(x);
  var k = 0;
  var l = x.length;
  var now = new Date().valueOf();
  for(var i = 0 ; i < 100000 ; i++){
    var a =Math.floor(Math.random() * (l-1 - 0) ) + 0;
    var b =Math.floor(Math.random() * (l-1 - 0) ) + 0;
    var c =Math.floor(Math.random() * (l-1 - 0) ) + 0;
    var d =Math.floor(Math.random() * (l-1 - 0) ) + 0;
    var e =Math.floor(Math.random() * (l-1 - 0) ) + 0;
    connection.query('INSERT INTO customers2 (`firstName`, `lastName`, `phoneNumber`, `address`, `cityID`) VALUES ("'+x[a].firstName + "\",\"" + x[b].lastName +"\",\""+ x[c].phoneNumber+'\",\"'+x[d].address+'\",'+x[e].cityID + ');', function (error, results) {
      if (error) throw error;
      k++;
      if(k == 100000){
        console.log(new Date().valueOf() - now);
      }
    });
  }
}
run();
connection.end();