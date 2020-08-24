import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <!-- Masthead-->
  <header class="masthead home">
      <div class="container">
          <div class="masthead-logo"><img src="/assets/img/logos/logo-iprutec.gif" alt=""></div>
          <div class="masthead-heading text-uppercase">Making your future a success</div>
          <div class="masthead-subheading">
          <p>
              We are a group of diversed Financial Consultants that offer financial solutions designed to meet your risk tolerance and stand up against market volatility. We provide unbiased recommendations and impartial guidance based directly on your needs and goals.
          </p>
          </div>
          <div class="masthead-subheading">
          <div class="row">
              <div class="col-lg-6">
              <a class="btn btn-primary btn-xl text-uppercase" id="" type="">Free Consultation</a>
              </div>
              <div class="col-lg-6">
              <a class="btn btn-primary btn-xl text-uppercase" id="" type="">Learn More</a>
              </div>
          </div>
          </div>
          <a class="js-scroll-trigger" id="anchor-home" href="#anchor-home"><img src="/assets/img/nav/nav-scroll-down-bk.png" alt=""></a>
      </div>
  </header>
  
  
  <!-- Services-->
  <section class="page-section" id="financial-solutions">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">Our Financial Solutions</h2>
              
          </div>
          <div class="row text-center first">
              <div class="col-md-3">
                  <a href="/consulting#consulting-1"><img src="/assets/img/pods/finsolutions-pod1-incomeprotection.png" alt=""></a>                         
              </div>
              <div class="col-md-3">
                  <a href="/consulting#consulting-2"><img src="/assets/img/pods/finsolutions-pod2-criticalplanning.png" alt=""></a>                         
              </div>
              <div class="col-md-3">
                  <a href="/consulting#consulting-3"><img src="/assets/img/pods/finsolutions-pod3-education.png" alt=""></a>                         
              </div>
              <div class="col-md-3">
                  <a href="/consulting#consulting-4"><img src="/assets/img/pods/finsolutions-pod4-retirement.png" alt=""></a>                         
              </div>
              <div class="col-md-3">
                  <a href="/consulting#consulting-5"><img src="/assets/img/pods/finsolutions-pod5-stockmarket.png" alt=""></a>                         
              </div>
              <div class="col-md-3">
                  <a href="/consulting#consulting-6"><img src="/assets/img/pods/finsolutions-pod6-estate-planning.png" alt=""></a>                         
              </div>
          </div>
      </div>
  </section>
  
  
  <!-- About-->
  <section class="page-section" id="about">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">About Us</h2>
              <p>We are all registered and licensed financial consultants of an insurance company that pioneered the variable-unit linked products in the Philippines - Pru Life UK. Our office is located at the heart of the top business district in the country, Makati City.</p>
              <a class="btn btn-primary btn-xl text-uppercase" id="" type="" href="/apply" >Join Our Team</a>
          </div>
      </div>
  </section>
  
  <!-- Vision -->
  <section class="page-section" id="vision">
      <div class="container">
          
          <div class="row text-center first">
              <div class="col-md-3">
                  <h3>Mission</h3>
                  <p>iPrutec commits to ensure your future is protected and a success through different needs-based financial solutions.</p>                  
              </div>
              <div class="col-md-3">
                  <h3>Vision</h3>
                  <p>Our vision as a firm focuses on helping others achieve financial goals, as well as understanding of each client's unique purpose, mission and values.</p>               
              </div>
              <div class="col-md-3">
                  <h3>Values</h3>
                  <p>Integrity<br>
                  Trust<br>
                  Communication<br>
                  Development<br>
                  Teamwork<br>
                  Social Impact
                  </p>                    
              </div>
          </div>
      </div>
  </section>
  
  
  <!-- Testimonials-->
  <section id="testimonials" class="page-section">
  
  <div class="container-fluid">
          <div class="row">
              <div class="col-md-12">
  
                  <div class="carousel slide" id="my-carousel" data-ride="carousel">
                      <ol class="carousel-indicators">
                          <li data-target="#my-carousel" data-slide-to="0" class="active"></li>
                          <li data-target="#my-carousel" data-slide-to="1"></li>
                          <li data-target="#my-carousel" data-slide-to="2"></li>
                          <li data-target="#my-carousel" data-slide-to="3"></li>
                          <li data-target="#my-carousel" data-slide-to="4"></li>
                          <li data-target="#my-carousel" data-slide-to="5"></li>
                          <li data-target="#my-carousel" data-slide-to="6"></li>
                          <li data-target="#my-carousel" data-slide-to="7"></li>
                          <li data-target="#my-carousel" data-slide-to="8"></li>
                          <li data-target="#my-carousel" data-slide-to="9"></li>
                      </ol>
                      <div class="carousel-inner">
                          <!-- Slide 1 -->
                          <div class="carousel-item text-center active">
  
                              <div class="row">

                                <div class="col-sm-2"><img src="assets/img/testimonials/lester.png" alt="" class="d-block w-100 rounded-circle"></div>
                                <div class="col-sm-9"><p class="text-dark">I personally and professionally deal with Roger. He always makes sure to inform me of the latest updates with Prulife and sensible questions asked to ascertain that I'm fully knowledgeable about my plan. Cheers to his passion for making lives protected and secured</p>
                                    <h4>
                                        <strong class="text-uppercase">Lester M</strong>
                                    </h4>
                                </div>
                              </div>
                              
                          </div>
  
                          <!-- Slide 2 -->
                          <div class="carousel-item text-center">
                              <div class="row">
                                  <div class="col-sm-2"><img src="assets/img/testimonials/dexter.png" alt="" class="d-block w-100 rounded-circle"></div>
                                  <div class="col-sm-9"><p class="text-dark">A well-versed financial consultant. Thank you for helping me get my plan according to my needs and capabilities.</p>
                                      <h4>
                                          <strong class="text-uppercase">Dex B</strong>
                                      </h4>
                                  </div>
                              </div>
                          </div>

                          <!-- Slide 3 -->
                          <div class="carousel-item text-center">
                              <div class="row">
                                  <div class="col-sm-2"><img src="assets/img/testimonials/sheina.png" alt="" class="d-block w-100 rounded-circle"></div>
                                  <div class="col-sm-9"><p class="text-dark">A Financial Coach who cares for his client. After he presented to me the plan,he let me have an ample time to think through and assess my financial capabilities.Never nya ako kinulit or what. It took me 5 months to decide and ako na mismo ung lumapit at nangulit ng proposal.</p>
                                      <h4>
                                          <strong class="text-uppercase">Sheina A</strong>
                                      </h4>
                                  </div>
                              </div>
                          </div>

                          <!-- Slide 4 -->
                          <div class="carousel-item text-center">
                              <div class="row">
                                  <div class="col-sm-2"><img src="assets/img/testimonials/alni.png" alt="" class="d-block w-100 rounded-circle"></div>
                                  <div class="col-sm-9"><p class="text-dark">Sir Roger is an effective financial consultant, he explained clearly the importance of having an Insurance especially with Pru Life U.K. When it comes to payment of my premium, he always finds time in going to our office. He is kind, polite and respectful. Congratulations Sir Roger, more power. God bless.</p>
                                      <h4>
                                          <strong class="text-uppercase">Alni S</strong>
                                      </h4>
                                  </div>
                              </div>
                          </div>

                          <!-- Slide 5 -->
                          <div class="carousel-item text-center">
                              <div class="row">
                                  <div class="col-sm-2"><img src="assets/img/testimonials/jun.png" alt="" class="d-block w-100 rounded-circle"></div>
                                  <div class="col-sm-9"><p class="text-dark">For us the two important elements of the insurance industry would be trust and commitment. This would be the main reason why we have Roger Abarico as our Financial Advisor. He is somebody we can entrust with our financial planning. He gave us all the insurance options that will fit our current situation and ensures that it will result in financial success in the future. He gives my family timely updates on the status of our insurance products. He stays connected with all his customers. Then his commitment. He practices what he preaches. He always makes us feel that he is with us throughout our financial planning journey. To date, we have three different insurance products with him as our Financial Advisor and we are very satisfied with this investment for our family's future.</p>
                                      <h4>
                                          <strong class="text-uppercase">Jun & Rona A</strong>
                                      </h4>
                                  </div>
                              </div>
                          </div>

                          <!-- Slide 6 -->
                          <div class="carousel-item text-center">
                              <div class="row">
                                  <div class="col-sm-2"><img src="assets/img/testimonials/jane.png" alt="" class="d-block w-100 rounded-circle"></div>
                                  <div class="col-sm-9"><p class="text-dark">I am very thankful for having Roger as my financial advisor. I had a recent hospitalization and on my first day, I asked Roger how I can take advantage of my insurance benefit - "Daily Hospital Income". Roger was very responsive, helpful and keen to details. He made multiple follow ups to make sure that all forms are properly filled out and that no documents are missed. I am happy to say that my claim has been approved! Thanks to Roger! Having insurance, being able to take advantage of it in these times of crisis is really a big help! Thanks for introducing us to Pru! You are awesome! 
                                    <br><br>
                                  God bless you! 
                                  <br><br>
                                  All the best,</p>
                                      <h4>
                                          <strong class="text-uppercase">Jane</strong>
                                      </h4>
                                  </div>
                              </div>
                          </div>

                          <!-- Slide 7 -->
                          <div class="carousel-item text-center">
                              <div class="row">
                                  <div class="col-sm-2"><img src="assets/img/testimonials/bernadine.png" alt="" class="d-block w-100 rounded-circle"></div>
                                  <div class="col-sm-9"><p class="text-dark">I was hesitant at first to get a plan, considering that I am already a government employee with lifetime benefits, however, when my brother who happened to be my financial advisor told me about its advantage, I knew I've made a good decision of getting one. Everyone aims for a good life and a secured future, I am not an exception. All I really want is to protect my family, my income and my health above all. Having an insurance policy would really make my dream into a reality, a reality I would live a lifetime. Thanks bro!</p>
                                      <h4>
                                          <strong class="text-uppercase">Bernadine D</strong>
                                      </h4>
                                  </div>
                              </div>
                          </div>
  
                          <!-- Slide 8 -->
                          <div class="carousel-item text-center">
                              <div class="row">
                                  <div class="col-sm-2"><img src="assets/img/testimonials/flovy.png" alt="" class="d-block w-100 rounded-circle"></div>
                                  <div class="col-sm-9"><p class="text-dark">Reliable and Trustworthy Financial advisor ⭐️⭐️⭐️⭐️⭐️</p>
                                      <h4>
                                          <strong class="text-uppercase">Flovy R</strong>
                                      </h4>
                                  </div>
                              </div>
                          </div>
  
                          
  
                          <!-- Slide 9 -->
                          <div class="carousel-item text-center">
                              <div class="row">
                                  <div class="col-sm-2"><img src="assets/img/testimonials/cristina.png" alt="" class="d-block w-100 rounded-circle"></div>
                                  <div class="col-sm-9"><p class="text-dark">Well detailed and very professional financial advisor. His integrity and knowledge are invaluable.</p>
                                      <h4>
                                          <strong class="text-uppercase">Tina A</strong>
                                      </h4>
                                  </div>
                              </div>
                          </div>
  
                          
  
                          <!-- Slide 10 -->
                          <div class="carousel-item text-center">
                              <div class="row">
                                <div class="col-sm-2"><img src="assets/img/testimonials/jude.png" alt="" class="d-block w-100 rounded-circle"></div>
                                <div class="col-sm-9"><p class="text-dark">Presented practical reasons to avail critical illness policy</p>
                                    <h4>
                                        <strong class="text-uppercase">Jude M</strong>
                                    </h4>
                                </div>
                              </div>
                          </div>
  
                      </div>
                      
                      <!--- Carousel Controls -->
                      <a href="#my-carousel" class="carousel-control-prev" role="button" data-slide="prev">
                          <img src="assets/img/arrow-left.png" width="" height="50" alt="">
                          <span class="sr-only">Previous</span>
                      </a>
  
                      <a href="#my-carousel" class="carousel-control-next" role="button" data-slide="prev">
                          <img src="assets/img/arrow-right.png" width="" height="50" alt="">
                          <span class="sr-only">Next</span>
                      </a>
                  </div>
              </div>
          </div>
      </div>

  </section>

  <!-- Contact-->
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Connect with us</h2>
                </div>
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group mb-md-0">
                                <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div id="success"></div>
                        <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
