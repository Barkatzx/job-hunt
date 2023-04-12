import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-10 footer p-10 bg-black text-white">
  <div className='container mx-auto'>
    <h2 className='text-4xl'>CareerHub</h2>
    <p>There are many variations of passages of <br /> Lorem Ipsum , but the majority have <br />
    suffered alteration in some form.</p>
    <div className='mt-4'>
        <img src="/public/assets/Icons/Group 9969.png" alt="" />
    </div>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">Work</a> 
    <a className="link link-hover">Latest News</a> 
    <a className="link link-hover">Careers</a>
  </div> 
  <div>
    <span className="footer-title">Product</span> 
    <a className="link link-hover">Prototype</a> 
    <a className="link link-hover">Plan & Pricing</a> 
    <a className="link link-hover">Customers</a> 
    <a className="link link-hover">Integrations</a>
  </div> 
  <div>
    <span className="footer-title">Contact</span> 
    <p>524 Broadway , NYC</p>
    <p>+1 777 - 978 - 5570</p> 
  </div>
</footer>
    );
};

export default Footer;