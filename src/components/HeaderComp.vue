<template>
    <div>
        <header class="header center">
            <router-link to="/">
                <div class="logo-box">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                            fill="#CDA274" />
                    </svg>
                    <h1 class="logo-box__name">Interno</h1>
                </div>
            </router-link>

            <div class="header-links">
                <router-link to="/" class="links">Home</router-link>
                <router-link to="/project" class="links">Project</router-link>
                <router-link to="/blog" class="links">Blog</router-link>
                <!-- <a href="#" class="links">Home</a>
                <a href="#" class="links"></a>
                <a href="#" class="links"></a> -->
            </div>

        </header>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',

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
/* h2 {
    color: aqua
} */

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

.header {
    padding-top: 44px;
    padding-bottom: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-box {
    display: flex;
    gap: 10px;
    align-items: center;
}

.logo-box__name {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}

.header-links {
    display: flex;
    gap: 30px;
}

.links {
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}
</style>