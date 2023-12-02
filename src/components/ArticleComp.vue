<template>
    <div>
        <img class="down-articles__img" :src="data.img" :alt="data.id">
        <h3 class="down-articles__card_title">{{ data.heading }}</h3>
        <p class="down-articles__card_date">{{ data.date }} </p>
        <svg class="down-articles__card_activator" width="52" height="53" viewBox="0 0 52 53" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'ArticleComp',
    props: ['data'],
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.down-articles__card {
    cursor: pointer;
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    background: #FFFFFF;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    max-width: 382px;
    position: relative;
}

.down-articles__card_activator {
    position: absolute;
    bottom: 27px;
    right: 21px;
}

.down-articles__img {
    border-radius: 40px 40px 0 0;
    width: 340px;
    height: 289px;
}

.down-articles__card:hover circle {
    fill: #fff;
}


.down-articles__card_title {
    padding-top: 21px;
    padding-bottom: 30px;
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
    max-width: 305px;
}

.down-articles__card_date {
    padding-bottom: 21px;
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}
</style>