import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/taskMy2', (req, res) =>{
  const fio = req.query.fullname;
  try{
    var answer;
    var newStr = fio.split(' ');

    if(newStr.length > 3 || newStr[0] == '' ||
       fio.match(/\d/)!=null) {
      answer = 'Invalid fullname';
    }
    else{
      answer = newStr[newStr.length-1];
      for(var i=0;i<newStr.length-1;i++) {
        answer += ' ' + newStr[i].substring(0,1) + '.';
      }
   }
   res.send(answer.toString());
  }
  catch(err){
   res.send('Invalid fullname');
 }
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
