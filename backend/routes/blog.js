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

// ชั้นหนังสือ
router.get("/myBook/:id", async function (req, res, next) {
  const mybook = await pool.query("SELECT * FROM book join cart_item  using(book_id) join cart using(cart_id) join payment using(cart_id) join author on(book.user_id = author.user_id) where cart.user_id = ? And cart.cart_id = payment.cart_id", [
    req.params.id,
  ]);
  res.json(mybook[0])
});
// ชั้นหนังสือ
router.get("/MysellBook/:id", async function (req, res, next) {
  try {
    const mysell_book = await pool.query("SELECT * FROM author join book on(author.user_id = book.user_id) where author.user_id = ?", [
      req.params.id,
    ]);
    res.json(mysell_book[0])
  } catch (e) {
    console.log(e)
  }
});

// โปรไฟล์
router.get("/Profile_user/:id", async function (req, res, next) {

  const myProfile = await pool.query("SELECT * FROM user left outer join author on(user.user_id = author.user_id) where user.user_id = ?", [
    req.params.id,

  ]);
  res.json(myProfile[0])
});

exports.router = router;
