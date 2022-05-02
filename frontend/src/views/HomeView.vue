<template>
  <div>
    <NavBar />
    <MyCarosel />

    <WarnPay />
    <div class="columns">
     
    </div>
    <div class="columns">
      <div class="column mt-4">
        <section class="section">
          <h1>
            <span class="material-icons" style="color: #123c69"
              >&#xe87d; มาใหม่สุด
            </span>

            <div class="field has-addons is-pulled-right"></div>
            <div class="divider is-info" style="color: #123c69">
              Latest Book
            </div>
          </h1>
        </section>
 <div class="column is-half">
        <input
          class="input"
          type="text"
          v-model="search"
          placeholder="Search blog(s)"
        />
      </div>
      <div class="column is-half">
        <button @click="getBooks" class="button">Search</button>
      </div>
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
                      <img :src="value.image" alt="Placeholder image" />
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

        <section class="section">
          <h1>
            <span class="material-icons" style="color: #123c69"
              >&#xe865; หนังสือทั้งหมด
            </span>

            <div class="field has-addons is-pulled-right">Tag</div>
          </h1>
          <div class="divider is-info" style="color: #123c69">All Book</div>
        </section>
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
      showdetailbook: false,
      book_numdetail: 0,
      books: [],
      search: "",
      cart: {},
      cart_item: [],
      pay: {},
      mybook: [],
      totalBook: [],
    };
  },
  async mounted() {
    await this.getBooks(4);
    await this.getcheck();
    this.totalBook = [...this.cart_item, ...this.mybook];
  },
  methods: {
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
    async getcheck() {
      await axios
        .get(`http://localhost:3000/cart_check`)
        .then((response) => {
          this.cart = response.data.cart;
          this.pay = response.data.payment;
          this.mybook = response.data.mybook;
          console.log(this.mybook);
          if (this.cart.length == 0 || this.cart.length == this.pay.length) {
            axios
              .post(`http://localhost:3000/addcart`)
              .then((response) => {
                this.cart.push(response.data);
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cardpush(book) {
      axios
        .post(`http://localhost:3000/addbook/${book.id}`, {
          cart_id: this.cart[this.cart.length - 1].cart_id,
          price: book.price,
        })
        .then((response) => {
          this.totalBook = [...this.totalBook, response.data[0]];
          this.cart_item = [...this.cart_item, response.data[0]];
        })
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
    