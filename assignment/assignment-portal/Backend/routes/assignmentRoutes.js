const express = require('express');
const { uploadAssignment, getAssignments, updateAssignmentStatus } = require('../controllers/assignmentController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/upload', auth('User'), uploadAssignment);
router.get('/', auth('Admin'), getAssignments);
router.post('/:id/:status', auth('Admin'), updateAssignmentStatus);

module.exports = router;
