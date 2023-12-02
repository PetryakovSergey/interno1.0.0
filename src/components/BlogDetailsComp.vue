<template>
    <section>
        <div class="main-pic">
            <img :src="mainPhoto" alt="main-photo">
        </div>
    </section>
    <section class="content center">
        <div class="tags">
            <h3 class="tags__heading">Tags</h3>
            <div class="tags-container">
                <button @click="currentTab = button.id" v-for="button in buttons" :key="button.id" class="tag-buttons">{{
                    button.name }}</button>
            </div>

        </div>
        <div class="content-container">
            <component :is="changeTabs"></component>
        </div>


    </section>
</template>

<script>

import KitchenTab from './tabs/KitchenTab.vue';
import BedroomTab from './tabs/BedroomTab.vue';
import BuildingTab from './tabs/BuildingTab.vue';
import ArchitectureTab from './tabs/ArchitectureTab.vue';
import KitchenPlaningTab from './tabs/KitchenPlaningTab.vue';
import OtherBedroomTab from './tabs/OtherBedroomTab.vue';

export default {
    name: 'BlogDetailsComp',
    components: {
        KitchenTab,
        BedroomTab,
        BuildingTab,
        ArchitectureTab,
        KitchenPlaningTab,
        OtherBedroomTab
    },

    data() {
        return {
            mainPhoto: require('../assets/img/main-photo-blog-details.webp'),
            currentTab: '1',
            tabs: ['KitchenTab', 'BedroomTab', 'BuildingTab', 'ArchitectureTab', 'KitchenPlaningTab', 'OtherBedroomTab'],
            buttons: [{
                id: 1,
                name: 'kitchen',
            },
            {
                id: 2,
                name: 'bedroom',

            },
            {
                id: 3,
                name: 'building',

            },
            {
                id: 4,
                name: 'architecture',

            }, {
                id: 5,
                name: 'kitchen planning',

            },
            {
                id: 6,
                name: 'bedroom',
            }]
        };
    },
    computed: {
        changeTabs() {
            return this.tabs[this.currentTab - 1]
        }
    },
};
</script>

<style scoped>
.main-pic {
    display: flex;
    justify-content: center;
}

.content-container {
    max-width: 799px;
}

.content {
    display: flex;
    flex-direction: row-reverse;
    gap: 52px;
    margin-top: 150px;

}

.tags__heading {
    color: #292F36;

    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
}

.tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 11px;
    margin-top: 24px;
}

.tag-buttons {
    cursor: pointer;
    padding: 9px 30px;
    border-radius: 10px;
    background: #F4F0EC;
    color: #292F36;
    border: none;

    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}
</style>