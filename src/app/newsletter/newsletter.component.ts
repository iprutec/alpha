import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  template: `
  <!-- Masthead-->
  <header class="masthead subpage awards">
      <div class="container">
          <div class="masthead-heading text-uppercase"><span class="text-red">AWARDS</span> & RECOGNITIONS</div>

          <a class="js-scroll-trigger" id="awards" href="../newsletter#awards"><img src="assets/img/nav/nav-scroll-down-subpage.png" alt=""></a>
      </div>
  </header>

  <section class="page-section apply-page" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Milestones</h2>
                </div>
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="img-fluid" src="assets/img/logos/logo-5-zoom-idol.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body">
                            
                            <p><strong>2020</strong><br>Zoom Idols NFTF Qualifier</p>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="img-fluid" src="assets/img/logos/logo-4-quality-circle.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body">
                            
                            <p><strong>2019</strong><br>Quality Circle Awardee</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="img-fluid" src="assets/img/logos/logo-1-ac-2019.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body">
                            
                            <p><strong>2019</strong><br>National Achievers Club <br>- Qualifying Member</p>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="img-fluid" src="assets/img/logos/logo-3-o-life.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body">
                           
                            <p><strong>2019</strong><br>Prudential Life Club <br>- Qualifying Member</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="img-fluid" src="assets/img/logos/logo-2-ac-2018.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body">
                          
                            <p><strong>2018</strong><br>Achievers Club <br>- Branch Level</p>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="img-fluid" src="assets/img/logos/logo-3-o-life.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body">
                          
                            <p><strong>2018</strong><br>Prudential Life Club <br>- 1st Year Qualifier</p>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="img-fluid" src="assets/img/logos/logo-6-start.png" alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-body">
                        
                            <p><strong>January 2017</strong><br>Started as <br>Financial Advisor</p>
                            </div>
                        </div>
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
export class NewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
