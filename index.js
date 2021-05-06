const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello', function (req, res) {
  res.send('Hello World');
})

const mensagens = ['mensagem01','mensagem02','mensagem03'];

// CRUD (Create, Read, Update, Delete)

// GET: READ ALL (exibir todos os registros)
app.get('/mensagens', function (req, res) {
  res.send(mensagens.filter(Boolean));
});

// GET: READ SINGLE (exibir apenas um registro)
app.get('/mensagens/:id', function (req, res) {
  const id = req.params.id - 1;
  res.send(mensagens[id]);
});

// POST: CREATE (criar um registro)
// formato do json no BODY
// {
//     "mensagem":"mensagemNN"
// }
app.post('/mensagens', (req, res) => {
  const mensagem = req.body.mensagem;
  mensagens.push(mensagem);
  const id = mensagens.length;
  res.send(`Mensagem '${id}' criada com sucesso.`);
});

// PUT: UPDATE (editar um registro)
app.put('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;
  const mensagem = req.body.mensagem;
  mensagens[id] = mensagem;
  res.send(`Mensagem '${id+1}' atualizada com sucesso.`);
});

// DELETE: DELETE (remover um registro)
app.delete('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;
  const mensagem = req.body.mensagem;
  delete mensagens[id];
  res.send(`Mensagem '${id+1}' excluida com sucesso.`);
});

app.listen(3000);
