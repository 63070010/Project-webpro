<template>
  <div>
    <NavBar />
    <div>
      <div class="hero-body hero is-fullheight">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-5">
              <figure class="image is-1by1">
                <img src="" />
              </figure>
            </div>
            <div class="column is-6 is-offset-1">
              <p class="title is-3">{{}}</p>
              <br />
              <p class="subtitle is-5"></p>
              <p class="subtitle is-6">เขียนโดย : 有馬あるま</p>
              <p class="subtitle is-6">ประเภท : Romance, Action</p>
              <p class="subtitle is-6">วันที่วางขาย : 1/01/2020</p>
              <p class="subtitle is-6">ราคา : 125 บาท</p>

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
  date() {
    return {
      bookdeteail: {
        0: {},
      },
    };
  },
  mounted() {
    this.getdetailsBook(this.$route.params.id);
  },
  methods: {
    async getdetailsBook(bookid) {
      await axios
        .get(`http://localhost:3000/DetailsBook/${bookid}`)
        .then((response) => {
          this.bookdeteail = response.data;
          console.log(this.bookdeteail[0].title);
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