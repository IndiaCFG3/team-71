import React,{ useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
// import auth from "../Reducers/auth";

const DashBoard = ({user,isAuthenticated}) => {

  return(
    <div class="page-content">

    <div class="page-title-large color-white bottom-30">
        <h1 data-username="">Good Evening {user.name}</h1>
        <a href="#" data-menu="menu-main" class="shadow-huge scale-box bg-fade-gray2-dark" id="UserProfileImage"></a>
    </div>
    <div data-height="210" class="page-title-bg preload-image" data-src="images/pictures/20s.jpg"></div>
    <div data-height="210" class="page-title-bg dark-mode-tint"></div>
    <div data-height="210" class="page-title-bg opacity-90 bg-highlight"></div>

    <div class="single-slider slider-full owl-no-dots owl-carousel">
        <div class="caption bottom-0 round-medium shadow-large" data-height="350">
            <div class="caption-bottom bottom-0 center-text">
                <h2 class="bolder font-28"></h2>
                <p class="color-theme boxed-text-huge opacity-30">
                  <br/>
                </p>
            </div>
            <div class="caption-bg owl-lazy" data-src="images/pictures/33.jpg"></div>
        </div>
        <div class="caption bottom-0 round-medium shadow-large" data-height="350">
            <div class="caption-bottom bottom-0 center-text">
                <h1 class="bolder font-24"></h1>
                <p class="color-theme boxed-text-huge opacity-30">
                </p>
            </div>
            <div class="caption-bg owl-lazy" data-src="images/pictures/slide2.png"></div>
        </div>
        <div class="caption bottom-0 round-medium shadow-large" data-height="350">
            <div class="caption-bottom bottom-0 center-text">
                <h1 class="bolder font-24"></h1>
                <p class="color-theme boxed-text-huge opacity-30">
                </p>
            </div>
            <div class="caption-bg owl-lazy" data-src="images/pictures/slide.png"></div>
        </div>
    </div>

    <div class="content right-10 left-10">
        <div>
          <Link to="/our-associates" className="top-30 button button-m round-small button-full shadow-small bg-highlight bottom-40" >Our Associates</Link>
            {/* <a href="#" data-menu="menu-share" class="top-30 button button-m round-small button-full shadow-small bg-highlight bottom-40">Our Associates</a> */}
        </div>
        <div>
            <Link to="our-schools" className="top-30 button button-m round-small button-full shadow-small button-border color-highlight border-highlight bottom-40">Our Schools</Link>
        </div>
        <div>
        <Link to="/my-school" className="top-30 button button-m round-small button-full shadow-small bg-highlight bottom-40" >My Associated School</Link>
        </div>
        <div>
            <Link to="/register-team" class="top-30 button button-m round-small button-full shadow-small button-border color-highlight border-highlight bottom-40">My Student Teams</Link>
        </div>
        <div>
            <Link to="/sts" class="top-30 button button-m round-small button-full shadow-small bg-highlight bottom-40">Add Student Teacher</Link>
        </div>
        <div>
            {/* <a href="#" data-menu="menu-share" class="top-30 button button-m round-small button-full shadow-small bg-highlight bottom-40">Student Teachers</a> */}
        </div>
    </div>
    <br />

    <div class="content bottom-10">
        <h5 class="float-left font-500">Latest News</h5>
        <a href="news.html" class="float-right opacity-70">View All</a>
        <div class="clear"></div>
    </div>
    <div class="single-slider owl-carousel owl-no-dots" id="Dashboard_Blogs_Slider">
      <div data-instant-id="instant-1" class="content-boxed content-boxed-full shadow-small" id="Dashboard_Blogs_Slider_1">
          <div class="caption bottom-15" data-height="210">
              <div class="caption-bottom bottom-10 left-20">
                  <h1 class="color-white bottom-0" id="Dashboard_Blogs_Slider_1_Title">News Title</h1>
                  <div class="opacity-50 bottom-10">
                      <span class="color-white"><i class="fa fa-calendar font-10 right-10"></i></span>
                      <span class="color-white" id="Dashboard_Blogs_Slider_1_Time">{'16-08-2020'}</span>
                      <span class="color-white left-15"><i class="fa fa-bookmark font-10 right-10"></i>By : </span>
                      <span class="color-white" id="Dashboard_Blogs_Slider_1_Author">{'Author'}</span>
                  </div>
              </div>
              <div class="caption-overlay bg-gradient"></div>
              <div class="caption-bg" id="Dashboard_Blogs_Slider_1_Image" style={{backgroundImage:'url(/images/covid/india.png)'}}></div>
          </div>
          <div class="content bottom-0">
            <a href="blog.html" class="button button-xs button-full button-circle shadow-small border-green1-dark bg-highlight bottom-15" id="Dashboard_Blogs_Slider_1_URL">
              Read News
            </a>
          </div>
      </div>
      <div data-instant-id="instant-1" class="content-boxed content-boxed-full shadow-small" id="Dashboard_Blogs_Slider_2">
          <div class="caption bottom-15" data-height="210">
              <div class="caption-bottom bottom-10 left-20">
                  <h1 class="color-white bottom-0" id="Dashboard_Blogs_Slider_2_Title">News Title</h1>
                  <div class="opacity-50 bottom-10">
                      <span class="color-white"><i class="fa fa-calendar font-10 right-10"></i></span>
                      <span class="color-white" id="Dashboard_Blogs_Slider_2_Time">16-8-2020</span>
                      <span class="color-white left-15"><i class="fa fa-bookmark font-10 right-10"></i>By : </span>
                      <span class="color-white" id="Dashboard_Blogs_Slider_2_Author">{'Author'}</span>
                  </div>
              </div>
              <div class="caption-overlay bg-gradient"></div>
              <div class="caption-bg" id="Dashboard_Blogs_Slider_2_Image" style={{backgroundImage:'url(images/covid/india.png)'}}></div>
          </div>
          <div class="content bottom-0">
            <a href="blog.html" class="button button-xs button-full button-circle shadow-small border-green1-dark bg-highlight bottom-15" id="Dashboard_Blogs_Slider_2_URL">
              Read News
            </a>
          </div>
      </div>
      <div data-instant-id="instant-1" class="content-boxed content-boxed-full shadow-small" id="Dashboard_Blogs_Slider_3">
          <div class="caption bottom-15" data-height="210">
              <div class="caption-bottom bottom-10 left-20">
                  <h1 class="color-white bottom-0" id="Dashboard_Blogs_Slider_3_Title">News Title</h1>
                  <div class="opacity-50 bottom-10">
                      <span class="color-white"><i class="fa fa-calendar font-10 right-10"></i></span>
                      <span class="color-white" id="Dashboard_Blogs_Slider_3_Time">16-08-2020</span>
                      <span class="color-white left-15"><i class="fa fa-bookmark font-10 right-10"></i>By : </span>
                      <span class="color-white" id="Dashboard_Blogs_Slider_3_Author">{'Author'}</span>
                  </div>
              </div>
              <div class="caption-overlay bg-gradient"></div>
              <div class="caption-bg" id="Dashboard_Blogs_Slider_3_Image" style={{backgroundImage:'url(images/covid/india.png)'}}></div>
          </div>
          <div class="content bottom-0">
            <a href="blog.html" class="button button-xs button-full button-circle shadow-small border-green1-dark bg-highlight bottom-15" id="Dashboard_Blogs_Slider_3_URL">
              Read News
            </a>
          </div>
      </div>
    </div>



    <div data-height="410" class="content-bg round-none bottom-20 dark-mode-tint"></div>
    <div data-height="410" class="content-bg round-none bottom-20 opacity-75 bg-highlight"></div>





    <div class="content right-20 left-20">
        <a href="#" data-menu="menu-covid" class="top-30 button button-m round-small button-full shadow-small bg-red2-light bottom-40">
            <span>Know More</span>
        </a>
    </div>
    <div class="clear"></div>

    <div data-height="130" class="caption caption-margins round-small shadow-small">
        <div class="caption-center content">
            <h4 class="bottom-5 color-white">Did you know?</h4>
            <p class="bottom-0 color-white opacity-80">
                Adolf Hitler, the German dictator gifted Maharaja Bhupinder Singh a Maybach. There were only six cars of this type ever made.
            </p>
        </div>
        <div class="caption-overlay bg-gradient-highlight opacity-90"></div>
        <div class="caption-bg owl-lazy" data-src="images/pictures/20.jpg"></div>
    </div>

    {/* <!-- Button : Know Yor City
    <div class="content right-20 left-20">
      <a href="#" data-menu="menu-share" class="top-20 button button-3d button-m button-full button-circle shadow-small border-green1-dark bg-green1-light bottom-30">Know Your City</a>
    </div>--> */}

    <div class="content bottom-10">
        <h5 class="float-left font-500">Latest Blogs</h5>
        <a href="blogs.html" class="float-right opacity-70">View All</a>
        <div class="clear"></div>
    </div>
    <div class="single-slider owl-carousel owl-no-dots" id="Dashboard_Blogs_Slider">
      <div data-instant-id="instant-1" class="content-boxed content-boxed-full shadow-small" id="Dashboard_Blogs_Slider_1">
          <div class="caption bottom-15" data-height="210">
              <div class="caption-bottom bottom-10 left-20">
                  <h1 class="color-white bottom-0" id="Dashboard_Blogs_Slider_1_Title">{"Blog Title"}</h1>
                  <div class="opacity-50 bottom-10">
                      <span class="color-white"><i class="fa fa-calendar font-10 right-10"></i></span>
                      <span class="color-white" id="Dashboard_Blogs_Slider_1_Time">16-08-2020</span>
                      <span class="color-white left-15"><i class="fa fa-bookmark font-10 right-10"></i>By : </span>
                      <span class="color-white" id="Dashboard_Blogs_Slider_1_Author">{'Author'}</span>
                  </div>
              </div>
              <div class="caption-overlay bg-gradient"></div>
              <div class="caption-bg" id="Dashboard_Blogs_Slider_1_Image" style={{backgroundImage:'url(/images/covid/india.png)'}}></div>
          </div>
          <div class="content bottom-0">
            <a href="blog.html" class="button button-xs button-full button-circle shadow-small border-green1-dark bg-highlight bottom-15" id="Dashboard_Blogs_Slider_1_URL">
              Read Blog
            </a>
          </div>
      </div>
      <div data-instant-id="instant-1" class="content-boxed content-boxed-full shadow-small" id="Dashboard_Blogs_Slider_2">
          <div class="caption bottom-15" data-height="210">
              <div class="caption-bottom bottom-10 left-20">
                  <h1 class="color-white bottom-0" id="Dashboard_Blogs_Slider_2_Title">{"Blog Title"}</h1>
                  <div class="opacity-50 bottom-10">
                      <span class="color-white"><i class="fa fa-calendar font-10 right-10"></i></span>
                      <span class="color-white" id="Dashboard_Blogs_Slider_2_Time">16-08-2020</span>
                      <span class="color-white left-15"><i class="fa fa-bookmark font-10 right-10"></i>By : </span>
                      <span class="color-white" id="Dashboard_Blogs_Slider_2_Author">{'Author'}</span>
                  </div>
              </div>
              <div class="caption-overlay bg-gradient"></div>
              <div class="caption-bg" id="Dashboard_Blogs_Slider_2_Image" style={{backgroundImage:'url(/images/covid/india.png)'}}></div>
          </div>
          <div class="content bottom-0">
            <a href="blog.html" class="button button-xs button-full button-circle shadow-small border-green1-dark bg-highlight bottom-15" id="Dashboard_Blogs_Slider_2_URL">
              Read Blog
            </a>
          </div>
      </div>
      <div data-instant-id="instant-1" class="content-boxed content-boxed-full shadow-small" id="Dashboard_Blogs_Slider_3">
          <div class="caption bottom-15" data-height="210">
              <div class="caption-bottom bottom-10 left-20">
                  <h1 class="color-white bottom-0" id="Dashboard_Blogs_Slider_3_Title">{"Blog Title"}</h1>
                  <div class="opacity-50 bottom-10">
                      <span class="color-white"><i class="fa fa-calendar font-10 right-10"></i></span>
                      <span class="color-white" id="Dashboard_Blogs_Slider_3_Time">16-08-2020</span>
                      <span class="color-white left-15"><i class="fa fa-bookmark font-10 right-10"></i>By : </span>
                      <span class="color-white" id="Dashboard_Blogs_Slider_3_Author">{'Author'}</span>
                  </div>
              </div>
              <div class="caption-overlay bg-gradient"></div>
              <div class="caption-bg" id="Dashboard_Blogs_Slider_3_Image" style={{backgroundImage:'url(/images/covid/india.png)'}}></div>
          </div>
          <div class="content bottom-0">
            <a href="blog.html" class="button button-xs button-full button-circle shadow-small border-green1-dark bg-highlight bottom-15" id="Dashboard_Blogs_Slider_3_URL">
              Read Blog
            </a>
          </div>
      </div>
    </div>




{/* <div id="menu-main"
     class="menu menu-box-right menu-box-detached round-medium"
     data-menu-active="nav-welcome"
     data-menu-width="260" data-menu-effect="menu-over" data-menu-load="menu-main.html">
</div>

<div id="menu-share"
     class="menu menu-box-bottom menu-box-detached round-medium"
     data-menu-height="400" data-menu-effect="menu-over" data-menu-load="menu-share.html">
</div>

<div id="menu-highlights"
     class="menu menu-box-bottom menu-box-detached round-medium"
     data-menu-height="480" data-menu-effect="menu-over" data-menu-load="menu-colors.html">
</div> */}




<div class="menu-hider"></div>
</div>
    )
}


  const mapStateToProps = (state) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,

  });

  export default connect(mapStateToProps)(DashBoard);
