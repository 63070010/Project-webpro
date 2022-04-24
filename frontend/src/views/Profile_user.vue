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
                  <img
                    class="is-rounded"
                    src="https://i.pinimg.com/736x/83/01/1c/83011ceb5ba721bc7e251a763181783e.jpg"
                  />
                </figure>
              </div>

              <div class="column is-4-tablet is-10-mobile name">
                <p>
                  <span class="title is-bold">{{ user_one[0].user_name }}</span>
                </p>
                <br />
                <div class="tagline">
                  <p>Email: {{ user_one[0].Email }}</p>

                  <p>
                    ชื่อจริง: {{ user_one[0].First_Name }}
                    <span class="ml-4"
                      >นามสกุล: {{ user_one[0].Last_Name }}
                    </span>
                  </p>

                  <p>เพศ: {{ user_one[0].Sex }}</p>
                  <p>เบอร์โทรสับ: {{ user_one[0].PhoneNumber }}</p>
                  <p>
                    ชื่อธนาคาร: {{ user_one[0].BankName }}
                    <span class="ml-4"
                      >เลขที่บัญชี: {{ user_one[0].BankNumber }}
                    </span>
                  </p>
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

export default {
  name: "Profile_Customer",
  components: {
    NavBar,
    MyBook,
    MysellBook,
    AddBookmain,
    EditProfile,
  },
  data() {
    return {
      user_one: [
        {
          user_name: "Nozomi",
          First_Name: "ทดสอบชื่อ",
          Last_Name: "ทดสอบนามสกุล",
          Email: "Mami@gmail.com",
          Sex: "ไม่ระบุ",
          picked: "Customer",
          PhoneNumber: "0999728955",
          BankName: "กสิกรไทย",
          BankNumber: "495-45613",
        },
      ],
      isActive: "MYbook",
    };
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