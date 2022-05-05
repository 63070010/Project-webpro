<template>
  <div>
    <NavBar />
    <MyCarosel />
    <WarnPay :order="order" :orderlist="orderlist" />
    <div class="columns hero is-fullheight">
      <div class="column mt-4">
        <section class="section">
          <h1>
            <span class="material-icons" style="color: #123c69"
              >&#xe87d; หนังสือทั้งหมด
            </span>

            <div
              class="field has-addons is-pulled-right"
              style="color: #123c69"
            >
              หนังสือในตะกร้า: {{ numbookincart }}
            </div>
            <div class="divider is-info" style="color: #123c69">
              Latest Book
            </div>
          </h1>
          <div class="columns is-mobile is-centered">
            <div class="box has-text-centered">
              <input
                class="input"
                type="text"
                v-model="search"
                placeholder="ชื่อหนังสือ"
              />
              <button @click="getBooks" class="button mt-3">
                ค้นหาหนังสือ
              </button>
            </div>
          </div>
        </section>

        <div class="container is-max-desktop">
          <div class="is-multiline columns is-variable is-2">
            <div
              class="column is-one-quarter"
              v-for="value in books"
              :key="value.id"
            >
              <div class="card">
                <router-link :to="`/DetailsBook/${value.id}`">
                  <div class="card-image">
                    <figure class="image is-1by1">
                      <img
                        :src="imagePath(value.image)"
                        alt="Placeholder image"
                        style="object-fit: cover"
                      />
                    </figure>
                  </div>

                  <div class="card-content" style="height: 180px">
                    <div class="media">
                      <div class="media-content" style="color: #edc7b7">
                        <p
                          class="is-size-6 has-text-centered subtitle"
                          style="color: #edc7b7"
                        >
                          {{ value.title }}
                        </p>
                        <p class="is-size-7" style="color: #bab2b5">
                          By {{ value.penname }}
                        </p>
                        type:
                        <span
                          class="is-size-7 text-right"
                          style="color: #bab2b5"
                          v-for="(value, index) in value.type"
                          :key="index"
                        >
                          {{ value }}
                        </span>
                      </div>
                    </div>
                  </div>
                </router-link>
                <div class="level ml-2">
                  ฿ {{ value.price }}
                  <button
                    v-if="
                      this.totalBook.find((x) => x.book_id == value.id) ===
                      undefined
                    "
                    class="button is-ghost level-right"
                    @click="cardpush(value)"
                  >
                    <i
                      class="fa fa-cart-plus is-size-4"
                      style="color: #edc7b7"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <span v-else class="mt-4 mr-2" style="color: #edc7b7"
                    >มีหนังสือเล่มนี้แล้ว</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar";
import MyCarosel from "@/components/MyCarosel";
import WarnPay from "@/components/WarnPay";
import axios from "@/plugins/axios";
export default defineComponent({
  name: "HomeView",
  props: ["user"],
  components: {
    NavBar,
    MyCarosel,
    WarnPay,
  },
  data() {
    return {
      books: [],
      search: "",
      cart: [],
      cart_item: [],
      pay: {},
      mybook: [],
      totalBook: [],
      numbookincart: 0,
      order: [],
      orderlist: [],
    };
  },
  async mounted() {
    await this.getBooks();
    await this.getcheck();
    await this.getorder();
    await this.getorderlist();
    this.totalBook = [...this.cart_item, ...this.mybook];
  },
  methods: {
    async getorder() {
      await axios
        .get(`http://localhost:3000/order`)
        .then((response) => {
          this.order = response.data;
          console.log(response.data);

          console.log(this.order);
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },
    async getorderlist() {
      await axios
        .get(`http://localhost:3000/orderlist`)
        .then((response) => {
          this.orderlist = response.data;
          console.log(response.data);

          console.log(this.orderlist);
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },
    async getBooks() {
      await axios
        .get("http://localhost:3000", {
          params: {
            search: this.search,
          },
        })
        .then((response) => {
          this.books = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    imagePath(image) {
      if (image) {
        return "http://localhost:3000/" + image;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
    async getcheck() {
      await axios
        .get(`http://localhost:3000/cart_check`)
        .then((response) => {
          this.cart = response.data.cart;
          this.pay = response.data.payment;
          this.mybook = response.data.mybook;
          if (this.cart.length == 0) {
            axios
              .post(`http://localhost:3000/addcart`)
              .then((response) => {
                this.cart.push(response.data);
                console.log(this.cart);
              })
              .catch((error) => {
                this.error = error.response.data.message;
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
      await axios
        .get(
          `http://localhost:3000/cartitem/${
            this.cart[this.cart.length - 1].cart_id
          }`
        )
        .then((response) => {
          this.cart_item = response.data;
          this.numbookincart = this.cart_item.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async cardpush(book) {
      await axios
        .post(`http://localhost:3000/addbook/${book.id}`, {
          price: book.price,
        })
        .then((response) => {
          this.totalBook = [...this.totalBook, response.data[0]];
          this.cart_item = [...this.cart_item, response.data[0]];
          this.numbookincart = this.cart_item.length;
        })

        .catch((err) => {
          console.log(err);
        });
      await axios
        .put(`http://localhost:3000/totalprice`, {
          price: book.price,
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
<style>
@import "~@creativebulma/bulma-divider";
</style>
