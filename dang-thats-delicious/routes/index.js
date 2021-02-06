const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = { name: 'Wes', age: 100, cool: true };
  // res.send('Hey! It works!');
  // res.json(wes);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
    name: 'Wes'
    ,dog: req.query.dog
    ,title: 'I love food'
  });
});

router.get('/reverse/:name', (req, res) => {
  const reversedName = [...req.params.name].reverse().join('');
  res.send(reversedName);
})

module.exports = router;
