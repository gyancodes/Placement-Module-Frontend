import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style/profile.css";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">About Me</h3>
                <h6 className="dark-color lead">I'm {currentUser.username}</h6>
                {/* <h6 class="theme-color lead">A Lead UX &amp; UI designer</h6>
                <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p> */}
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>Id:</label>
                      <p>{currentUser.id}</p>
                    </div>
                    <div className="media">
                      <label>Age</label>
                      <p>20 Yr</p>
                    </div>
                    <div className="media">
                      <label>E-mail</label>
                      <p>{currentUser.email}</p>
                    </div>
                    <div className="media">
                      <label>Phone</label>
                      <p>820-885-3321</p>
                    </div>
                    {/* <div class="media">
                                        <label>Residence</label>
                                        <p>Canada</p>
                                    </div>
                                    <div class="media">
                                        <label>Address</label>
                                        <p>California, USA</p>
                                    </div> */}
                  </div>
                  <div className="col-md-6">
                    {/* <div className="media">
                      <label>Token:</label>
                      <p>
                        {currentUser.accessToken.substring(0, 10)} ...{" "}
                        {currentUser.accessToken.substr(
                          currentUser.accessToken.length - 10
                        )}
                      </p>
                    </div> */}
                    {/* <div className="media">
                      <label>Authorities:</label>
                      <p>
                        {" "}
                        <ul>
                          {currentUser.roles &&
                            currentUser.roles.map((role, index) => (
                              <li key={index}>{role}</li>
                            ))}
                        </ul>
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-avatar">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  title=""
                  alt=""
                  height="200px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Profile;
