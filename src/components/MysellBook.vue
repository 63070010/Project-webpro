<template>
  <div class="container is-max-widescreen">
    <div class="columns is-multiline">
      <div v-for="card in Book_list" v-bind:key="card.id" class="column is-3">
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
                <p class="title is-5 no-padding">{{ card.Book_name }}</p>
                ชื่อนามปากของคุณ:
                <span class="title is-6" style="color: #bab2b5">
                  {{ card.Pen_name }}</span
                >
                <br />
                ปรเภทหนังสือที่เลือกไว้:
                <span
                  class="is-size-6 text-right"
                  style="color: #bab2b5"
                  v-for="(value, index) in card.Book_type"
                  :key="index"
                >
                  {{ value }}&nbsp;
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
                <span style="color: #bab2b5" v-if="card.status == 'not_succeed'"
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
                <img
                  src="https://www.osemocphoto.com/collectManga/10768/10768_cover.jpg?1"
                />
              </figure>
            </div>
            <div class="column is-7">
              <p class="title is-4">
                Exorcist wa Otosenai (เอ็กซอร์ซิสต์ไม่อาจร่วงหล่น)
              </p>
              <br />
              <p class="subtitle is-5">
                เรื่องย่อ:
                เด็กหนุ่มผู้ถูกรับเลือกจากพระเจ้าให้กลายเป็นเอ็กซอร์ซิสผู้แข็งแกร่งที่สุดซึ่งมีหน้าที่ในการปราบจอมมาร
                ได้พบเจอกับเด็กสาวผู้หนึ่ง
                จนเกิดเป็นเรื่องราวแห่งความรักและความหวัง
              </p>
              <p class="subtitle is-6">เขียนโดย : 有馬あるま</p>
              <p class="subtitle is-6">ประเภท : Romance, Action</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "MysellBook",
  data() {
    return {
      DetailBook: false,
      Book_list: [
        {
          id: 0,
          Book_name: "Exorcist wa Otosenai ",
          Pen_name: "Apple",
          price: 100,
          is_favorite: false,
          status: "unready",
          Book_type: ["comedy", "Romance"],
          image:
            "https://www.osemocphoto.com/collectManga/10768/10768_cover.jpg?1",
          detail_book:
            " เด็กหนุ่มผู้ถูกรับเลือกจากพระเจ้าให้กลายเป็นเอ็กซอร์ซิสผู้แข็งแกร่งที่สุดซึ่งมีหน้าที่ในการปราบจอมมาร ได้พบเจอกับเด็กสาวผู้หนึ่ง จนเกิดเป็นเรื่องราวแห่งความรักและความหวัง ",
        },
        {
          id: 1,
          Book_name: "4ปีที่อินเดีย (4 YEARS IN INDIA)",
          Pen_name: "Panasonic",
          price: 120,
          is_favorite: false,
          status: "ready",
          Book_type: ["comedy", "Drama"],
          image:
            "https://cdn-local.mebmarket.com/meb/server1/191483/Thumbnail/book_detail_large.gif?4",
          detail_book:
            "  เด็กสาวผู้มีปัญหาในการเข้าสังคม ที่ได้พบกับเพื่อนสนิทที่รู้จักกันผ่านทางเกมออนไลน์ จนพัฒนาความสัมพันธ์จนไปเป็นคนรักในที่สุด เรื่องนี้ฟีลกู๊ดล้วนๆครับ ออกแนวความสัมพันธ์พระนาง น่ารักกุ๊กกิ๊ก นางเอกมีปัญหาเรื่องสนทนากับคนทั่วไปแบบโคมิเลย ต้องใช้มือถือช่วยพูด พระเอกเลยมีเวลาโชว์ความสุภาพบุรษ จนความรู้สึกค่อยๆเปลี่ยนไปครับ",
        },
        {
          id: 2,
          Book_name: "สุดยอดระบบอัตราบอกความสำเร็จ",
          Pen_name: "Unknow",
          price: 150,
          is_favorite: false,
          status: "wait",
          Book_type: ["Action", "Romance"],
          image:
            "https://www.osemocphoto.com/collectManga/11139/11139_cover.jpg?1",
          detail_book: "บลาๆ",
        },
        {
          id: 4,
          Book_name:
            "The Alchemist Who Survived Now Dreams of a Quiet City Life",
          Pen_name: "Febreze",
          price: 80,
          status: "succeed",
          is_favorite: false,
          Book_type: ["comedy", "action"],
          image:
            "https://www.osemocphoto.com/collectManga/8555/8555_cover.jpg?0",
          detail_book: "บลาๆ",
        },
        {
          id: 5,
          Book_name: "Mushoku Tensei",
          Pen_name: "Febreze",
          price: 180,
          status: "not_succeed",
          is_favorite: false,
          Book_type: ["comedy", "action"],
          image:
            "https://cdn-local.mebmarket.com/meb/server1/191050/Thumbnail/book_detail_large.gif?5",
          detail_book: "บลาๆ",
        },
      ],
    };
  },
};
</script>
<style lang="">
</style>