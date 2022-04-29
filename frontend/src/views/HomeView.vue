<template>
  <div>
    <NavBar />
    <MyCarosel />
    <WarnPay />
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

        <div class="container is-max-desktop">
          <div class="is-multiline columns is-variable is-2">
            <div
              class="column is-one-quarter"
              v-for="(value, index) in books"
              :key="value.id"
            >
              <div class="card">
                <router-link to="/DetailsBook">
                  <div class="card-image">
                    <figure class="image is-1by1">
                      <img :src="value.image" alt="Placeholder image" />
                    </figure>
                  </div>

                  <div class="card-content" style="height: 160px">
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
                          {{ value }} &nbsp;
                        </span>
                      </div>
                    </div>
                  </div>
                </router-link>
                <div class="level ml-2">
                  ฿ {{ value.price }}
                  <button
                    class="button is-ghost level-right"
                    @click="cardpush(index)"
                  >
                    <i
                      class="fa fa-cart-plus is-size-4"
                      style="color: #edc7b7"
                      aria-hidden="true"
                    ></i>
                  </button>
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
import axios from '@/plugins/axios'
export default defineComponent({
  name: "HomeView",
  props: ['user'],
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
      search: ""
    };
  },mounted() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      axios
        .get("http://localhost:3000", {
          params: {
            search: this.search,
          },
        })
        .then((response) => {
          this.books = response.data;
          console.log(response.data)
          
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
    