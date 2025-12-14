import Link from 'next/link';

export default function Page() {
  const areas = [
    { title: 'ADAS', items: ['Perception & sensing support', 'System integration assistance', 'Verification & validation'] },
    { title: 'Infotainment', items: ['IVI feature support', 'Integration testing', 'Release coordination'] },
    { title: 'Hardware-in-loop (HIL)', items: ['Test bench execution', 'Test automation basics', 'Defect triage'] },
    { title: 'AUTOSAR', items: ['Classic/Adaptive exposure', 'Configuration support', 'Integration readiness'] },
    { title: 'Functional Safety', items: ['Process awareness', 'Safety documentation support', 'Quality mindset'] },
    { title: 'Embedded Technologies', items: ['C/C++ basics', 'RTOS exposure', 'Device integration'] },
    { title: 'Testing & Validation', items: ['Test planning', 'Execution & reporting', 'Traceability support'] },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="card cardPad">
          <div className="kicker">Services</div>
          <h1 className="h2">Engineering</h1>
          <p className="small">
            We support engineering programs with skilled professionals in embedded/automotive domains—focused on testing, integration,
            validation, and delivery support.
          </p>

          <div className="grid3" style={{marginTop:16}}>
            {areas.map((a) => (
              <div key={a.title} className="card cardPad">
                <div className="h3">{a.title}</div>
                <ul className="list">
                  {a.items.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div style={{marginTop:16, display:'flex', gap:10, flexWrap:'wrap'}}>
            <Link className="btn" href="/contact/">Discuss Engineering Needs</Link>
            <Link className="badge" href="/training/">Engineering Training Options</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
