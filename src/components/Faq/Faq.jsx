import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq-area'> 
            <div className="faq-wrapper">
                <h1>FAQ</h1>
                <div className="faq-item">
                    <h2>What is difference between props vs state?</h2>
                    <p>Fast of all Props  are used to pass data from a parent component to a child component. Props are read-only and we  cannot be modified  the child component.  we are use props by pass the data and receives.</p>
                    <br />  
                    <p>and state is used to manage the other data of a component. It is a mutable data that can be updated within the component itself. When the state changes, React will automatically re-render the component.</p> <br /> 
                    <p>In fine, props we are used to pass data from a parent component to a child component. and sate is used mange other data it's  a mutable. and when we are the state change and render automatically.</p>  
                </div>
                <div className="faq-item">
                    <h2>How does useState work?</h2>
                    <p>useState is a React Hook add  it's a functional component.  and every time your component renders, useState gives you an array containing two values. React hooks rely on a stable call order on every render of the same component  The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
                </div>
                <div className="faq-item">
                    <h2>Purpose of useEffect other than fetching data?</h2>
                    <p>useEffect is a React hook. it's the most common use cases of useEffect is fetching data from an API, there are many other use cases for useEffect beyond data fetching. Validating an input while it's receiving characters is another application for useEffect. and we can use useEffect to filter an array by typing letters into an input element. and  trigger animation on new array value. the useEffect is a very useful hook. and allows us to easily separate several functions, instead of placing all the single function.</p>
                </div>
                <div className="faq-item">
                    <h2>How Does React work?</h2>
                    <p>React is a JavaScript library that creates user interfaces. we can use it to help build single page applications and mobile apps and other applications. present React is most power libray from other library.</p>
                    <br />
                    <p>We are  create components, which is how we display information. Essentially, components are reusable UI which allow separate blocks that act independently of each other. and we can  mange easily and created organise system.</p>
                    <br />
                    <p>React is a virtual DOM. and  to render components. The virtual DOM is an in-memory representation of the actual DOM, which allows React to make updates to the UI more efficiently.</p>
                    <br />
                    <p>React also provides a easy way to manage user interactions.  When a user interacts with a component, React updates its state and re-render automatically.</p> 
                    <br />
                    <p>in fine, React's component-based architecture and virtual DOM make it a powerful tool for building complex, dynamic website.</p> 
                </div>
            </div>
        </div>
    );
};

export default Faq;