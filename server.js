const express = require('express');
const app = express();

app.get('/:date', function(req, res){
  let date;
  
  if(date = new Date(req.params.date).getTime()/1000){
    res.status(200).send({'unix' : date , 'natural' : req.params.date});
    res.end(); 
  }else if(date = new Date(parseInt(req.params.date) * 1000)){
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let serverResponse = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    res.status(200).send({'unix' : parseInt(req.params.date) , 'natural' : serverResponse});
    res.end();
  }
  res.status(200).send({'unix': null, 'natural': null});
  res.end();
});

app.use('/', (req, res) => {
  res.status(200).send({'unix': null, 'natural': null});
  res.end();
});
app.listen(3000);