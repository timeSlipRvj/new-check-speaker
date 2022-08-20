import React from "react";

export default function TeamMembers() {
  return (
    <div className="ep-parent1">
      <div className="ep-left">
        <div className="epl-team">
          <p>Meet the Team</p>
        </div>
        <div className="team-body col-first">
          <div className="tupper">
            <div className="tprofilecard">
              <div className="image"></div>
              <img
                className="image"
                src={require("../images/nikhil.jpg")}
                alt={""}
              />
              <div className="tpc-name">NIKHIL CHAUDHARY</div>
              <div className="tpc-post">CO-FOUNDER</div>
            </div>
            <div className="tutext">
              Nikhil Chaudhary an international speaker in wellness space is a
              serial entrepreneur who is also a founding board member of
              Professional Speakers Association of India which is a part of the
              global Speakers Federation. Common to all his businesses and his
              core personality he believes in solving the most important and
              complex problems of people in a simple manner. He is very well
              known in the circle as a giver who never hesitates to share. With
              these ideologies to solve the complex problem of Speakers, this
              world famous nutritionist co-founded Speakerore.
            </div>
          </div>

          {/* <div className="tlr1">
              <div className="tprofilecard">
                <div className="tpc-avatar"></div>
                <div className="tpc-name">MOHIT GOPAL</div>
                <div className="tpc-post">MANAGING DIRECTOR</div>
              </div>
              <div className="tprofilecard">
                <div className="tpc-avatar"></div>
                <div className="tpc-name">MOHIT GOPAL</div>
                <div className="tpc-post">MANAGING DIRECTOR</div>
              </div>
              <div className="tprofilecard">
                <div className="tpc-avatar"></div>
                <div className="tpc-name">MOHIT GOPAL</div>
                <div className="tpc-post">MANAGING DIRECTOR</div>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}
