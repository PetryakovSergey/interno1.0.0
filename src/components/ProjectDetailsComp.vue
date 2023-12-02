<template>
    <div class="content-box">
        <img :src="imgUrl" alt="main-photo">
        <div class="content">
            <h3 class="title">Minimal Look Bedrooms</h3>
            <p class="description">{{ getDescription }}</p>
            <div class="slider">
                <img @click="slide" class="image" :src="require(`../assets/img/slider/${sliderImgs[currentIndex]}`)"
                    alt="img">
                <div class="slider-dots">
                    <svg @click="prev" xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    <svg @click="next" xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                </div>


            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ProjectDetailsComp',

    data() {
        return {
            imgUrl: require('../assets/img/Image_laceholder.webp'),
            // sliderImg: require('../assets/slider.png'),
            sliderImgs: [
                'slider.webp',
                'slider2.webp',
                'slider3.webp'
            ],
            currentIndex: 0,
            dots: require('../assets/img/dots.webp')
        };
    },
    computed: {
        ...mapGetters(['getDescription'])
    },

    methods: {
        slide(event) {
            // Получаем координату клика относительно левого края изображения
            const clickX = event.clientX - event.target.getBoundingClientRect().left;

            // Если клик был на правой половине изображения, переключаемся к следующему изображению
            if (clickX >= event.target.width / 2) {
                this.currentIndex = (this.currentIndex + 1) % this.sliderImgs.length;
            } else {
                // Иначе, если клик был на левой половине, переключаемся к предыдущему изображению
                this.currentIndex = (this.currentIndex - 1 + this.sliderImgs.length) % this.sliderImgs.length;
            }

        },
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.sliderImgs.length;
        },
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.sliderImgs.length) % this.sliderImgs.length;
        }
    },
};
</script>

<style scoped>
.content-box {
    text-align: center;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 100px;
}

.title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.description {
    margin-top: 11px;
    margin-bottom: 100px;
    text-align: left;
    max-width: 658px;
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.slider {
    cursor: pointer;
}

.slider-dots {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
}

.image {
    width: 1201px;
    height: 799px;
    border-radius: 100px;
}
</style>