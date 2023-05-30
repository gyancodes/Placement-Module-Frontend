import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

//CSS
import "../../style/admin.css";

// Comonents
import Profile from "../../components/Profile";
import CompanyList from "../../components/Comlist";
import CreateCompany from "../../components/CreateCompany";

// ###
import AdminMenu from "./admin_menu";
import UserList from "./user_list";
import UserShow from "./user_show";
// import EmployerForm from "./employer_form";
// import EmployerList from "./employer_list";
import EmployerShow from "./employer_show";
import New_Job from "./New_Job";
import Add_job from "./Add_job";
import Applied_St_List from "./Applied_St_List";
import NewDrive from "./NewDrive";
// import Calendar from "../components/Calender/Containers/Home/index";
// import Calendar from "../../components/Calender/Containers/Home/index";
// import ScheduleVisit from "../../containers/admin/ScheduleVisit";
// import AddForm from "./AddForm";
// import PreviousVisit from "./PreviousVisit";
// import AdminDashboard from "./AdminDashboard";
// import UpcomingVisit from "./UpcomingVisit";
// import CompletedVisit from "./CompletedVisit";


const { Content } = Layout;

class AdminMain extends Component {
  render() {
    return (
      <Layout className="admin-main">
        <AdminMenu />
        {/* <AdminDashboard/> */}

        <Layout>
          <Content className="admin-content">
            <Switch>
              <Route
                path="/placement_dept/employer_list"
                component={CompanyList}
              />
              {/* <Route path="/placement_dept/new_drive" component={New_Job} /> */}
              <Route path="/placement_dept/create-job-post" component={NewDrive} />
              <Route
                path="/placement_dept/employer_form/:id"
                component={CreateCompany}
              />
              <Route path="/placement_dept/add_drive/:id" component={Add_job} />
              <Route path="/placement_dept/users" component={UserList} />
              <Route path="/placement_dept/profile" component={Profile} />
       
              <Route
                path="/placement_dept/employer/:id"
                component={EmployerShow}
              />
              <Route path="/placement_dept/user/:id" component={UserShow} />
              <Route
                path="/placement_dept/applied_st_list"
                component={Applied_St_List}
              />
              {/* <Route
                path="/placement_dept/schedulemeeting"
                component={Calendar}
              />
              <Route path="/placement_dept/addform" component={AddForm} />
              <Route
                path="/placement_dept/previousvisit"
                component={PreviousVisit}
              />
              <Route
                path="/placement_dept/upcomingvisit"
                component={UpcomingVisit}
              />
              <Route
                path="/placement_dept/completedvisit"
                component={CompletedVisit}
              />
              <Route
                to="/placement_dept/schedulevisit"
                component={ScheduleVisit}
              /> */}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AdminMain;
