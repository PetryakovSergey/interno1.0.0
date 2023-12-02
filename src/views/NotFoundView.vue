
<template>
    <HeaderComp />
    <section class="content nf_center">
        <div class="not-found">
            <h2 class="not-found__heading">404</h2>
            <p class="not-found__text">We are sorry, but the page
                you requested was not found</p>
            <button class="not-found__button" @click="goToHomePage">
                Back To Home
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
                        stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
        <div>
            <img :src=mainPic alt="not found img" class="not-found__img">
        </div>
    </section>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';

export default {
    name: 'NotFoundView',
    components: { HeaderComp },

    data() {
        return {
            mainPic: require('@/assets/img/notFound.webp')
        }
    },
    methods: {
        goToHomePage() {
            this.$router.push('/')
        }
    }
};
</script>

<style scoped>
.nf_center {
    padding-left: calc(50% - 600px);
}

.content {
    margin-top: 45px;
    display: flex;
    justify-content: start;
    gap: 81px;
    align-items: center;
}

.not-found__heading {
    color: #CDA274;

    font-family: DM Serif Display;
    font-size: 250px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}

.not-found__text {
    margin: 15px 0px 23px 0px;
    color: #292F36;

    font-family: DM Serif Display;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 52.5px */
    letter-spacing: 0.35px;
}

.not-found__button {

    cursor: pointer;
    display: flex;
    padding: 26px 54px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #FFF;

    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
    border-radius: 18px;
    background: #292F36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
}

.not-found__img {
    border-radius: 0px 0px 0px 353px;
}
</style>
