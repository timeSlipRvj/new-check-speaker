import React from "react";
import "./ModeratorDummy.css";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import {  BsChevronDown, BsCalendar3 } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";

export default function ModeratorDummy1() {
  return (
    <>
      <div className="mp-parent">
        <div className="mp-left">
          <div className="mp-upper">
            <div className="mpl-left">
              <h5 style={{ textAlign: "center", marginBottom: "0.8rem" }}>
                CHANGE DETAILS
              </h5>

              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>BASIC INFORMATION</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>ACCOUNT</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>EVENT REQUESTS</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>ARCHIVED PLANS</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>SUBSCRIPTION PLANS</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>EVENTS REQUESTS</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>FLAGGED SECTION</span>
              </div>
              <div className="cdrow">
                <div className="cdr-box"></div>
                <span>LOGOUT</span>
              </div>
            </div>
            <div className="mpl-right">
              <div className="md-header mpl-heading">
                <p>EVENT REQUESTS</p>
                <button>Total Request Pending: 30</button>
              </div>
              <div
                className="st-lower"
                style={{
                  marginLeft: "1.5rem",
                }}
              >
                <div className="stl-child">
                  <p className="stlc-text">Location: </p>
                  <select
                    className="stlc-field "
                    style={{
                      background: "#e4e4e4",
                      color: "#000",
                    }}
                  >
                    <option value="Online" selected>
                      Choose Mode
                    </option>
                    <option value="Online" selected>
                      Conference
                    </option>
                    <option value="Offline">Offline</option>
                  </select>
                </div>
                <div className="stl-child">
                  <p className="stlc-text">Sort: </p>
                  <select
                    className="stlc-field "
                    style={{
                      background: "#e4e4e4",
                      color: "#000",
                    }}
                  >
                    <option value="Online" selected>
                      Choose Mode
                    </option>
                    <option value="Online" selected>
                      Conference
                    </option>
                    <option value="Offline">Offline</option>
                  </select>
                </div>
                <div className="stl-child">
                  <p className="stlc-text">from: </p>

                  <input
                    type="date"
                    className=" stlc-field"
                    style={{
                      background: "#e4e4e4",
                      color: "#000",
                    }}
                    placeholder="dd/mm/yyyy"
                  />
                </div>
                <div className="stl-child">
                  <p className="stlc-text">to: </p>

                  <input
                    type="date"
                    className=" stlc-field"
                    style={{
                      background: "#e4e4e4",
                      color: "#000",
                    }}
                    placeholder="dd/mm/yyyy"
                  />
                </div>
              </div>
              <div className="mpedit-section">
                  <div className="md-card-parent">
                    <div className="mdcp-header">
                      <h4>EVENT NAME HERE TILL HERE...</h4>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className="mdcp-body">
                      <div>
                        <div
                          className="eibl-date"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BsCalendar3 />
                          </span>
                          <span>29th Dec’2021</span>
                        </div>
                        <div
                          className="eibl-location"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BiMap />
                          </span>
                          <span>New Delhi</span>
                        </div>
                      </div>
                      <div style={{}}>
                        ONLINE
                      </div>
                    </div>
                  </div>
                  <div className="md-card-parent">
                    <div className="mdcp-header">
                      <h4>EVENT NAME HERE TILL HERE...</h4>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className="mdcp-body">
                      <div>
                        <div
                          className="eibl-date"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BsCalendar3 />
                          </span>
                          <span>29th Dec’2021</span>
                        </div>
                        <div
                          className="eibl-location"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BiMap />
                          </span>
                          <span>New Delhi</span>
                        </div>
                      </div>
                      <div style={{}}>
                        ONLINE
                      </div>
                    </div>
                  </div>
                  <div className="md-card-parent">
                    <div className="mdcp-header">
                      <h4>EVENT NAME HERE TILL HERE...</h4>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className="mdcp-body">
                      <div>
                        <div
                          className="eibl-date"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BsCalendar3 />
                          </span>
                          <span>29th Dec’2021</span>
                        </div>
                        <div
                          className="eibl-location"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BiMap />
                          </span>
                          <span>New Delhi</span>
                        </div>
                      </div>
                      <div style={{}}>
                        ONLINE
                      </div>
                    </div>
                  </div>
                  <div className="md-card-parent">
                    <div className="mdcp-header">
                      <h4>EVENT NAME HERE TILL HERE...</h4>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className="mdcp-body">
                      <div>
                        <div
                          className="eibl-date"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BsCalendar3 />
                          </span>
                          <span>29th Dec’2021</span>
                        </div>
                        <div
                          className="eibl-location"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BiMap />
                          </span>
                          <span>New Delhi</span>
                        </div>
                      </div>
                      <div style={{}}>
                        ONLINE
                      </div>
                    </div>
                  </div>
                  <div className="md-card-parent">
                    <div className="mdcp-header">
                      <h4>EVENT NAME HERE TILL HERE...</h4>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className="mdcp-body">
                      <div>
                        <div
                          className="eibl-date"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BsCalendar3 />
                          </span>
                          <span>29th Dec’2021</span>
                        </div>
                        <div
                          className="eibl-location"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BiMap />
                          </span>
                          <span>New Delhi</span>
                        </div>
                      </div>
                      <div style={{}}>
                        ONLINE
                      </div>
                    </div>
                  </div>
                  <div className="md-card-parent">
                    <div className="mdcp-header">
                      <h4>EVENT NAME HERE TILL HERE...</h4>
                      <div>
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className="mdcp-body">
                      <div>
                        <div
                          className="eibl-date"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BsCalendar3 />
                          </span>
                          <span>29th Dec’2021</span>
                        </div>
                        <div
                          className="eibl-location"
                          style={{ marginBottom: "0.4rem" }}
                        >
                          <span
                            style={{
                              position: "relative",
                              top: "3px",
                              marginLeft: "0",
                            }}
                          >
                            <BiMap />
                          </span>
                          <span>New Delhi</span>
                        </div>
                      </div>
                      <div style={{}}>
                        ONLINE
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "1rem 2rem", display: "flex" }}>
            <span style={{ fontSize: "2rem" }}>
              <AiOutlineSafetyCertificate />
            </span>
            <span
              style={{
                fontSize: "small",
                marginLeft: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Your information is secured with <br /> SpeakerOre
            </span>
          </div>
          <div className="mp-lower">
            <div className="mpl-right">
              <div className="mpl-heading">
                <p>Event Details</p>
                <button>Show previous events hosted</button>
              </div>
              <div className="mplower-body">
                <div className="mpedit-section">
                  <div className="mpes-form">
                    <p>Name of the event</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Date of the event</p>
                    <input
                      type="date"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Mode</p>
                    <select
                      className="mpes-input"
                      style={{
                        paddingTop: "0",
                        paddingBottom: "0",
                        color: "grey",
                      }}
                    >
                      <option value="Online" selected>
                        Choose Mode
                      </option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                    </select>
                    <p>Location</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Topic covered</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Audience Size</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Payment Terms</p>
                    <select
                      className="mpes-input"
                      style={{
                        paddingTop: "0",
                        paddingBottom: "0",
                        color: "grey",
                      }}
                    >
                      {/* <option value="Online" selected>Choose Mode</option> */}
                      <option value="Online" selected>
                        Paid
                      </option>
                      <option value="Offline">Offline</option>
                    </select>
                  </div>
                  <div className="mpes-form">
                    <p>This event includes (in short):</p>
                    <textarea
                      rows="4"
                      cols="46"
                      placeholder="A small about the event that is going to be held for the speakers."
                      style={{
                        background: "#F5F5F5",
                        borderRadius: "10px",
                        padding: "0.5rem",
                        marginBottom: "1rem",
                      }}
                      res
                    ></textarea>
                    <p>About (elaborate)</p>
                    <textarea
                      rows="5"
                      cols="46"
                      placeholder="A small about the event that is going to be held for the speakers."
                      style={{
                        borderRadius: "10px",
                        padding: "0.5rem",
                        marginBottom: "1rem",
                      }}
                      res
                    ></textarea>
                    <p>Contact Information:</p>
                    <input
                      type="number"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Session Type</p>
                    <select
                      className="mpes-input"
                      style={{
                        paddingTop: "0",
                        paddingBottom: "0",
                        color: "grey",
                      }}
                    >
                      <option value="Online" selected>
                        Choose Mode
                      </option>
                      <option value="Online" selected>
                        Conference
                      </option>
                      <option value="Offline">Offline</option>
                    </select>
                    <p>Audience Type</p>
                    <input
                      type="text"
                      className="mpes-input"
                      placeholder="Write Here"
                    />
                    <p>Tags</p>
                    <div className="tag-div">
                      <input
                        type="text"
                        className="mpes-input"
                        placeholder="first"
                      />
                      <button>ADD</button>
                    </div>
                    <ul className="tags-parent">
                      <li>first</li>
                      <li>second</li>
                      <li>third</li>
                      <li>fourth</li>
                      <li>fifth</li>
                    </ul>
                  </div>
                </div>
                <div className="confirmation">
                  <div className="con-upper">
                    <input
                      type="checkbox"
                      style={{ position: "initial" }}
                      className="apply1"
                      name="apply1"
                    />
                    <div className="conu-text">
                      <h4>Apply for SpeakerOre Exclusive</h4>
                      <span>
                        Events only for SpeakerOre subscribers. All the speaker
                        in these events will be selected among speakers or
                        members.
                      </span>
                    </div>
                  </div>
                  <div className="con-lower">
                    <button
                      className="con-lower-btn eprbtn2"
                      style={{
                        margin: "1rem",
                        border: "1px solid #ffbf19",
                        background: "none",
                      }}
                    >
                      Cancel Event
                    </button>
                    <button
                      className="con-lower-btn eprbtn1"
                      style={{
                        margin: "1rem",
                      }}
                    >
                      Add Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <LoggedInSidebar />
      </div>
    </>
  );
}
