<template>
    <HeaderComp />
    <BlogDetailsComp />
    <FooterComp />
</template>

<script>

import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import BlogDetailsComp from '@/components/BlogDetailsComp.vue';

export default {
    name: 'BlogDetailsView',
    components: {
        HeaderComp,
        FooterComp,
        BlogDetailsComp
    },
};
</script>

<style scoped></style>