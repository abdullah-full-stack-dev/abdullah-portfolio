import React, { useEffect, useState } from 'react'
import '../CSS/Contact.css'
import { Title } from '../components/Title'
import { FaUserCircle } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { LuBadgeHelp } from 'react-icons/lu'
import { FiMessageCircle } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Contact = () => {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      const response = await axios.post("https://abdullah-portfolio-8tb1.onrender.com/api/auth/contact", formData);
      console.log(response.data);
      if (response.data.success === true) {
        toast.success("Your enquiry has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
        navigate("/");

      } else {
        return toast.error("Error, please try again later!")
      }

    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [loading])

  return (
    <>

      <Helmet>
        <title>Contact | Abdullah Khan</title>

        <meta
          name="description"
          content="Contact Abdullah Khan for web development projects, collaboration and professional opportunities."
        />

        <meta
          name="keywords"
          content="Contact Abdullah Khan, Full Stack Developer, React Developer, Web Developer"
        />

        <meta name="author" content="Abdullah Khan" />

        <meta name="robots" content="index, follow" />
      </Helmet>

      {loading && (
        <div className="page-loader">
          <div>
            <div className="page-loader-spinner">
            </div>
            <div className='page-loader-msg'>
              Please wait...
            </div>
          </div>
        </div>
      )}



      <section id='contact' className='contact-section'>
        <Title text={"Contact Me."} />
        <div className="contact-cont">

          <div className='contact-content'>
            <h2>Let's Work Together</h2>
            <p>Have a project in mind, a question, or just want to connect? Feel free to reach out. <br />I’m always open to discussing new opportunities, creative ideas, and interesting projects.</p>
            <div className="contact-info">
              <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahkhannn7750@gmail.com" target='_blank' className='gradient'>abdullahkhannn7750@gmail.com</a></p>
              <p>Location: India</p>
              <p>Availability: Open to opportunities</p>
            </div>
          </div>

          <div className='form-cont'>
            <form onSubmit={handleSubmit}>
              <div className='input-cont'>
                <div className='input-icon-cont'>
                  <FaUserCircle className='input-icon' />
                </div>
                <input type="text" required placeholder='Your Name' name='name' value={formData.name} onChange={handleChange} />
              </div>
              <div className='input-cont'>
                <div className='input-icon-cont'>
                  <HiMail className='input-icon' />
                </div>
                <input type="email" required placeholder='Your Email' name='email' value={formData.email} onChange={handleChange} />
              </div>
              <div className='input-cont'>
                <div className='input-icon-cont'>
                  <LuBadgeHelp className='input-icon' />
                </div>
                <input type="text" required placeholder='Subject' name='subject' value={formData.subject} onChange={handleChange} />
              </div>
              <div className='input-cont'>
                <div className='input-icon-cont'>
                  <FiMessageCircle className='input-icon' />
                </div>
                <textarea type="text" required placeholder='Your Message' name='message' value={formData.message} onChange={handleChange} />

              </div>
              <button type='submit'>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
