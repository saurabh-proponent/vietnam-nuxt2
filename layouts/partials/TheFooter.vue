<template>
  <div>
    <section class="buy-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="heading-wraper">
              <h1 class="main-heading">FIND THE NEXT SUPPLIER/BUYER</h1>
            </div>
          </div>
          <div class="col-lg-6">
            <button type="submit" class="btn-primary">Get Started Now</button>
          </div>
        </div>
      </div>
    </section>
    <footer class="global-space desktop-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="row">
              <div class="col-md-12">
                <span class="heading">NAVIGATION</span>
              </div>
              <div class="col-md-6">
                <ul class="list">
                  <li class="item"><a href="" class="link">About Us</a></li>
                  <li class="item"><a href="" class="link">Your Feedback</a></li>
                  <li class="item"><a href="" class="link">Consultant Services</a></li>
                  <li class="item"><a href="" class="link">Our Security</a></li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list">
                  <li class="item"><a href="" class="link">Pricing</a></li>
                  <li class="item"><a href="" class="link">Privacy Policy</a></li>
                  <li class="item"><a href="" class="link">SGS/TUV Support</a></li>
                  <li class="item"><a href="" class="link">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-md-12">
                <span class="heading">CATEGORIES</span>
              </div>
              <div class="col-md-5">
                <ul class="list">
                  <li class="item"><a href="" class="link">Medical Supplies</a></li>
                  <li class="item"><a href="" class="link">Food & Agriculture</a></li>
                  <li class="item"><a href="" class="link">Industrial Products</a></li>
                </ul>
              </div>
              <div class="col-md-7">
                <ul class="list">
                  <li class="item"><a href="" class="link">Fashion & Accessories</a></li>
                  <li class="item">
                    <a href="" class="link">Cosmetic & Personal Care</a>
                  </li>
                  <li class="item">
                    <a href="" class="link">Furniture & Home Appliances</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-md-12"></div>
              <div class="col-md-6">
                <span class="heading">CONTACT US</span>
                <ul class="list">
                  <li class="item"><a href="" class="link">VIETNAM OFFICE</a></li>
                  <li class="item"><a href="" class="link">JAPAN OFFICE</a></li>
                  <li class="item"><a href="" class="link">GET IN TOUCH!</a></li>
                </ul>
              </div>
              <div class="col-md-6">
                <span class="heading">FOLLOW US</span>
                <ul class="list d-flex justify-content-between flex-wrap">
                  <li class="social-link">
                    <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                  </li>
                  <li class="social-link">
                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                  </li>
                  <li class="social-link">
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                  </li>
                  <li class="social-link">
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row">
            <div class="col-lg-6">
              <img
                src="../../assets/img/logos/footer-logo.png"
                alt=""
                class="img-fluid footer-logo"
              />
            </div>
            <div class="col-lg-6">
              <span class="copyright-text">© 2023 Vietnam Factory.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div class="go-to-top">
      <div class="whatsapp">
        <a href=""><img src="../../assets/img/icons/whatsapp.png" alt="" class="img-fluid" /></a>
      </div>

      <a href="#top">
        <div class="sticky-wraper">
          <i class="fa-solid fa-up-long"></i>
        </div>
      </a>
      <span class="text">TOP</span>
    </div>

    <div class="pop-cta">
      <button type="button" class="btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Get Best Price
      </button>      
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="main-heading">Tell Us Your Requirement</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body form">
            <div class="contact-form">
              <div class="row">
                <div class="col-lg-12">
                  <div class="field-wrapper">
                    <label>Enter Product/Service Name</label>
                    <input type="text" class="text-field-input" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="field-wrapper">
                    <label>Enter Person Name</label>
                    <input type="text" class="text-field-input" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="field-wrapper number">
                    <label>Enter Phone Number</label>
                    <vue-tel-input></vue-tel-input>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="field-wrapper">
                    <label>Enter Email</label>
                    <input type="email" name="email" id="email" class="text-field-input"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="field-wrapper text-area">
                    <label>Describe Your Requirement</label>
                    <textarea name="message" id="message" class="text-field-input"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="button" class="btn mobile-btn">Submit Requirement</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="mobile-footer">
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-house"></i>
              <p class="link">Home</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#"><i class="fa-solid fa-user"></i>
              <p class="link">Profile</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#"><i class="fa-sharp fa-regular fa-bell"></i>
              <p class="link">Notification</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#"><i class="fa-solid fa-basket-shopping"></i>
              <p class="link">Cart</p>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>
<script>
export default {
    name: "TheFooter",
    components: {  },
};
</script>
