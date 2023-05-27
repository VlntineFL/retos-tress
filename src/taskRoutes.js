const express = require('express');
const router = express.Router();
const { updateTask, deleteTask } = require('../controllers/taskController');
const { authenticateUser } = require('../middlewares/authMiddleware');


router.put('/:id', authenticateUser, updateTask);


router.delete('/:id', authenticateUser, deleteTask);

module.exports = router;