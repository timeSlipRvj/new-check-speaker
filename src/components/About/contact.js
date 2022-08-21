import "../css/About2.css";
import "../css/addeventpage.css";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";

export default function contact() {
  return (
    <>
      <div className="mp-parent">
        <form>
          <h2>&nbsp;&nbsp;&nbsp;Contact Us</h2>
          <br />
          <div className="mp-left">
            <div className="mp-lower">
              <div className="mpl-left">
                <div className="mplower-body">
                  <div className="mpedit-section">
                    <div className="mpes-form">
                      <p>Name</p>
                      <input
                        type="text"
                        className="mpes-input"
                        placeholder="Write Here"
                      />
                      <p>Email</p>

                      <input
                        type="email"
                        className="mpes-input"
                        placeholder="Write Here"
                      />

                      <p>Message</p>
                      <textarea
                        rows="10"
                        cols="120"
                        placeholder="Write Your Message"
                        style={{
                          background: "#fff",
                          borderRadius: "10px",
                          padding: "0.5rem",
                          marginBottom: "1rem",
                        }}
                      ></textarea>
                      <br />
                      <button className="mpes-btn">Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <LoggedInSidebar />
      </div>
    </>
  );
}
