<template>
  <div>
    <NavBar />
    <div class="hero-body hero is-fullheight">
      <div class="container has-text-centered">
        <div class="column">
          <p class="is-size-3" style="color: #ac3b61">เลือกวิธีการ ชำระเงิน</p>
          <br />
          <div class="divider is-info" style="color: #123c69">
            Choose a payment
          </div>
        </div>
        <div class="box" style="width: 800px">
          <article class="media">
            <div class="media-left">
              <img
                src="https://www.kasikornbank.com/SiteCollectionDocuments/about/img/logo/logo.png"
                alt="Image"
                class="image is-64x64"
              />
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  ธนาคาร กสิกรไทย
                  <br />
                  เลขที่บัญชี : xxx-xxx-xx
                </p>
              </div>
            </div>
            <div class="level-right">
              <label class="radio">
                <input type="radio" v-model="paychosse" value="pay_one" />
              </label>
            </div>
          </article>
        </div>
        <div class="box">
          <article class="media">
            <div class="media-left">
              <img
                src="https://www.finnomena.com/wp-content/uploads/2016/10/promt-pay-logo.jpg"
                class="image is-64x64"
              />
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  พร้อมเพย์
                  <br />
                  รหัสพร้อมเพย์ : xxx-xxx-xx
                </p>
              </div>
            </div>
            <div class="level-right">
              <label class="radio">
                <input type="radio" v-model="paychosse" value="pay_two" />
              </label>
            </div>
          </article>
        </div>
        <div class="box">
          <article class="media">
            <div class="media-left">
              <img
                src=" https://seeklogo.com/images/T/truemoney-wallet-logo-9CCDDD6CB0-seeklogo.com.png"
                class="image is-64x64"
              />
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  ทรูมันนี่วอลเล็ท
                  <br />
                  เบอร์ทรูมันนี่วอลเล็ท : xxx-xxx-xx
                </p>
              </div>
            </div>
            <div class="level-right">
              <label class="radio">
                <input type="radio" v-model="paychosse" value="pay_three" />
              </label>
            </div>
          </article>
        </div>
      </div>

      <div class="container has-text-centered mt-6">
        <div class="column">
          <p class="is-size-3" style="color: #ac3b61">โค้ดโปรโมชั่น</p>
          <br />
          <div class="divider is-info" style="color: #123c69">
            Choose a payment
          </div>
        </div>
        <div class="box" style="width: 800px">
          <article class="media">
            <div class="media-content">
              <label class="label" style="color: #123c69"
                >กรอกโค้ดโปรโมชั่น</label
              >
              <input
                class="input is-medium is-rounded"
                type="text"
                v-model="Promotion"
              />

              <div class="level mt-4">
                <button
                  class="button"
                  style="color: #eee2dc; background-color: #ac3b61"
                  @click="submitPromotion()"
                >
                  ใช้
                </button>

                <div class="level-right">
                  <button
                    class="button"
                    style="color: #eee2dc; background-color: #ac3b61"
                    @click="canceltPromotion()"
                  >
                    ยกเลิกทั้งหมด
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="divider is-info is-size-6" style="color: #123c69">
          <router-link to="/Cart_Book" style="color: #123c69"
            >กลับไปหน้าตะกร้า หนังสือ</router-link
          >
        </div>
      </div>

      <div class="container hero-body">
        <div class="columns is-multiline box">
          <div class="column">
            <h1 class="title has-text-centered section-title is-size-5">
              สรุปรายการสั่งซื้อ
            </h1>
            <div class="box" v-for="card in Cart_item" v-bind:key="card.id">
              <article class="media">
                <div class="media-left">
                  <img :src="card.image" alt="Image" class="image is-64x64" />
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ card.Book_name }}</strong>
                      <br />
                      <small>{{ card.price }} บาท</small>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <h1 class="title has-text-centered section-title is-size-5">
              ยอดชำระเงิน(รวมใช้โค้ดโปรโมชั่น) : 600 บาท
            </h1>
          </div>
          <div class="column is-10 has-text-centered is-offset-1">
            <h2 class="subtitle">จำนวนหนังสือซื้อที่ซื้อ : 2 เล่ม</h2>
            <button class="button" @click="Payment = true">
              ยืนยันรายการชำระเงิน&emsp;<i
                class="fa fa-check"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>

      <div class="modal" :class="{ 'is-active': Payment }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <button
            class="modal-close is-large"
            aria-label="close"
            @click="Payment = false"
          ></button>

          <section class="modal-card-body">
            <div class="field">
              <span
                class="label is-size-5"
                style="color: #123c69; text-align: center"
              >
              </span>
              <h1 class="title has-text-centered section-title is-size-5">
                ยอดชำระเงิน(รวมใช้โค้ดโปรโมชั่น) : 600 บาท
              </h1>
              <h1 class="title has-text-centered section-title is-size-5">
                ชำระเงิน ผ่านทาง พร้อมเพย์ รหัสพร้อมเพย์ xxx-xxx-xx
                <!--เอามาจาก ตอนติ้กเลือก เ-->
              </h1>
              เมื่อโอนเสร็จ กรุณาส่งสรีปการชำระเงิน
              <div class="column is-5">
                <div class="file">
                  <label class="file-label">
                    <input
                      class="file-input"
                      type="file"
                      name="comment_image"
                    />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label"> Choose an image</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">ส่งข้อมูล</button>
            <button class="button" @click="Payment = false">ยกเลิก</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
export default {
  name: "CheckoutPage",
  components: {
    NavBar,
  },
  data() {
    return {
      Payment: false,
      paychosse: "pay_one",
      Promotion: "",
      Cart_item: [
        {
          id: 0,
          Book_name: "Exorcist wa Otosenai ",
          Pen_name: "Apple",
          price: 100,
          is_favorite: false,
          Book_type: ["comedy", "Romance"],
          image:
            "https://www.osemocphoto.com/collectManga/10768/10768_cover.jpg?1",
          detail_book:
            " เด็กหนุ่มผู้ถูกรับเลือกจากพระเจ้าให้กลายเป็นเอ็กซอร์ซิสผู้แข็งแกร่งที่สุดซึ่งมีหน้าที่ในการปราบจอมมาร ได้พบเจอกับเด็กสาวผู้หนึ่ง จนเกิดเป็นเรื่องราวแห่งความรักและความหวัง ",
        },
        {
          id: 1,
          Book_name: "Exorcist ",
          Pen_name: "Mookie",
          price: 500,
          is_favorite: false,
          Book_type: ["comedy", "Romance"],
          image:
            "https://www.storytel.com/images/640x640/0000031877.jpg",
          detail_book:
            " เด็กหนุ่มผู้ถูกรับเลือกจากพระเจ้าให้กลายเป็นเอ็กซอร์ซิสผู้แข็งแกร่งที่สุดซึ่งมีหน้าที่ในการปราบจอมมาร ได้พบเจอกับเด็กสาวผู้หนึ่ง จนเกิดเป็นเรื่องราวแห่งความรักและความหวัง ",
        },
      ],
    };
  },
};
</script>
<style >
@import "~@creativebulma/bulma-divider";
</style>