import { Component } from '@angular/core';

@Component({
  selector: 'hss-hero-section',
  imports: [],
  template: `
    <section class="hero-wrapper">
        <!-- <div class="box-wrapper">
            <div class="box">
                <h1 style="font-size: clamp(1.8rem,4vw,4rem); font-weight: 900; color: #262626;">A new vision for your facility with <span style="color: var(--my-prim-bg);">SECO GROUPE INC.</span></h1>
                <p style="color: #575757ff;">At SECO GROUPE INC, we don't just see a building; we see an opportunity
                to create a smarter, more resilient, and connected space that delivers real value.</p>

            </div>
            <svg  class="ilustracion_comun animar"  width="268.75" height="418.75" viewBox="0 0 269 510" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="stroke-animation" pathLength="1" id="thePath" d="M265 39V4H4V506H264.32V491.071" stroke="#ED2939" stroke-width="8"></path>
            </svg>
        </div> -->
        <svg class="slider-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="695px" height="571px" viewBox="0 0 695 671" style="border:1px solid transparent;  ">
                <defs>
                        <clipPath id="clip-path-right" transform="translate(310.000000, 0.000000)">
                            <path fill="none" d="M384.798555,0 L104,0 C34.6666667,165.333333 5.68434189e-14,305.333333 5.68434189e-14,420 C5.68434189e-14,534.666667 35.6666667,618.333333 107,671 L384.798555,671 C316.402332,608.699318 283.136147,521.044866 285,408.036646 C286.863853,295.028425 320.130038,159.01621 384.798555,0 Z"></path>
                        </clipPath>
                        <clipPath id="clip-path-left" transform="translate(-0.000000, 0.000000)">
                            <path fill="none" d="M384.798555,0 L104,0 C34.6666667,165.333333 0,305.333333 0,420 C0,534.666667 35.6666667,618.333333 107,671 L384.798555,671 C316.402332,608.699318 283.136147,521.044866 285,408.036646 C286.863853,295.028425 320.130038,159.01621 384.798555,0 Z"></path>
                        </clipPath>
                </defs>
                <g style="clip-path:url(#clip-path-right)" id="right" class="start">
                        <image class="double-hero-image-right-05" opacity="0" href="img/services/crop/compressed/building_maintenance_2_500.webp" width="650" height="671" transform="translate(190 0)"></image>
                        <image class="double-hero-image-right-04" opacity="0" href="img/services/compressed/seco_agent_securite_en_bleu.webp" width="650" height="671" transform="translate(200 0)"></image>
                        <image class="double-hero-image-right-03" opacity="0" href="img/services/crop/compressed/housekeeping_services_500.webp" width="650" height="671" transform="translate(200 0)"></image>
                        <image class="double-hero-image-right-02" opacity="0" href="img/services/crop/compressed/janitorial_500.webp" width="650" height="671" transform="translate(200 0)"></image>
                        <image class="double-hero-image-right-01" href="img/services/crop/compressed/staffing_500.webp" width="650" height="671" transform="translate(200 0)"></image>
                </g>
                <g style="clip-path:url(#clip-path-left)" id="left" class="start">
                        <image class="double-hero-image-left-05" opacity="0" href="img/services/crop/compressed/security_guard_female_500.webp" width="650" height="671" transform="translate(-150 0)"></image>
                        <image class="double-hero-image-left-04" opacity="0" href="img/services/crop/compressed/manager_facility_500.webp" width="650" height="671" transform="translate(-150 0)"></image>
                        <image class="double-hero-image-left-03" opacity="0" href="img/services/crop/compressed/concierge_500.webp" width="650" height="671" transform="translate(-150 0)"></image>
                        <image class="double-hero-image-left-02" opacity="0" href="img/services/crop/compressed/housekeeping_500.webp" width="650" height="671" transform="translate(-150 0)"></image>
                        <image class="double-hero-image-left-01" href="img/services/crop/compressed/staffing_solution_500.webp" width="650" height="671" transform="translate(-150 0)"></image>
                </g>
        </svg>
        
</section>
  `,
  styleUrl: './hero-section.scss'
})
export class HeroSection {

}
