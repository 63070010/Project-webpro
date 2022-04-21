<template>
  <NavBar />
  <div class="container is-max-desktop">
    <textarea
      class="hero textarea mt-6 mb-6 has-background-light is-fullheight"
    ></textarea>
    <nav
      class="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next page</a>
      <ul class="pagination-list">
        <li>
          <a
            class="pagination-link is-current"
            aria-label="Page 1"
            aria-current="page"
            >1</a
          >
        </li>
        <li><a class="pagination-link" aria-label="Goto page 47">2</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
      </ul>
    </nav>
  </div>
  <div class="level-right mr-3 mt-6">
    <div class="level-item">
      <button class="button is-white">
        <!--ทำไม่ได้เอาออกเลยน้ะ มีแค่ปุ่มกลับพอ-->บันทึก
      </button>
    </div>
    <div class="level-item">
      <button class="button is-white">ออกจากหน้าเขียน</button>
    </div>
  </div>
  <br />
</template>


<script>
import NavBar from "@/components/NavBar";

export default {
  name: "WriteBook",
  components: {
    NavBar,
  },
};
</script>
<style lang="">
</style>