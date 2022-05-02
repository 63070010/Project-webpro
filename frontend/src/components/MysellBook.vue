<template>
  <div>
    <div class="container is-max-widescreen hero is-fullheight">
      <div class="columns is-multiline">
        <div
          v-for="card in mysell_book"
          v-bind:key="card.id"
          class="column is-3"
        >
          <div class="card large">
            <div class="card-image image is-4by5" @click="DetailBook = true">
              <img :src="card.image" alt="Image" />
            </div>
            <div
              class="card-content"
              style="height: 250px"
              @click="DetailBook = true"
            >
              <div class="media">
                <div class="media-content">
                  <p class="title is-5 no-padding">{{ card.title }}</p>
                  ชื่อนามปากของคุณ:
                  <span class="title is-6" style="color: #bab2b5">
                    {{ card.penname }}</span
                  >
                  <br />
                  ปรเภทหนังสือที่เลือกไว้:
                  <span
                    class="is-size-6 text-right"
                    style="color: #bab2b5"
                    v-for="(value, index) in card.type"
                    :key="index"
                  >
                    {{ value }}
                  </span>

                  <!-- คือ มันจะต้องมี 5 stage เพื่อเช็ค แบบ เขียนเสรจแล้วต่อไปก้ลงทะเบียน ลงทะเบียนเสรจแล้วก้ ไป รอ พอ อนุมัติ แล้วก้ลงขาย และถ้าหาก ไม่อนุมัติก้กลับมาเป็นอันแรก"-->

                  <br />ราคาที่เลือก:
                  <span style="color: #bab2b5">{{ card.price }}</span> <br />
                  สถานะหนังสือ:
                  <span style="color: #bab2b5" v-if="card.status == 'unready'"
                    >ยังเขียนไม่เสร็จ</span
                  >
                  <span style="color: #bab2b5" v-if="card.status == 'ready'"
                    >เขียนเสร็จแล้ว</span
                  >
                  <span style="color: #bab2b5" v-if="card.status == 'wait'"
                    >รออนุมัติ</span
                  >
                  <span style="color: #bab2b5" v-if="card.status == 'succeed'"
                    >อนุมัติสำเร็จแล้ว</span
                  >
                  <span
                    style="color: #bab2b5"
                    v-if="card.status == 'not_succeed'"
                    >ไม่อนุมัติ</span
                  >
                </div>
              </div>
            </div>
            <footer
              class="card-footer"
              v-if="card.status == 'unready' || card.status == 'not_succeed'"
            >
              <a class="card-footer-item">เขียนหนังสือต่อ </a>
              <a class="card-footer-item">บันทึกหนังสือ </a>
            </footer>
            <footer class="card-footer" v-if="card.status == 'ready'">
              <a class="card-footer-item">ลงทะเบียนขาย</a>
              <a class="card-footer-item">ลบหนังสือที่เขียน</a>
            </footer>
            <footer class="card-footer" v-if="card.status == 'wait'">
              <a class="card-footer-item">ยกเลิกการลงทะเบียน</a>
            </footer>
            <footer class="card-footer" v-if="card.status == 'succeed'">
              <a class="card-footer-item">ลบหนังสือที่เขียน</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" :class="{ 'is-active': DetailBook }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="DetailBook = false"
        ></button>

        <section class="modal-card-body">
          <div class="container has-text-centered">
            <div class="columns is-vcentered">
              <div class="column is-5">
                <figure class="image is-1by1">
                  <img :src="mysell_book[num_book].image" />
                </figure>
              </div>
              <div class="column is-7">
                <p class="title is-4">
                  {{ mysell_book[num_book].title }}
                </p>
                <br />
                <p class="subtitle is-5">
                  {{ mysell_book[num_book].desc }}
                </p>
                <p class="subtitle is-6">
                  เขียนโดย : {{ mysell_book[num_book].penname }}
                </p>
                <p class="subtitle is-6">
                  ประเภท : {{ mysell_book[num_book].type }}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "MysellBook",
  data() {
    return {
      DetailBook: false,
      mysell_book: { 0: {} },
      num_book: 0,
    };
  },
  mounted() {
    this.getpromotionDetail(4);
  },
  methods: {
    async getpromotionDetail(idUser) {
      await axios
        .get(`http://localhost:3000/MysellBook/${idUser}`)
        .then((response) => {
          this.mysell_book = response.data;
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },
    DetailBookread(nunber) {
      this.DetailBook = true;
      this.num_book = nunber;
    },
  },
};
</script>
<style lang="">
</style>