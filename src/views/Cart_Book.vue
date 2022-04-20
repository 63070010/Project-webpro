<template>
  <NavBar />
  <div class="hero-body hero is-fullheight">
    <div class="container has-text-centered">
      <div class="column">
        <p class="is-size-3" style="color: #ac3b61">
          <i class="fa fa-book" aria-hidden="true"> </i> &nbsp;รายชื่อหนังสือใน
          ตะกร้า
        </p>
        <br />
        <div class="divider is-info" style="color: #123c69">
          Books in the cart
        </div>
      </div>
      <CartItem />

      <div class="divider is-info is-size-6" style="color: #123c69">
        <router-link to="/" style="color: #123c69"
          >กลับไปเลือกซื้อหนังสือเพิ่ม</router-link
        >
      </div>
    </div>
    <div class="container hero-body">
      <div class="columns is-multiline box">
        <div class="column is-12">
          <h1 class="title has-text-centered section-title is-size-4">
            ยอดชำระเงิน : 600 บาท
          </h1>
        </div>
        <div class="column is-10 has-text-centered is-offset-1">
          <h2 class="subtitle">จำนวนหนังสือซื้อที่ซื้อ : 2 เล่ม</h2>

          <router-link to="/CheckoutPage" style="color: #123c69">
            <button class="button">
              ไปหน้าชำระเงิน&emsp;<i
                class="fa fa-arrow-circle-right"
                aria-hidden="true"
              ></i></button
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import CartItem from "@/components/CartItem";
export default {
  name: "Cart_Book",
  components: {
    NavBar,
    CartItem,
  },
};
</script>
<style >
@import "~@creativebulma/bulma-divider";
</style>