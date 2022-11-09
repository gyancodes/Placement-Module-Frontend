import React, { Component } from "react";
import UserMenu from "./user_menu";

import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

//CSS
import "../../style/user.css";


import CompanyList from "../../components/CompanyList";
import UserProfile from "./profile";
import Apply_Job from "./Apply_job";
import DetailsEdit from './details_edit'
import New_Job from "./New_job";
import AppliedJobList from "./AppliedJobList"

import HeaderNav from "../../components/layout/header/HeaderNav";

import Notifications from "./Notifications";

const { Content } = Layout;

class UserMain extends Component {
  render() {
    return (
      <Layout>

        {/* <HeaderNav/> */}
        <UserMenu />
        <Layout>
          <Content className="user-content">
            <Switch>
              <Route path="/user/profile" component={UserProfile} />
              <Route path="/user/companys" component={CompanyList} />
              <Route path="/user/new_job" component={New_Job} />
              <Route path="/user/details_edit" component={DetailsEdit} />
              <Route path="/user/apply_job/:id" component={Apply_Job} />
              <Route path="/user/applied_job" component={AppliedJobList} />
              <Route path="/user/notifications" component={Notifications} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default UserMain;
