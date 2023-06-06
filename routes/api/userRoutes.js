const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
} = require('../../controllers/userController.js');

// Route:  /api/users - WORKS
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// Route:  /api/users/:user_id - WORKS
router
    .route('/:user_id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;