<template>
    <section class="center">
        <div class="upper-block">
            <img :src="mainUpperImg" alt="upper-photo">
            <div class="upper-box">
                <h2 class="upper-box__title">Let Your Home
                    Be Unique</h2>
                <p class="upper-box__text">There are many variations of the passages of
                    lorem Ipsum fromavailable, majority.</p>
                <a href="#">
                    <button class="upper-box__button">Get Started
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                                stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>

                    </button>
                </a>

            </div>
        </div>

    </section>

    <OurProjectsComp></OurProjectsComp>
    <section>
        <div class="counter">
            <div class="counter__block">
                <h2 class="counter__block_count">12</h2>
                <p class="counter__block_achivement">Years Of Experiance</p>
            </div>
            <div class="counter__block">
                <h2 class="counter__block_count">85</h2>
                <p class="counter__block_achivement">Success Project</p>
            </div>
            <div class="counter__block">
                <h2 class="counter__block_count">15</h2>
                <p class="counter__block_achivement">Active Project</p>
            </div>
            <div class="counter__block">
                <h2 class="counter__block_count">95</h2>
                <p class="counter__block_achivement">Happy CUstomers</p>
            </div>
        </div>
    </section>
    <NewsArticlesComp></NewsArticlesComp>
</template>

<script>
import OurProjectsComp from './OurProjectsComp.vue';
import NewsArticlesComp from './NewsArticlesComp.vue'

export default {
    name: 'HomeContentComp',
    data() {
        return {
            mainUpperImg: require('@/assets/img/upper-block-photo.webp')
        };
    },
    components: { OurProjectsComp, NewsArticlesComp }
};
</script>

<style scoped>
.upper-block {
    position: relative;
}

.upper-block img {
    border-radius: 62px;
}

.upper-box {
    width: 434px;
    position: absolute;
    top: 180px;
    left: 45px;
}

.upper-box__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}

.upper-box__text {
    margin-top: 18px;
    margin-bottom: 21px;
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.upper-box__button {
    cursor: pointer;
    display: flex;
    padding: 26px 49px 26px 48px;
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


.counter {
    padding-top: 151px;
    padding-bottom: 151px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 17px;
    background-color: #F4F0EC;
    max-width: 1920px;
}

.counter__block {
    padding-left: 59px;
    padding-right: 51px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #CDA274;
}

.counter__block:last-child {
    border-right: none;
}

.counter__block_count {
    color: #CDA274;
    font-family: DM Serif Display;
    font-size: 85px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1.7px;
}

.counter__block_achivement {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}
</style>