

import React from 'react';
import styles from "./footer.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Url = [
        {"url": "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/nnacres.png"},
        {"url" : "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/shiksha.png"},
        {"url" : "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/ng.png"},
        {"url": "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jeevansathi.png"},
        {"url": "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/hirist.png"},
        {"url" : "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/iimjobs.png"},
        {"url": "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jobhai.png"},
        {"url": "https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/firstNaukri.png"}
]

export const Footer = () => {

    const slideshow = () => {
       Url.map((i) => {
        return(
            <>
                <img src={i.url} />
            </>
        )
       })
    }
  return (
    <div className={styles.footerUp}>
        {/* ------------------------upper footer------------------------------- */}
        <div className={styles.upfo}>

                <div className={styles.nmd}>
                    <div>
                        <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" className={styles.nimg} />
                    </div>
                    <div className={styles.nd}>
                        <p className={styles.np}>Connect with us</p>
                        <img src='https://static.naukimg.com/s/0/0/i/new-homepage/facebook.svg' />
                        <img src='https://static.naukimg.com/s/0/0/i/new-homepage/instagram.svg' />
                        <img src='https://static.naukimg.com/s/0/0/i/new-homepage/twitter.svg' />
                        <img src='https://static.naukimg.com/s/0/0/i/new-homepage/linkedin.svg' />

                    </div>
                </div>


                <div className={styles.md}>
                    <div>
                        <p>About us</p>
                        <p>Careers</p>
                        <p>Employer home</p>
                        <p>Sitemap</p>
                    </div>
                    <div>
                        <p>Help center</p>
                        <p>Summons/Notices</p>
                        <p>Grievances</p>
                        <p>Report issue</p>
                    </div>
                    <div>
                        <p>Privacy policy</p>
                        <p>Terms & conditions</p>
                        <p>Fraud alert</p>
                        <p>Trust & safety</p>
                    </div>
                </div>



                <div className={styles.smd}>
                        <div className={styles.sup}>
                            Apply on the go</div>
        <div className={styles.sdp}>                            <p>Get real-time job updates on our App</p>
        </div>
                            <div className={styles.simg}>
                                <img src='https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png' />
                                <img src='https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png' />
                            </div>
                        
                </div>

        </div>


<hr/>

        {/* -----------------------------lower footer----------------------------------- */}
        <div className={styles.dofo}>
            <div className={styles.fdfo}>
                <div>
                    <img src='https://static.naukimg.com/s/0/0/i/new-homepage/infoedge-logo.svg' className={styles.fdimg}/>
                </div>
                <div>
                <div style={{"marginLeft": "32px"}}>
                All trademarks are the property of their respective owners 
                </div>
                <div style={{"marginLeft": "32px"}}>All rights reserved © 2022 Info Edge (India) Ltd.
                </div>
                </div>
            </div>


            <div className={styles.our}>Our businesses</div>
            <div className={styles.dfimg}>
          <img className={styles.df} src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/nnacres.png'/>
          {/* <img className={styles.df} src='"https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/shiksha.png'/> */}
          <img className={styles.df} src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/ng.png'/>
          <img className={styles.df} src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jobhai.png'/>
            </div>

        </div>


    </div>
  )
}
