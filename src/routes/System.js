import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import UserManage from "../containers/System/admin/UserManage";
import medicine from "../containers/System/admin/medicine";
import Header from "../containers/Header/Header";
import Employee from "../containers/System/admin/Employee";
import Customer from "../containers/System/admin/Customer";
import importgoods from "../containers/System/admin/importgoods";
import reportThuoc from "../containers/System/admin/reportThuoc";
class System extends Component {
  render() {
    const { systemMenuPath, isLoggedIn } = this.props;
    return (
      <React.Fragment>
        {isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/system/user-manage" component={UserManage} />
              <Route path="/system/Employee" component={Employee} />
              <Route path="/system/Customer" component={Customer} />
              <Route path="/system/medicine" component={medicine} />
              <Route path="/system/importgoods" component={importgoods} />
              <Route path="/system/reportThuoc" component={reportThuoc} />
              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
