import Link from 'next/link';

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="card cardPad">
          <div className="kicker">Services</div>
          <h1 className="h2">Healthcare</h1>
          <p className="small">
            We provide healthcare-focused support with a compliance-aware approach—covering healthcare IT, analytics, and operational roles.
          </p>

          <div className="grid3" style={{marginTop:16}}>
            <div className="card cardPad">
              <div className="h3">Healthcare IT</div>
              <ul className="list">
                <li>Claims/EHR data support</li>
                <li>Data engineering & reporting</li>
                <li>Application support</li>
              </ul>
            </div>
            <div className="card cardPad">
              <div className="h3">Operations Support</div>
              <ul className="list">
                <li>Coordination & documentation</li>
                <li>Process support</li>
                <li>Flexible staffing models</li>
              </ul>
            </div>
            <div className="card cardPad">
              <div className="h3">Compliance mindset</div>
              <ul className="list">
                <li>Structured onboarding</li>
                <li>Credentialing awareness</li>
                <li>Clear communication</li>
              </ul>
            </div>
          </div>

          <div style={{marginTop:16, display:'flex', gap:10, flexWrap:'wrap'}}>
            <Link className="btn" href="/contact/">Request Healthcare Support</Link>
            <Link className="badge" href="/clients/">See how we engage</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
