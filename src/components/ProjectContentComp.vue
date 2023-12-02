<template>
    <section>
        <div class="main-info">
            <img :src="mainImgUrl" alt="main-photo">
            <div class="main-info__article">
                <h3 class="main-info__article_title">Our Project</h3>
                <div class="main-info__article_links">
                    <a href="#">Home</a>
                    <a href="#">Project</a>
                </div>
            </div>
        </div>
        <div class="categories">
            <h3 @click="currentComponentIndex = buttonSort.id" class="categories__tags" v-for="buttonSort in buttonSorts"
                :key="buttonSort.id" :class="{ 'active-tag': currentComponentIndex === buttonSort.id }">
                {{ buttonSort.name }}
            </h3>
        </div>
        <div class="content">
            <component :is="changeCategories"></component>
        </div>
        <div class="page">
            <a href="#" class="page-links">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                    <text class="page-links__text" x="17" y="31" font-family="Jost" font-size="16" font-weight=500
                        fill="black">01</text>
                </svg>
            </a>
            <a href="#" class="page-links"> <svg width="53" height="52" viewBox="0 0 53 52" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                    <text class="page-links__text" x="17" y="31" font-family="Jost" font-size="16" font-weight=500
                        fill="black">02</text>
                </svg>
            </a>
            <a href="#" class="page-links">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                    <text class="page-links__text" x="17" y="31" font-family="Jost" font-size="16" font-weight=500
                        fill="black">03</text>
                </svg>
            </a>
            <a href="#" class="page-links">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
        </div>
    </section>
</template>

<script>
import BedRoomComp from './BedRoomComp.vue';
import BathRoomComp from './BathRoomComp.vue';
import KitchenComp from './KitchenComp.vue';
import LivingAreaComp from './LivingAreaComp.vue';

export default {
    name: 'ProjectContentComp',
    components: {
        BedRoomComp,
        BathRoomComp,
        KitchenComp,
        LivingAreaComp
    },

    data() {
        return {
            currentComponentIndex: 0,
            mainImgUrl: require(`../assets/img/main-photo-project.webp`),
            buttonSorts: [
                {
                    id: 0,
                    name: 'Bathroom'
                },
                {
                    id: 1,
                    name: 'Bedroom'
                },
                {
                    id: 2,
                    name: 'Kitchen'
                },
                {
                    id: 3,
                    name: 'Living Area'
                }],
            components: [BathRoomComp, BedRoomComp, KitchenComp, LivingAreaComp]
        };
    },
    methods: {
        toggleActive(clickedTag) {
            // Сброс активности для всех тегов
            this.buttonSorts.forEach(button => {
                button.active = false;
            });
            // Установка активности для выбранного тега
            clickedTag.active = true;
        }
    },
    computed: {
        changeCategories() {
            return this.components[this.currentComponentIndex]
        }
    }


};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.main-info {
    display: flex;
    justify-content: center;
}

.main-info img {
    position: relative;
}

.main-info__article {
    position: absolute;
    top: 312px;
    border-radius: 37px 37px 0px 0px;
    background: #FFF;
    display: flex;
    padding: 41px 125px;
    flex-direction: column;
    align-items: center;

}

.main-info__article_title {
    margin: 0;
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}

.main-info__article_links {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.main-info__article a:not(:last-child)::after {
    content: " /";
    margin-right: 5px;
}

.main-info__article a {
    color: #4D5053;
}

.categories {
    margin-top: 200px;
    margin-bottom: 61px;
    display: flex;
    justify-content: center;
}

.categories__tags {
    padding: 26px 66px;
    cursor: pointer;

}

.active-tag {
    border-radius: 18px;
    background: #CDA274;
    color: #FFFFFF;
}


.page {

    margin-top: 51px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    gap: 20px;

}

.page-links__text {
    color: #292F36;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-transform: capitalize;
}
</style>