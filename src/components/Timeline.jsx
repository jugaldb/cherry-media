import React from 'react'
import './Timeline.css'

function Timeline() {
  
  return (
    <>
       <main class="processContainer"  data-aos="fade-up">
        <div class="card-wrapper mx-auto">
          <div class="processCard card-discover">
            <div class="card-icon-title-wrapper">
              <div class="card__icon">
                <div class="icon__wrapper">
                  <i class="fas fa-7x fa-rocket icon__discover" />
                </div>
              </div>
              <p class="card__title">Discover</p>
            </div>
            <p class="card__description">
              We learn all we can about their competitors, direct and indirect and
              what they do to compete, what their unique selling point might be.
            </p>
          </div>
          <div class="processCard card-empathize">
            <div class="card-icon-title-wrapper">
              <div class="card__icon">
                <div class="icon__wrapper">
                  <i class="fas fa-7x fa-hand-holding-heart icon__empathize"></i>
                </div>
              </div>
              <p class="card__title">Empathise</p>
            </div>
            <p class="card__description">
              We spend time getting to know the user, & understand their needs,
              wants and objectives. This helps us to set aside the assumptions.
            </p>
          </div>
          <div class="processCard card-prototype">
            <div class="card-icon-title-wrapper">
              <div class="card__icon">
                <div class="icon__wrapper">
                  <i class="fas fa-7x fa-pencil-ruler icon__prototype"></i>
                </div>
              </div>
              <p class="card__title">Prototype</p>
            </div>
            <p class="card__description">
              We implement ideas into tangible forms from paper to digital. We
              build prototypes to capture design concepts & test on users.
            </p>
          </div>
          <div class="processCard card-prototype">
            <div class="card-icon-title-wrapper">
              <div class="card__icon">
                <div class="icon__wrapper">
                <i className="fa-solid fa-gear" />
                </div>
              </div>
              <p class="card__title">Optimize</p>
            </div>
            <p class="card__description">
            We constantly analyze performance and make data-driven adjustments to ensure continuous improvement and growth.
            </p>
          </div>
          <div class="processCard card-prototype">
            <div class="card-icon-title-wrapper">
              <div class="card__icon">
                <div class="icon__wrapper">
                <i class="fa-solid fa-up-right-and-down-left-from-center" />
                </div>
              </div>
              <p class="card__title">Scale</p>
            </div>
            <p class="card__description">
            We help you scale successful strategies to maximize your social media impact and business growth
            </p>
          </div>
          <div class="processCard card-prototype">
            <div class="card-icon-title-wrapper">
              <div class="card__icon">
                <div class="icon__wrapper">
                <i class="fa-solid fa-headset" />
                </div>
              </div>
              <p class="card__title">Support</p>
            </div>
            <p class="card__description">
            We provide ongoing support and insights to keep your social media presence dynamic and effective.
            </p>
          </div>
        </div>
      </main> 

    

    </>
  )
}

export default Timeline