<template>
  <section class="global-space form-section">
    <div class="container">
      <div class="row">
        <div class="form">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="contact-form">
                  <form action="" method="post">
                    <div class="row">
                      <div class="col-lg-12">
                        <h1 class="main-heading">TELL US YOUR REQUIREMENT</h1>
                      </div>
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
                          <input
                            type="email"
                            name="emai"
                            id="email"
                            class="text-field-input"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="field-wrapper text-area">
                          <label>Describe Your Requirement</label>
                          <textarea
                            name="message"
                            id="message"
                            class="text-field-input"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <button type="submit" class="btn-primary">
                          Submit Requirement
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="contact-right">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="text-wrap">
                        <h1 class="heading">Get free quotes from multiple sellers</h1>
                        <p class="text">
                          Vietnam Factory is Vietnam largest online B2B marketplace,
                          connecting buyers with suppliers.
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card-wrap dotted-animation">
                        <div class="icon">
                          <img
                            src="../assets/img/contact/icon-1.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                        <p class="text">Tell us what You Need</p>
                        <span class="arrow"></span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card-wrap dotted-animation">
                        <div class="icon">
                          <img
                            src="../assets/img/contact/icon-2.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                        <p class="text">Receive free quotes from sellers</p>
                        <span class="arrow"></span>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="card-wrap">
                        <div class="icon">
                          <img
                            src="../assets/img/contact/icon-3.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                        <p class="text">Seal the Deal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-form">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="card-wrap dotted-design">
                  <div class="icon">
                    <i class="fa-sharp fa-regular fa-paper-plane"></i>
                  </div>
                  <p class="text">Tell us what You Need</p>
                  <span class="arrow"></span>
                </div>
              </div>
              <div class="col">
                <div class="card-wrap dotted-design">
                  <div class="icon">
                    <i class="fa-solid fa-square-envelope"></i>
                  </div>
                  <p class="text">Receive free quotes from sellers</p>
                  <span class="arrow"></span>
                </div>
              </div>
              <div class="col">
                <div class="card-wrap">
                  <div class="icon">
                    <i class="fa-solid fa-handshake-simple"></i>
                  </div>
                  <p class="text">Seal the Deal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
