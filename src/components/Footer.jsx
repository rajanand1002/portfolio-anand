import { socials } from "../data";

export default function Footer() {
  return (
    <footer>
      <p>Thanks for visiting my Portfolio.</p>
      <p>Made with ❤️</p>
      <div className="footer-social">
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-github"></i>
        </a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}
