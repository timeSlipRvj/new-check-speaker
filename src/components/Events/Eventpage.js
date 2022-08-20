import React, { useEffect, useState } from "react";
import "../css/eventpage.css";
import { Button, Typography, Box, Modal } from "@mui/material";
import {
  BsChevronRight,
  BsFillBookmarkFill,
  BsFillCalendarEventFill,
  BsChevronLeft,
} from "react-icons/bs";
import axios from "axios";
import LoggedInSidebar from "../accountSide/LoggedInSidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Firstpage.css";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import PurchaseError from "../../ErrorPages/purchaseError";

const Eventpage = () => {
  console.log(JSON.parse(localStorage.getItem("@token")));
  const { userdata } = JSON.parse(localStorage.getItem("@token"));

  const [search, setSearch] = useState("");
  const [isExclusive, setisExclusive] = useState(false);
  const [eventData, setEventData] = useState();
  const userToken = JSON.parse(localStorage.getItem("@token"));
  const [startTime, setstart_time] = useState("");
  const [endTime, setendTime] = useState("");

  const userEvents = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/events`, {
        headers: {
          Authorization: `Bearer ${userToken?.token}`,
        },
      })
      .then((d) => {
        setEventData(d?.data?.filter((e) => e.isApproved));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var resultProductData = eventData?.filter((a) => {
    var date = new Date(a.start_time);
    return date >= startTime && date <= endTime;
  });
  console.log(resultProductData);

  useEffect(() => {
    if (isExclusive) {
      setEventData(eventData?.filter((e) => e.isExclusive));
    } else {
      userEvents();
    }
  }, [isExclusive]);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_URL}/events`, {
  //       headers: {
  //         Authorization: `Bearer ${userToken?.token}`,
  //       },
  //     })
  //     .then((d) => {
  //       console.log(
  //         d?.data?.filter((a) => {
  //           return a.isApproved == true;
  //         }),
  //         "dfghyjuiuuytrrtgtrh"
  //       );
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    if (userdata?.subscribed) {
      userEvents();
    }
  }, []);

  const handleBookmark = (id) => {
    const data = {};
    console.log(id);
    axios
      .post(`${process.env.REACT_APP_URL}/events/bookmark/${id}`, data, {
        headers: {
          Authorization: `Bearer ${userToken?.token}`,
        },
      })
      .then((d) => {
        toast.dark("Event bookmarked successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const filteredCountries = eventData?.filter((country) => {
  //   return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  // });

  // var aquaticCreatures = eventData?.filter(function (creature) {
  //   return creature.isExclusive === isExclusive;
  // });
  // var aquaticCreature1s = eventData?.filter(function (creature) {
  //   return creature.mode === mode;
  // });
  const [mode, setMode] = useState();

  console.log(eventData, "asdfghjkl");

  // Modal Style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    pt: 5,
    px: 4,
    pb: 3,
    display: "flex",
    flexFlow: "wrap column",
    alignItems: "center",
  };

  const modalCloseStyle = {
    position: "absolute",
    top: 0,
    left: 0,
  };

  const cardBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="mp-parent" style={{ background: "none", marginTop: "0" }}>
        {console.log(userdata?.role, userdata?.subscribed)}
        {userdata?.subscribed === "true" || userdata.subscribed === true ? (
          <div className="mp-left">
            <div className="search-ticket">
              <div className="st-upper">
                <div className="stu-left">
                  <input
                    className="searchbar"
                    type="text"
                    placeholder="Search by event name, location, or category name"
                    name="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
                <div className="stu-right">
                  <input
                    type="checkbox"
                    name="apply1"
                    value={isExclusive}
                    onChange={(e) => {
                      setisExclusive(e.target.checked);
                    }}
                  />
                  <div className="stur-text">
                    <b className="s1">SpeakerOre Exclusive</b>
                    <p
                      className="eprtext1"
                      style={{ fontSize: "x-small", paddingRight: "5rem" }}
                    >
                      Events only for SpeakerOre subscribers. All the speaker in
                      these events will be selected among speakers or members.
                    </p>
                  </div>
                </div>
              </div>

              <div className="st-lower">
                <div className="stl-child">
                  <p className="stlc-text">Mode: </p>
                  <select
                    className="stlc-field "
                    // style={{
                    //   paddingTop: "0",
                    //   paddingBottom: "0",
                    //   color: "grey",
                    // }}
                    onChange={(e) => setMode(e.target.value)}
                    value={mode}
                  >
                    <option value="Online">offline</option>
                    <option value="Offline">online</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div className="stl-child">
                  <p className="stlc-text">Categories: </p>
                  <select
                    className="stlc-field "
                    style={{
                      paddingTop: "0",
                      paddingBottom: "0",
                      color: "grey",
                    }}
                  >
                    <option value="" selected>
                      Choose Category
                    </option>
                    <option value="Business">Business</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Sales">Sales</option>
                    <option value="Communication">Communication</option>
                    <option value="Health">Health</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Presentation skills">
                      Presentation skills
                    </option>
                    <option value="Soft Skills">Soft Skills</option>
                    <option value="Marketing">Marketing</option>
                    <option value="LGBTQ">LGBTQ</option>
                    <option value="Oil and Gas">Oil and Gas</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail</option>
                    <option value="Coaching">Coaching</option>
                    <option value="Information Technology">
                      Information Technology
                    </option>
                    <option value="Education">Education</option>
                    <option value="Motivation">Motivation</option>
                    <option value="Finance">Finance</option>
                    <option value="Parenting">Parenting</option>
                    <option value="Innovation">Innovation</option>
                    <option value="Automobile">Automobile</option>
                    <option value="Creativity">Creativity</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Advertising">Advertising</option>
                    <option value="Media">Media</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Banking">Banking</option>
                    <option value="Design Thinking">Design Thinking</option>
                    <option value="Artificial Intelligence">
                      Artificial Intelligence
                    </option>
                  </select>
                </div>

                <div className="stl-child">
                  <p className="stlc-text">from: </p>

                  <input
                    type="date"
                    className=" stlc-field"
                    placeholder="dd/mm/yyyy"
                    onChange={(e) => setstart_time(e.target.value)}
                    value={startTime}
                  />
                  {console.log(startTime, "startTimestartTime")}
                </div>
                <div className="stl-child">
                  <p className="stlc-text">to: </p>

                  <input
                    type="date"
                    className=" stlc-field"
                    placeholder="dd/mm/yyyy"
                    onChange={(e) => setendTime(e.target.value)}
                    value={endTime}
                  />
                </div>
                <div className="stl-child">
                  <button
                    style={{
                      marginLeft: "35px",
                      height: "45px",
                      width: "99px",
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="view-event">
              <div className="vc-sec">
                {eventData &&
                  eventData?.map((data) => {
                    return (
                      <div className="event-card">
                        <div className="ec-section1">
                          <div className="eds1-l">
                            <p className="e1">{data?.eventName}</p>
                            <p className="e2">{data?.location}</p>
                          </div>
                          <div className="eds1-r">
                            <BsFillBookmarkFill />
                          </div>
                        </div>
                        <div className="ec-section2">
                          <span>
                            <div
                              style={{
                                marginRight: "0.5rem",
                                fontSize: "medium",
                              }}
                            >
                              <BsFillCalendarEventFill />
                            </div>
                            <p>{data?.startTime}</p>
                          </span>
                          <p className="e8">ONLINE</p>
                        </div>
                        <div className="ec-section3">
                          Tags: <p className="e4">{data?.tags}</p>
                        </div>
                        <div className="ec-section4">{data?.description}</div>
                        <div className="ec-section5">
                          <a
                            href={
                              data.isExclusive
                                ? `/exevent/${data?.id}`
                                : `/event/${data?.id}`
                            }
                          >
                            <button
                              className="eprbtn2"
                              style={{
                                background: "#ffbf19",
                                padding: "0.5rem 2rem",
                              }}
                            >
                              View Details
                            </button>
                          </a>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {eventData?.length > 9 && (
                <div className="event-nav-bottom">
                  <div className="enav-prev">
                    <span className="enb-icon">
                      <BsChevronLeft />
                    </span>
                    <span>Previous</span>
                  </div>
                  <ul className="enav-nums">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>...</li>
                    <li>15</li>
                  </ul>
                  <div className="enav-next">
                    <span>Next</span>
                    <span className="enb-icon">
                      <BsChevronRight />
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="speaker">
              <img
                src={require("../images/EventsPage2.png")}
                style={{ height: "100%" }}
                alt={""}
              />
              <div
                className="fp-text"
                style={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(52, 52, 52, 0.65)",
                  padding: "30% 0",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "100",
                    fontFamily: '"Segoe UI", "Roboto", "Oxygen"',
                    fontStyle: "normal",
                    fontWeight: "100",
                    fontSize: "96px",
                    lineHeight: "112px",
                    color: "#FFFFFF",
                  }}
                >
                  POPULAR UPCOMING EVENTS
                </Typography>
                <Typography style={{ color: "#ffffff" }}>
                  SpeakerOre subscribers can access thousands of events across
                  the world and apply for speaking in them.
                </Typography>
                <Button
                  onClick={handleOpen}
                  variant="contained"
                  style={{
                    backgroundColor: "#ffbf19",
                    borderColor: "#ffbf19",
                    color: "#333",
                    width: "30%",
                    fontWeight: "600",
                    marginTop: 10,
                  }}
                >
                  Subscribe Now
                </Button>
              </div>
            </div>
          </>
        )}
        <LoggedInSidebar
          setisExclusive={setisExclusive}
          isExclusive={isExclusive}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button onClick={handleClose} sx={modalCloseStyle}>
            {" "}
            &#10096; Back
          </Button>
          <Typography id="modal-modal-title" component="h5" variant="h5">
            Oops, it seems you have not yet subscribed!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            SUBSCRIBE NOW by SIGNING IN!!
          </Typography>
          <div
            className="card-new"
            style={{
              display: "flex",
              flexFlow: "wrap",
              flex: "0 0 100%",
              width: "100%",
              marginBottom: "30px",
              marginTop: "30px",
              justifyContent: "space-between",
            }}
          >
            <div className="div-1" style={cardBoxStyle}>
              <span className="box-count">1</span>Get event details for FREE.
            </div>
            <div className="div-2" style={cardBoxStyle}>
              <span className="box-count">2</span>Unlimited Click on Events
            </div>
            <div className="div-3" style={cardBoxStyle}>
              <span className="box-count">3</span>Get hired through SpeakerOre
              Exclusive
              <span
                style={{
                  position: "absolute",
                  top: -4,
                  right: 4,
                  color: "#FFBF19",
                  fontSize: 18,
                }}
              >
                {" "}
                &#9733;{" "}
              </span>
            </div>
          </div>

          <Box
            sx={{
              display: "flex",
              flexFlow: "wrap",
              flex: "0 0 100%",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "50%",
                flex: "0 0 50%",
                pl: 1,
                pr: 1,
              }}
            >
              <Button
                href="/subplan"
                variant="contained"
                style={{
                  backgroundColor: "#ffbf19",
                  borderColor: "#ffbf19",
                  color: "#333",
                  width: "100%",
                }}
              >
                Purchase Plan
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default Eventpage;
