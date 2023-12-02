<template>
  <HeaderComp />
  <BlogContentComp />
  <FooterComp />
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue';
import BlogContentComp from '@/components/BlogContentComp.vue';

export default {
  name: 'BlogView',
  components: {
    HeaderComp,
    FooterComp,
    BlogContentComp
  }
}
</script>
