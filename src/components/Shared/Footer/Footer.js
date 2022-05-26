import React from 'react';

const Footer = () => {
    return (
        <section className='bg-base-200 mt-20'>
            <footer className="footer container mx-auto px-4 p-10 text-base-content">
                <div className='h-full flex items-center'>
                    <h2 className='text-3xl font-semibold'>Nexen Car Parts.</h2>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </div> 
                <div>
                    <span className="footer-title">Newsletter</span> 
                    <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label> 
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;