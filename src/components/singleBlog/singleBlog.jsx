import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons' 
 
const singleBlog = (props) => {
    const {image, author_image, author_name, published_date, read_time , title } = props.blog;
   
        const readMarkHandlar = props.readMarkHandlar;
            const bookMarkHandlar = props.bookMarkHandlar;
           
            return ( 
                <div className="blog-item"> 
                    <div className="blog-img">
                    <img src={image} alt="Blog" /> 
                    </div>
                    <div className="blog-info">
                    <div className='author-info-left'>
                        <div className='author-img'>
                            <img src={author_image} alt="Author" />
                        </div>
                        <div className='author-info-right'>
                            <h2>{author_name}</h2>
                            <p>{published_date}</p>
                        </div>
                    </div>
                    <div className='author-info-right'>
                        <p>{read_time} min read <span onClick={() => bookMarkHandlar(title)}><FontAwesomeIcon icon={faBookmark} /></span></p>
                    </div>
                    </div>
                    <h3>{title}</h3>
                    <button onClick={() => readMarkHandlar(read_time)} className='btn-mark'>Mark as read</button>
                </div> 
            )
};

export default singleBlog; 