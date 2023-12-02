<template>
  <HeaderComp />
  <HomeContentComp />
  <FooterComp />
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue';
import HomeContentComp from '@/components/HomeContent.Comp.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      mainUpperImg: require('@/assets/img/upper-block-photo.webp')
    }
  },
  components: {
    HeaderComp,
    FooterComp,
    HomeContentComp
  }
}
</script>


