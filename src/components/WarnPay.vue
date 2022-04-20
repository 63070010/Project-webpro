<template>
  <!-- display: none; -->
  <div>
    <nav
      @click="Warn = true"
      class="button is-rounded navbar is-fixed-bottom mb-4 ml-4"
      style="width: 120px; height: 55px; background-color: #edc7b7"
    >
      <span class="mt-2">รายการชำระเงิน</span>
    </nav>
    <div class="modal" :class="{ 'is-active': Warn }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="Warn = false"
        ></button>

        <section class="modal-card-body">
          <div class="field">
            <div class="box">
              <article class="media">
                <div class="media-left"></div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <br />
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">บักทึก</button>
          <button class="button" @click="Warn = false">ยกเลิก</button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WarnPay",
  data() {
    return {
      Warn: false,
    };
  },
};
</script>