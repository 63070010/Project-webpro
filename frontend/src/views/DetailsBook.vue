<template>
  <div>
    <NavBar />
    <div>
      <div class="hero-body hero is-fullheight">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-5">
              <figure class="image is-1by1">
                <img
                  :src="book[0].image"
                />
              </figure>
            </div>
            <div class="column is-6 is-offset-1">
              <p class="title is-3">
                {{book[0].title}}
              </p>
              <br />
              <p class="subtitle is-5">
                {{book[0].desc}}
              </p>
              <p class="subtitle is-6">เขียนโดย : {{book[0].penname}}</p>
              <p class="subtitle is-6">ประเภท : <span
                          
                          
                          v-for="(value, index) in book[0].type"
                          :key="index"
                        >
                          {{ value }}
                        </span></p>
              <p class="subtitle is-6">วันที่วางขาย : {{book[0].publish_date}}</p>
              <p class="subtitle is-6">ราคา : {{book[0].price}} บาท</p>

              <br />
              <p class="level-centere">
                <a class="button is-medium is-info is-outlined">
                  เพิ่มลงในตะกร้า
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import axios from "axios";
export default {
  name: "DetailsBook",
  components: {
    NavBar,
  },
  data() {
    return {
      book: {
        0: {},
      },
    };
  },
  mounted() {
    this.getBookDetail(this.$route.params.id);
  },
  methods: {
    async getBookDetail(slideid) {
      await axios
        .get(`http://localhost:3000/DetailsBook/${slideid}`)
        .then((response) => {
          this.book = response.data;
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },
  },
};
</script>
<style lang="">
</style>