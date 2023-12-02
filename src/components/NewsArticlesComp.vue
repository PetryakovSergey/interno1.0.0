<template>
    <section>
        <div class="down-content">
            <h2 class="down-content__heading">Articles & News</h2>
            <p class="down-content__text">It is a long established fact that a reader will be distracted by the of
                readable content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div class="down-articles">
            <div class="down-articles__card" v-for="article in articles" :key="article.id">
                <router-link to="/blog/details">
                    <ArticleComp :data='article' />
                </router-link>
            </div>


        </div>
    </section>
</template>

<script>
import ArticleComp from './ArticleComp.vue';

export default {
    name: 'NewsArticlesComp',
    components: { ArticleComp },
    data() {
        return {
            articles: [
                {
                    id: 1,
                    img: require('@/assets/img/articles/Image1.webp'),
                    heading: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                },
                {
                    id: 2,
                    img: require('@/assets/img/articles/Image2.webp'),
                    heading: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022',
                },
                {
                    id: 3,
                    img: require('@/assets/img/articles/Image3.webp'),
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                }
            ]
        }
    },

};
</script>

<style scoped>
.down-content {
    padding-top: 96px;
    padding-bottom: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    max-width: 811px;
    margin: auto;
    text-align: center;
}

.down-content__heading {
    color: #292F36;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.down-content__text {
    color: #4D5053;
    text-align: center;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.down-articles {
    display: flex;
    justify-content: center;
    gap: 27px;
}

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

.down-articles__card:hover {
    background: #F4F0EC;
    transition: 0.5s;
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

.down-articles__card_activator {
    position: absolute;
    bottom: 27px;
    right: 21px;
}
</style>