import React, { Component } from "react";
import NewJobService from "../../services/New-job";
import { BrowserRouter as Link } from "react-router-dom";

import {  IoMan, IoBus } from "react-icons/io5";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

import { Col, Row, Container } from "reactstrap";

class New_Job extends Component {

    constructor(props) {
        super(props)

        this.state = {
                jobs: []
        }
        this.addJobDrive = this.addJobDrive.bind(this);
        this.applyjobDrive = this.applyjobDrive.bind(this);
        this.deleteJobDrive = this.deleteJobDrive.bind(this);
    }

    deleteJobDrive(id){
        NewJobService.deleteJobDrive(id).then( res => {
            this.setState({jobs: this.state.jobs.filter(job => job.id !== id)});
        });
    }
   
    applyjobDrive(){
        this.props.history.push(`/user/apply_job/_add`);
    }

    componentDidMount(){
        NewJobService.getAll().then((res) => {
            this.setState({ jobs: res.data});
        });
    }

    addJobDrive(){
        this.props.history.push('/admin/add_job/_add');
    }

  render() {
    // renderStudent(students) {
    return (
      <Container>
        <div className="mt-3">
        <h4>New Drive</h4>
          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  5 Drive
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button block color="success">
                  <Link to="./ShowStudentList.tsx">
                    <span>My Drives</span>
                  </Link>
                </Button>
              </Card>
            </Col>

            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  12 New Drives
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button block>
                  <a href="/user/new_job" className="text-decoration-none text-light">
                 New Drive
                  </a>
                </Button>

              </Card>
            </Col>

            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoBus className="font-size-xl" />
                  Placed Student
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>View More</Button>
              </Card>
            </Col>
          </Row>
        </div>
        
        <Container className="mt-5">
          {/* {this.state.students.map((student) => this.renderStudent(student))} */}
        </Container>
        {
                                    this.state.jobs.map(
                                        job => 
          <Row>
            <Col sm="12">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  <span>{ job.comName}</span>
                </CardTitle>
                <CardBody>
                  <Row  key = {job.id}>
                    <Col sm="4" className="text-center">
                      <span className="font-weight-bold"> job  Type: </span>
                      <span>{job.jobType}</span>
                    </Col>

                   

                    <Col sm="4" className="text-center">
                      <span className="font-weiht-bolder">job Salary:</span>
                      <span>{job.jobSalary}</span>
                    </Col>

                    <Col sm="4" className="text-center">
                      <span className="font-weith-bold">job Vacancy:</span>
                      <span>{job.jobVacancy}</span>
                    </Col>
                    <Col sm="4" className="text-center">
                      <span className="font-weith-bold">job Des:</span>
                      <span>{job.jobDescription}</span>
                    </Col>

                    
                    
                  </Row>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col sm-4 md-4 className="justify-center">
                      <Button onClick={ () => this.applyjobDrive()} block outline color="primary">
                        Apply
                      </Button>
                    </Col>

                    <Col sm-6>
                      {/* <Button onClick={ () => this.deleteJobDrive(job.id)} block outline color="denger">
                       Remove
                      </Button> */}
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

export default New_Job;
