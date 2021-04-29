import React, { Component } from 'react'
import Logo from '../../DoggyDogcare/logo.png'


export class About extends Component {
    render() {
        return (
            <div className='container_about_us'>
                <img src={Logo} />
                <h2>About Us</h2>
                <p>Two of our most common services are:

Doggy day care – You’re busy but don’t want your pup to feel alone. We totally understand! 
<br></br>
 That’s why we offer doggy day care, where your pup can run around with other dogs while cared for by our Certified Camp Counselors®. 
 <br></br>
We have spacious play areas for maximum fun.</p> 

<p>
Dog boarding – If you’re going away for a single night or multiple weeks,
<br></br> 
our boarding service treats dogs like family, providing them all-day play, 
lots of attention from our staff, and Campfire Treats™ at night.</p>
            </div>
        )
    }
}

export default About
