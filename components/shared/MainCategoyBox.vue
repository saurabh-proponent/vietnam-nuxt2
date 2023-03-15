<template>
  <div class="row">
    <div class="col-lg-2 col-6" v-for="(item, index) in categories.slice(0, 6)" :key="index">
      <nuxt-link :to="item.slug">
        <div class="all-buyer-wrap">
          <img :src="item.image" class="img-fluid" alt="" />
          <span class="product-name">{{ item.title }}</span>
        </div>
      </nuxt-link>
    </div>
    <!-- ../../assets/img/icons/byuer-leads/medical.png -->
    <!-- <div class="col-lg-2 col-6">
            <a href="">
              <div class="all-buyer-wrap">
                <img
                  src="../../assets/img/icons/byuer-leads/food.png"
                  class="img-fluid"
                  alt=""
                />
                <span class="product-name">Food & Agriculture</span>
              </div>
            </a>
          </div>
          <div class="col-lg-2 col-6">
            <a href="">
              <div class="all-buyer-wrap">
                <img
                  src="../../assets/img/icons/byuer-leads/industrial.png"
                  class="img-fluid"
                  alt=""
                />
                <span class="product-name">Industrial Products</span>
              </div>
            </a>
          </div>
          <div class="col-lg-2 col-6">
            <a href="">
              <div class="all-buyer-wrap">
                <img
                  src="../../assets/img/icons/byuer-leads/fashion.png"
                  class="img-fluid"
                  alt=""
                />
                <span class="product-name">Fashion & Accessories</span>
              </div>
            </a>
          </div>
          <div class="col-lg-2 col-6">
            <a href="">
              <div class="all-buyer-wrap">
                <img
                  src="../../assets/img/icons/byuer-leads/cosmetic.png"
                  class="img-fluid"
                  alt=""
                />
                <span class="product-name">Cosmetic, Personal Care</span>
              </div>
            </a>
          </div>
          <div class="col-lg-2 col-6">
            <a href="">
              <div class="all-buyer-wrap">
                <img
                  src="../../assets/img/icons/byuer-leads/furniture.png"
                  class="img-fluid"
                  alt=""
                />
                <span class="product-name">Furniture & Appliance</span>
              </div>
            </a>
          </div> -->
  </div>
</template>

<script>
export default {
  name: "MainCategoryBox",
  props: ["categories"]
}
</script>

<style lang="scss" scoped></style>