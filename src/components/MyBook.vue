<template lang="">
   <div class="container is-max-widescreen ">
        <div class=" columns is-multiline">
          <div v-for="card in Book_list" v-bind:key="card.id" class="column is-3">
            <div class="card large"  >
              <div class="card-image  image is-4by5" @click="DetailBook = true">
                  <img :src="card.image" alt="Image">
              </div>

              <div class="card-content" style="height: 170px"  @click="DetailBook = true"> 
                <div class="media">
                  <div class="media-content">
                    <p class="title is-5 no-padding">{{card.Book_name}}</p>
                    by
                      <span class="title is-6 "  style="color: #bab2b5">
                         {{card.Pen_name}}</span> 
                                 <br>     type:
                    <span
                      class="is-size-7 text-right"
                      style="color: #bab2b5"
                      v-for="(value, index) in card.Book_type"
                      :key="index"
                    >
                      {{ value }} &nbsp;
                    </span>
                    
                  </div>
                </div>
              </div>
                 <footer class="card-footer">
                    <a class="card-footer-item">อ่าน</a>
                </footer>
            </div>
   
          </div>
      </div>

    </div>
 <div class="modal " :class="{ 'is-active': DetailBook }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="DetailBook = false"
        ></button>

    <section class="modal-card-body ">
  
      <div class="container has-text-centered">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <figure class="image is-1by1">
              <img
                src="https://www.osemocphoto.com/collectManga/10768/10768_cover.jpg?1"
              />
            </figure>
          </div>
          <div class="column is-7 ">
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
    <footer class="modal-card-foot ">
          <button class="button is-success "  >อ่านเนื้อหาหนังสือ</button>
          <button class="button" @click="DetailBook = false">กลับ</button>

    </footer>
  </div>
    </div>
</template>
<script>
export default {
  name: "MyBook",
  data() {
    return {
      DetailBook: false,
      Book_list: [
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
        {
          id: 9,
          Book_name: "Ore ni Trauma wo Ataeta Joshi-tachi",
          Pen_name: "Unknow",
          price: 100,
          is_favorite: true,
          Book_type: ["Drama", "Romance"],
          image:
            "https://www.osemocphoto.com/collectManga/11256/11256_cover.jpg?1",
          detail_book: "บลาๆ",
        },
      ],
    };
  },
};
</script>
<style lang="">
</style>