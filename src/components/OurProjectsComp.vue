<template>
    <section>
        <div class="content-box ">
            <h2 class="content-box__heading">Follow Our Projects</h2>
            <p class="content-box__paragraph">It is a long established fact that a reader will be distracted by
                the of
                readable content of page lookings at its layouts points.</p>
        </div>
        <div class="products center">
            <a href="#">
                <div class="products__card">
                    <img :src="require('@/assets/img/photo1.webp')" alt="photo1">
                    <div class="description-box">
                        <div class="description">
                            <h3 class="description__title">Modern Kitchan</h3>
                            <p class="description__section">Decor / Artchitecture</p>
                        </div>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>


                </div>
            </a>
            <a href="#">
                <div class="products__card">
                    <img :src="require('@/assets/img/photo2.webp')" alt="photo1">
                    <div class="description-box">
                        <div class="description">
                            <h3 class="description__title">Modern Kitchan</h3>
                            <p class="description__section">Decor / Artchitecture</p>
                        </div>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>


                </div>
            </a>
            <a href="#">
                <div class="products__card">
                    <img :src="require('@/assets/img/photo3.webp')" alt="photo1">
                    <div class="description-box">
                        <div class="description">
                            <h3 class="description__title">Modern Kitchan</h3>
                            <p class="description__section">Decor / Artchitecture</p>
                        </div>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>


                </div>
            </a>
            <a href="#">
                <div class="products__card">
                    <img :src="require('@/assets/img/photo4.webp')" alt="photo1">
                    <div class="description-box">
                        <div class="description">
                            <h3 class="description__title">Modern Kitchan</h3>
                            <p class="description__section">Decor / Artchitecture</p>
                        </div>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>


                </div>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'OurProjectsComp',

};
</script>

<style scoped>
.content-box {
    padding-top: 93px;
    padding-bottom: 93px;
    max-width: 737px;
    margin: auto;
}

.content-box__heading {
    color: #292F36;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.content-box__paragraph {
    color: #4D5053;
    text-align: center;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.products {
    margin-bottom: 96px;
    display: grid;
    grid-template-columns: repeat(2, minmax(525px, 1fr));
    gap: 50px;
}

.products__card {
    width: 100%;
}

.products__card:hover circle {
    transition: 0.5s;
    fill: #fff;
}

.products__card img {
    width: 100%;
}

.description-box {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
}

.description__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
}

.description__section {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}
</style>