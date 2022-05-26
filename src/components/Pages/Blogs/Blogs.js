import React from 'react';

const Blogs = () => {

    return (
        <div className='container mx-auto mt-32'>
            <h2 className='text-center text-3xl font-semibold my-10'>All Blogs</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10'>
          

                <article className='min-h-[230px] border rounded-lg shadow-lg p-5 mx-5 md:mx-0 flex flex-col md:flex-row items-center'>
                    <div className='px-5'>
                        <h3 className='text-2xl text-slate-600 font-medium'>How will you improve the performance of a React Application?</h3>
                        <p className='text-slate-600'>We can use several techniques to speed up a React Application. We can use binding function in constructors. To improve performance we need to avoid some work. Such as avoiding inline style attributes. It takes a lot of time rendering. Then need to avoid extra tags by using react fragments. Using react fragments decreases the no. of additional tags and satisfies the necessity of having a single parent element in the component. Then avoid inline function in render method and avoid boundling all of the front end code in a single file.</p>
                    </div>
                </article>

                <article className='min-h-[230px] border rounded-lg shadow-lg p-5 mx-5 md:mx-0 flex flex-col md:flex-row items-center'>
                    <div className='px-5'>
                        <h3 className='text-2xl text-slate-600 font-medium'>What are the different ways to manage a state in a React application?</h3>
                        <p className='text-slate-600'>React gives developers complete freedom over how state is managed within a component. Here is some technique for manage state. We can manage state using useReducer for complex state. Custom Hook also used for manage state. For use global state management we can use context api. We can use data fetching libraries for pulling data from external APIs. There are modern data fetching libraries like React Quey.</p>
                    </div>
                </article>
                
                <article className='min-h-[230px] border rounded-lg shadow-lg p-5 mx-5 md:mx-0 flex flex-col md:flex-row items-center'>
                    <div className='px-5'>
                        <h3 className='text-2xl text-slate-600 font-medium'>How does prototypical inheritance work?</h3>
                        <p className='text-slate-600'>
                            In JavaScript, we can create an object without defining its class. Objects can also directly inherit properties from other objects. This feature sets JavaScript apart from class-based languages, where classes inherit from other classes.
                            Every Object has a single ancestor object, and this results in a chain of interlinked objects. Objects in this chain can access properties and methods of objects that come before them. Object.setPrototypeOf(), Object.create() and constructor functions are three ways using which you can inter-link objects to achieve inheritance.</p>
                    </div>
                </article>
                
                <article className='min-h-[230px] border rounded-lg shadow-lg p-5 mx-5 md:mx-0 flex flex-col md:flex-row items-center'>
                    <div className='px-5'>
                        <h3 className='text-2xl text-slate-600 font-medium'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                        <p className='text-slate-600'>
                            If we update it directly, calling the setState() afterward may just replace the update we made.
                            When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                            You will lose control of the state across all components. For those reason we do not set state directly
                        </p>
                    </div>
                </article>

                <article className='min-h-[230px] border rounded-lg shadow-lg p-5 mx-5 md:mx-0 flex flex-col md:flex-row items-center'>
                    <div className='px-5'>
                        <h3 className='text-2xl text-slate-600 font-medium'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                        <p className='text-slate-600'>
                            We can implement this easily to search product by name usihng ECMAScript 6. We use filter() method to find all products by name. this method return an array of matching items. Code will loook like this <code className='bg-blue-100'>products.filter(product => product.name === 'name') </code> . If match the name from all products then this method will return it.
                        </p>
                    </div>
                </article>

                <article className='min-h-[230px] border rounded-lg shadow-lg p-5 mx-5 md:mx-0 flex flex-col md:flex-row items-center'>
                    <div className='px-5'>
                        <h3 className='text-2xl text-slate-600 font-medium'> What is a unit test? Why should write unit tests?</h3>
                        <p className='text-slate-600'>
                           Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                           Unit testing ensures that all code meets quality standards before it's deployed. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code and build better software.
                        </p>
                    </div>
                </article>

            </div>
        </div>
    );
};

export default Blogs;