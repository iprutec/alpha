import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulting',
  template: `
  <!-- Masthead-->
  <header class="masthead subpage financial-heading">
      <div class="container">
          <div class="masthead-heading text-uppercase">Our Financial <span class="text-red">Solutions</span></div>

          <a class="js-scroll-trigger" id="anchor-solutions" href="../consulting#anchor-solutions"><img src="/assets/img/nav/nav-scroll-down-subpage.png" alt=""></a>
      </div>
  </header>

  <!-- Consulting 1-->
  <section class="page-section bg-red" id="consulting-1">
      <div class="row container text-left">
        <div class="col-4">
        <img src="/assets/img/pods/finsolutions-pod1-incomeprotection.png" >
      </div>
        <div class="col-8">
          <h3>INCOME PROTECTION</h3>
          <p>Is a long-term insurance policy designed to help you if you can't work because of disability, illness, and or demise. It ensures you and your family to continue to receive a regular income.</p>
        </div>
        
      </div>
  </section>

  <!-- Consulting 2-->
  <section class="page-section bg-black" id="consulting-2">
    <div class="row container text-left">
      <div class="col-4">
        <img src="/assets/img/pods/finsolutions-pod2-criticalplanning.png" >
      </div>
      
        <div class="col-8">
          <h3>CRITICAL ILLNESS</h3>
          <p>It provides coverage for medical emergencies like heart attack, stroke, cancer, renal failure, brain tumor, and other critical illnesses. These emergencies often incur greater than the average medical cost. Critical Illness plan payout cash to help cover the overruns where traditional health insurance or HMO may fall short.</p>
        </div>
        
      </div>
  </section>

  <!-- Consulting 3-->
  <section class="page-section bg-red" id="consulting-3">
      <div class="row container text-left">
          <div class="col-4">
          <img src="/assets/img/pods/finsolutions-pod3-education.png" >
        </div>
        <div class="col-8">
          <h3>EDUCATIONAL PLAN</h3>
          <p>It is designed to help parents save and ensure there would be sufficient funds for their child's college education in the future. As parents, the goal is always to send the children to the best school and receive topnotch education either here in the Philippines or abroad.</p>
        </div>
        
      </div>
  </section>

  <!-- Consulting 4-->
  <section class="page-section bg-black" id="consulting-4">
    <div class="row container text-left">
      <div class="col-4">
        <img src="/assets/img/pods/finsolutions-pod4-retirement.png" >
      </div>
      
        <div class="col-8">
          <h3>RETIREMENT PLAN</h3>
          <p>Is a process of determining retirement income goals and the actions and decisions you need to take to achieve those goals. It includes identifying sources of income, estimating expenses, implementing a savings program, and managing assets and risk.</p>
        </div>
        
      </div>
  </section>

  <!-- Consulting 5-->
  <section class="page-section bg-red" id="consulting-5">
      <div class="row container text-left">
          <div class="col-4">
          <img src="/assets/img/pods/finsolutions-pod5-stockmarket.png" >
        </div>
        <div class="col-8">
          <h3>STOCK MARKET</h3>
          <p>It is viewed as a safe investment strategy in the long term, however, nothing is guaranteed. For valued clients, a guide will be given on how to invest in the Stock Market through the Strategic Averaging Method (SAM) of Truly Rich Club.</p>
        </div>
        
      </div>
  </section>

  <!-- Consulting 6-->
  <section class="page-section bg-black" id="consulting-6">
      <div class="row container text-left">
        <div class="col-4">
          <img src="/assets/img/pods/finsolutions-pod6-estate-planning.png" >
        </div>
        <div class="col-8">
          <h3>ESTATE PLANNING</h3>
          <p>Is the detailed and systematic study of personal and financial affairs of a person to help him adapt and carry out a plan, for the disposition of his properties and earnings that can give the estate owner and his family maximum benefit and satisfaction.</p>
        </div>
        
      </div>
  </section>

  

  <!-- About-->
  <section class="page-section" id="apply-now-co">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">Ready to take the<br>first step?</h2>
    
              <a class="btn btn-primary btn-xl text-uppercase" id="" type="" routerLink="../apply">Apply Now</a>
          </div>
      </div>
  </section>

  <!-- Contact-->
  <section class="page-section" id="contact">
      <div id="anchor-1" class="container">
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
export class ConsultingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
