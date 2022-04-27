<template >
  <div>
    <NavBar />
    <EditProfile />
    <section>
      <div class="columns">
        <div class="container profile">
          <div class="section profile-heading">
            <div class="columns is-mobile is-multiline">
              <div class="column is-2">
                <figure class="image is-1by1">
                  <img class="is-rounded" :src="user[0].imageProflie" />
                </figure>
              </div>

              <div class="column is-4-tablet is-10-mobile name">
                <p>
                  <span class="title is-bold">{{ user[0].user_name }}</span>
                </p>
                <br />
                <div class="tagline">
                  <p>Email: {{ user[0].email }}</p>

                  <p>
                    ชื่อจริง: {{ user[0].fname }}
                    <span class="ml-4">นามสกุล: {{ user[0].lname }} </span>
                  </p>

                  <p>เพศ: {{ user[0].sex }}</p>
                  <p v-if="user[0].penname != null">
                    นามปากกา: {{ user[0].penname }}
                    <span class="ml-1" v-if="user[0].Phonenumber != null">
                      เบอร์โทรสับ: {{ user[0].Phonenumber }}
                    </span>
                    <span class="ml-1" v-else>เบอร์โทรสับ: ยังไม่มีข้อมูล</span>
                  </p>
                  <p v-else>
                    นามปากกา: ยังไม่มีข้อมูล
                    <span class="ml-1" v-if="user[0].Phonenumber != null">
                      เบอร์โทรสับ: {{ user[0].Phonenumber }}
                    </span>
                    <span class="ml-1" v-else>เบอร์โทรสับ: ยังไม่มีข้อมูล</span>
                  </p>
                  <p v-if="user[0].bank_name != null">
                    ชื่อธนาคาร: {{ user[0].bank_name }}
                  </p>
                  <p v-else>ชื่อธนาคาร: ยังไม่มีข้อมูล</p>
                  <p v-if="user[0].bank_number != null">
                    เลขที่บัญชี: {{ user[0].bank_number }}
                  </p>
                  <p v-else>เลขที่บัญชี: ยังไม่มีข้อมูล</p>
                </div>
              </div>

              <div
                class="column is-3-tablet is-4-mobile has-text-centered ml-6"
              >
                <p class="stat-val">15</p>
                <p class="stat-key">หนังสือในชั้นหนังสือ</p>
              </div>
              <div
                class="column is-2-tablet is-4-mobile has-text-centered ml-3"
                style="border-left: 2px dotted rgba(0, 0, 0, 0.2)"
              >
                <p class="stat-val">5</p>
                <p class="stat-key">หนังสือที่ลงขาย</p>
              </div>
            </div>
          </div>
          <div class="profile-options is-fullwidth">
            <div class="tabs is-fullwidth is-medium">
              <ul>
                <li
                  class="link"
                  v-bind:class="{ 'is-active': isActive == 'MYbook' }"
                >
                  <a v-on:click="isActive = 'MYbook'">
                    <span class="icon"> <i class="fa fa-list"></i> </span
                    >ชั้นหนังสือ</a
                  >
                </li>
                <li v-bind:class="{ 'is-active': isActive == 'MYbooksell' }">
                  <a v-on:click="isActive = 'MYbooksell'"
                    ><span class="icon">
                      <i class="fa fa-address-book"></i> </span
                    >หนังสือที่ลงขาย/เขียนหนังสือ</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-contents">
            <div
              class="content mt-6 mb-6"
              v-bind:class="{ 'is-active': isActive == 'MYbook' }"
            >
              <MyBook />
            </div>
          </div>
          <div class="tab-contents">
            <br />
            <div
              class="content mt-6 mb-6"
              v-bind:class="{ 'is-active': isActive == 'MYbooksell' }"
            >
              <AddBookmain />
              <MysellBook />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import MyBook from "@/components/MyBook";
import MysellBook from "@/components/MysellBook";
import NavBar from "@/components/NavBar";
import AddBookmain from "@/components/AddBookmain";
import EditProfile from "@/components/EditProfile";
import axios from "axios";
export default {
  name: "Profile_user",
  components: {
    NavBar,
    MyBook,
    MysellBook,
    AddBookmain,
    EditProfile,
  },
  data() {
    return {
      user: {
        0: {
          image: "",
        },
      },
      isActive: "MYbook",
    };
  },
  mounted() {
    this.getUser_id(this.$route.params.id);
  },
  methods: {
    async getUser_id(idUser) {
      await axios
        .get(`http://localhost:3000/Profile_user/${idUser}`)
        .then((response) => {
          this.user = response.data;
          console.log(this.user);
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },
  },
};
</script>
<style >
.stat-val {
  font-size: 3em;
  padding-top: 20px;
  font-weight: bold;
}

.stat-key {
  font-size: 1.4em;
  font-weight: 200;
}

.tab-contents .content {
  display: none;
}
.tab-contents .content.is-active {
  display: block;
}
</style>