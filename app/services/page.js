import Link from 'next/link';

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="card cardPad">
          <div className="kicker">Services</div>
          <h1 className="h2">What we offer</h1>
          <p className="small">
            We support clients with consulting, staffing, and targeted training across three core service lines.
          </p>

          <div className="grid3" style={{marginTop:16}}>
            <div className="card cardPad">
              <div className="h3">IT Services</div>
              <div className="small">Data, cloud, application development, QA, and analytics support.</div>
              <div style={{marginTop:12}}><Link className="badge" href="/services/it/">Explore IT →</Link></div>
            </div>
            <div className="card cardPad">
              <div className="h3">Engineering</div>
              <div className="small">Embedded/automotive engineering including ADAS, AUTOSAR, HIL, and V&V.</div>
              <div style={{marginTop:12}}><Link className="badge" href="/services/engineering/">Explore Engineering →</Link></div>
            </div>
            <div className="card cardPad">
              <div className="h3">Healthcare</div>
              <div className="small">Healthcare IT and operations support with a compliance-first approach.</div>
              <div style={{marginTop:12}}><Link className="badge" href="/services/healthcare/">Explore Healthcare →</Link></div>
            </div>
          </div>

          <div className="card cardPad" style={{marginTop:16}}>
            <div className="h3">Delivery models</div>
            <ul className="list">
              <li><b>Staff Augmentation:</b> contract, C2H, and direct-hire support</li>
              <li><b>Project Delivery:</b> scoped deliverables with clear milestones</li>
              <li><b>Training:</b> initial training and readiness programs aligned to roles</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
