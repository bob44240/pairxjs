import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { routerTransition } from '../animations/router.animations';

@Component({
  selector: 'app-landing-page',
  template: `
    <div title="{{pageToolTip}}" (click)="startTheShow()">
      <!-- This styling looks terrible... but it must remain in 
           exactly this particular order to display properly! -->
      <div class="column-height"
           [style.background-image]="backgroundImg"
           [ngStyle]="{ 'background': 'contain',
                                      'height': '1024px' }">
      </div>
    </div>
  `,
  styles: [`
    @media (device-width: 100vw) and (device-height: 100vh) {
      .column-height {
        background-repeat: no-repeat;
      }
    }
    
    @media (min-width: 1201px) {
      .column-height {
        background-repeat: no-repeat;
        background-size: 1200px;
        width: 1200px;
        margin-left:auto;
        margin-right:auto;
      }
    }

    @media (max-width: 1200px) {
      .column-height {
        background-repeat: no-repeat;
      }
    }
  `],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class LandingPageComponent implements OnInit {

  imageUrl: string;
  backgroundImg: any;
  pageImage = 'landingpage.svg';
  pageToolTip = 'Click anywhere to continue...';

  constructor(private sanitizer: DomSanitizer,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setTabImage();
  }

  setTabImage() {
    this.imageUrl = 'url(/assets/' + this.pageImage + ')';
    this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle(this.imageUrl);
  }

  startTheShow() {
    this.router.navigate(['/wizard']);
  }

}
