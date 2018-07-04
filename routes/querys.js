const express = require('express');
const router = express.Router();

const pool = require('../config/database');

router.get('/users/all', (req, res) => {
    pool.query(`SELECT * FROM usuario JOIN localizacao ON usuario.localizacaochave = localizacao.latitude`)
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
    senha: req.body.senha,
    email: req.body.email,
    nascimento: req.body.nascimento,
    logradouro: req.body.logradouro,
    cep: req.body.cep,
    bairro: req.body.bairro,
    cidade: req.body.cidade,
    estado: req.body.estado,
    pais: req.body.pais,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };

  pool.query(`
  INSERT INTO public.localizacao(logradouro, cep, bairro, cidade, estado, pais, latitude, longitude) 
  VALUES ('${usuario.logradouro}', '${usuario.cep}', '${usuario.bairro}', '${usuario.cidade}', '${usuario.estado}', '${usuario.pais}', '${usuario.latitude}', '${usuario.longitude}');

  INSERT INTO public.usuario(id, senha,  nome, email, linkfoto, data_nasc, localizacaochave, localizacaochavelong)
  VALUES ('${usuario.id}', ${usuario.senha}, '${usuario.nome}', '${usuario.email}', '', '${usuario.nascimento}', '${usuario.latitude}', '${usuario.longitude}')`
  )
  .then((resQuery) => {
    res.send(resQuery.rows);
    })
  .catch(err => {
      console.error('Error executing query', err.stack);

    })  
})

router.delete('/delete/:user_id', (req, res) => {
  const id = req.params.user_id;

  pool.query(`DELETE FROM public.usuario WHERE id = '${id}'`)
  .then((resQuery) => {
    res.send(resQuery.rows);
    })
  .catch(err => {
      console.error('Error executing query', err.stack);

    })  

});

router.post('/select/evento', (req, res) => {
  const nome = req.body.nome;

  pool.query(`SELECT * FROM public.evento WHERE nome ILIKE '%${nome}%'`)
  .then((resQuery) => {
    res.send(resQuery.rows);
  })
  .catch(err => {
    console.error('Error executing query', err.stack);
  })

});

router.post('/select/estabelecimento', (req, res) => {
  const estabelecimentoNome = req.body.nome;

  pool.query(`SELECT * FROM estabelecimento WHERE nome ILIKE '%${estabelecimentoNome}%'`)
  .then((resQuery) => {
    res.send(resQuery.rows);
  })
  .catch(err => {
    console.error('Error executing query', err.stack);
  })

});

router.post('/select/usuario', (req, res) => {
  const nomeUsuario = req.body.nome;

  pool.query(`SELECT * FROM usuario JOIN localizacao ON usuario.localizacaochave = localizacao.latitude WHERE nome ILIKE '%${nomeUsuario}%'`)
  .then((resQuery) => {
    res.send(resQuery.rows);
  })
  .catch(err => {
    console.error('Error executing query', err.stack);
  })

});

module.exports = router;