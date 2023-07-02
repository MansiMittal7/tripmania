import React from 'react'
import "./SignUpPage.css";

export default function SignUpPage() {
  return (
    <>
   <div class="contact">
  <div class="head">
    <h3>Get in Touch with us</h3>
    <i class="fa fa-comment fa-lg"></i>
  </div>
  <form>
    <label >Name</label>
    <input type="text" placeholder='Your Name' />
    <label >Email</label>
    <input type="email" placeholder='abc@gmai.com'/>
    <label >Password</label>
    <input type="password" placeholder='*********'/>
    <label>Message</label>
    <textarea ></textarea>
    <button type="button"placeholder="Enter Your Message">Send Message</button>
  </form>
</div>
</>
  )
}
