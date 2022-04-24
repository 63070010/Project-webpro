<template >
  <div class="mt-6">
    <Carousel :items-to-show="1.95" :autoplay="3500" :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item">
          <router-link to="/DetailPromotion">
            <img
              :src="slide"
              alt="Placeholder image"
              style="width: 750px; height: 420px"
            />
          </router-link>
        </div>
      </Slide>

      <template #addons="{ slidesCount }">
        <Pagination v-if="slidesCount > 1" />
      </template>
    </Carousel>
  </div>
</template>
<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "CaroUse",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      slides: [
        "https://f.ptcdn.info/077/050/000/ond66gp9gxO0a5Y82D9-o.jpg",
        "https://inwfile.com/s-dr/8sr3z4.png",
        "https://scontent.fbkk31-1.fna.fbcdn.net/v/t1.6435-9/51010800_10155813829867007_5214790518747168768_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHnwOX1ckVweOgsxG8yt9CoQWhV4cYnf2xBaFXhxid_bFixKVNnQ0scfbalG-WTBjw8tdyACjgYghxp1kZzcAVM&_nc_ohc=QOtfb-t7bU0AX9PbASq&_nc_ht=scontent.fbkk31-1.fna&oh=00_AT9hlqvqhLUcZ8WSdnTeqs4R-dMYJOmLcSZlZ4N63D-cVQ&oe=62849833",
        "https://storage.naiin.com/system/application/bookstore/resource/content/2591/b6f9c28e-0667-49.jpg",
      ],
    };
  },
};
</script>
