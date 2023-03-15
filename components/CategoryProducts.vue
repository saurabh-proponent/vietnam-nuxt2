<template>
  <section class="global-space supplie-wrap bg">
    <div class="container">
      <div class="row">
        <div class="product-sec-wraper sub-space bg-light desktop-view">
          <div class="callto-action">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="main-heading">{{ category.title }}</h1>
              </div>
              <div class="col-lg-6">
                <a href="" class="cta-link">VIEW ALL <i class="fa-solid fa-angles-right"></i></a>
              </div>
              <div class="col-lg-3 p-0">
                <div class="left-wraper">
                  <img :src="category.image" class="img-fluid hot-sale-img" alt="" />
                  <button class="btn-primary">VIEW ALL</button>
                </div>
              </div>






              <div class="col-lg-9">
                <div class="row border-bottom">

                  <!-- dynamic        -->
                  <div class="col-md-2" v-for="(item, index) in category.children" :key="index">
                    <a href="">
                      <div class="card">
                        <img :src="item.image" class="img-fluid" alt="" />
                        <h5 class="heading">{{ item.title }}</h5>
                      </div>
                    </a>
                  </div>
                  <!-- dynamic end       -->
                  <!-- 
                  <div class="col">
                    <a href="">
                      <div class="card">
                        <img src="../assets/img/hot-sales/medical-supplies/bloodbank.jpg" class="img-fluid" alt="" />
                        <h5 class="heading">Blood Bank</h5>
                      </div>
                    </a>
                  </div>


                  <div class="col">
                    <a href="">
                      <div class="card">
                        <img src="../assets/img/hot-sales/medical-supplies/growns.jpg" class="img-fluid" alt="" />
                        <h5 class="heading">Growns</h5>
                      </div>
                    </a>
                  </div>


                  <div class="col">
                    <a href="">
                      <div class="card">
                        <img src="../assets/img/hot-sales/medical-supplies/ivcatheter.jpg" class="img-fluid" alt="" />
                        <h5 class="heading">IV Catheter</h5>
                      </div>
                    </a>
                  </div>


                  <div class="col">
                    <a href="">
                      <div class="card">
                        <img src="../assets/img/hot-sales/medical-supplies/medical-gloves.jpg" class="img-fluid" alt="" />
                        <h5 class="heading">Medical Gloves</h5>
                      </div>
                    </a>
                  </div> -->
                </div>


                <!--   

                  <div class="row">


                    <div class="col">
                      <a href="">
                        <div class="card">
                          <img src="../assets/img/hot-sales/medical-supplies/eye-drops.jpg" class="img-fluid" alt="" />
                          <h5 class="heading">Eye Drops</h5>
                        </div>
                      </a>
                    </div>
                    <div class="col">
                      <a href="">
                        <div class="card">
                          <img src="../assets/img/hot-sales/medical-supplies/face-shield.jpg" class="img-fluid" alt="" />
                          <h5 class="heading">Face Shield</h5>
                        </div>
                      </a>
                    </div>
                    <div class="col">
                      <a href="">
                        <div class="card">
                          <img src="../assets/img/hot-sales/medical-supplies/hand-senitizer.jpg" class="img-fluid" alt="" />
                          <h5 class="heading">Hand Senitizer</h5>
                        </div>
                      </a>
                    </div>
                    <div class="col">
                      <a href="">
                        <div class="card">
                          <img src="../assets/img/hot-sales/medical-supplies/masks.jpg" class="img-fluid" alt="" />
                          <h5 class="heading">Masks</h5>
                        </div>
                      </a>
                    </div>
                    <div class="col">
                      <a href="">
                        <div class="card">
                          <img src="../assets/img/hot-sales/medical-supplies/cotton.jpg" class="img-fluid" alt="" />
                          <h5 class="heading">Cotton</h5>
                        </div>
                      </a>
                    </div>


                    
                  </div>  -->



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
  props: [
    'category'
  ],
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
  mounted() {
    console.log("category Page +++++++++++++++++++", this.category)
  }


};
</script>
