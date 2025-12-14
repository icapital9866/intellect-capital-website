export default function Page() {
  const address = "701 S Carroll Blvd Ste 206, Denton, TX 76201";
  const mapSrc = "https://www.google.com/maps?q=" + encodeURIComponent(address) + "&output=embed";

  return (
    <section className="section">
      <div className="container">
        <div className="card cardPad">
          <div className="kicker">Contact</div>
          <h1 className="h2">Get in touch</h1>
          <p className="small">
            Tell us what you need—staffing, consulting support, or training inquiries. We’ll respond as soon as possible.
          </p>

          <div className="grid3" style={{marginTop:16, gridTemplateColumns: '1.1fr 0.9fr 1fr'}}>
            <div className="card cardPad" style={{gridColumn: 'span 2'}}>
              <div className="h3">Contact form</div>
              <form className="form" action="mailto:HR@intellectcapital.us" method="post" encType="text/plain">
                <input className="input" name="Name" placeholder="Your name" required />
                <input className="input" name="Phone" placeholder="Phone (e.g., 469-579-0881)" />
                <input className="input" name="Email" placeholder="Email" />
                <input className="input" name="Topic" placeholder="Topic (IT / Engineering / Healthcare / Training)" />
                <textarea className="textarea" name="Message" placeholder="How can we help?" required />
                <button className="btn" type="submit">Send</button>
                <div className="note">
                  Tip: For a more professional form experience (no email client pop-up), we can wire this to a serverless form endpoint on Vercel.
                </div>
              </form>
            </div>

            <div className="card cardPad">
              <div className="h3">Contact details</div>
              <div className="small">
                <div><span className="badge">Address</span><div style={{marginTop:6}}>{address}</div></div>
                <div style={{marginTop:12}}><span className="badge">Phone</span><div style={{marginTop:6}}><a href="tel:+14695790881">469-579-0881</a></div></div>
                <div style={{marginTop:12}}><span className="badge">Email</span><div style={{marginTop:6}}><a href="mailto:HR@intellectcapital.us">HR@intellectcapital.us</a></div></div>
              </div>
            </div>
          </div>

          <div className="card cardPad" style={{marginTop:16}}>
            <div className="h3">Location</div>
            <div style={{borderRadius:14, overflow:'hidden', border:'1px solid rgba(255,255,255,0.10)'}}>
              <iframe title="map" src={mapSrc} width="100%" height="340" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
