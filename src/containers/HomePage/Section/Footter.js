import React, { Component } from "react";
import "./Products.scss";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import Product from "../../../assets/images/thuoc1.png";
import { hendlegetThuoc } from "../../../services/userService";
import { connect } from "react-redux";
import { useCart } from "react-use-cart";
import "./Footter.scss";
import { withRouter } from "react-router";
import { FormattedMessage } from "react-intl";

class Footter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    await this.getAllFormThuoc();
  }

  getAllFormThuoc = async () => {
    let response = await hendlegetThuoc("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        products: response.data,
      });
    }
  };

  handleViewDetail = async (medicine) => {
    console.log("thuoc ne", medicine);
    this.props.history.push(`/medicine/${medicine.id}`);
  };

  render() {
    let products = this.state.products;
    return (
      <Container id="TPCN">
        <h2>
          <FormattedMessage id="homeheader.Functional_foods" />
        </h2>
        <Row>
          {products &&
            products.length > 0 &&
            products.map((product, index) => {
              let imgbase64 = "";
              if (product.Anh) {
                imgbase64 = Buffer(product.Anh, "base64").toString("binary");
              }
              return (
                <Col sm="3">
                  <Card onClick={() => this.handleViewDetail(product)}>
                    <CardImg
                      top
                      width="200px"
                      height="200px"
                      style={{ backgroundImage: `url(${imgbase64})` }}
                    />
                    <CardBody>
                      <CardTitle>{product.TenThuoc}</CardTitle>
                      <CardText>
                        {product.DonGia} đ / {product.QuyCach}
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Footter)
);
