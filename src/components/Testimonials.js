import React from 'react';
import "./../styles/Testimonials.css";

import anitaSharma from './../assets/anita_sharma.jpg'; // Import profile pictures
import sitaMehta from './../assets/sita_mehta.jpg';
import vikramSingh from './../assets/vikram_singh.jpg'; // Corrected typo here
import nehaPatel from './../assets/neha_patel.jpg';
import rajeshPatel from './../assets/rajesh_patel.jpg';
import arjunDesai from './../assets/arjun_desai.jpg';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <p>Discover how Quik Chefs has transformed dining experiences for our clients.</p>
            <div className="testimonial-list">
                <div className="testimonial-item">
                <div className="client-rating">★★★★★</div>
                    
                    <p>Quik Chefs provided exceptional service for our wedding. The food was exquisite and the staff was professional!</p>
                    <div className="client-profile-info">

                    <div className="client-profile">
                    
                        <img src={anitaSharma} alt="Anita Sharma" />
                       
                    </div>
                    <div className="client-info">
                        <strong>Anita Sharma</strong>
                        <span>Event Planner</span>
                    </div>
                    </div>
                </div>
                <div className="testimonial-item">
                <div className="client-rating">★★★★★</div>
                    
                    <p>The chefs from Quik Chefs elevated our menu to new heights. Our customers rave about the dishes!</p>
                    <div className="client-profile-info">

                    <div className="client-profile">
                    
                        <img src={rajeshPatel} alt="Rajesh Patel" />
                        
                    </div>
                    <div className="client-info">
                        <strong>Rajesh Patel</strong>
                        <span>Restaurant Owner</span>
                    </div>
                    </div>
                </div>
                <div className="testimonial-item">
                <div className="client-rating">★★★★★</div>
                   
                    <p>For our corporate gala, Quik Chefs delivered a flawless dining experience. Highly recommend their services!</p>
                    <div className="client-profile-info">

                    <div className="client-profile">
                    
                    <img src={sitaMehta} alt="Sita Mehta" />
                   
                </div>
                    <div className="client-info">
                        <strong>Sita Mehta</strong>
                        <span>Corporate Executive</span>
                    </div>
                    </div>
                </div>
                <div className="testimonial-item">
                <div className="client-rating">★★★★★</div>
                  
                    <p>The team at Quik Chefs is incredibly talented. They made our event unforgettable with their culinary skills.</p>
                    <div className="client-profile-info">

                    <div className="client-profile">
                    
                    <img src={vikramSingh} alt="Vikram Singh" />
                   
                </div>
                    <div className="client-info">
                        <strong>Vikram Singh</strong>
                        <span>Catering Manager</span>
                    </div>
                    </div>
                </div>
                <div className="testimonial-item">
                <div className="client-rating">★★★★★</div>
                   
                    <p>I hired Quik Chefs for a private dinner, and they exceeded my expectations. The food was delicious and beautifully presented.</p>
                    <div className="client-profile-info">

                    <div className="client-profile">
                   
                   <img src={nehaPatel} alt="Neha Patel" />
                 
               </div>
                    <div className="client-info">
                        <strong>Neha Patel</strong>
                        <span>Private Client</span>
                    </div>
                    </div>
                </div>
                <div className="testimonial-item">
                <div className="client-rating">★★★★★</div>
                   
                    <p>Quik Chefs has been our go-to for staffing. Their chefs are top-notch and always impress our guests.</p>
                    <div className="client-profile-info">

                    <div className="client-profile">
                    
                    <img src={arjunDesai} alt="Arjun Desai" />
                   
                </div>
                    <div className="client-info">
                        <strong>Arjun Desai</strong>
                        <span>Hotel Manager</span>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;