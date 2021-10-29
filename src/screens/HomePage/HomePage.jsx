import React from "react";
import "./style.css";
import FullLogo from "../../assets/FullLogo.svg";
import FitCodeLogo from "../../assets/FitCodeLogo.svg";
import sample_960540 from "../../assets/sample_960x540.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faFacebookF,
  faGitAlt,
  faHtml5,
  faInstagram,
  faJs,
  faJsSquare,
  faNode,
  faNodeJs,
  faReact,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCalendarAlt,
  faChalkboardTeacher,
  faClock,
  faCode,
  faDesktop,
  faEnvelope,
  faHandPaper,
  faLaptopHouse,
  faMapMarkerAlt,
  faMoneyBillAlt,
  faPaperPlane,
  faPhoneAlt,
  faShoppingBag,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
export default function HomePage() {
  const faqs = [1, 2, 3, 4, 5];
  return (
    <div>
      <section id="hompage-one">
        <div className="container">
          <nav className="d-flex align-items-center w-100  justify-content-between flex-wrap">
            <div className="logo">
              <img src={FitCodeLogo} alt="" className="" />
            </div>
            <div className="nav-item  mr-3 active font-bold ml-100 hide-900">
              HOME
            </div>
            <div className="nav-item mx-3 font-bold hide-900">ABOUT</div>
            <div className="nav-item me-auto ml-3 font-bold hide-900">
              PROJECTS
            </div>
            <button className="mx-3 fit-btn-p btn rounded bg-white rounded-pill shadow hide-900">
              TRACKS
            </button>
            <button className="mx-2 fit-btn-p btn rounded-pill primary-bg text-white shadow hide-900">
              REGISTER
            </button>
            <div class="dropdown">
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                className="show-900"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <span class="dropdown-item" href="#">
                    HOME
                  </span>
                  <span class="dropdown-item" href="#">
                    ABOUT
                  </span>
                  <span class="dropdown-item" href="#">
                    PROJECTS
                  </span>
                </li>
                <li>
                  <div className="dropdown-item">
                    <button className="fit-btn-p btn rounded bg-white rounded-pill shadow ">
                      TRACKS
                    </button>
                  </div>
                </li>
                <li>
                  <div className="dropdown-item">
                    <button className="fit-btn-p btn rounded-pill primary-bg text-white shadow ">
                      REGISTER
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <div className="row my-2 my-md-5">
            <div className="col-12 col-md-6">
              <h1 className="my-2 my-md-4 large-h">
                #Learn <br />
                Software Engineering{" "}
              </h1>
              <p className="my-2 my-md-5">
                <code className="code-p">{`const sum = (x, y, z) => { `}</code>
                <br />
                &nbsp; &nbsp;
                <code className="code-p">{`
                  const args = [x, y, z];`}</code>
                <br />
                &nbsp; &nbsp;
                <code className="code-p">{`    
                      return args.reduce((a, b) => a + b, 0);
                 `}</code>
                <br />
                <code className="code-p"> {`}`}</code>
              </p>
              <p className="my-2 my-md-5 subcode-p">
                Join our physical bootcamp training to compete with world <br />{" "}
                class developers
              </p>
              <div className="d-flex my-5">
                <button className="me-2 fit-btn-big primary-bg btn text-white rounded-pill">
                  Register Now
                </button>
                <button className="ms-2 fit-btn-big bg-white btn  rounded-pill">
                  Get Started
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="homepage-one-circle">
                {/* <img src={pic1} alt="" /> */}
                <div className="img"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="homepage-one-float"
          className="d-flex align-items-center flex-wrap justify-content-center primary-bg rounded"
        >
          <div className="homepage-one-float-item m-2 ms-md-4  me-md-auto">
            <div className="homepage-one-float-item-icon ">
              <FontAwesomeIcon
                icon={faHandPaper}
                size="lg"
                color="rgba(241, 102, 42)"
              />
            </div>
            <span className="text-white subcode-p">Stack to learn</span>
          </div>
          <div className="homepage-one-float-item rounded m-2 mx-md-4 ">
            <div className="homepage-one-float-item-icon ">
              <FontAwesomeIcon
                icon={faJs}
                size="lg"
                color="rgba(241, 102, 42)"
              />
            </div>
            <span className="text-white subcode-p">Javascript</span>
          </div>
          <div className="homepage-one-float-item rounded m-2 mx-md-4 ">
            <div className="homepage-one-float-item-icon ">
              <FontAwesomeIcon
                icon={faReact}
                size="lg"
                color="rgba(241, 102, 42)"
              />
            </div>
            <span className="text-white subcode-p">React</span>
          </div>
          <div className="homepage-one-float-item rounded m-2 mx-md-4 ">
            <div className="homepage-one-float-item-icon ">
              <FontAwesomeIcon
                icon={faNode}
                size="lg"
                color="rgba(241, 102, 42)"
              />
            </div>
            <span className="text-white subcode-p">Node</span>
          </div>
        </div>
      </section>
      <section id="hompage-two">
        <div className="container">
          <h1 className="text-center">Course Modules Taught</h1>
          <p className="text-center">
            dignissimos enim atque excepturi voluptatum ullam?
          </p>
          <div className="hompage-two-cards d-flex justify-content-center flex-wrap py-5">
            <div className="hompage-two-card">
              <FontAwesomeIcon icon={faHtml5} size="3x" color="#E44F26" />
              <h4 className="my-3">
                <strong>Front-End Development</strong>
              </h4>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium doloremque quas esse earum minus? Reiciendis
                corporis iste libero facere rem, quis voluptates, molestiae
                provident
              </p>
              <p>Read More </p>
            </div>
            <div className="hompage-two-card orange-border">
              <FontAwesomeIcon icon={faCss3Alt} size="3x" color="#1572B6" />
              <h4 className="my-3">
                <strong>CSS 3.0 & Bootstrap</strong>
              </h4>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium doloremque quas esse earum minus? Reiciendis
                corporis iste libero facere rem, quis voluptates, molestiae
                provident
              </p>
              <p>Read More </p>
            </div>
            <div className="hompage-two-card">
              <FontAwesomeIcon icon={faJsSquare} size="3x" color="#F7DF1E" />
              <h4 className="my-3">
                <strong>Javascript & Data Strcuture</strong>
              </h4>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium doloremque quas esse earum minus? Reiciendis
                corporis iste libero facere rem, quis voluptates, molestiae
                provident
              </p>
              <p>Read More </p>
            </div>
            <div className="hompage-two-card">
              <FontAwesomeIcon icon={faGitAlt} size="3x" color="#E44F26" />
              <h4 className="my-3">
                <strong>Learning Git & Apps Deployment</strong>
              </h4>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium doloremque quas esse earum minus? Reiciendis
                corporis iste libero facere rem, quis voluptates, molestiae
                provident
              </p>
              <p>Read More </p>
            </div>
            <div className="hompage-two-card">
              <FontAwesomeIcon icon={faReact} size="3x" color="#00D8FF" />
              <h4 className="my-3">
                <strong>React & Redux as data storage</strong>
              </h4>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium doloremque quas esse earum minus? Reiciendis
                corporis iste libero facere rem, quis voluptates, molestiae
                provident
              </p>
              <p>Read More </p>
            </div>
            <div className="hompage-two-card">
              <FontAwesomeIcon icon={faNodeJs} size="3x" color="#83CD29" />
              <h4 className="my-3">
                <strong>Node & Express as Server Side </strong>
              </h4>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium doloremque quas esse earum minus? Reiciendis
                corporis iste libero facere rem, quis voluptates, molestiae
                provident
              </p>
              <p>Read More </p>
            </div>
          </div>
        </div>
      </section>
      <section id="hompage-three">
        <div className="w-100 d-flex justify-content-center">
          <div className="orange-cube my-4"></div>
        </div>
        <h1 className="text-center">Course Modules Taught</h1>
        <p className="text-center">
          dignissimos enim atque excepturi voluptatum ullam?b
        </p>
        <div className="hompage-three-cards d-flex justify-content-center flex-wrap my-5">
          <div className="hompage-three-card">
            <div className="big-icon-badge primary-bg-03 ">
              <FontAwesomeIcon icon={faCode} size="lg" color="#E44F26" />
            </div>
            <h4>Javascript Apps</h4>
            <button className="btn fit-btn-big border rounded-pill primary-border primary-text">
              View
            </button>
          </div>
          <div className="hompage-three-card">
            <div className="big-icon-badge bg-light">
              <FontAwesomeIcon icon={faDesktop} size="lg" color="#2C5D2D" />
            </div>
            <h4>React Apps</h4>
            <button className="btn fit-btn-big border rounded-pill">
              View
            </button>
          </div>
          <div className="hompage-three-card">
            <div className="big-icon-badge bg-light">
              {" "}
              <FontAwesomeIcon icon={faTerminal} size="lg" color="#000000" />
            </div>
            <h4>Node Apps</h4>
            <button className="btn fit-btn-big border rounded-pill">
              View
            </button>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <button className="btn fit-btn-big border rounded-pill primary-border primary-text">
            Register Now
          </button>
        </div>
      </section>
      <section id="homepage-four">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="orange-cube"></div>
              <h4 className="primary-color my-3 hash-orange">#Journey</h4>
              <p className="mb-4">
                <strong>
                  Build communications apps easily <br /> on a developer-trusted
                  platform.
                </strong>
              </p>

              <small>
                Use the language you already love to prototype ideas quickly,
                develop production-ready communications applications, and run
                serverless applications on one API-powered platform.
              </small>
              <br />

              <br />
              <small>
                Quickly build solutions like programmable messages, 2FA,
                appointment reminders, and more with the help of clear
                documentation and tutorials.
              </small>
              <button className="d-flex justify-content-between align-items-center ps-4 p-2 my-5 get-started">
                Get Started
                <div className="small-icon-badge primary-bg ms-4 text-white">
                  &rarr;
                </div>
              </button>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex flex-column flex-wrap align-items-center justify-content-center height-to-wrap">
                <div className="hompage-four-card bg-white m-2 p-4">
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    size="lg"
                    color="#E44F26"
                  />
                  <h4>Training</h4>
                  <p>
                    Use the language you already love to prototype ideas
                    quickly, develop production-ready communications
                    applications,
                  </p>
                </div>
                <div className="hompage-four-card bg-white m-2 p-4">
                  <FontAwesomeIcon
                    icon={faLaptopHouse}
                    size="lg"
                    color="#E44F26"
                  />
                  <h4>Internship</h4>
                  <p>
                    Use the language you already love to prototype ideas
                    quickly, develop production-ready communications
                    applications,
                  </p>
                </div>
                <div className="hompage-four-card bg-white m-2 p-4">
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    size="lg"
                    color="#E44F26"
                  />
                  <h4>First Gig / Employment</h4>
                  <p>
                    Use the language you already love to prototype ideas
                    quickly, develop production-ready communications
                    applications,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="homepage-five">
        <div className="text-center p-2 py-5 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mt-5 text-white">Our Office Space</h1>
          <p className="my-3 text-white">
            Quickly build solutions like programmable messages, 2FA, appointment
            reminders, <br /> and more with the help of clear documentation and
            tutorials.
          </p>
          <button className="primary-bg  text-white p-3 rounded-pill fit-btn-big btn primary-bg my-3">
            Register Now
          </button>
        </div>
      </section>
      <section id="homepage-four">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="orange-cube my-5"></div>
              <h4 className="text-black my-3">The Exclusive Brand</h4>

              <small>
                Use the language you already love to prototype ideas quickly,
                develop production-ready communications applications, and run
                serverless applications on one API-powered platform.
              </small>
              <br />

              <small>
                Quickly build solutions like programmable messages, 2FA,
                appointment reminders, and more with the help of clear
                documentation and tutorials.
              </small>
              <br />

              <br />
              <small>
                Use the language you already love to prototype ideas quickly,
                develop production-ready communications applications,
              </small>
              <button className="rounded-pill d-flex justify-content-center align-items-center p-1 my-5 primary-bg text-white btn fit-btn-big">
                Register Now
              </button>
            </div>
            <div className="col-12 col-md-6">
              <video width="100%" height="100%" controls>
                <source src={sample_960540} type="video/mp4" />
                <source src={sample_960540} type="video/ogg" />
                {/* <source src="movie.ogg" type="video/ogg" /> */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      <section id="homepage-six" className="p-4">
        <div className="container">
          <div className="text-center">
            <h4>
              Build communications apps easily <br /> on a developer-trusted
              platform.
            </h4>
          </div>
          <div className="d-flex w-100 flex-wrap justify-content-center p-4">
            <div className="hompage-six-card m-2">
              <div className="grey-part">
                <span>JS Apps</span>
              </div>
              <div className="color-part">
                <div className="color-part-float">
                  <div className="x-small-icon-badge bg-dark">
                    <FontAwesomeIcon icon={faNodeJs} size="lg" color="white" />
                  </div>
                </div>
                <span>Javascript Master Clock</span>
                <div className="six-rod"></div>
                <span>Javascript </span>
              </div>
            </div>
            <div className="hompage-six-card m-2">
              <div className="grey-part">
                <span>JS Apps</span>
              </div>
              <div className="color-part green-bg">
                <div className="color-part-float">
                  <div className="x-small-icon-badge bg-dark">
                    <FontAwesomeIcon icon={faNodeJs} size="lg" color="white" />
                  </div>
                </div>
                <span>Javascript Master Clock</span>
                <div className="six-rod"></div>
                <span>Javascript </span>
              </div>
            </div>
            <div className="hompage-six-card m-2">
              <div className="grey-part">
                <span>JS Apps</span>
              </div>
              <div className="color-part yellow-bg">
                <div className="color-part-float">
                  <div className="x-small-icon-badge bg-dark">
                    <FontAwesomeIcon icon={faNodeJs} size="lg" color="white" />
                  </div>
                </div>
                <span>Javascript Master Clock</span>
                <div className="six-rod"></div>
                <span>Javascript </span>
              </div>
            </div>
            <div className="hompage-six-card m-2">
              <div className="grey-part">
                <span>JS Apps</span>
              </div>
              <div className="color-part light-green-bg">
                <div className="color-part-float">
                  <div className="x-small-icon-badge bg-dark">
                    <FontAwesomeIcon icon={faNodeJs} size="lg" color="white" />
                  </div>
                </div>
                <span>Javascript Master Clock</span>
                <div className="six-rod"></div>
                <span>Javascript </span>
              </div>
            </div>
            <div className="hompage-six-card m-2">
              <div className="grey-part">
                <span>JS Apps</span>
              </div>
              <div className="color-part cloud-bg">
                <div className="color-part-float">
                  <div className="x-small-icon-badge bg-dark">
                    <FontAwesomeIcon icon={faNodeJs} size="lg" color="white" />
                  </div>
                </div>
                <span>Javascript Master Clock</span>
                <div className="six-rod"></div>
                <span>Javascript </span>
              </div>
            </div>
            <div className="hompage-six-card m-2">
              <div className="grey-part">
                <span>JS Apps</span>
              </div>
              <div className="color-part">
                <div className="color-part-float">
                  <div className="x-small-icon-badge bg-dark">
                    <FontAwesomeIcon icon={faNodeJs} size="lg" color="white" />
                  </div>
                </div>
                <span>Javascript Master Clock</span>
                <div className="six-rod"></div>
                <span>Javascript </span>
              </div>
            </div>
            <div className="hompage-six-card m-2">
              <div className="grey-part">
                <span>JS Apps</span>
              </div>
              <div className="color-part green-bg">
                <div className="color-part-float">
                  <div className="x-small-icon-badge bg-dark">
                    <FontAwesomeIcon icon={faNodeJs} size="lg" color="white" />
                  </div>
                </div>
                <span>Javascript Master Clock</span>
                <div className="six-rod"></div>
                <span>Javascript </span>
              </div>
            </div>
            <div className="hompage-six-card m-2">
              <div className="grey-part">
                <span>JS Apps</span>
              </div>
              <div className="color-part yellow-bg">
                <div className="color-part-float">
                  <div className="x-small-icon-badge bg-dark">
                    <FontAwesomeIcon icon={faNodeJs} size="lg" color="white" />
                  </div>
                </div>
                <span>Javascript Master Clock</span>
                <div className="six-rod"></div>
                <span>Javascript </span>
              </div>
            </div>
            <div className="hompage-six-card m-2">
              <div className="grey-part">
                <span>JS Apps</span>
              </div>
              <div className="color-part light-green-bg">
                <div className="color-part-float">
                  <div className="x-small-icon-badge bg-dark">
                    <FontAwesomeIcon icon={faNodeJs} size="lg" color="white" />
                  </div>
                </div>
                <span>Javascript Master Clock</span>
                <div className="six-rod"></div>
                <span>Javascript </span>
              </div>
            </div>
            <div className="hompage-six-card m-2">
              <div className="grey-part">
                <span>JS Apps</span>
              </div>
              <div className="color-part cloud-bg">
                <div className="color-part-float">
                  <div className="x-small-icon-badge bg-dark">
                    <FontAwesomeIcon icon={faNodeJs} size="lg" color="white" />
                  </div>
                </div>
                <span>Javascript Master Clock</span>
                <div className="six-rod"></div>
                <span>Javascript </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faqs" className="container py-5">
        <h1 className="text-center">FAQ'S</h1>
        {faqs.map((i) => (
          <div className="d-flex justify-content-between align-items-center border-bottom p-3 py-5">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, modi?
            </span>
            <span>&rarr;</span>
          </div>
        ))}
      </section>
      <section id="homepage-eight" className="bg-light">
        <div className="container py-5">
          <div className="text-center ">
            <div className="d-flex justify-content-center">
              <div className="orange-cube my-4"></div>
            </div>
            <h4 className="mb-5">Explore Our Best Options</h4>
          </div>
          <div className="d-flex justify-content-around align-items-center flex-wrap">
            <div className="homepage-eight-card bg-white py-3">
              <div className="x-small-icon-badge bg-success mx-auto mb-3">
                <FontAwesomeIcon icon={faClock} color="white" size="lg" />
              </div>
              <h4 className="text-center">Duration</h4>
              <p className="text-center">3 Months</p>
            </div>
            <div className="homepage-eight-card bg-white py-3">
              <div className="x-small-icon-badge bg-success mx-auto mb-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  color="white"
                  size="lg"
                />
              </div>
              <h4 className="text-center">Location</h4>
              <p className="text-center">
                No 180, Moyosore House, Onipanu, Lagos
              </p>
            </div>
            <div className="homepage-eight-card  py-3 primary-bg">
              <div className="x-small-icon-badge bg-white mx-auto mb-3">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="primary-text"
                  size="lg"
                />
              </div>
              <h4 className="text-center text-white">Starting Date</h4>
              <p className="text-center text-white">July 24th, 2021</p>
            </div>
            <div className="homepage-eight-card bg-white py-3">
              <div className="x-small-icon-badge bg-success mx-auto mb-3">
                <FontAwesomeIcon
                  icon={faMoneyBillAlt}
                  color="white"
                  size="lg"
                />
              </div>
              <h4 className="text-center">Amount</h4>
              <p className="text-center">N100,000</p>
            </div>
          </div>
        </div>
      </section>
      <section id="homepage-nine" className="container">
        <div className="row my-5">
          <div className="col-12 col-md-6">
            <h4>Grow your engineering team with global talent today.</h4>
            <p>
              Tell us what you are looking for, we’ll take care of the rest.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center">
              <button className="primary-bg btn text-white">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="homepage-ten" className="py-5 ">
        <h3 className="text-center text-white">
          We can’t wait to have you join our bootcamp
        </h3>
      </section>
      <footer id="footer" className="container position-relative ">
        <div className="float-logo">
          <img src={FullLogo} alt="" />
        </div>
        <div className="row align-items-start my-4">
          <div className="col-12 col-md-4">
            <p className="my-3">
              We are on a mission to train 50,000 experience software developer
              for the next generation of workforce.
            </p>
            <h6 className="my-3">Subscribe to our newsletter</h6>
            <div className="input text-white">
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-transparent border-0"
              />
              <div className="bg-DB6262 rounded w-100 h-100 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faPaperPlane} color="white" size="lg" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h6 className="my-4">
              <strong>CONTACT</strong>
            </h6>
            <p className="my-3">
              <FontAwesomeIcon icon={faEnvelope} /> &nbsp;fitcodeinstitute.com
            </p>
            <p className="my-3">
              <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp; 0706-857-6214
            </p>
            <p className="my-3">
              <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp; 0706-857-6214
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h6 className="my-4">
              <strong>SOCIAL MEDIA</strong>
            </h6>
            <p className="my-3">
              <FontAwesomeIcon icon={faFacebookF} /> &nbsp; Facebook
            </p>
            <p className="my-3">
              <FontAwesomeIcon icon={faTwitter} /> &nbsp; Twitter
            </p>
            <p className="my-3">
              <FontAwesomeIcon icon={faInstagram} />
              &nbsp; Instagram
            </p>
          </div>
        </div>
        <p className="text-center my-4">
          FULL STACK DEVELOPER | SOFTWARE ENGINEER | FRONT-END DEVELOPER |
          BACK-END DEVELOPER | UI/UX DESINGER
        </p>
        <p className="text-center my-4">COPYRIGHT © 2021 FITCODEINSTITUTE</p>
        <p className="text-center my-4">ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
