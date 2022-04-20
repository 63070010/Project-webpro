<template>
  <nav
    class="navbar is-fixed-top"
    style="background: linear-gradient(221deg, #edc7b7, #eee2dc 73%)"
  >
    <div class="navbar-menu mt-1 mb-1">
      <div class="navbar-start ml-3">
        <div class="navbar-item">
          <a>
            <router-link to="/register" style="color: #ac3b61"
              >สมัครสมาชิก</router-link
            >
            <a class="ml-2 mr-1" style="color: #ac3b61">/</a>
            <router-link to="/login" style="color: #ac3b61">
              ล็อคอินเข้าสู่ระบบ</router-link
            >
            <a class="ml-2 mr-1" style="color: #ac3b61">/</a>
            <router-link to="/Profile_user" style="color: #ac3b61"
              >โปรไฟล์</router-link
            >
          </a>
        </div>
      </div>

      <div class="navbar-canter">
        <div class="navbar-item mt-2" style="margin-right: 120px">
          <span class="icon is-size-5 mr-2"
            ><i class="fas fa fa-home" style="color: #ac3b61"></i>
          </span>
          <router-link to="/" style="color: #ac3b61">E5-book</router-link>
        </div>
      </div>

      <div class="navbar-end">
        <p class="navbar-item">
          <router-link to="/Cart_Book" style="color: #ac3b61"
            ><button class="button">
              <span style="color: #ac3b61"
                >(2)<!--จำนวนหนังสือซื้อที่ซื้อ--></span
              >
              <span class="icon is-size-5 ml-2"
                ><i class="fas fa-shopping-cart" style="color: #ac3b61"> </i
              ></span>
            </button>
          </router-link>
        </p>
      </div>
    </div>
  </nav>
  <br />
  <br />
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style >
</style>