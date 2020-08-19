import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <!-- Masthead-->
  <header class="masthead subpage">
      <div class="container">
          <div class="masthead-heading text-uppercase">Get in touch</div>
          <div class="masthead-subheading">
          <p>
              We'd love to help you start securing your future
          </p>
          </div>
          <a class="js-scroll-trigger" id="anchor-contact" href="../contact#anchor-contact" target="_self"><img src="/assets/img/nav/nav-scroll-down-subpage.png" alt=""></a>
      </div>
  </header>

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

  <!--- Google Maps --->
  <section class="page-section" id="map">
          <div class="text-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7521154771193!2d121.01980423892147!3d14.556163054877967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90f650d18eb%3A0x11aa7b254de9de2d!2s6766%20Ayala%20Ave%2C%20Legazpi%20Village%2C%20Makati%2C%201229%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1597779736512!5m2!1sen!2sph" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
  </section>

  <!-- About-->
  <section class="page-section" id="apply-now-co">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">Ready to take the first step?</h2>
    
              <a class="btn btn-primary btn-xl text-uppercase" id="" type="" routerLink="../apply">Apply Now</a>
          </div>
      </div>
  </section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
