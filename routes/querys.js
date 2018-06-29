const express = require('express');
const router = express.Router();

const pool = require('../config/database');

router.get('/users/all', (req, res) => {
    pool.query(`SELECT * FROM usuario`)
    .then((resQuery) => {
      res.send(resQuery.rows);
      })
    .catch(err => {
        console.error('Error executing query', err.stack);

      })  
})

router.post('/cadastro', (req, res) => {
  const usuario = {
    id: req.body.id,
    nome: req.body.nome,
    email: req.body.email,
    nascimento: req.body.nascimento
  };

  pool.query(`INSERT INTO usuario(id, nome, email, data_nasc) VALUES ('${usuario.id}', '${usuario.nome}', '${usuario.email}', '${usuario.nascimento}') RETURNING *`)
  .then((resQuery) => {
    res.send(resQuery.rows);
    })
  .catch(err => {
      console.error('Error executing query', err.stack);

    })  
})

router.delete('/delete/:user_id', (req, res) => {
  const id = req.params.user_id;

  pool.query(`DELETE FROM usuario WHERE id = '${id}'`)
  .then((resQuery) => {
    res.send(resQuery.rows);
    })
  .catch(err => {
      console.error('Error executing query', err.stack);

    })  

});

module.exports = router;