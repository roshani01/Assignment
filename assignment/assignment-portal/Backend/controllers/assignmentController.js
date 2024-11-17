const Assignment = require('../models/Assignment');

const uploadAssignment = async (req, res) => {
  const { task, adminId } = req.body;

  try {
    const assignment = new Assignment({ userId: req.user.id, task, adminId });
    await assignment.save();
    res.status(201).json({ message: 'Assignment uploaded successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ adminId: req.user.id }).populate('userId', 'name');
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateAssignmentStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    await Assignment.findByIdAndUpdate(id, { status });
    res.json({ message: `Assignment ${status.toLowerCase()} successfully` });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { uploadAssignment, getAssignments, updateAssignmentStatus };
