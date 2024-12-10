import React from "react";

import imagePortfolio from "./images/portfolio.png";
import signature from "./images/signatureWhite.png"
import works from "./images/works.png"
import matrushka from "./images/matrushka.png"
import pfp from "./images/pfp.jpg"
import { Link } from "react-router-dom";
import linked from "./images/linked.png"

import CVpage from "./CV.jsx"

const SectionOne = ({ Marquee }) => {
  return (
    
    <div>
      <div class="modal" tabIndex="1000">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      <div className="container mt-4 p-5 pb-0">
        <div className="row gap-3">
          <div className="col boxShadow boxBg rounded-5 d-flex align-items-stretch">
            <div className="row p-5 w-100 ">
                <div className="col-lg cntr">
                  <img
                    src={pfp}
                    // src={matrushka}
                    alt=""
                    className="imgPfp h-100"
                    style={{
                      borderTopLeftRadius: "3rem",
                      borderBottomRightRadius: "3rem",
                      width:"100%"
                    }}
                  />
                </div>
                <div className="col-lg">
                  <h3 className="mini-text mt-5">Full-Stack Web Developer</h3>
                  <h1 className="text-light">Emir Kesimoğlu</h1>
                  <p className="fontColorum">
                    Privet! Im a front-end and back-end Developer...
                  </p>
                  <div className="w-100 d-flex justify-content-end align-items-center">
                    <span
                      className="pe-3 fontColorum dahafaz"
                   
                    >
                      Daha Fazlasını Öğrenin!
                    </span>
                    <a
                      href="https://www.google.com"
                      style={{ borderRadius: "100000rem" }}
                    >
                      <i className="fa-solid fa-circle-chevron-right iconum" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg d-flex flex-column gap-3">
              <div className="boxBg rounded-5 p-3 px-0 mb-3">
                <Marquee pauseOnHover={true} speed={80}>
                  <span className="text-light ">
                    &nbsp;Full Stack Developer - Разработчик Полного Стека - Tam
                    Yığın Geliştirici - Software Developer -
                  </span>
                </Marquee>
              </div>
              <div className="row flex-grow-1">
                <div className="col-6 width100">
                  <div className="boxBg cntr d-flex align-content-center flex-wrap rounded-5 p-4 h-100">
                    <div>
                    <img src={signature} className="w-100 mt-4 mb-5" alt="" />

                    </div>
                    <div>
                    <div className="w-100 d-flex  justify-content-between align-items-center gap-5 ">
                      <div>
                        <div
                          className="pe-3 text-start mt-2 fontColorum"
                        >
                          MORE ABOUT ME!
                        </div>
                        <h2 style={{ color: "#e5e4e2" }}>About Me</h2>
                      </div>
                      <div>
                      <a
                        href="https://www.google.com"
                        style={{ borderRadius: "100000rem" }} className="iconumSag"
                      >
                        <i className="fa-solid fa-circle-chevron-right iconum " />
                      </a>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 h-100 width100">
                  <div>
                    <div className="boxBg rounded-5 p-4 h-100 cntr">
                      <img src={works} className="w-100" alt="" />
                    <div className="w-100 d-flex justify-content-between align-items-center gap-5">
                      <div>
                        <div
                          className="pe-3 text-start cntr mt-2 fontColorum"
                        >
                          See My Agency
                          </div>
                        <h2 style={{ color: "#e5e4e2" }}>Agency</h2>
                      </div>
                      <a
                        href="https://www.emirkesimoglu.net.tr"
                        style={{ borderRadius: "100000rem" }}
                        target="_blank"
                      >
                        <i className="fa-solid fa-circle-chevron-right iconum" />
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="container p-5 pb-0">
            <div className="row cert">
            <div className="col-lg-3 width100">
              <div className="boxBg rounded-5 p-4 px-4">
              <div className="text-center">
                  <img src={imagePortfolio} className="w-75  rounded-5 mb-3" alt=""/>
                </div>
                <div className="w-100  d-flex justify-content-between  align-items-center gap-5">
                        <div>
                          <div className="twoRowText">
                          <p className="fontColorum">See My Certificates</p>
                <h2 style={{ color: "#e5e4e2" }}>Certificates</h2>
                          </div>
                        </div>
                          <Link className="" to="/sertifika">
                            <i className="fa-solid fa-circle-chevron-right iconum" />
                          </Link>
                      </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex width100">
              <div className="boxBg rounded-5 p-3 px-4 w-100">
                <div className="row d-flex justify-content-center align-items-center w-100 mt-5 text-center" style={{gap:"-100px"}}>
                  <div className="col">
                  <i className="fa-brands fa-js text-light skills display-5" /> 
                  </div>
                  <div className="col">
                  <i className="fa-brands fa-react skills  text-light display-5" /> 
                  </div> 
                  <div className="col">
                  <i className="fa-brands fa-node skills text-light display-5" /> 
                  </div> 
                  <div className="col">
                  <i className="fa-brands fa-php skills text-light display-5" /> 
                  </div>  
                </div>
                <div className="w-100 hyoket mt-5 d-flex justify-content-between align-items-center gap-5">
                        <div>
                          <div className="twoRowText">
                          <p className="fontColorum">Languages, frameworks, tools...</p>
                <h2 style={{ color: "#e5e4e2" }}>Skills</h2>
                          </div>
                        </div>
                        <a
                          href="https://github.com/emxis" target="_blank"
                          style={{ borderRadius: "100000rem" }}
                        >
                          <i className="fa-solid fa-circle-chevron-right iconum" />
                        </a>
                      </div>
              </div>
            </div>
            <div className="col-lg-3 width100">
              <div className="boxBg rounded-5 p-3 px-4">
              <div className="row d-flex mb-2 justify-content-center align-items-center w-100 mt-5 text-center" style={{gap:"-100px"}}>
                  <div className="col">
                    <a href="https://www.linkedin.com/in/emirkesimoglu/" target="_blank">
                    <i className="fa-brands fa-linkedin-in iconContact p-4 text-light fs-2" id="linkUrl" style={{borderRadius:"1000rem"}} /> 
                    </a>
                  </div>
                  <div className="col">
                    <a href="https://www.youtube.com/@emxis666" target="_blank">
                    <i className="fa-brands fa-youtube iconContact p-4 text-light fs-2" id="linkUrl" style={{borderRadius:"1000rem"}} /> 

                    </a>
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-between align-items-center gap-5 ">
                        <div>
                          <div className="twoRowText">
                          <p className="fontColorum">LinkedIn and Youtube</p>
                <h2 style={{ color: "#e5e4e2" }}>Accounts</h2>
                          </div>
                        </div>
                        <a
                          href="https://www.linkedin.com/in/emirkesimoglu/"
                          style={{ borderRadius: "100000rem" }}
                        >
                          <i className="fa-solid fa-circle-chevron-right iconum" />
                        </a>
                      </div>
              </div>
            </div>
            </div>
          </div>
          <div className="container p-5">
            <div className="row">
                <div className="col-lg-6 width100">
                    <div className="boxBg rounded-5 p-4 px-5">
                        <div className="row gap-0">
                            <div className="col-lg-4 py-5 countCards p-4 text-center rounded-5 shadow-lg" style={{backgroundColor:"rgb(25, 25, 24)",marginLeft:"1.5rem"}}>
                                <h2 className="text-light fs-2">EXP.</h2>
                                <p className="fontColorum">IT Experience</p>
                                <a href="https://www.linkedin.com/in/emirkesimoglu/" target="_blank" className="text-decoration-none btn btn-outline-success ">LinkedIn</a>

                            </div>
                            <div className="col-lg-4 countCards z-1 py-5 p-4 text-center rounded-5 shadow-lg" style={{backgroundColor:"rgb(25, 25, 24)"}}>
                                <h2 className="text-light fs-2">1-2Y</h2>
                                <p className="fontColorum">1-2 Years of Coding</p>
                                <a href="https://github.com/emxis" target="_blank" className="text-decoration-none btn btn-outline-success">Github</a>

                            </div>
                            <div className="col-lg-4 py-5 p-4 z-2 countCards text-center rounded-5 shadow-lg" style={{backgroundColor:"rgb(25, 25, 24)"}}>
                                <h2 className="text-light fs-2">IT</h2>
                                <p className="fontColorum">Referance Hasan Tavşan(IT)</p>
                                <a href="https://wa.me/905079207407" target="_blank" className="text-decoration-none btn btn-outline-success">WhatsApp</a>
                                
                            </div>
                        </div>
                        <div className="w-100 d-flex justify-content-between align-items-center gap-5 mt-3 ">
                        <div>
                          <div className="twoRowText">
                          <p className="fontColorum">Referance, Github and Experience </p>
                <h2 style={{ color: "#e5e4e2" }}>Referance</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-6 position-relative mt3">
                          <div className="position-absolute top-0 start-0">
                            <img src={matrushka} alt="" style={{rotate:"180deg", width:"18%", marginLeft:"3.5rem"}}/>
                          </div>
                    <div className="boxBg  rounded-5 p-4 px-5 pb-5 d-flex align-items-end h-100 w-100 " id="pad">
                      <div className="row w-100">
                        <div className="col-8 position-relative">
                          <p className="fontColorum enough">You Know Me Well Enough!</p>
                          <h2 className="h1 text-light">Let's <br /> Connect To <span style={{color:"#0a3774"}}>Me!</span></h2>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-end ">
                          <a
                            href="https://wa.me/905528389852" target="_blank"
                            style={{ borderRadius: "100000rem" }}
                          >
                            <i className="fa-solid fa-circle-chevron-right iconum " />
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="container p-5">
            <div className="boxBg p-5 rounded-5" id="expBox">
            <div className="w-100 d-flex justify-content-between align-items-center gap-5 " id="expBoxDiv">
                        <div>
                          <div className="twoRowText">
                          <p className="fontColorum">See My It Experience!</p>
                <h2 style={{ color: "#e5e4e2" }} className="mb-4">Experience</h2>
                          </div>
                        </div>
                       <div className="d-flex justify-content-end  align-items-center gap-4 w-100 " id="expBoxDiv2">
                       <p className="fontColorum mt-3">See My LinkedIn Profile!</p>
                        
                       <a
                          href="https://www.linkedin.com/in/emirkesimoglu/"
                          style={{ borderRadius: "100000rem" }}
                        >
                          <i className="fa-solid fa-circle-chevron-right iconum" />
                        </a>
                       </div>
                      </div>
            <img src={linked} alt=""  className="w-100 rounded-4 exp"/>
            <p className="fontColorum mt-2">// The Koc School IT <a href="#" className="text-decoration-none">LinkedIn</a> </p>
            </div>
          </div>
      </div>
    );
  };

  export default SectionOne;
