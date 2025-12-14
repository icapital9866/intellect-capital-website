import Link from 'next/link';

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="card cardPad">
          <div className="kicker">Clients</div>
          <h1 className="h2">How we support clients</h1>
          <p className="small">
            We collaborate with clients and partners to deliver talent quickly and reliably. Our approach emphasizes clear communication,
            quality screening, and ongoing support.
          </p>

          <div className="grid3" style={{marginTop:16}}>
            <div className="card cardPad">
              <div className="h3">Staff Augmentation</div>
              <div className="small">Quick turnaround for contract, contract-to-hire, and full-time needs.</div>
            </div>
            <div className="card cardPad">
              <div className="h3">Project Delivery</div>
              <div className="small">Scoped delivery support with milestones, documentation, and accountability.</div>
            </div>
            <div className="card cardPad">
              <div className="h3">Vendor/Partner Ready</div>
              <div className="small">Structured communication and a process-driven mindset for smooth collaboration.</div>
            </div>
          </div>

          <div style={{marginTop:16}}>
            <Link className="btn" href="/contact/">Submit a requirement</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
