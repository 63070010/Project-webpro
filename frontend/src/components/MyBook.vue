<template lang="">
   <div class="container is-max-widescreen hero is-fullheight">
        <div class=" columns is-multiline" v-if="Book_list.length > 0">
          <div v-for="(card, index) in Book_list" v-bind:key="card.id" class="column is-3">
            <div class="card large"  >
              <div class="card-image  image is-4by5" @click="DetailBookread(index) ">
                  <img :src="card.image" alt="Image">
              </div>

              <div class="card-content" style="height: 170px"  @click="DetailBookread(index)"> 
                <div class="media">
                  <div class="media-content">
                    <p class="title is-5 no-padding">{{card.title}}</p>
                    by
                      <span class="title is-6 "  style="color: #bab2b5">
                         {{card.penname}}</span> 
                                 <br>     type:
                    <span
                      class="is-size-7 text-right"
                      style="color: #bab2b5"
                      v-for="(value, index) in card.type"
                      :key="index"
                    >
                      {{ value }}
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
                :src="Book_list[num_book].image" 
              />
            </figure>
          </div>
          <div class="column is-7 ">
            <p class="title is-4">
              {{Book_list[num_book].title}}
            </p>
            <br />
            <p class="subtitle is-5">
              {{Book_list[num_book].desc}}
            </p>
            <p class="subtitle is-6">เขียนโดย : {{Book_list[num_book].penname}}</p>
            <p class="subtitle is-6">ประเภท : {{Book_list[num_book].type}}</p>
      
         
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
import axios from "axios";
export default {
  name: "MyBook",
  data() {
    return {
      DetailBook: false,
      Book_list: {
        0: {},
      },
      num_book: 0,
    };
  },
  mounted() {
    this.getpromotionDetail(5);
  },
  methods: {
    async getpromotionDetail(idUser) {
      await axios
        .get(`http://localhost:3000/myBook/${idUser}`)
        .then((response) => {
          this.Book_list = response.data;
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