<template>
    <section>
        <div class="main-info">
            <img :src="require('@/assets/img/main-photo.webp')" alt="main-photo">
            <div class="main-info__article">
                <h3 class="main-info__article_title">Articles & News</h3>
                <div class="main-info__article_links">
                    <a href="#">Home</a>
                    <a href="#">Blog</a>
                </div>
            </div>
        </div>
    </section>
    <section>
        <router-link to="/blog/details">
            <div class="post center">
                <h2 class="post__heading">Latest Post</h2>
                <div class="post-box">
                    <img :src="require('@/assets/img/post-photo.webp')" alt="post-photo">
                    <div class="post-box__description">
                        <h3 class="post-box__description_title">{{ latestPostTitle }}</h3>
                        <p class="post-box__description_upper-text">{{ latestPostUpperText }}</p>

                        <p class="post-box__description_down-text">{{ latestPostDownText }}</p>
                        <p class="post-box__description_date">
                            {{ latestPostData }}
                        </p>
                    </div>
                </div>

            </div>
        </router-link>

    </section>
    <section>

        <div class="arcticles-heading center">Articles & News</div>
        <div class="down-articles">
            <div class="down-articles__card" v-for="article in shownArticle" :key="article.id">
                <router-link to="./blog/details">


                    <ArticleComp :data='article' />

                </router-link>


            </div>
        </div>

        <div class="page">
            <a href="#" class="page-links" @click="showArticles(1)">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                    <text x="17" y="31" font-family="Jost" font-size="16" font-weight=500 fill="black">01</text>
                </svg>
            </a>
            <a href="#" class="page-links" @click="showArticles(2)">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                    <text x="17" y="31" font-family="Jost" font-size="16" font-weight=500 fill="black">02</text>
                </svg>
            </a>
            <a href="#" class="page-links" @click="showArticles(3)">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                    <text x="17" y="31" font-family="Jost" font-size="16" font-weight=500 fill="black">03</text>
                </svg>
            </a>
            <a href="#" class="page-links" @click="showArticles(1)">
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
import ArticleComp from './ArticleComp.vue';
import { mapGetters } from 'vuex';

export default {


    name: 'BlogContentComp',
    components: { ArticleComp },
    data() {
        return {
            currentPage: 1,
            shownArticle: [
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
                },
                {
                    id: 4,
                    img: require('@/assets/img/articles/Image4.webp'),
                    heading: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                },
                {
                    id: 5,
                    img: require('@/assets/img/articles/Image5.webp'),
                    heading: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022',
                },
                {
                    id: 6,
                    img: require('@/assets/img/articles/Image6.webp'),
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                }
            ],
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
                },
                {
                    id: 4,
                    img: require('@/assets/img/articles/Image4.webp'),
                    heading: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                },
                {
                    id: 5,
                    img: require('@/assets/img/articles/Image5.webp'),
                    heading: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022',
                },
                {
                    id: 6,
                    img: require('@/assets/img/articles/Image6.webp'),
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                },
                {
                    id: 7,
                    img: require('@/assets/img/articles/Image7.webp'),
                    heading: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                },
                {
                    id: 8,
                    img: require('@/assets/img/articles/Image8.webp'),
                    heading: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022',
                },
                {
                    id: 9,
                    img: require('@/assets/img/articles/Image9.webp'),
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                },
                {
                    id: 10,
                    img: require('@/assets/img/articles/Image10.webp'),
                    heading: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                },
                {
                    id: 11,
                    img: require('@/assets/img/articles/Image11.webp'),
                    heading: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022',
                },
                {
                    id: 12,
                    img: require('@/assets/img/articles/Image2.webp'),
                    heading: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                },
                {
                    id: 13,
                    img: require('@/assets/img/articles/Image5.webp'),
                    heading: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                },
                {
                    id: 14,
                    img: require('@/assets/img/articles/Image9.webp'),
                    heading: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022',
                },

            ]
        };
    },
    computed: {
        ...mapGetters(['getLatestPost']),
        latestPostTitle() {
            return this.getLatestPost.title;
        },
        latestPostUpperText() {
            return this.getLatestPost.upperText;
        },
        latestPostDownText() {
            return this.getLatestPost.downText;
        },
        latestPostData() {
            return this.getLatestPost.data;
        }
    },
    methods: {
        showArticles(page) {
            switch (page) {
                case 1:
                    this.currentPage = page
                    this.shownArticle = this.articles.slice(0, 6);
                    break;
                case 2:
                    this.currentPage = page
                    this.shownArticle = this.articles.slice(6, 12);
                    break;
                case 3:
                    this.currentPage = page
                    this.shownArticle = this.articles.slice(12, 18);
                    break;
                default:
                    break;
            }
        }
    }
};
</script>

<style scoped>
.main-info {
    display: flex;
    justify-content: center;
}

.main-info img {
    position: relative;
}

.main-info__article {
    position: absolute;
    top: 294px;
    border-radius: 37px 37px 0px 0px;
    background: #FFF;
    display: flex;
    padding: 41px 78px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.main-info__article_title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}

.main-info__article_links {
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

.post {
    margin-top: 150px;
    margin-bottom: 150px;
}

.post__heading {
    margin-bottom: 27px;
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.post-box {
    display: flex;
    justify-content: center;
    gap: 65px;
}

.post-box img {
    border-radius: 65px;
}

.post-box__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.post-box__description_title {
    margin-bottom: 22px;
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
}

.post-box__description p {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.post-box__description_upper-text {
    margin-bottom: 40px;
}

.post-box__description_down-text {
    margin-bottom: 41px;
}



.down-articles {
    display: flex;
    justify-content: center;
    gap: 27px;
    display: grid;
    grid-template-columns: repeat(3, 382px);
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


.arcticles-heading {
    margin-bottom: 30px;
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.page {
    margin-top: 51px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>