const router = require('express').Router();
const Todo = require('../models/todo');

router.post('/todos', async (req, res) => {
  try {
    let todo = new Todo();
    todo.title = req.body.title;
    todo.done = req.body.done;

    await todo.save();

    res.json({
      status: true,
      message: '保存しました',
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

module.exports = router;
