let express = require('express');
let app = express();

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('primeira');
});

app.get('/executa/:nome/:sobrenome', function (req, res) {
  let nome = req.params.nome
  let sobrenome = req.params.sobrenome
  console.log('Nome do usuario: '+nome+' '+sobrenome)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

