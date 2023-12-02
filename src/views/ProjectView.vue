<template>
    <HeaderComp />
    <ProjectContentComp />
    <FooterComp />
</template>
  
<script>
// @ is an alias to /src
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import ProjectContentComp from '@/components/ProjectContentComp.vue';

export default {
    name: 'ProjectView',
    components: {
        HeaderComp,
        FooterComp,
        ProjectContentComp
    }
}
</script>