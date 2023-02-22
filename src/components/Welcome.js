import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
export const Welcome = () => {
  //const stringtoken="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJWaXZlayIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTY3Mzk1NzYzMX0.N0jzWevB63PTOJBrZsPpWDUNp-k78kkKo6iWJ_wRyGA"
  
  axios.post('http://localhost:8090/welcome/auth',localStorage.getItem("token"))
    .then(response=>{
      console.log("welcome"+response.data)
    })
    .catch(error=>{
      console.log("something wrong")
      navigate("/login")
    })
    const navigate=useNavigate()
    const handleClick = (event) => {
      event.preventDefault();
      localStorage.removeItem("token")
      navigate("/login")
    }
  return (
    <div>
         <div className="header">
        <h1 className="logo">Welcome to our Bookstore</h1>
        <div className="spacer"></div>
        <button onClick={handleClick} className="logout-btn">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </div>

        <main>
    <p>Welcome to our online bookstore, where you can find a wide variety of books on every topic you can imagine. From bestsellers to rare and out-of-print titles, we've got something for everyone. </p>

    <p>Our team of experienced booksellers is dedicated to helping you find the perfect book, whether you're looking for a new release, a classic, or something in between. With our extensive selection and personalized recommendations, you're sure to find something you love.</p>

    <p>In addition to our vast selection of books, we also offer a range of book-related products and accessories, including bookmarks, reading glasses, and book lights. We're committed to providing a one-stop shop for all your reading needs, and we're always on the lookout for new and exciting products to add to our collection.</p>

    <p>We believe that reading is not just a hobby, but a way of life. We're passionate about the power of books to educate, inspire, and entertain, and we're committed to sharing that passion with our customers. Whether you're a lifelong reader or just starting out, we're here to help you find your next great read.</p>

    <p>Thank you for choosing our bookstore, and happy reading!</p>
  </main>
        {/* <button onClick={handleClick}>LOGOUT</button> */}
        
        
    
    </div>
  )
}
