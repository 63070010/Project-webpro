<template >
  <div class="container is-max-widescreen">
    <div class="box has-text-centered">
      <a class="button" @click="add_BookNew()">
        เขียนหนังสือ เล่มใหม่
        <span class="material-icons">
          <i class="fas fa-pencil-alt ml-3"></i> </span
      ></a>
    </div>

    <div class="modal" :class="{ 'is-active': Add_Book }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="Add_Book_out()"
        ></button>

        <section class="modal-card-body">
          <div class="field">
            <span
              class="label is-size-4"
              style="color: #123c69; text-align: center"
            >
              รายละเอียดหนังสือ
            </span>
          </div>

          <div class="field">
            <label class="label" style="color: #ac3b61">ชื่อหนังสือ</label>
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
              <label class="label" style="color: #ac3b61">ประเภทหนังสือ</label>
              <div class="select is-fullwidth is-medium is-rounded">
                <select v-model="Book_type" style="background-color: #eee2dc">
                  <option value="Romance">Romance</option>
                  <option value="Action">Action</option>
                  <option value="Drama">Drama</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Adventure">Adventure</option>
                </select>
              </div>
            </div>
            <div class="field" style="margin-top: 35px">
              <button class="button is-success" @click="type_add()">
                เพิ่มประเภท
              </button>
            </div>
            <div class="field">
              <label class="label" style="color: #ac3b61">ราคาหนังสือ</label>
              <input
                class="input is-fullwidth is-medium is-rounded"
                type="number"
                v-model="price"
              />
            </div>
          </div>
          <br />
          <div class="field-body">
            <div class="field">
              <label class="label" style="color: #ac3b61"
                >เพิ่มรูปภาพปกหนังสือ</label
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
                >ประเภทหนังสือที่เลือกไว้</label
              >
              {{ Total_type }}
            </div>
          </div>

          <div class="field">
            <label class="label" style="color: #ac3b61">เรื่องย่อ</label>
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
          <button class="button is-success" @click="Add_Book_out()">
            บักทึก
          </button>
          <button class="button" @click="Add_Book_out = false">ยกเลิก</button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddBookmain",
  data() {
    return {
      Add_Book: false,
      Book_name: "",
      Book_type: "",
      Total_type: "",
      price: 0,
      detail_book: "",
    };
  },
  methods: {
    add_BookNew() {
      this.Add_Book = true;
    },

    type_add() {
      if (this.Total_type == "") {
        this.Total_type += this.Book_type;
      } else if (this.Total_type.includes(this.Book_type)) {
        alert("้เลือกประเภท นี้แล้ว");
      } else {
        this.Total_type += "," + " " + this.Book_type;
      }
    },
    Add_Book_out() {
      this.Add_Book = false;
      this.Book_name = "";
      this.Book_type = "";
      this.Total_type = "";
      this.price = 0;
      this.detail_book = "";
    },
  },
};
</script>
