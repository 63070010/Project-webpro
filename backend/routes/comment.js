const express = require("express");

const router = express.Router();

// Get comment
router.get('/:promotion_id/promotion', function (req, res, next) {
});

// Create new comment
router.post('/:blogId/comments', function (req, res, next) {
    return
});

// Update comment
// Update comment
router.put('/EditProfile/:idUser', async function (req, res, next) {
    const [rows, fields1] = await pool.query(
        'SELECT * FROM user WHERE id = ?',
        [req.params.idUser]
    )


    res.send({
        message: 'Comment ID ' + req.params.commentId + ' is updated.',
        comment: rows2[0]
    }

    )

    //affectedRows
    //selectRow
});


// Delete comment
router.delete('/comments/:commentId', function (req, res, next) {
    return
});

// Delete comment
router.put('/comments/addlike/:commentId', function (req, res, next) {
    return
});


exports.router = router