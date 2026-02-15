"use client";
import { useState, useEffect } from "react";
import Particles from "@/components/Particles";

export default function Page() {
  const [activeTab, setActiveTab] = useState("home");
  const [displayText, setDisplayText] = useState("");
  const fullText = "We are Qur'antum Mechanics.";
  const themeColor = "#f3dfba";

  useEffect(() => {
    let i = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const team = [
    { name: "Mustafa", role: "Software & Hardware Specialist", img: "/team/mustafa.jpg" },
    { name: "Nour", role: "Auto Program & Driver Coach", img: "/team/nour.jpg" },
    { name: "Rayaan", role: "Lead CAD & Builder / Driver", img: "/team/rayaan.jpg" },
    { name: "Humayd", role: "Lead Software & Pedro Pathing Dev", img: "/team/humayd.jpg" },
    { name: "Yasir", role: "Hardware Lead / Human Player", img: "/team/yasir.jpg" },
    { name: "Suad", role: "CAD Design & Portfolio", img: "/team/suad.jpg" },
    { name: "Naureen", role: "Outreach & Portfolio", img: "/team/naureen.jpg" },
    { name: "Alishba", role: "Outreach & Scouting", img: "/team/alishba.jpg" },
  ];

  const mentors = [
    { name: "Hadeed Khan", role: "Lead Coach", img: "/team/mentor1.jpg" },
    { name: "Brother Mohib", role: "Team Manager", img: "/team/mentor2.jpg" },
    { name: "Brother Waheed", role: "Strategies", img: "/team/mentor3.jpg" },
  ];

  return (
    <div id="root-layout" style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#0c0c0c", color: "#eee", fontFamily: "Inter, sans-serif" }}>
      <Particles />

      <nav style={{ 
        display: "flex", justifyContent: "space-between", alignItems: "center", 
        padding: "1.5rem 4rem", position: "sticky", top: 0, zIndex: 100,
        background: "rgba(12, 12, 12, 0.95)", backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${themeColor}22`
      }}>
        <div onClick={() => setActiveTab("home")} style={{ cursor: "pointer", fontWeight: "900", fontSize: "1.6rem", letterSpacing: "-1px" }}>
          31675 <span style={{ color: themeColor }}>.QM</span>
        </div>
        <ul style={{ display: "flex", gap: "2rem", alignItems: "center", listStyle: "none", margin: 0, padding: 0 }}>
          {["home", "team", "robot", "competitions", "outreach", "sponsors"].map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ 
                cursor: "pointer", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "2px",
                color: activeTab === tab ? themeColor : "#666", fontWeight: activeTab === tab ? "bold" : "500",
                transition: "0.3s"
              }}
            >
              {tab}
            </li>
          ))}
          <li
            onClick={() => setActiveTab("donate")}
            style={{
              cursor: "pointer", background: themeColor, color: "#000", padding: "0.6rem 1.6rem",
              borderRadius: "2px", fontWeight: "900", fontSize: "0.7rem", letterSpacing: "1px"
            }}
          >
            DONATE
          </li>
        </ul>
      </nav>

      <main style={{ flex: 1, padding: "4rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        
        {activeTab === "home" && (
          <div style={{ textAlign: "center", width: "100%", maxWidth: "1200px" }}>
            <div style={{ minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h1 style={{ fontSize: "4.5rem", fontWeight: "900", margin: 0, color: "#fff", lineHeight: 1.1 }}>
                {displayText}<span style={{ borderRight: `5px solid ${themeColor}`, marginLeft: "10px", animation: "blink 1s infinite" }}></span>
              </h1>
              <p style={{ fontFamily: "monospace", color: themeColor, letterSpacing: "8px", marginTop: "1.5rem", fontWeight: "bold", opacity: 0.8 }}>FTC #31675 | CEDAR PARK, TEXAS</p>
            </div>
            
            <div style={{ 
              maxWidth: "900px", height: "550px", margin: "3rem auto", borderRadius: "4px", 
              overflow: "hidden", border: `1px solid ${themeColor}33`, boxShadow: "0 40px 100px rgba(0,0,0,0.8)"
            }}>
              <img src="/images/v2finalactual.jpg" alt="Qur'antum Mechanics Whyteout V2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        )}

        {activeTab === "team" && (
          <div style={{ width: "100%", maxWidth: "1200px" }}>
             <h2 style={{ fontSize: "3.5rem", textAlign: "center", marginBottom: "5rem", letterSpacing: "-2px" }}>The Students</h2>
             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "3rem", marginBottom: "10rem" }}>
                {team.map(m => (
                  <div key={m.name} style={{ textAlign: "center", border: "1px solid #1a1a1a", padding: "1.5rem", background: "#0f0f0f" }}>
                    <div style={{ aspectRatio: "1/1", borderRadius: "0", overflow: "hidden", marginBottom: "1.5rem", border: `1px solid ${themeColor}22` }}>
                      <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <h4 style={{ margin: "0.5rem 0", fontSize: "1.3rem", color: "#fff" }}>{m.name}</h4>
                    <p style={{ color: themeColor, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "2px" }}>{m.role}</p>
                  </div>
                ))}
             </div>

             <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "4rem", color: themeColor, letterSpacing: "-1px" }}>Technical Mentors</h2>
             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", maxWidth: "1000px", margin: "0 auto" }}>
                {mentors.map(m => (
                  <div key={m.name} style={{ textAlign: "center", padding: "1rem", border: "1px solid #1a1a1a" }}>
                    <div style={{ aspectRatio: "1/1", overflow: "hidden", marginBottom: "1.5rem", border: "1px solid #222" }}>
                      <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }} />
                    </div>
                    <h4 style={{ margin: "0.5rem 0", fontSize: "1.1rem", color: "#fff" }}>{m.name}</h4>
                    <p style={{ color: "#555", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>{m.role}</p>
                  </div>
                ))}
             </div>
          </div>
        )}

        {activeTab === "robot" && (
          <div style={{ width: "100%", maxWidth: "1200px" }}>
            
            <div style={{ marginBottom: "15rem" }}>
              <div style={{ borderLeft: `8px solid ${themeColor}`, paddingLeft: "2rem", marginBottom: "4rem" }}>
                <h2 style={{ fontSize: "5rem", margin: 0, lineHeight: 0.9, fontWeight: "900" }}>v1:HYTE</h2>
                <span style={{ fontSize: "1.2rem", color: themeColor, fontWeight: "bold", textTransform: "uppercase", letterSpacing: "4px" }}>League Meet 1 & 2</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "4rem" }}>
                <div style={{ height: "500px", border: "1px solid #222", overflow: "hidden" }}>
                  <img src="/images/v1-1.jpg" alt="V1 Build" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h3 style={{ color: themeColor, fontSize: "2rem", marginBottom: "1.5rem" }}>Movement & Chassis</h3>
                  <p style={{ lineHeight: "1.8", color: "#aaa", fontSize: "1.05rem" }}>
                    Hyte was engineered with a focus on raw durability. The chassis utilizes a standard GoBilda configuration, reinforced with crossing channels to prevent major damage during high-speed collisions.
                  </p>
                  <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                     <div style={{ borderLeft: "2px solid #333", paddingLeft: "1rem" }}>
                        <span style={{ fontSize: "0.8rem", color: "#555" }}>MOTORS</span>
                        <div style={{ fontSize: "1rem" }}>4x 435 RPM Yellow Jackets</div>
                        <div style={{ fontSize: "1rem" }}>1x 6000 RPM GoBilda Motor</div>
                     </div>
                     <div style={{ borderLeft: "2px solid #333", paddingLeft: "1rem" }}>
                        <span style={{ fontSize: "0.8rem", color: "#555" }}>GEARING</span>
                        <div style={{ fontSize: "1rem" }}>19.2:1 Internal Ratio</div>
                     </div>
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "4rem" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "right" }}>
                  <h3 style={{ color: themeColor, fontSize: "2rem", marginBottom: "1.5rem" }}>Scoring & Holdbacks</h3>
                  <p style={{ lineHeight: "1.8", color: "#aaa", fontSize: "1.05rem" }}>
                    Hyte used a bent ramp to curve the ball up into the goal. We used a 6000 RPM GoBilda motor to power the flywheel which had 2 wheels with 2 metal weights on each side. We had no hood so shooting was inaccurate.
                  </p>
                </div>
                <div style={{ height: "500px", border: "1px solid #222", overflow: "hidden" }}>
                  <img src="/images/v1-2.jpg" alt="V1 Subsystem" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>

              <div style={{ background: "#0f0f0f", padding: "4rem", border: `1px solid ${themeColor}11` }}>
                <h4 style={{ color: themeColor, textTransform: "uppercase", letterSpacing: "3px", marginBottom: "2rem", fontSize: "1.2rem" }}>V1 Software Utilities</h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}>
                  <div>
                    <h5 style={{ color: "#fff", marginBottom: "0.5rem" }}>Pedro Pathing Autonomous</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666" }}>Pedro Pathing used for a coordinate based autonomous pathing system.</p>
                  </div>
                  <div>
                    <h5 style={{ color: "#fff", marginBottom: "0.5rem" }}>Multithreaded Functions</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666" }}>Several actions being executed with one button concurrently to save cycle time.</p>
                  </div>
                  <div>
                    <h5 style={{ color: "#fff", marginBottom: "0.5rem" }}>Flywheel Equation</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666" }}>Set velocity based on motor RPM and how many ticks it can currently handle.</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "5rem" }}>
              <div style={{ borderLeft: `8px solid ${themeColor}`, paddingLeft: "2rem", marginBottom: "4rem" }}>
                <h2 style={{ fontSize: "5rem", margin: 0, lineHeight: 0.9, fontWeight: "900" }}>v2:WHYTEOUT</h2>
                <span style={{ fontSize: "1.2rem", color: themeColor, fontWeight: "bold", textTransform: "uppercase", letterSpacing: "4px" }}>League Meet 3 & League Tournament</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "4rem" }}>
                <div style={{ height: "500px", border: "1px solid #222", overflow: "hidden" }}>
                  <img src="/images/intake.jpg" alt="V2 Build" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h3 style={{ color: themeColor, fontSize: "2rem", marginBottom: "1.5rem" }}>SWYFT Powered DriveTrain</h3>
                  <p style={{ lineHeight: "1.8", color: "#aaa", fontSize: "1.05rem" }}>
                    Whyteout replaced Hyte's GoBilda drivetrain with a custom SWYFT system. This allowed us to achieve higher speeds and better torque management while reducing the robot's part count significantly.
                  </p>
                  <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                     <div style={{ borderLeft: "2px solid #333", paddingLeft: "1rem" }}>
                        <span style={{ fontSize: "0.8rem", color: "#555" }}>MOTORS</span>
                        <div style={{ fontSize: "1rem" }}>4x NeveRest Orbitals</div>
                     </div>
                     <div style={{ borderLeft: "2px solid #333", paddingLeft: "1rem" }}>
                        <span style={{ fontSize: "0.8rem", color: "#555" }}>GEARING</span>
                        <div style={{ fontSize: "1rem" }}>Custom SWYFT Internal</div>
                     </div>
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "4rem" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "right" }}>
                  <h3 style={{ color: themeColor, fontSize: "2rem", marginBottom: "1.5rem" }}>360° Turret Scoring</h3>
                  <p style={{ lineHeight: "1.8", color: "#aaa", fontSize: "1.05rem" }}>
                    The core of V2 is the precision outtake turret. By utilizing a high-speed flywheel and a custom-designed hood, we can score from any position. A 5-turn servo allows for persistent turret tracking on the goal.
                  </p>
                </div>
                <div style={{ height: "500px", border: "1px solid #222", overflow: "hidden" }}>
                  <img src="/images/shooter.jpg" alt="V2 Subsystem" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>

              <div style={{ background: "#0f0f0f", padding: "4rem", border: `1px solid ${themeColor}11` }}>
                <h4 style={{ color: themeColor, textTransform: "uppercase", letterSpacing: "3px", marginBottom: "2rem", fontSize: "1.2rem" }}>V2 Software Utilities</h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}>
                  <div>
                    <h5 style={{ color: "#fff", marginBottom: "0.5rem" }}>Pedro Pathing Autonomous</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666" }}>Improved paths from Hyte allowing for 12+ ball cycles in autonomous.</p>
                  </div>
                  <div>
                    <h5 style={{ color: "#fff", marginBottom: "0.5rem" }}>Turret Tracking</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666" }}>Odometry pinpointing combined with a 5-turn servo for persistent tracking.</p>
                  </div>
                  <div>
                    <h5 style={{ color: "#fff", marginBottom: "0.5rem" }}>Flywheel Speed</h5>
                    <p style={{ fontSize: "0.9rem", color: "#666" }}>Dynamic speed updates based on battery voltage for consistent power levels.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "competitions" && (
          <div style={{ width: "100%", maxWidth: "1000px" }}>
            <h2 style={{ fontSize: "3.5rem", textAlign: "center", marginBottom: "5rem", letterSpacing: "-2px" }}>Match History</h2>
            <div style={{ border: "1px solid #1a1a1a", background: "#0c0c0c" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead style={{ background: "#111", borderBottom: `2px solid ${themeColor}33` }}>
                  <tr>
                    <th style={{ padding: "2rem", fontSize: "0.8rem", color: themeColor, textTransform: "uppercase", letterSpacing: "2px" }}>Competition Event</th>
                    <th style={{ padding: "2rem", fontSize: "0.8rem", color: themeColor, textTransform: "uppercase", letterSpacing: "2px" }}>Result</th>
                    <th style={{ padding: "2rem", fontSize: "0.8rem", color: themeColor, textTransform: "uppercase", letterSpacing: "2px" }}>Points</th>
                  </tr>
                </thead>
                <tbody style={{ color: "#888" }}>
                  {[
                    { e: "X-Stream League Tournament Playoff M-8", r: "WIN", s: "232 - 127", win: true },
                    { e: "X-Stream League Tournament Playoff M-2", r: "LOSS", s: "161 - 179", win: false },
                    { e: "X-Stream League Tournament Q-8", r: "LOSS", s: "152 - 230", win: false },
                    { e: "X-Stream League Tournament Q-19", r: "WIN", s: "156 - 72", win: true },
                    { e: "X-Stream League B Q-18", r: "WIN", s: "172 - 82", win: true }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #151515" }}>
                      <td style={{ padding: "2rem", color: "#fff", fontWeight: "bold" }}>{row.e}</td>
                      <td style={{ padding: "2rem" }}>
                        <span style={{ 
                          color: row.win ? "#4ade80" : "#f87171", 
                          background: row.win ? "rgba(74, 222, 128, 0.1)" : "rgba(248, 113, 113, 0.1)",
                          padding: "0.5rem 1rem", fontSize: "0.75rem", fontWeight: "900", border: `1px solid ${row.win ? "#4ade8055" : "#f8717155"}`
                        }}>{row.r}</span>
                      </td>
                      <td style={{ padding: "2rem", color: "#fff", fontFamily: "monospace", fontSize: "1.2rem" }}>{row.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "outreach" && (
          <div style={{ width: "100%", maxWidth: "1200px" }}>
            <h2 style={{ fontSize: "3.5rem", textAlign: "center", marginBottom: "5rem", letterSpacing: "-2px" }}>Community Impact</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4rem" }}>
              {[
                { 
                    t: "ICBC Youth Mentorship", 
                    d: "Established technical classes for Python, Java, Arduino, and CAD at the Islamic Center Of Brushy Creek. Over 50 students have attended, bridging the gap between curiosity and technical ability for the local community." 
                },
                { 
                    t: "ICBC Bake Sale Fundraisers", 
                    d: "Hosted community bake sales raising over $1,000. These funds directly support rookie team accessibility and hardware costs for our own competition season." 
                }
              ].map(item => (
                <div key={item.t} style={{ padding: "4rem 3rem", background: "#0f0f0f", border: "1px solid #1a1a1a" }}>
                  <h3 style={{ color: themeColor, marginBottom: "1.5rem", fontSize: "1.6rem" }}>{item.t}</h3>
                  <p style={{ color: "#777", lineHeight: "1.8", fontSize: "1rem" }}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "sponsors" && (
          <div style={{ width: "100%", maxWidth: "1200px" }}>
            <h2 style={{ fontSize: "3.5rem", textAlign: "center", marginBottom: "6rem", letterSpacing: "-2px" }}>Our Partners</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "3rem" }}>
              {["Apple", "Qualcomm", "International Foods", "Phoenicia Bakery", "Kababji Grill", "Academix Tutors", "Kumon", "The Rahman Family"].map(s => (
                <div key={s} style={{ height: "180px", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f0f0f", border: "1px solid #1a1a1a" }}>
                   <span style={{ fontSize: "1.1rem", fontWeight: "900", color: "#444", textTransform: "uppercase", textAlign: "center", padding: "1rem" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "donate" && (
          <div style={{ width: "100%", maxWidth: "800px", textAlign: "center" }}>
            <h2 style={{ fontSize: "3.5rem", marginBottom: "3rem", letterSpacing: "-2px" }}>Sustainability</h2>
            <div style={{ background: "#0f0f0f", border: `1px solid ${themeColor}22`, padding: "5rem" }}>
              <p style={{ color: "#777", marginBottom: "3rem", lineHeight: "2", fontSize: "1.1rem" }}>
                Support the mission. Our budget of <strong style={{ color: themeColor }}>$10,359</strong> facilitates prototyping, tournament travel, and our community outreach programs.
              </p>
              <button style={{ 
                background: themeColor, color: "#000", padding: "1.4rem 4rem", 
                border: "none", fontWeight: "900", cursor: "pointer", fontSize: "1rem", letterSpacing: "2px"
              }}>
                DONATE VIA ICBC PORTAL
              </button>
            </div>
          </div>
        )}

      </main>

      <footer style={{ padding: "6rem 2rem", background: "#080808", borderTop: "1px solid #111", textAlign: "center" }}>
        <p style={{ fontSize: "0.7rem", color: "#333", letterSpacing: "4px", textTransform: "uppercase", margin: 0 }}>
          QUR'ANTUM MECHANICS #31675 | CEDAR PARK, TEXAS | 501C3 NON-PROFIT | ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}