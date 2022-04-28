<template>
  <!-- display: none; -->
  <div>
    <nav
      @click="editCheck()"
      class="button is-rounded navbar is-fixed-bottom navbar-end mb-4 mr-4"
      style="width: 120px; height: 55px; background-color: #edc7b7"
    >
      <span class="mt-2">แก้ไขโปรไฟล์</span>
    </nav>
    <div class="modal" :class="{ 'is-active': Edit_profile }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="Edit_out()"
        ></button>

        <section class="modal-card-body">
          <div class="field">
            <span
              class="label is-size-4"
              style="color: #123c69; text-align: center"
            >
              รายละเอียดโปรไฟล์
            </span>
          </div>
          <div class="field">
            <label class="label" style="color: #ac3b61">รูปโปรไฟล์</label>
            <div class="file">
              <label class="file-label">
                <input class="file-input" type="file" name="comment_image" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label"> Choose an image</span>
                </span>
              </label>
            </div>
          </div>
          <div class="field">
            <label class="label" style="color: #ac3b61">ชื่อผู้ใช้</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-medium is-rounded"
                type="text"
                style="background-color: #eee2dc"
                v-model="user_name"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div class="field-body">
            <div class="field">
              <div class="control">
                <label class="label" style="color: #ac3b61">ชื่อจริง </label>
                <input
                  class="input is-medium is-rounded"
                  type="text"
                  v-model="First_Name"
                  style="background-color: #eee2dc"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="label" style="color: #ac3b61">นามสกุล </label>
                <input
                  class="input is-medium is-rounded"
                  type="text"
                  v-model="Last_Name"
                  style="background-color: #eee2dc"
                />
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label" style="color: #ac3b61">อีเมล</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-medium is-rounded"
                type="text"
                v-model="Email"
                style="background-color: #eee2dc"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label" style="color: #ac3b61">เพศ</label>

            <div class="select is-fullwidth is-medium is-rounded">
              <select v-model="Sex" style="background-color: #eee2dc">
                <option value="Male">ชาย</option>
                <option value="Famale">หญิง</option>
                <option value="not_specified">ไม่ระบุ</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label class="label" style="color: #123c69">เบอร์โทรสับ</label>
            <input
              :disabled="disabled"
              class="input is-medium is-rounded"
              type="text"
              v-model="PhoneNumber"
              style="background-color: #eee2dc"
            />
          </div>

          <div class="field-body">
            <div class="field">
              <label class="label" style="color: #123c69">เลขที่บัญชี</label>
              <input
                :disabled="disabled"
                class="input is-medium is-rounded"
                type="text"
                v-model="BankName"
                style="background-color: #eee2dc"
              />
            </div>

            <div class="field">
              <label class="label" style="color: #123c69">ชื่อธนาคาร</label>
              <input
                :disabled="disabled"
                class="input is-medium is-rounded"
                type="text"
                v-model="BankNumber"
                style="background-color: #eee2dc"
              />
            </div>
          </div>

          <div class="field">
            <label class="label" style="color: #123c69"
              >ประเภทที่จะ สมัครสมาชิก</label
            >

            <div class="control">
              <label class="radio">
                <input
                  type="radio"
                  v-model="picked"
                  value="Customer"
                  @click="
                    (disabled = true),
                      ((BankName = ''), (BankNumber = ''), (PhoneNumber = ''))
                  "
                />
                ลูกค้า
              </label>
              <label class="radio">
                <input
                  type="radio"
                  v-model="picked"
                  value="Author"
                  @click="disabled = false"
                />
                เปลี่ยนเป็นนักเขียน
              </label>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="submit()">บักทึก</button>
          <button class="button" @click="Edit_out()">ยกเลิก</button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "EditProfile",
  data() {
    return {
      disabled: false,
      picked: "Customer",
      Edit_profile: false,
      user_name: "",
      First_Name: "",
      Last_Name: "",
      Email: "",

      Sex: "",
      PhoneNumber: "",
      BankName: "",
      BankNumber: "",
    };
  },

  mounted() {
    this.getUser_id(this.$route.params.id);
  },
  methods: {
    getUser_id(idUser) {
      axios
        .get(`http://localhost:3000/Profile_user/${idUser}`)
        .then((response) => {
          this.user = response.data.Profile;
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },

    editCheck() {
      this.Edit_profile = true;
      this.user_name = this.user.user_name;
      this.First_Name = this.user.lname;
      this.Last_Name = this.user.fname;
      this.Email = this.user.email;
      this.Sex = this.user.sex;
      this.PhoneNumber = this.user.Phonenumber;
      this.BankName = this.user.bank_name;
      this.BankNumber = this.user.bank_number;
    },
    Edit_out() {
      this.Edit_profile = false;
    },
    submit(idUser) {
      axios
        .put(`http://localhost:3000/EditProfile/${idUser}`, {})
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });

      this.Edit_profile = false;
    },
  },
};
</script>