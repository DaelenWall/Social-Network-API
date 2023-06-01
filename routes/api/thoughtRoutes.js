const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtController');

// Route:  /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// Route:  /api/thoughts/:thought_id
router
  .route('/:thought_id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// Route:  /api/thoughts/:thought_id/reactions
router.route('/:thought_id/reactions').post(addThoughtReaction);

// Route:  /api/videos/:thought_id/reaction/:reaction_id
router.route('/:thought_id/reactions/:reaction_id').delete(removeThoughtReaction);

module.exports = router;
