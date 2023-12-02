<template>
    <HeaderComp />
    <ProjectDetailsComp />
    <FooterComp />
</template>

<script>

import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import ProjectDetailsComp from '@/components/ProjectDetailsComp.vue';

export default {
    name: 'ProjectDetailsView',
    components: {
        HeaderComp,
        FooterComp,
        ProjectDetailsComp
    },


};
</script>

<style scoped></style>