import Link from 'next/link';

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="card cardPad">
          <div className="kicker">Training</div>
          <h1 className="h2">Training Programs</h1>
          <p className="small">
            We offer initial training pathways to help candidates become job-ready in selected IT and Engineering tracks.
            Training availability depends on current program schedules and candidate eligibility.
          </p>

          <div className="grid3" style={{marginTop:16}}>
            <div className="card cardPad">
              <div className="h3">IT Tracks</div>
              <ul className="list">
                <li>Data Engineering (Python/SQL)</li>
                <li>Cloud fundamentals (AWS/Azure)</li>
                <li>QA automation basics</li>
                <li>Java / API fundamentals</li>
              </ul>
            </div>
            <div className="card cardPad">
              <div className="h3">Engineering Tracks</div>
              <ul className="list">
                <li>Embedded fundamentals</li>
                <li>Testing & validation basics</li>
                <li>HIL exposure</li>
                <li>AUTOSAR awareness</li>
              </ul>
            </div>
            <div className="card cardPad">
              <div className="h3">Placement support</div>
              <ul className="list">
                <li>Resume refinement</li>
                <li>Interview preparation</li>
                <li>Client presentation support</li>
                <li className="note">Note: placement is not guaranteed.</li>
              </ul>
            </div>
          </div>

          <div style={{marginTop:16}}>
            <Link className="btn" href="/contact/">Ask about training</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
