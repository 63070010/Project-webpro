const express = require("express");
const path = require("path")
const pool = require("../config");

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
router.get("/Profile_user/:id", async function (req, res, next) {
  const promise1 = await pool.query("SELECT user_name, lname, fname, email, sex, Phonenumber, bank_name, bank_number, imageProflie FROM user left outer join author on(user.user_id = author.user_id) where user.user_id = ?", [
    req.params.id,
  ]);
  const promise2 = await pool.query("SELECT * FROM book join cart_item  using(book_id) join cart using(cart_id) join payment using(cart_id) join author on(book.user_id = author.user_id) where cart.user_id = ? And cart.cart_id = payment.cart_id", [
    req.params.id,
  ]);
  const promise3 = await pool.query("SELECT * FROM author join book on(author.user_id = book.user_id) where author.user_id = ?", [
    req.params.id,
  ]);
  Promise.all([promise1, promise2, promise3])
    .then((results) => {

      const [myProfile, blogFields] = results[0];
      const [mybook, commentFields] = results[1];
      const [mysell_book, imageFields] = results[2];
      res.json({
        Profile: myProfile[0],
        book: mybook,
        sell_book: mysell_book,
        error: null,
      });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});




// เช็คตะกร้า

router.get("/cart_check/:id", async function (req, res, next) {
  const promise4 = await pool.query("SELECT * FROM cart where user_id = ?", [
    req.params.id,
  ]);
  const promise6 = await pool.query("SELECT * FROM cart join payment using(cart_id) where user_id = ?", [
    req.params.id,
  ]);
  const promise7 = await pool.query("SELECT * FROM book join cart_item  on(book.id = cart_item.book_id) join cart using(cart_id) join payment using(cart_id) join author on(book.user_id = author.user_id) where cart.user_id = ? And cart.cart_id = payment.cart_id", [
    req.params.id,
  ]);
  Promise.all([promise4, promise6, promise7])
    .then((results) => {
      const [cart, imageFields] = results[0];
      const [payment, commentFields] = results[1];
      const [mybook, c] = results[2];
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
