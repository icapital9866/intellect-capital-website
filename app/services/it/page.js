import Link from 'next/link';

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="card cardPad">
          <div className="kicker">Services</div>
          <h1 className="h2">Information Technology (IT)</h1>
          <p className="small">
            We provide skilled IT professionals and delivery support across modern data, cloud, and software engineering stacks.
          </p>

          <div className="grid3" style={{marginTop:16}}>
            <div className="card cardPad">
              <div className="h3">Data & Analytics</div>
              <ul className="list">
                <li>Data Engineering</li>
                <li>ETL/ELT pipelines</li>
                <li>BI & Reporting</li>
                <li>Data quality & governance</li>
              </ul>
            </div>
            <div className="card cardPad">
              <div className="h3">Cloud & DevOps</div>
              <ul className="list">
                <li>AWS / Azure support</li>
                <li>CI/CD automation</li>
                <li>Infrastructure basics</li>
                <li>Monitoring & reliability</li>
              </ul>
            </div>
            <div className="card cardPad">
              <div className="h3">Software Engineering</div>
              <ul className="list">
                <li>Java / .NET development</li>
                <li>API development</li>
                <li>QA automation</li>
                <li>Agile delivery</li>
              </ul>
            </div>
          </div>

          <div style={{marginTop:16, display:'flex', gap:10, flexWrap:'wrap'}}>
            <Link className="btn" href="/contact/">Request IT Talent</Link>
            <Link className="badge" href="/training/">IT Training Programs</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
