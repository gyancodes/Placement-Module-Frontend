import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  Row,
  Col,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Button,
  Form,
  //message
} from "antd";
import {
  fetchUserProfile,
  updateUserProfile,
  editChange
} from "../../store/actions";

const dateFormat = "YYYY/MM/DD";
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class DetailsEditForm extends Component {
  //componentWillReceiveProps(nextProps) {
  //if (nextProps.user.message === "Successfully updated user profile") {
  //     message.success("Profile successfully updated.");
  //     nextProps.user.message = "";
  //   }
  // }
  // componentDidMount() {
  //   this.props.fetchUserProfile(this.props.user.token);
  //   console.log(this.props.user.profile);
  // }

  handleCancel = () => {
    this.props.history.push('/user/profile');

    this.props.editChange();
  };

  handleSubmit = e => {
    const token = this.props.token;
    e.preventDefault();
    this.props.form.validateFields((err, fieldValues) => {
      const values = {
        ...fieldValues,    
        dob: fieldValues["dob"].format("YYYY-MM-DD")
      };
      console.log(values);
      this.props.updateUserProfile(values, token);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const data = this.props;
    if (data) {
      return (
        <div className="profile-wrapper">
          <Form onSubmit={this.handleSubmit}>
            <Row className="profile-row">
              <Col span={7}>First Name:</Col>
              <Col>
                {getFieldDecorator("firstName", {
                  initialValue: data.firstName
                })(<Input className="regular-profile-input" />)}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Middle Name:</Col>
              <Col>
                {getFieldDecorator("middleName", {
                  initialValue: data.middleName
                })(<Input className="regular-profile-input" />)}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Last Name:</Col>
              <Col>
                {getFieldDecorator("lastName", {
                  initialValue: data.lastName
                })(<Input className="regular-profile-input" />)}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Email:</Col>
              <Col>
                {getFieldDecorator("email", { initialValue: data.email })(
                  <Input className="regular-profile-input" />
                )}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Date of Birth:</Col>
              <Col>
                {getFieldDecorator("dob", {
                  initialValue: moment(data.dob, dateFormat)
                })(
                  <DatePicker
                    format="MMM Do YY"
                    className="regular-profile-input"
                  />
                )}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Gender:</Col>
              <Col>
                {getFieldDecorator("gender", {
                  initialValue: data.gender
                })(
                  <Select className="regular-profile-input">
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                    <Option value="Other">Other</Option>
                  </Select>
                )}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Mobile Number:</Col>
              <Col>
                {getFieldDecorator("mobileNumber", {
                  initialValue: data.mobileNumber
                })(<InputNumber className="regular-profile-input" />)}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Alternative Mobile Number:</Col>
              <Col>
                {getFieldDecorator("altMobileNumber", {
                  initialValue: data.altMobileNumber
                })(<InputNumber className="regular-profile-input" />)}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Father's Name:</Col>
              <Col>
                {getFieldDecorator("fatherName", {
                  initialValue: data.fatherName
                })(<Input className="regular-profile-input" />)}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Father's Mobile Number:</Col>
              <Col>
                {getFieldDecorator("fatherMobile", {
                  initialValue: data.fatherMobile
                })(<InputNumber className="regular-profile-input" />)}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Mother's Name:</Col>
              <Col>
                {getFieldDecorator("motherName", {
                  initialValue: data.motherName
                })(<Input className="regular-profile-input" />)}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Mother's Mobile Number:</Col>
              <Col>
                {getFieldDecorator("motherMobile", {
                  initialValue: data.motherMobile
                })(<InputNumber className="regular-profile-input" />)}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Permanent Address:</Col>
              <Col>
                {getFieldDecorator("permanentAddress", {
                  initialValue: data.permanentAddress
                })(
                  <TextArea
                    className="regular-profile-input"
                    autosize={{ minRows: 1, maxRows: 6 }}
                  />
                )}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Current Address:</Col>
              <Col>
                {getFieldDecorator("currentAddress", {
                  initialValue: data.currentAddress
                })(
                  <TextArea
                    className="regular-profile-input"
                    autosize={{ minRows: 1, maxRows: 6 }}
                  />
                )}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Class 10 Grade Points (out of 10):</Col>
              <Col>
                {getFieldDecorator("class10grade", {
                  initialValue: data.class10grade
                })(
                  <InputNumber
                    min={0}
                    max={10}
                    className="regular-profile-input"
                  />
                )}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Class 12 Grade Points (out of 10):</Col>
              <Col>
                {getFieldDecorator("class12grade", {
                  initialValue: data.class12grade
                })(
                  <InputNumber
                    min={0}
                    max={10}
                    className="regular-profile-input"
                  />
                )}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Cumulative Performance Index:</Col>
              <Col>
                {getFieldDecorator("cpi", {
                  initialValue: data.cpi
                })(
                  <InputNumber
                    min={0}
                    max={10}
                    className="regular-profile-input"
                  />
                )}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Course:</Col>
              <Col>
                {getFieldDecorator("branch", {
                  initialValue: data.branch
                })(
                  <Select className="regular-profile-input">
                    <Option value="BTECH-CSE">B.Tech-Computer Science and Engineering </Option>
                    <Option value="BTECH-MECH">B.Tech-Mechanical Engineering </Option>
                    <Option value="BTECH-EE">B.Tech-Electronics Engineering </Option>
                    <Option value="BTECH-CIVIL">B.Tech-Civil Engineering </Option>
                    <Option value="BTECH-AERO">B.Tech-Aerospace Engineering </Option>
                    <Option value="BTECH-AUTO">B.Tech-Automobile Engineering </Option>
                    <Option value="BTECH-ECE">B.Tech-Elctronics amd Communication Engineering </Option>
                    <Option value="MTECH-CSE">M.Tech-Computer Science and Engineering </Option>
                    <Option value="MTECH-MECH">M.Tech-Mechanical Engineering </Option>
                    <Option value="MTECH-EE">M.Tech-Electronics Engineering </Option>
                    <Option value="MTECH-CIVIL">M.Tech-Civil Engineering </Option>
                    <Option value="MTECH-AERO">M.Tech-Aerospace Engineering </Option>
                    <Option value="MTECH-AUTO">M.Tech-Automobile Engineering </Option>
                    <Option value="MTECH-ECE">M.Tech-Elctronics amd Communication Engineering </Option>
                    <Option value="BCA">Bachelors of Computer Applications</Option>
                    <Option value="MCA">Masters of Computer Applications</Option>
                    <Option value="B.Sc">Bachelors of Science</Option>
                    <Option value="M.Sc">Masters of Science</Option>
                    <Option value="BBA">Bachelor of Business Administration</Option>
                    <Option value="MBA">Masters of Business Administration</Option>
                    <Option value="Ph.D">Doctor of Philosophy</Option>
                  </Select>
                )}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Current Backlogs:</Col>
              <Col>
                {getFieldDecorator("currentBacklogs", {
                  initialValue: data.currentBacklogs
                })(<InputNumber min={0} className="regular-profile-input" />)}
              </Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Total Backlogs:</Col>
              <Col>
                {getFieldDecorator("totalBacklogs", {
                  initialValue: data.totalBacklogs
                })(<InputNumber min={0} className="regular-profile-input" />)}
              </Col>
            </Row>
            <FormItem className="profile-update">
              <Button
                className="update"
                size="large"
                type="primary"
                onClick={this.handleSubmit}
              >
                Update Details
              </Button>
              <Button
                className="update-cancel"
                size="large"
                type="primary"
                onClick={this.handleCancel}
              >
                Cancel
              </Button>
            </FormItem>
          </Form>
        </div>
      );
    } else {
      return <div>Loading......</div>;
    }
  }
}

const DetailsEdit = Form.create()(DetailsEditForm);

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, {
  fetchUserProfile,
  updateUserProfile,
  editChange
})(DetailsEdit);
