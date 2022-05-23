import React from 'react';

const Footer = () => {
    return (
        <section className='bg-base-200 mt-20'>
            <footer class="footer container mx-auto px-4 p-10 text-base-content">
                <div className='h-full flex items-center'>
                    <h2 className='text-3xl font-semibold'>Nexen Car Parts.</h2>
                </div> 
                <div>
                    <span class="footer-title">Company</span> 
                    <a class="link link-hover">About us</a> 
                    <a class="link link-hover">Contact</a> 
                    <a class="link link-hover">Jobs</a> 
                    <a class="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span class="footer-title">Legal</span> 
                    <a class="link link-hover">Terms of use</a> 
                    <a class="link link-hover">Privacy policy</a> 
                    <a class="link link-hover">Cookie policy</a>
                </div> 
                <div>
                    <span class="footer-title">Newsletter</span> 
                    <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">Enter your email address</span>
                    </label> 
                    <div class="relative">
                        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" /> 
                        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;