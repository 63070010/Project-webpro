<template >
  <div>
    <NavbarAdmin />
    <MyCarosel />
    <div class="divider is-info is-right" style="color: #123c69">
      Manage book promotion &ensp;
    </div>
    <div class="level-right mr-3">
      <div class="level-item">
        <button class="button is-light" @click="Add_promotion = true">
          เพิ่ม
        </button>
      </div>
      <div class="level-item">
        <button class="button is-light" @click="cancel_promotion = true">
          ยกเลิก
        </button>
      </div>
    </div>
    <div class="columns">
      <div class="column mt-4">
        <section class="section" id="section_one">
          <h1>
            <span class="material-icons" style="color: #123c69"
              >&#xef64; หนังสือที่รอการยืนยันลงขาย
            </span>

            <div
              class="field has-addons is-pulled-right"
              style="color: #123c69"
            >
              คำขอล่าสุด
            </div>
            <div class="divider is-info" style="color: #123c69">Wait Book</div>
          </h1>
        </section>

        <div class="container is-max-desktop">
          <div class="is-multiline columns is-variable is-2">
            <div
              class="column is-one-quarter"
              v-for="value in Book_list"
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
                <div class="level-item has-text-centered">
                  <button class="button is-light" style="color: #123c69">
                    อ่านเนื้อหาหนังสือ
                  </button>
                </div>
                <br />
                <footer class="card-footer">
                  <a class="card-footer-item">อนุมัติ</a>
                  <a class="card-footer-item">ไม่อนุมัติ</a>
                </footer>
              </div>
            </div>
          </div>
        </div>

        <section class="section" id="section_two">
          <span class="material-icons" style="color: #123c69"
            >&#xe872; หนังสือที่รอการยืนยันการลบ
          </span>

          <div class="field has-addons is-pulled-right">คำขอล่าสุด</div>
          <div class="divider is-info" style="color: #123c69">Wait Book</div>
        </section>

        <div class="container is-max-desktop">
          <div class="is-multiline columns is-variable is-2">
            <div
              class="column is-one-quarter"
              v-for="value in Book_list"
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
                <div class="level-item has-text-centered">
                  <button class="button is-light" style="color: #123c69">
                    อ่านเนื้อหาหนังสือ
                  </button>
                </div>
                <br />
                <footer class="card-footer">
                  <a class="card-footer-item">ยืนยัน</a>
                  <a class="card-footer-item">ไม่ยืนยัน </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
        <section class="section" id="section_three">
          <span class="material-icons" style="color: #123c69"
            >&#xf041; รายละเอียดการเงิน
          </span>

          <div class="divider is-info" style="color: #123c69">
            list of transfers
          </div>
        </section>
        <div class="hero-body">
          <div class="box" v-for="box in order" v-bind:key="box.id">
            <article class="media">
              <div class="media-left">
                <figure>
                  <img :src="box.image_check" class="image is-64x64" />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>ออเดอร์ที่ {{ box.number_order }}</strong>
                    <br />
                    รายการหนังสือ:

                    <span
                      v-for="(value, index) in box.list_book"
                      v-bind:key="index"
                    >
                      {{ value }} &ensp;</span
                    ><br />ราคาทั้งหมด: {{ box.total_pice }}
                  </p>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <button class="button is-light">ยืนยัน</button>
                  </div>
                  <div class="level-item">
                    <button class="button is-light">ไม่ยืนยัน</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" :class="{ 'is-active': cancel_promotion }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="cancel_promotion = false"
        ></button>

        <section class="modal-card-body">
          <span
            class="label is-size-4"
            style="color: #123c69; text-align: center"
          >
            เลือกรายการที่จะยกเลิก
          </span>
          <p></p>
          <br />
          <div class="is-size-5" style="color: #123c69">
            เลือกหัวข้อโปรโมชั่นที่จะลบ
          </div>
          <br />
          <div class="select">
            <select>
              <option v-for="value in promotion" v-bind:key="value.id">
                {{ value.title }}
              </option>
            </select>
          </div>
        </section>

        <footer class="modal-card-foot">
          <button class="button is-success">ยืนยัน</button>
          <button class="button" @click="cancel_promotion = false">
            ยกเลิก
          </button>
        </footer>
      </div>
    </div>
    <div class="hero is fulheight"></div>
    <div class="modal" :class="{ 'is-active': Add_promotion }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="Add_promotion = false"
        ></button>

        <section class="modal-card-body">
          <div class="field">
            <span
              class="label is-size-4"
              style="color: #123c69; text-align: center"
            >
              รายละเอียดโปรโมชั่น
            </span>
          </div>

          <div class="field">
            <label class="label" style="color: #ac3b61"
              >หัวข้อโปรโมชั่น
              <!--ชื่อโปรโมชั่น--></label
            >
            <div class="control">
              <input
                class="input is-medium is-rounded"
                type="text"
                style="background-color: #eee2dc"
                v-model="Book_name"
              />
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <label class="label" style="color: #ac3b61"
                >เพิ่มรูปภาพโปรโมชั่น</label
              >
              <div class="file">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume" />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label"> Choose a file… </span>
                  </span>
                </label>
              </div>
            </div>
            <div class="field">
              <label class="label" style="color: #ac3b61"
                >วันหมดโปรโมชั่น
                <!--เก็บเป็น date time คือ เซตเวลาเปน 23:59:59 ไปเลย อารมแบบ หมดวันนี้ประมานนั้น-->
              </label>
              <input
                class="input is-fullwidth is-medium is-rounded"
                type="date"
                v-model="end_promotion"
              />
            </div>
          </div>

          <div class="field">
            <label class="label" style="color: #ac3b61"
              >รายละเอียดโปรโมชั่น</label
            >
            <div class="control">
              <textarea
                class="textarea is-medium is-rounded"
                style="background-color: #eee2dc"
                v-model="detail_book"
              ></textarea>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">เพิ่ม</button>
          <button class="button" @click="Add_promotion = false">ยกเลิก</button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarAdmin from "@/components/NavbarAdmin";
import MyCarosel from "@/components/MyCarosel";
export default {
  name: "AdminPage",
  components: {
    NavbarAdmin,
    MyCarosel,
  },
  data() {
    return {
      Add_promotion: false,
      cancel_promotion: false,
      promotion: [
        {
          id: 0,
          title: "AZ",
          desc: "เนื้อหา",
        },

        {
          id: 1,
          title: "BBBZ",
          desc: "เนื้อหา",
        },
      ],

      Book_list: [
        {
          id: 0,
          Book_name: "Exorcist wa Otosenai ",
          Pen_name: "Apple",
          price: 100,
          is_favorite: false,
          Book_type: ["comedy", "Romance"],
          image:
            "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/08/princess-connect-redive-season-2-trailer-screenshot.png",
          detail_book:
            " เด็กหนุ่มผู้ถูกรับเลือกจากพระเจ้าให้กลายเป็นเอ็กซอร์ซิสผู้แข็งแกร่งที่สุดซึ่งมีหน้าที่ในการปราบจอมมาร ได้พบเจอกับเด็กสาวผู้หนึ่ง จนเกิดเป็นเรื่องราวแห่งความรักและความหวัง ",
        },
        {
          id: 1,
          Book_name: "This Is the Memory Until the Girl ",
          Pen_name: "Panasonic",
          price: 120,
          is_favorite: false,
          Book_type: ["comedy", "Drama"],
          image:
            "https://skilfulgamer.com/wp-content/uploads/2022/02/genshin-impact-original-art-from-website_11zon-1.jpg",
          detail_book:
            "  เด็กสาวผู้มีปัญหาในการเข้าสังคม ที่ได้พบกับเพื่อนสนิทที่รู้จักกันผ่านทางเกมออนไลน์ จนพัฒนาความสัมพันธ์จนไปเป็นคนรักในที่สุด เรื่องนี้ฟีลกู๊ดล้วนๆครับ ออกแนวความสัมพันธ์พระนาง น่ารักกุ๊กกิ๊ก นางเอกมีปัญหาเรื่องสนทนากับคนทั่วไปแบบโคมิเลย ต้องใช้มือถือช่วยพูด พระเอกเลยมีเวลาโชว์ความสุภาพบุรษ จนความรู้สึกค่อยๆเปลี่ยนไปครับ",
        },
      ],
      order: [
        {
          id: 0,
          list_book: ["Exorcist wa Otosenai", "Mushoku Tensei"],
          number_order: 1,
          stage: "succeed",
          image_check:
            "https://f.ptcdn.info/360/068/000/q6il3skqoY5eB248knw-o.jpg",
          total_pice: 300,
        },
        {
          id: 1,
          Book_name: "Exorcist ",
          list_book: [
            "สุดยอดระบบอัตราบอกความสำเร็จ",
            "Ore ni Trauma wo Ataeta Joshi-tachi",
          ],
          number_order: 2,
          stage: "wait",
          image_check:
            "https://f.ptcdn.info/393/067/000/q2uaruibdir370ioYjS-o.jpg",
          total_pice: 250,
        },
      ],
    };
  },
};
</script>
<style >
</style>