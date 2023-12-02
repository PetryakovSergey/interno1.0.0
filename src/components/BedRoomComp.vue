<template>
    <div class="products center">
        <div class="products__card" v-for="(bedroom, index) in bedrooms" :key="index">
            <img :src="bedroom.imgUrl" alt="photo1">
            <router-link to="project/details">
                <div class="description-box">
                    <div class="description">
                        <h3 class="description__title">{{ bedroom.title }}</h3>
                        <p class="description__section">{{ link }}</p>
                    </div>
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </router-link>>


        </div>
    </div>
</template>

<script>


export default {
    name: 'BedRoomComp',

    data() {
        return {
            bedrooms: [
                {
                    imgUrl: require(`../assets/img/bedrooms/bedroom1.webp`),
                    title: 'Minimal Bedroom',

                },
                {
                    imgUrl: require(`../assets/img/bedrooms/bedroom2.webp`),
                    title: 'Minimal Bedroom',

                },
                {
                    imgUrl: require(`../assets/img/bedrooms/bedroom3.webp`),
                    title: 'Classic Minimal Bedroom',

                },
                {
                    imgUrl: require(`../assets/img/bedrooms/bedroom4.webp`),
                    title: 'Modern Bedroom',

                },
                {
                    imgUrl: require(`../assets/img/bedrooms/bedroom5.webp`),
                    title: 'Minimal Bedroom table',

                },
                {
                    imgUrl: require(`../assets/img/bedrooms/bedroom6.webp`),
                    title: 'System Table',

                },
                {
                    imgUrl: require(`../assets/img/bedrooms/bedroom7.webp`),
                    title: 'Modern Medroom',

                },
            ],
            link: 'Decor / Architecture'
        };
    },
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

.products {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 3479px;
}

.description-box {
    cursor: pointer;
}

.description__title {
    color: #292F36;

    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
}

.description__section {
    color: #4D5053;

    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}


.products__card:hover circle {
    transition: 0.5s;
    fill: #fff;
}
</style>