import React from 'react'
import './Timeline.css'

function ToolsWeUse() {
  
  return (
    <>
       <main class="processContainer"  data-aos="fade-up">
        <div class="card-wrapper mx-auto">
            <a href="https://www.canva.com" target="_blank">
          <div class="processCard card-discover">
            
            <div class="card-icon-title-wrapper">
              <div class="card__icon">
                <div class="icon__wrapper">
                  <i class="fas fa-7x fa-rocket icon__discover" />
                </div>
              </div>
              <p class="card__title">Canva</p>
            </div>
            <p class="card__description">
            Canva is an online graphic design platform that allows users to create stunning visuals with ease. Canva has collaborative features.
            </p>
          </div>
            </a>
            <a href="https://www.google.com" target="_blank">
          <div class="processCard card-empathize">
            <div class="card-icon-title-wrapper">
              <div class="card__icon">
                <div class="icon__wrapper">
                  <i class="fas fa-7x fa-hand-holding-heart icon__empathize"></i>
                </div>
              </div>
              <p class="card__title">Google Suite</p>
            </div>
            <p class="card__description">
            Google Suite is designed to enhance productivity and teamwork, enabling real-time collaboration, seamless sharing.
            </p>
          </div>
          </a>
          <a href="https://www.renderforest.com" target="_blank">
          <div class="processCard card-prototype">
            <div class="card-icon-title-wrapper">
              <div class="card__icon">
                <div class="icon__wrapper">
                  <i class="fas fa-7x fa-pencil-ruler icon__prototype"></i>
                </div>
              </div>
              <p class="card__title">RenderForest</p>
            </div>
            <p class="card__description">
            A Game-Changer for Video Creation
As a content creator, I'm always searching for efficient tools to bring my ideas to life.
            </p>
          </div>
          </a>
        </div>
      </main> 

    

    </>
  )
}

export default ToolsWeUse