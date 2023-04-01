import React, { useEffect, useState } from 'react';  
import './Blogs.css'
import Blog from '../singleBlog/singleBlog';
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]) 
    const [readTime, setReadTime] = useState(0);
    const [titles, setTitles] = useState([]);
    const [count, setCount]   = useState(0);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, [])  
 
    // Set Read Mark Handlar
    const readMarkHandlar = (time) =>{
        const previousTime = readTime;
        const totalRead = previousTime + parseInt(time);
        setReadTime(totalRead);
    }

    // Set Book Mark Handlar
    const bookMarkHandlar = (blogTitle) => {   
        const singleTitle = titles.find(title => title == blogTitle)  
        if(singleTitle){ 
            toast("You Have Already Bookmarked This Blog");
        } else {
            const newTitle = [...titles, blogTitle]  
            setTitles(newTitle); 

            //Blog Count
            const previousCount = count;
            const newCount = previousCount + 1; 
            setCount(newCount); 
        }    
    }
    

    return (
        <div className='blog-area'>
            <div className="blog-content">
                {
                  blogs.map(blog => <Blog 
                    blog = {blog}
                    key = {blog.id} 
                    readMarkHandlar = {readMarkHandlar}
                    bookMarkHandlar = {bookMarkHandlar}
                  ></Blog>)  
                }
            
            </div> 
            <div className="blog-sidebar">
                <Sidebar  
                readTime={readTime}
                titles={titles} 
                count={count}
                ></Sidebar> 
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Blogs;