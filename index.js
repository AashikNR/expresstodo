var express = require('Express');
var app = express();
var todoRoute = require('./todoRoute.js');
app.set('view engine', 'ejs');
app.set('views','./views');

app.use('/todo', todoRoute);
app.listen(3000, function() {
    console.log("server is running on port 3000");
});

once = ()=>{
    var obj = {
        table: []
     };
    obj.table.push({id: 1, value:"first"});
    var json = JSON.stringify(obj);
    fs.writeFile('myjsonfile.json', json, 'utf8', (err) => {
        if (err) throw err;
    });
}
// once()


async function dataAsync() {
    let response = await fetch('http://127.0.0.1:5500/myjsonFile.json');
    let data = await response.json();
    insertdataAsyn(data);
}
function insertdataAsyn(data) {
    var text = document.createElement("div")
    text.setAttribute("id" , "text");
    text.innerHTML = 'Data inserted Using Async/await'
    document.getElementById("api").appendChild(text)
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'UserId: ' + data[i].userId + ' Id: ' + data[i].id + ' Title: ' + data[i].title + ' Completed: ' + data[i].completed;
      document.getElementById("api").appendChild(div);
    }
}
// dataAsync();