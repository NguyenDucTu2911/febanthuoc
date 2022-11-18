import React, { Component } from "react";
import './Products.scss'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import Product from "../../../assets/images/thuoc1.png";
import {hendlegetThuoc} from '../../../services/userService';
import { connect } from 'react-redux';
import { useCart } from "react-use-cart";
import "./Footter.scss"

class Footter extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: []
    };
  }
  
  async componentDidMount() {
    await this.getAllFormThuoc();
  }

  getAllFormThuoc = async ()=>{
    let response = await hendlegetThuoc('ALL');
    if(response && response.errCode === 0){
        this.setState({
          products: response.data,   
        })
    }
  }

  render() {
    let products = this.state.products;
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {products && products.length > 0
          && products.map((product, index )=> {
            let imgbase64 = '';
            if(product.Anh){
                imgbase64 = Buffer( product.Anh ,'base64').toString('binary');
            }
            return(
                <Col sm="4">
                    <Card>
                        <CardImg top width="200px" height="200px"
                            style={{backgroundImage: `url(${imgbase64})`}}
                        />
                        <CardBody>
                        <CardTitle>{product.TenThuoc}</CardTitle>
                        <CardText>{product.DonGia} đ / {product.QuyCach}</CardText>

                        
                        </CardBody>
                    </Card>
                </Col>

            )
            
          })}

        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Footter);
// import React, { Component } from "react";
// import './Products.scss'
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   Button
// } from "reactstrap";
// import Product from "../../../assets/images/thuoc1.png";
// import {hendlegetThuoc} from '../../../services/userService';
// import { connect } from 'react-redux';
// import { useCart } from "react-use-cart";



// class Products extends Component {


// export default connect(mapStateToProps, mapDispatchToProps)(Products);
