<template>
  <div>
    <NavBar />
    <div>
      <div class="hero-body hero is-fullheight">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-5">
              <figure class="image is-1by1">
                <img
                  src="https://www.osemocphoto.com/collectManga/10768/10768_cover.jpg?1"
                />
              </figure>
            </div>
            <div class="column is-6 is-offset-1">
              <p class="title is-3">
                Exorcist wa Otosenai (เอ็กซอร์ซิสต์ไม่อาจร่วงหล่น)
              </p>
              <br />
              <p class="subtitle is-5">
                เรื่องย่อ:
                เด็กหนุ่มผู้ถูกรับเลือกจากพระเจ้าให้กลายเป็นเอ็กซอร์ซิสผู้แข็งแกร่งที่สุดซึ่งมีหน้าที่ในการปราบจอมมาร
                ได้พบเจอกับเด็กสาวผู้หนึ่ง
                จนเกิดเป็นเรื่องราวแห่งความรักและความหวัง
              </p>
              <p class="subtitle is-6">เขียนโดย : 有馬あるま</p>
              <p class="subtitle is-6">ประเภท : Romance, Action</p>
              <p class="subtitle is-6">วันที่วางขาย : 1/01/2020</p>
              <p class="subtitle is-6">ราคา : 125 บาท</p>

              <br />
              <p class="level-centere">
                <a class="button is-medium is-info is-outlined">
                  เพิ่มลงในตะกร้า
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";

export default {
  name: "DetailsBook",
  components: {
    NavBar,
  },
};
</script>
<style lang="">
</style>