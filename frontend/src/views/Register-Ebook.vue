<template>
  <div>
    <NavBar />

    <div>
      <section class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half">
              <div
                class="card column mt-6"
                style="
                  background: linear-gradient(221deg, #edc7b7, #eee2dc 73%);
                "
              >
                <div class="field">
                  <p
                    class="label is-size-4"
                    style="color: #123c69; text-align: center"
                  >
                    <span
                      class="material-icons"
                      style="color: #123c69; text-align: center"
                    >
                      &#xe174;
                    </span>
                    <br />
                    สมัครสมาชิก
                  </p>
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
                      <label class="label" style="color: #ac3b61"
                        >ชื่อจริง
                      </label>
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
                      <label class="label" style="color: #ac3b61"
                        >นามสกุล
                      </label>
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
                      type="email"
                      v-model="Email"
                      style="background-color: #eee2dc"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <label class="label" style="color: #ac3b61"
                        >วันเกิด</label
                      >
                      <input
                        class="input is-medium is-rounded"
                        type="date"
                        v-model="Birthday"
                        style="background-color: #eee2dc"
                      />
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
                </div>

                <div class="field">
                  <label class="label" style="color: #123c69"
                    >เบอร์โทรสับ</label
                  >
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
                    <label class="label" style="color: #123c69"
                      >เลขที่บัญชี</label
                    >
                    <input
                      :disabled="disabled"
                      class="input is-medium is-rounded"
                      type="text"
                      v-model="BankName"
                      style="background-color: #eee2dc"
                    />
                  </div>

                  <div class="field">
                    <label class="label" style="color: #123c69"
                      >ชื่อธนาคาร</label
                    >
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
                  <label class="label" style="color: #ac3b61">รหัสผ่าน</label>
                  <input
                    class="input is-medium is-rounded"
                    type="text"
                    v-model="Password"
                    style="background-color: #eee2dc"
                  />
                </div>

                <div class="field">
                  <label class="label" style="color: #ac3b61"
                    >ยืนยัน รหัสผ่าน</label
                  >
                  <input
                    class="input is-medium is-rounded"
                    type="text"
                    v-model="Retype_Password"
                    style="background-color: #eee2dc"
                  />
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
                            ((BankName = ''),
                            (BankNumber = ''),
                            (PhoneNumber = ''))
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
                      นักเขียน
                    </label>
                  </div>
                </div>

                <div class="field column">
                  <div class="control">
                    <button
                      class="button"
                      style="color: #eee2dc; background-color: #ac3b61"
                      @click="submit()"
                    >
                      ส่งข้อมูล
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar,
  },
  name: "Register-Ebook",
  data() {
    return {
      user_name: "",
      First_Name: "",
      Last_Name: "",
      Email: "",
      Birthday: "",
      Sex: "",
      PhoneNumber: "",
      BankName: "",
      BankNumber: "",
      Password: "",
      Retype_Password: "",
      disabled: true,
      picked: "Customer",
    };
  },
  methods: {
    submit() {
      //ตรงนี้เช็คข้อมูลซ้ำไหม อีเมลล มี @ ไหม
    },
  },
};
</script>
<style lang="">
</style>
