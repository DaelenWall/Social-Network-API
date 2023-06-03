const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend,
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

// Route: /api/users/:user_id/friends/:friend_id - IN PROGRESS
// router.route('/:user_id/friends/:friend_id')
//     .post(addFriend)
//     .delete(removeFriend);

module.exports = router;