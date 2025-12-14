import Link from 'next/link';

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div className="card cardPad">
            <div className="kicker">Consulting • Staffing • Training</div>
            <h1 className="hTitle">Intellect Capital LLC</h1>
            <p className="hSub">
              We deliver high-quality talent and project support across <b>Information Technology</b>, <b>Engineering</b>, and <b>Healthcare</b>.
              From staff augmentation to training-led deployments, we help clients execute faster with confidence.
            </p>
            <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
              <Link className="btn" href="/contact/">Request a Consultation</Link>
              <Link className="badge" href="/careers/">Explore Careers</Link>
              <Link className="badge" href="/training/">Training Programs</Link>
            </div>

            <div className="pills">
              <span className="pill">Fast Turnaround</span>
              <span className="pill">Vetted Candidates</span>
              <span className="pill">Client-Focused Delivery</span>
              <span className="pill">Compliance Mindset</span>
            </div>
          </div>

          <div className="card cardPad">
            <div className="kicker">Service Lines</div>
            <div className="h2">What we do</div>
            <div className="small" style={{marginBottom:12}}>
              Choose a service area to learn more about capabilities, roles, and engagement models.
            </div>
            <div style={{display:'grid', gap:10}}>
              <Link className="badge" href="/services/it/">IT Services →</Link>
              <Link className="badge" href="/services/engineering/">Engineering →</Link>
              <Link className="badge" href="/services/healthcare/">Healthcare →</Link>
              <Link className="badge" href="/services/">All Services →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid3">
            <div className="card cardPad">
              <div className="kicker">IT</div>
              <div className="h3">Modern IT delivery</div>
              <ul className="list">
                <li>Data Engineering & Analytics</li>
                <li>Cloud (AWS/Azure)</li>
                <li>Application Development</li>
                <li>QA Automation & DevOps</li>
              </ul>
              <div style={{marginTop:12}}><Link className="badge" href="/services/it/">View IT services</Link></div>
            </div>

            <div className="card cardPad">
              <div className="kicker">Engineering</div>
              <div className="h3">Embedded & Automotive</div>
              <ul className="list">
                <li>ADAS, Infotainment</li>
                <li>HIL, AUTOSAR</li>
                <li>Functional Safety</li>
                <li>Testing & Validation</li>
              </ul>
              <div style={{marginTop:12}}><Link className="badge" href="/services/engineering/">View engineering</Link></div>
            </div>

            <div className="card cardPad">
              <div className="kicker">Healthcare</div>
              <div className="h3">Healthcare support</div>
              <ul className="list">
                <li>Healthcare IT & Data</li>
                <li>Operations & Support roles</li>
                <li>Compliance-aware staffing</li>
                <li>Flexible engagement models</li>
              </ul>
              <div style={{marginTop:12}}><Link className="badge" href="/services/healthcare/">View healthcare</Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card cardPad">
            <div className="kicker">How we work</div>
            <div className="h2">A simple delivery model</div>
            <table className="table" aria-label="delivery model">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>What happens</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="badge">1</span></td>
                  <td>We understand your requirement, timeline, and environment.</td>
                  <td>Clear scope + role alignment</td>
                </tr>
                <tr>
                  <td><span className="badge">2</span></td>
                  <td>We source, screen, and (when needed) train candidates for readiness.</td>
                  <td>Vetted shortlist</td>
                </tr>
                <tr>
                  <td><span className="badge">3</span></td>
                  <td>We deploy and support with ongoing communication and performance focus.</td>
                  <td>Reliable execution</td>
                </tr>
              </tbody>
            </table>
            <div style={{marginTop:14}}>
              <Link className="btn" href="/contact/">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
