<template lang="">
   <div class="container">
        <div class=" columns is-multiline">
          <div v-for="card in Book_list" v-bind:key="card.id" class="column is-3">
            <div class="card large" >
              <div class="card-image  image is-1by1">
                  <img :src="card.image" alt="Image">
              </div>

              <div class="card-content" style="height: 170px">
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

</template>
<script>
export default {
  name: "MyBook",
  data() {
    return {
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