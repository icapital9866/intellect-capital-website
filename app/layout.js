import './styles/globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Intellect Capital LLC | Consulting, Staffing & Training',
  description: 'Intellect Capital LLC provides IT, Engineering, and Healthcare consulting services, staffing solutions, and training programs.'
};

function NavLink({href, children}) {
  return <Link href={href}>{children}</Link>;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <div className="navInner container">
            <div className="brand">
              <img src="/logo.png" alt="Intellect Capital LLC" />
              <div className="brandName">
                <strong>Intellect Capital LLC</strong>
                <span>IT • Engineering • Healthcare</span>
              </div>
            </div>
            <nav className="links">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about/">About</NavLink>
              <NavLink href="/services/">Services</NavLink>
              <NavLink href="/training/">Training</NavLink>
              <NavLink href="/careers/">Careers</NavLink>
              <NavLink href="/clients/">Clients</NavLink>
              <NavLink href="/contact/">Contact</NavLink>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container footerGrid">
            <div>
              <div className="h3" style={{marginBottom:6}}>Intellect Capital LLC</div>
              <div className="small">
                701 S Carroll Blvd, Ste 206, Denton, TX 76201<br/>
                Phone: <a href="tel:+14695790881">469-579-0881</a> • Email: <a href="mailto:HR@intellectcapital.us">HR@intellectcapital.us</a>
              </div>
              <div style={{marginTop:12}} className="small">© {new Date().getFullYear()} Intellect Capital LLC. All rights reserved.</div>
            </div>
            <div>
              <div className="h3" style={{marginBottom:6}}>Quick Links</div>
              <div className="small">
                <div><Link href="/services/it/">IT Services</Link></div>
                <div><Link href="/services/engineering/">Engineering</Link></div>
                <div><Link href="/services/healthcare/">Healthcare</Link></div>
                <div><Link href="/training/">Training Programs</Link></div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
