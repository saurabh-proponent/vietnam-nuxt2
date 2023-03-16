<template>
    <div class="viewArea">
        <div class="spinner-border  " role="status">
        </div>
    </div>
</template>

<script>
export default {
    name: "Loading"

}
</script>

<style lang="scss" scoped>
.viewArea {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.spinner-border {
    --bs-spinner-width: 5rem;
    --bs-spinner-height: 5rem;
    color: #edb114;

}
</style>