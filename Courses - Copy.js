import React from 'react';

// Inline styles for the courses component and header
const styles = {
  header: {
    backgroundColor: '#333',
    padding: '20px 0',
    color: '#fff',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px',
  },
  headerTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
  navLinkHover: {
    color: '#f90',
  },
  section: {
    padding: '60px 0',
  },
  sectionHeader: {
    marginBottom: '30px',
    fontSize: '2em',
    fontWeight: 700,
  },
  course: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '15px',
    marginBottom: '30px',
    transition: 'box-shadow 0.3s ease',
  },
  courseHover: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  courseImg: {
    display: 'block',
    position: 'relative',
    marginBottom: '20px',
  },
  courseImgImg: {
    width: '100%',
    height: 'auto',
    borderBottom: '1px solid #ddd',
  },
  courseLinkIcon: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    color: '#000',
    fontSize: '24px',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '50%',
    padding: '5px',
  },
  courseTitle: {
    display: 'block',
    margin: '15px 0',
    fontSize: '1.2em',
    color: '#333',
    textDecoration: 'none',
  },
  courseDetails: {
    fontSize: '0.9em',
  },
  courseCategory: {
    display: 'block',
    marginBottom: '5px',
    color: '#777',
  },
  coursePrice: {
    fontWeight: 700,
  },
  coursePriceFree: {
    color: '#28a745',
  },
  coursePricePaid: {
    color: '#dc3545',
  },
  coursePricePremium: {
    color: '#ffc107',
  },
};

// Data for courses
const courses = [
  {
    category: 'Web Development',
    items: [
      {
        title: 'The Complete jQuery Course',
        link: 'https://www.w3schools.com/jquery/default.asp',
        img: 'https://example.com/img/course01.jpg', // Update image paths
        price: 'Free',
      },
      {
        title: 'Introduction to CSS',
        link: 'https://www.w3schools.com/css/default.asp',
        imgSrc: 'C:\Users\HP\OneDrive\Pictures\Saved Pictures\download.jpeg',
        price: 'Free',
        
      },
      {
        title: 'Modern JavaScript',
        link: 'https://www.udemy.com/course/modern-javascript/',
        img: 'https://example.com/img/course03.jpg',
        price: '$19.99',
      },
      {
        title: 'Ruby Tips and Tricks',
            imgSrc: './img/courseruby.jpg',
            link: 'https://progate.com/courses/java',
            price: 'Premium'
      },

      {
        title: 'Introduction to Bootstrap',
        imgSrc: './img/coursebtsp.jpg',
        link: 'https://www.w3schools.com/bootstrap4/default.asp',
        price: 'Free'
    },
      {
        title: 'React for Beginners',
        link: 'https://www.udemy.com/course/react-for-beginners/',
        img: 'https://example.com/img/course04.jpg',
        price: '$29.99',
      },
    ],
  },
  {
    category: 'Data Science',
    items: [
      {
        title: 'Python for Data Science',
        link: 'https://www.coursera.org/learn/python-for-data-science',
        img: 'https://example.com/img/course05.jpg',
        price: 'Free',
      },
      {
        title: 'Machine Learning A-Z',
        link: 'https://www.udemy.com/course/machinelearning/',
        img: 'https://example.com/img/course06.jpg',
        price: '$39.99',
      },
    ],
  },

  {
    category: 'Programming',
    items: [
      {
        title: 'Java Tutorial',
            imgSrc: './img/coursejava.jpg',
            link: 'https://www.w3schools.com/java/default.asp',
            price: 'Free'
      },
      {
        title: 'Complete guide on Python',
        imgSrc: './img/coursepy.jpg',
        link: 'https://www.w3schools.com/bootstrap4/default.asp',
        price: 'Free'
    },
    {
      title: 'Core Java',
      imgSrc: './img/coursejv.jpg',
      link: 'https://progate.com/courses/java',
      price: 'Premium'
  },
  {
    title: 'C# Tutorial',
    imgSrc: './img/coursec.jpg',
    link: 'https://www.w3schools.com/cs/default.asp',
    price: 'Free'
},
{
  title: 'Complete C programming',
  imgSrc: './img/coursecp.jpg',
  link: 'https://www.udemy.com/course/the-complete-c-programming/',
  price: 'Free'
},

    ]
  },
  {
    category: 'Server Side',
    items: [
      {
        title: 'PHP Tips, Tricks, and Techniques',
        imgSrc: './img/course05.jpg',
        link: 'https://www.w3schools.com/git/default.asp',
        price: 'Free'
    },

    {
      title: 'SQL Tutorial',
      imgSrc: './img/coursesql.jpg',
      link: 'https://www.w3schools.com/git/default.asp',
      price: 'Free'
  }, 
  {
    title: 'Node.js crash course',
    imgSrc: './img/coursend.jpg',
    link: 'https://www.w3schools.com/git/default.asp',
    price: 'Free'
},
{
    title: 'Mastering Git',
    imgSrc: './img/coursegit.jpg',
    link: 'https://www.w3schools.com/git/default.asp',
    price: 'Free'
}

    ]
  }
  // More categories and items...
];

// Header Component
const Header = () => (
  <header style={styles.header} className="header">
    <div style={styles.headerContainer}>
      <h1 style={styles.headerTitle}>Career.Q</h1>
      <nav style={styles.nav}>
        <a href="/home" style={styles.navLink} className="nav-link">HOME</a>
        <a href="#" style={styles.navLink} className="nav-link">SERVICES</a>
        <a href="/home#about" style={styles.navLink} className="nav-link">ABOUT US</a>
        <a href="/contact" style={styles.navLink} className="nav-link">CONTACT US</a>
        <a href="/logout" style={styles.navLink} className="nav-link">LOG OUT</a>
      </nav>
    </div>
  </header>
);

// Course Component
const Course = ({ title, link, img, price, category }) => (
  <div
    style={styles.course}
    className="course"
    onMouseOver={(e) => {
      e.currentTarget.style.boxShadow = styles.courseHover.boxShadow;
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.courseImg}
    >
      <img
        src={img}
        alt={title}
        style={styles.courseImgImg}
      />
      <i
        className="course-link-icon fa fa-link"
        style={styles.courseLinkIcon}
      ></i>
    </a>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.courseTitle}
    >
      {title}
    </a>
    <div style={styles.courseDetails}>
      <span style={styles.courseCategory}>{category}</span>
      <span
        style={
          price === 'Free'
            ? styles.coursePriceFree
            : price === 'Premium'
            ? styles.coursePricePremium
            : styles.coursePricePaid
        }
      >
        {price}
      </span>
    </div>
  </div>
);

// Courses Component
const Courses = () => (
  <div id="courses" style={styles.section} className="section">
    <Header />
    <div className="container">
      {courses.map((categoryObj, index) => (
        <div key={index}>
          <div className="section-header text-center" style={styles.sectionHeader}>
            <h2>{categoryObj.category}</h2>
          </div>
          <div className="row">
            {categoryObj.items.map((course, index) => (
              <div className="col-md-3 col-sm-6 col-xs-12" key={index}>
                <Course {...course} category={categoryObj.category} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Courses;
