export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <div className="card cardPad">
          <div className="kicker">About</div>
          <h1 className="h2">Who we are</h1>
          <p className="small">
            Intellect Capital LLC is a consulting and staffing firm supporting clients across IT, Engineering, and Healthcare.
            We focus on delivering the right talent and practical solutions—quickly, transparently, and with a quality-first mindset.
          </p>

          <div className="grid3" style={{marginTop:16}}>
            <div className="card cardPad">
              <div className="h3">Mission</div>
              <div className="small">Help clients execute by providing skilled professionals, strong delivery support, and dependable service.</div>
            </div>
            <div className="card cardPad">
              <div className="h3">Values</div>
              <ul className="list">
                <li>Quality & accountability</li>
                <li>Compliance & integrity</li>
                <li>Speed with clarity</li>
                <li>Long-term partnerships</li>
              </ul>
            </div>
            <div className="card cardPad">
              <div className="h3">Engagement models</div>
              <ul className="list">
                <li>Staff augmentation</li>
                <li>Contract / contract-to-hire</li>
                <li>Project-based delivery</li>
                <li>Training-led readiness</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
