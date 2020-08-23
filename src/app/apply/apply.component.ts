import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  template: `
  <!-- Masthead-->
  <header class="masthead subpage apply">
      <div class="container">
          <div class="masthead-heading text-uppercase"><span class="text-red">BECOME</span> A FINANCIAL ADVISOR</div>
          <div class="masthead-subheading">
          <p>
          Thank you for taking the first step and deciding to join iPrutec Team. 
          </p>
          </div>
          <a class="js-scroll-trigger" id="anchor-apply" href="../apply#anchor-apply"><img src="/assets/img/nav/nav-scroll-down-subpage.png" alt=""></a>
      </div>
  </header>

  <!-- Contact-->
  <section class="page-section applyForm" id="contact">
        <div class="text-center">
            <p class="">Please fill out the form below. Fields marked * are mandatory.</p>
        </div>
      <div id="anchor-1" class="container">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div class="row align-items-stretch mb-5">
                  <div class="col-md-6">
                      <div class="form-group">
                          <input class="form-control" id="name" type="text" placeholder="Your Complete Name *" required="required" data-validation-required-message="Please enter your complete name." />
                          <p class="help-block text-danger"></p>
                      </div>
                      

                      <div class="form-group">
                        <input class="form-control" placeholder="Your Birthdate: * DD/MM/YYYY" id="date" type="text" class="form-control" data-validation-required-message="Please enter your birthdate.">
                        <p class="help-block text-danger"></p>
                    </div>

                      <div class="form-group">
                          <input class="form-control" id="address" type="text" placeholder="Your Address *" required="required" data-validation-required-message="Please enter your address." />
                          <p class="help-block text-danger"></p>
                      </div>

                      <div class="form-group">
                          <input class="form-control" id="company" type="text" placeholder="Company Name *" />
                          <p class="help-block text-danger"></p>
                      </div>

                      <div class="form-group">
                          <input class="form-control" id="position" type="text" placeholder="Company Position *" />
                          <p class="help-block text-danger"></p>
                      </div>
                      
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                          <input class="form-control" id="phone" type="tel" placeholder="Your Phone Number *" required="required" data-validation-required-message="Please enter your phone number." />
                          <p class="help-block text-danger"></p>
                      </div>
                      <div class="form-group">
                          <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                          <p class="help-block text-danger"></p>
                      </div>
                    
                      <div class="form-group form-group-textarea mb-md-0">
                          <textarea class="form-control" id="message" placeholder="What made you decide to apply as a Financial Consultant? *" required="required" data-validation-required-message="Please enter a message."></textarea>
                          <p class="help-block text-danger"></p>
                      </div>
                  </div>
              </div>
              <div class="text-center">
                
                  <div id="success"></div>
                  <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Submit</button>
              </div>
          </form>
      </div>
  </section>

  <section class="page-section apply-page" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Updated Recruitment Process</h2>
                </div>
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="img-fluid" src="/assets/img/pods/apply-1-interview.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body"><p>Initial Interview with Recruitment Officer</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="img-fluid" src="/assets/img/pods/apply-2-attend-career.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body"><p>Attend to Build Your Business/Career Preview</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="img-fluid" src="/assets/img/pods/apply-3-final-interview.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body"><p>Final Interview with Unit Manager</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="img-fluid" src="/assets/img/pods/apply-4-training.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body"><p>Complete Online Training through JoinPRU</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="img-fluid" src="/assets/img/pods/apply-5-insurance-commission.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body"><p>Take Insurance Commission Examination</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="img-fluid" src="/assets/img/pods/apply-6-licensing.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body"><p>Complete Classroom Basic Training Course</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="img-fluid" src="/assets/img/pods/apply-7-authority.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body"><p>Complete Licensing Requirements</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="img-fluid" src="/assets/img/pods/apply-8-appointment.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body"><p>Wait for the Agent's Code and Authority to Sell</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="img-fluid" src="/assets/img/pods/logo-iprutec.gif" alt="" /></div>
                    </li>
                </ul>
            </div>
        </section>

        <!-- About-->
  <section class="page-section" id="apply-now-co">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">Become an <span style="text-transform: initial !important;">iPrutec</span> Financial Consultant</h2>
    
              <a class="btn btn-primary btn-xl text-uppercase" id="" type="" routerLink="../our-team">Meet our team</a>
          </div>
      </div>
  </section>
  `,
  styles: [
  ]
})
export class ApplyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
