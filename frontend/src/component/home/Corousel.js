import React from 'react';
// import '../css/Corousel.css';
import gambar1 from '../../asset/home1.png';

import gambar2 from '../../asset/home2.png';

import gambar3 from '../../asset/home3.png';

function Corousel() {
    return (
        <div className="Corousel">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={gambar2} class="d-block  corousel w-100" style={{maxHeight: 500}}></img>
                    </div>
                        <div class="carousel-item">
                            <img src={gambar2} class="d-block corousel  w-100" style={{maxHeight: 500}}></img>
                    </div>
                            <div class="carousel-item">
                                <img src={gambar3} class="d-block  corousel w-100" style={{maxHeight: 500}}></img>
                    </div>  
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
      
    );
}

export default Corousel;