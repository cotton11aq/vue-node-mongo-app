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

router.get('/todos', async (req, res) => {
  try {
    let todos = await Todo.find().exec();

    res.json({
      status: true,
      todos: todos,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

router.get('/todos/:id', async (req, res) => {
  try {
    let todo = await Todo.findOne({ _id: req.params.id });

    res.json({
      status: true,
      todo: todo,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

router.put('/todos/:id', async (req, res) => {
  try {
    let todo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          done: req.body.done,
        },
      }
    );

    res.json({
      status: true,
      todo: todo,
    });
  } catch (err) {
    res.json(500).json({
      status: false,
      message: err.message,
    });
  }
});

router.delete('/todos/:id', async (req, res) => {
  try {
    let todo = await Todo.findOneAndDelete({ _id: req.params.id });

    if (todo) {
      res.json({
        status: true,
        message: '削除しました',
      });
    }
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});

module.exports = router;
