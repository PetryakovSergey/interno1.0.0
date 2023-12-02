<template>
    <div class="tags-block center">
        <h2 class="tags-block__main-heading">Bedroom bedroom bedroom</h2>
        <img class="tags-block__img" :src="require('@/assets/img/bedroom.webp')" alt="main-photo">
        <div class="tags-block__inner-block">
            <p class="tags-block-date">
                26 December,2022
            </p>
            <div class="tags-block__routing-links">
                <a href="#">Interior</a>
                <a href="#">Home</a>
                <a href="#">Decore</a>
            </div>
        </div>

        <p class="tags-block__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere
            in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injecthumour, or randomised words which don't
            look even slightly believable.
        </p>
        <p class="article">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
            tend
            to
            repeat predefined chunks as necessary.</p>

        <div class="idea">
            <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                    fill="#CDA274" />
            </svg>
            <h2 class="idea__title">The details are not the details.
                They make the design.</h2>

        </div>
        <h3 class="tags-block__bottom-heading">Design sprints are great</h3>
        <p class="tags-block__bottom-text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered.</p>
        <ol class="tags-block__list">
            <li>Contrary to popular belief.There are many variations of passages of
                Lorem
                Ipsum available, but the majority have suffered.</li>
            <li>Contrary to popular belief.There are many variations of passages of
                Lorem
                Ipsum available, but the majority have suffered.</li>
            <li>Contrary to popular belief.There are many variations of passages of
                Lorem
                Ipsum available, but the majority have suffered.</li>
        </ol>
        <img class="tags-block__bottom-img" :src="require('@/assets/img/block-img2.webp')" alt="bottom-img">
        <p class="tags-block__description">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered.</p>
    </div>
</template>

<script>
export default {
    name: 'change-1'

};

</script>

<style scoped>
.tags-block__main-heading {

    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.tags-block__img {
    margin-top: 11px;
    margin-bottom: 44px;
    max-width: 750px;
}

.tags-block__inner-block {
    display: flex;
    gap: 409px;
    margin-bottom: 48px;
}

.tags-block-date {
    color: #4D5053;

    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}


.tags-block__routing-links {
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.tags-block__routing-links a:not(:last-child)::after {

    content: " /";
    margin-right: 5px;
    color: #4D5053;
}

.tags-block__routing-links a {
    color: #4D5053;
}

.tags-block__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.article {
    margin-top: 48px;
    color: #4D5053;

    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.idea {
    margin: 35px 0px 27px;
    border-radius: 50px;
    background: #F4F0EC;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 53px 0px;
}

.idea__title {
    width: 400px;
    color: #CDA274;

    text-align: center;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
}

.tags-block__bottom-heading {
    color: #292F36;

    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
}

.tags-block__bottom-text {
    margin: 20px 0px;
    color: #4D5053;

    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.tags-block__list {
    color: #4D5053;

    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;

}

.tags-block__list li {
    margin-left: 25px;
}

.tags-block__bottom-img {
    margin: 44px 0px 33px;
}

.tags-block__description {
    color: #4D5053;

    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}
</style>