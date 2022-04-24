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
              v-for="(value, index) in Book_list"
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
                          {{ value.Book_name }}
                        </p>

                        <p class="is-size-7" style="color: #bab2b5">
                          By {{ value.Pen_name }}
                        </p>
                        type:

                        <span
                          class="is-size-7 text-right"
                          style="color: #bab2b5"
                          v-for="(value, index) in value.Book_type"
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

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    MyCarosel,
    WarnPay,
  },
  data() {
    return {
      showdetailbook: false,
      book_numdetail: 0,

      Book_list: [
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
          Book_name: "4ปีที่อินเดีย (4 YEARS IN INDIA)",
          Pen_name: "Panasonic",
          price: 120,
          is_favorite: false,
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
          Book_type: ["Action", "Romance"],
          image:
            "https://www.osemocphoto.com/collectManga/11139/11139_cover.jpg?1",
          detail_book: "บลาๆ",
        },
        {
          id: 3,
          Book_name: "SPY x FAMILY",
          Pen_name: "Unknow",
          price: 100,
          is_favorite: true,
          Book_type: ["comedy", "Romance"],
          image:
            "https://cdn-local.mebmarket.com/meb/server1/114476/Thumbnail/book_detail_large.gif?2",
          detail_book: "บลาๆ",
        },
        {
          id: 4,
          Book_name:
            "The Alchemist Who Survived Now Dreams of a Quiet City Life",
          Pen_name: "Febreze",
          price: 80,
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
          is_favorite: false,
          Book_type: ["comedy", "action"],
          image:
            "https://cdn-local.mebmarket.com/meb/server1/191050/Thumbnail/book_detail_large.gif?5",
          detail_book: "บลาๆ",
        },
        {
          id: 6,
          Book_name: "OVERLORD เล่ม 13",
          Pen_name: "Febreze",
          price: 180,
          is_favorite: false,
          Book_type: ["comedy", "action"],
          image:
            "https://cdn-local.mebmarket.com/meb/server1/191051/Thumbnail/book_detail_large.gif?5",
          detail_book: "บลาๆ",
        },
        {
          id: 7,
          Book_name: "Mushoku Tensei",
          Pen_name: "Febreze",
          price: 180,
          is_favorite: false,
          Book_type: ["comedy", "action"],
          image:
            "https://www.osemocphoto.com/collectManga/6653/6653_cover.jpg?0",
          detail_book: "บลาๆ",
        },
      ],
    };
  },
  methods: {},
});
</script>
<style>
@import "~@creativebulma/bulma-divider";
</style>
    