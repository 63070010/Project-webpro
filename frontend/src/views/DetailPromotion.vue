<template>
  <div>
    <NavBar />
    <div class="columns is-centered hero-body is-fullheight">
      <div class="column is-half">
        <div class="column has-text-centered">
          <figure class="image">
            <img src="https://dr.lnwfile.com/_/dr/_raw/20/pg/p0.png" />
          </figure>
          <br />

          <p class="title is-5">หัวข้อโปรโมชั่น</p>
          <br />
          <p class="subtitle is-6">
            สั้งซื้อตั้งแต่ 599 บาทขึ้นไป ฟรีค่าส่ง! (ต่ำกว่า 599 บาท คิดค่าส่ง
            50 บาท) ทางร้าน ไม่มี บริการห่อปกหนังสือ ทางร้านใช้เวลา 3 วันทำการ
            ในการจัดเตรียมสินค้า นโยบายการจัดส่งสินค้า นโยบายการเปลี่ยนสินค้า
            กรณีได้รับสินค้าไม่ครบ/ไม่ตรงกับที่สั่งซื้อ หรือ
            ไม่มีชื่อผู้รับตามที่จ่าหน้า ** สอบถามเกี่ยวกับระบบชำระเงิน ** อีเมล
            support@lnwpay.com หรือ โทร. 0818002180 ** สอบถามเกี่ยวกับสินค้า **
          </p>

          <p class="level-centere">
            <router-link to="/">
              <button
                class="button"
                style="color: #eee2dc; background-color: #ac3b61"
              >
                กลับไปหน้าเลือกซื้อหนังสือ
              </button></router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";

export default {
  name: "DetailPromotion",
  components: {
    NavBar,
  },
};
</script>
<style lang="">
</style>