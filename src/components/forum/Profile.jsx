import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


function Profile() {

  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-3">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-bold">Profile</h1>
            <h2 class="font-weight-light">@username</h2>
            <NavLink className="nav-link" to="/account">
                  <Button>EDIT ACCOUNT</Button>
            </NavLink>
            <div class="col-lg-0">
              <NavLink className="nav-link" to="/account">
              <img
              src="https://pic.onlinewebfonts.com/svg/img_89209.png"
              width="20" 
              height="20"
              alt=""
            />
                    <Button2>My Posts</Button2>
              </NavLink>
              <NavLink className="nav-link" to="/account">
              <img
              src="https://pic.onlinewebfonts.com/svg/img_89209.png"
              width="20" 
              height="20"
              alt=""
            />
                    <Button2>Saved Items</Button2>
              </NavLink>

              
          </div>
          
          </div>

         
        </div>
      </div>
    </div>
  );
}
const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 12px;
  padding: 5px 350px;
  border-radius: 0px;
  margin: 1px 100px
  cursor: pointer;
`;

const Button2 = styled.button`
  background-color: white;
  color: black;
  font-size: 20px;
  padding-right:1;
  border: 0;
  margin: 0 auto;
  cursor: pointer;
  display: inline-block; 
`;
export default Profile;

