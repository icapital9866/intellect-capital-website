export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="card cardPad">
          <div className="kicker">Careers</div>
          <h1 className="h2">Join our network</h1>
          <p className="small">
            Interested in opportunities in IT, Engineering, or Healthcare? Share your details and we’ll reach out when a matching role is available.
          </p>

          <div className="card cardPad" style={{marginTop:16}}>
            <div className="h3">How to apply</div>
            <ol className="list">
              <li>Send your resume to <a href="mailto:HR@intellectcapital.us">HR@intellectcapital.us</a></li>
              <li>Include your preferred role, location, and availability</li>
              <li>We will contact you for screening and next steps</li>
            </ol>
          </div>

          <div className="note" style={{marginTop:14}}>
            Intellect Capital LLC is an equal opportunity employer.
          </div>
        </div>
      </div>
    </section>
  );
}
