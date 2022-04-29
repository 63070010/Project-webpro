const express = require("express");
const router = express.Router();
const pool = require("../config");

// Get comment

// cart


router.post('/addcart/:id', async function (req, res, next) {
    try {
        const [rows1, fields1] = await pool.query(
            'INSERT INTO `cart` (`create_date`, `total_price`, `user_id`, `promotion_id`) VALUES (CURRENT_TIMESTAMP, 0, ?, null )',
            [req.params.id]
        )
        res.json(rows2)
    } catch (err) {
        console.log(err)
    }
});
//// เพิ่มหนังสือในตะกร้า
router.post('/addbook/:id', async function (req, res, next) {
    try {
        const [rows1, fields1] = await pool.query(
            'INSERT INTO `cart_item` (`book_id`, `price`, `cart_id`) VALUES (?, ?, ?)',
            [req.params.id, req.body.price, req.body.cart_id]
        )
        const [rows2, fields2] = await pool.query(
            'select * from cart_item where item_no = ?',
            [rows1.insertId]
        )
        res.json(rows2)
    } catch (err) {
        console.log(err)
    }
});

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