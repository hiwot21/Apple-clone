import React from 'react'
import Card from "../../images/icons/logo-card-small.png";
import Women from "../../images/icons/logo-woman-medium.png";
import Tv from "../../images/icons/tv-small.png";
import One from "../../images/icons/one-small.png";
import Watch from "../../images/icons/logo-watch-medium.png";
import Fitness from "../../images/icons/fitness-medium.png";
import News from '../AppleNews/News';
import Youtube from '../Youtube/Youtube';

function Main() {
    return (
      <div>
        <section class="covid-19">
          <div class="">
            <div class="col-sm-12 col-lg-12">
              <span class="evaluate-link-wapper">
                <a href="https://covid19.apple.com/screening/">
                  Evaluate-COVID-19 symptoms and understand next steps
                </a>
              </span>
            </div>
          </div>
        </section>
        <section>
          <div class="upper-text">
            <div class="container">
              <div class="text-center">
                <span>
                  {" "}
                  <a href="https://www.apple.com/shop" class="text">
                    Shop online
                  </a>{" "}
                  and get Specialist help, free no-contact delivery, and more.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="main-highlight-wrapper">
          <div className="container">
            <div className="col-sm-12">
              <div className="main-title-wrapper bold">iphone 12</div>
              <div className="title-wrapper black">Blast past fast</div>

              <div className="price-wrapper">
                From $29.12/mo. for 24 mo. <br /> or $699 before trade-in.
                <sup>1</sup>
              </div>
              <div className="description-wrapper gg">
                Buy directly from Apple <br /> with special carrier offers.
              </div>
              <div className="links-wrapper">
                <ul className="">
                  <li>
                    <a href="#">Learn more</a>
                  </li>
                  <li>
                    <a href="#">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="first-highlight-wrapper">
          <div className="container-fluid">
            <div className="col-sm-12 col-lg-12">
              <div className="main-title-wrapper white">iphone 12 Pro</div>
              <div className="title-wrapper white">It's a leep year.</div>

              <div className="price-wrapper">
                From $41.62/mo. for 24 mo. <br /> or $999 before trade-in.{" "}
                <sup>2</sup>
              </div>

              <div className="description-wrapper gg">
                Buy directly from Apple <br /> with special carrier offers.
              </div>

              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="#">Learn more</a>
                  </li>
                  <li>
                    <a href="#">Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="second-heghlight-wrapper">
          <div className="container-fluid">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">
                <img src={Card} />
              </div>
            </div>
            <div className="description-wraper white">
              Save 6% on Apple products with a new <br /> Apple Card-all March
              long. <sup>*</sup>
            </div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
            <div className="terms">
              <div>
                <sup>*</sup> Exclusions and terms apply.<sup>3</sup>
              </div>
            </div>
          </div>
        </section>

        <section className="third-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="ipad-air">
                    <h3>Powerful.Colorful.Wonderful</h3>
                  </div>

                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="#">Learn more</a>
                      </li>
                      <li>
                        <a href="#">Buy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={Watch} />
                    </div>
                  </div>
                  <div className="description-wrapper">
                    The future of health is on your wrist.
                  </div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <a href="">Learn more</a>
                      </li>
                      <li>
                        <a href="">Buy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fourth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="main-title-wrapper white">MacBook Air</div>
                <div className="title-wrapper white">Power.lt's in the Air</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={Fitness} />
                    </div>
                  </div>
                  <div className="title-wrapper fitness">
                    A new fitness experience <br /> for everyone.Powered <br />{" "}
                    by Apple Watch.
                  </div>
                  <div className="links-wrapper-blue">
                    <ul>
                      <li>
                        <a href="">Learn more</a>
                      </li>
                      <li>
                        <a href="">
                          Try it free<sup>4</sup>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fifth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={One} />
                    </div>
                  </div>
                  <div className="description-wraper green">
                    Bundle up to six Apple Services .<br />
                    And enjoy more for less.
                  </div>
                  <div className="links-wrapper-blue">
                    <ul>
                      <li>
                        <a href="">Learn more</a>
                      </li>
                      <li>
                        <a href="">
                          Try it free<sup>5</sup>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                  <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                      <img src={Tv} />
                    </div>
                    <img src={Women} />
                  </div>
                  <div className="tvshow-logo-wraper">
                    <div className="descripition-wrapper">
                      With Amanda Gorman
                    </div>
                    <div className="watch-more-wrapper">
                      <a href="#">Watch now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <News /> */}
        <Youtube />        
      </div>
    );
}

export default Main;
