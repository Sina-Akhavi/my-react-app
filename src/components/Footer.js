import '../styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Analytics Hub. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
