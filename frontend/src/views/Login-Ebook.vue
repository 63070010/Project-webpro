<template>
  <div>
    <NavBar />

    <div>
      <section class="section hero is-fullheight">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half">
              <div
                class="card column"
                style="
                  background: linear-gradient(221deg, #edc7b7, #eee2dc 73%);
                  width: 700px;
                  margin-top: 120px;
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
                    เข้าสู่ระบบ
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
                  <label class="label" style="color: #123c69"
                    >ประเภทที่จะ ล็อคอินเข้าสู่ระบบ</label
                  >

                  <div class="control">
                    <label class="radio">
                      <input type="radio" v-model="picked" value="Customer" />
                      ลูกค้า
                    </label>
                    <label class="radio">
                      <input type="radio" v-model="picked" value="Author" />
                      นักเขียน
                    </label>
                    <label class="radio">
                      <input type="radio" v-model="picked" value="Admin" />
                      แอดมิน
                    </label>
                  </div>
                </div>

                <div class="field column">
                  <div class="control">
                    <button
                      class="button"
                      style="color: #eee2dc; background-color: #ac3b61"
                    >
                      เข้าสู่ระบบ
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
  name: "Register-Ebook",
  components: {
    NavBar,
  },
  data() {
    return {
      user_name: "",
      Password: "",
      picked: "Customer",
    };
  },
};
</script>
<style lang="">
</style>
