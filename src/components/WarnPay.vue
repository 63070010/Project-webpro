<template>
  <!-- display: none; -->
  <div>
    <nav
      @click="Warn = true"
      class="button is-rounded navbar is-fixed-bottom mb-4 ml-4"
      style="width: 120px; height: 55px; background-color: #edc7b7"
    >
      <span class="mt-2">รายการชำระเงิน</span>
    </nav>
    <div class="modal" :class="{ 'is-active': Warn }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="Warn = false"
        ></button>

        <section class="modal-card-body">
          <p class="has-text-centered is-size-4">รายการ รอยืนยันการชำระเงิน</p>
          <div class="field">
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
                      ><br />ราคาทั้งหมด: {{ box.total_pice }}&ensp;
                      สถานะออเดอร์:
                      {{ box.stage }}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">บักทึก</button>
          <button class="button" @click="Warn = false">ยกเลิก</button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WarnPay",
  data() {
    return {
      Warn: false,
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