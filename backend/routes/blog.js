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
router.get("/Profile", isLoggedIn, async function (req, res, next) {
  const profile1 = await pool.query(`SELECT u.id, first_name, last_name, email, username, imageProfile,b.title,b.desc,b.type,b.image,b.status,b.price,b.id as 'Bookid'
from users u
join cart c
on(u.id = c.user_id)
join payment p
using(cart_id)
join cart_item ct
using(cart_id)
join book b
on(b.id = ct.book_id)
where u.id = ?`, [
    req.user.id,

  ]);
  const profile2 = await pool.query(`SELECT *
  from book b
join users u
on(b.user_id = u.id)
where u.id = ?`, [
    req.user.id,

  ]);

  Promise.all([profile1, profile2])
    .then((results) => {
      const [profilea, a] = results[0];
      const [profileb, b] = results[1];
      res.json({
        profile1: profilea,
        profile2: profileb,
        error: null,
      });
      console.log(profile2[0])
    })
    .catch((err) => {
      return res.status(500).json(err);
    });

});



// เช็คตะกร้า

router.get("/cart_check", isLoggedIn, async function (req, res, next) {
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

// โชว์หนังสือในตระกร้า
router.get("/cartitem/:id", isLoggedIn, async function (req, res, next) {
  const cartitem = await pool.query("SELECT item_no, book_id, price, cart_id, total_price, promotion_id FROM ebook.cart_item join ebook.cart using(cart_id) where cart_id = ?;", [
    req.params.id,]);
  return res.json(cartitem[0]);

});

router.get("/getCartItem", isLoggedIn, async function (req, res, next) {
  const cartitem = await pool.query(`SELECT c.cart_id, item_no, ct.price, total_price, b.image, b.title, b.id, promotion_id
FROM cart_item ct
join cart c
using(cart_id) 
join users u
on(c.user_id = u.id)
join book b
on(b.id = ct.book_id)
where c.cart_id not in (
select p.cart_id
from payment p) 
and u.id = ?`
    , [
      req.user.id]);

  res.json(cartitem[0]);

});


// หนังสือ
router.get("/DetailsBook/:id", async function (req, res, next) {
  const DetailsBook = await pool.query(`SELECT a.user_id, b.id, title, b.desc, b.type, penname, image, b.price
   FROM book b join author a using(user_id) where b.id = ? `, [
    req.params.id,
  ]);
  res.json(DetailsBook[0])

});


// เพิ่มตะกร้า
router.post('/addcart', isLoggedIn, async function (req, res, next) {
  try {
    const [rows1, fields1] = await pool.query(
      'INSERT INTO `cart` (`create_date`, `total_price`, `user_id`, `promotion_id`) VALUES (CURRENT_TIMESTAMP, 0, ?, null )',
      req.user.id
    )
    res.json(rows1)
  } catch (err) {
    console.log(err)
  }
});

// เพิ่มหนังสือลงในตะกร้า
router.post('/addbook/:id', isLoggedIn, async function (req, res, next) {
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
// เพิ่มราคาหนังสือตามที่เอาลงตะกร้า
router.put('/totalprice', isLoggedIn, async function (req, res, next) {
  const [rows3, fields3] = await pool.query(

    'SELECT total_price FROM cart WHERE cart_id =?', [req.body.cart_id])

  await pool.query(
    'UPDATE `cart` SET total_price = ? WHERE cart_id = ?',
    [rows3[0].total_price + req.body.price, req.body.cart_id]

  )
  console.log(rows3[0])
  console.log(rows3[0].total_price)
  res.json()
});


// ลบหนังสือออกจากตะกร้า
router.delete('/dropbook/:id', async function (req, res, next) {
  try {
    const [rows1, fields1] = await pool.query(
      'DELETE FROM cart_item WHERE item_no = ?', [req.params.id]
    )
    res.json()
  } catch (error) {
    res.status(500).json(error)
  }
});

// ลบราคาหนังสือตามที่เอาลงตะกร้า
router.put('/droptotalprice', isLoggedIn, async function (req, res, next) {
  const [row, fields] = await pool.query(

    'SELECT total_price FROM cart WHERE cart_id =?', [req.body.cart_id])

  await pool.query(
    'UPDATE `cart` SET total_price = ? WHERE cart_id = ?',
    [row[0].total_price - req.body.price, req.body.cart_id]
  )
  res.json()

});

// ใช้โปรโมชั่น
router.put('/submitPromotion', isLoggedIn, async function (req, res, next) {
  const [row, fields] = await pool.query(

    'SELECT promotion_id FROM promotion WHERE code =?', [req.body.codepromotion])

  await pool.query(
    'UPDATE `cart` SET promotion_id = ? WHERE cart_id = ?',
    [row[0].promotion_id, req.body.cart_id]
  )
  res.json(row[0].promotion_id)
});

// ยกเลิกโปรโมชั่น
router.put('/canceltPromotion', isLoggedIn, async function (req, res, next) {
  const [row, fields] = await pool.query(

    'SELECT promotion_id FROM promotion WHERE code =?', [req.body.codepromotion])

  await pool.query(
    'UPDATE `cart` SET promotion_id = ? WHERE cart_id = ?',
    [null, req.body.cart_id]
  )
  res.json()
});

// แก้ไขราคาตามโปรโมชั่น
router.put('/usedpronotion', isLoggedIn, async function (req, res, next) {
  const [row, fields] = await pool.query(
    'UPDATE `cart` SET total_price = ? WHERE cart_id = ?',
    [req.body.price, req.body.cart_id]
  )
  res.json(req.body.price)

});



exports.router
  = router;