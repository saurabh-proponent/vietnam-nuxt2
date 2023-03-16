<template>
  <section class="global-space supplie-wrap bg">
    <div class="container">
      <div class="row">
        <div class="product-sec-wraper sub-space bg-light desktop-view">
          <div class="callto-action">
            <div class="row">
              <div class="col-lg-6">
                <nuxt-link :to="'/categories/' + category.slug">
                  <h1 class="main-heading">{{ category.title }}</h1>
                </nuxt-link>
              </div>
              <div class="col-lg-6">
                <nuxt-link :to="'/categories/' + category.slug" class="cta-link">VIEW ALL <i
                    class="fa-solid fa-angles-right"></i></nuxt-link>
              </div>
              <div class="col-lg-3 p-0">
                <div class="left-wraper">
                  <img :src="category.image" class="img-fluid hot-sale-img" alt="" />
                  <nuxt-link :to="'/categories/' + category.slug">
                    <button class="btn-primary">VIEW ALL</button>
                  </nuxt-link>
                </div>
              </div>

              <div class="col-lg-9">
                <div class="row border-bottom">
                  <!-- dynamic        -->
                  <div class="col" v-for="(item, index) in category.children.slice(0, 5)" :key="index">
                    <NuxtLink :to="'/categories/' + item.slug">
                      <div class="card">
                        <img :src="item.image" class="img-fluid" alt="" />
                        <h5 class="heading">{{ item.title }}</h5>
                      </div>
                    </NuxtLink>
                  </div>
                  <!-- dynamic end       -->
                </div>

                <div class="row">
                  <!-- dynamic        -->
                  <div class="col" v-for="(item, index) in category.children.slice(5, 10)" :key="index">
                    <NuxtLink :to="'/categories/' + item.slug">
                      <div class="card">
                        <img :src="item.image" class="img-fluid" alt="" />
                        <h5 class="heading">{{ item.title }}</h5>
                      </div>
                    </NuxtLink>
                  </div>
                  <!-- dynamic end       -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="accordion mobile-view">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="heading-wrap">
                <h1 class="main-heading">Medical Supplies For You</h1>
                <button class="btn mobile-btn">See All</button>
              </div>
            </div>
          </div>
          <div class="accordion-item" v-for="(item, index) in items" :key="index">
            <div class="accordion-title" @click="toggleItem(index)" v-bind:class="active === index ? 'active' : ''">
              {{ item.title }} <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="accordion-content" v-bind:class="active === index ? 'active contentArea' : 'contentArea'">
              <ul class="list-item">
                <li class="item" v-for="(item, index) in items" :key="index">
                  <a href="" v-for="(item2, index) in item.content" :key="index">{{
                    item2
                  }}</a>
                  <i class="fa-solid fa-chevron-right"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["category"],
  data() {
    return {
      active: "",

      items: [
        {
          title: "Injection",
          content: ["Rapid Test Kit"],
          isActive: false,
        },
        {
          title: "Diagnostic Test Kit",
          content: ["Biochemistry Analyzer"],
          isActive: false,
        },
        {
          title: "Stethoscope",
          content: ["Blood Bank Equipment"],
          isActive: false,
        },
      ],
    };
  },
  methods: {
    toggleItem(index) {
      if (this.active === index) {
        this.active = null;
      } else {
        this.active = index;
      }
    },
  },
  mounted() { },
};
</script>
