const express = require("express");
const path = require("path")
const pool = require("../config");
const { isLoggedIn } = require('../middlewares')
router = express.Router();


// โปรโมชั่น
router.get("/promotion_image", async function (req, res, next) {
  try {
    const promotion_image = await pool.query("SELECT * FROM promotion");
    res.send(promotion_image[0])
  }
  catch (e) {
    res.send(e)
  }

});

// รายละเอียดโปรโมชั่น
router.get("/DetailsPromotion/:id", async function (req, res, next) {
  const detailPro = await pool.query("SELECT * FROM promotion WHERE promotion_id=?", [
    req.params.id,
  ]);
  res.json(detailPro[0])
});


// โปรไฟล์




// เช็คตะกร้า

router.get("/cart_check",isLoggedIn, async function (req, res, next) {
  const promise4 = await pool.query("SELECT * FROM cart where user_id = ?", [
    req.user.id,
  ]);
  const promise6 = await pool.query("SELECT * FROM cart join payment using(cart_id) where user_id = ?", [
    req.user.id,
  ]);
  const promise7 = await pool.query("SELECT * FROM book join cart_item  on(book.id = cart_item.book_id) join cart using(cart_id) join payment using(cart_id) join author on(book.user_id = author.user_id) where cart.user_id = ? And cart.cart_id = payment.cart_id", [
    req.user.id,
  ]);
  Promise.all([promise4, promise6, promise7])
    .then((results) => {
      const [cart, imageFields] = results[0];
      const [payment, commentFields] = results[1];
      const [mybook, c] = results[2];
      console.log(results[2])
      res.json({
        cart: cart,
        payment: payment,
        mybook: mybook,
        error: null,
      });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});
// cartitem
router.get("/cartitem/:id", async function (req, res, next) {
  const cartitem = await pool.query("SELECT item_no, book_id, price, cart_id FROM ebook.cart_item join ebook.cart using(cart_id) where cart_id = ?;", [
    req.params.id,
  ]);
  res.json(cartitem[0])
});

// หนังสือ
router.get("/DetailsBook/:id", async function (req, res, next) {
  const DetailsBook = await pool.query("SELECT * FROM book join author on(book.user_id = author.user_id) WHERE id =?", [
    req.params.id,
  ]);
  res.json(DetailsBook[0])
  console.log(DetailsBook[0])
});



exports.router
  = router;