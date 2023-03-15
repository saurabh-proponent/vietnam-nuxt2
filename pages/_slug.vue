<template>
    <div class="slugPage">
        <div>
            <h1> Page Comming Soon</h1>
            <nuxt-link to="/"> Go Back <i class="fa-solid fa-angles-right"></i></nuxt-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.slugPage {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 100px;
        color: lightgray;
    }
}
</style>