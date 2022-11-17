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
//   constructor(props){
//     super(props);
//     this.state = {
//       products: []
//     };
//   }
  
//   async componentDidMount() {
//     await this.getAllFormThuoc();
//   }

//   getAllFormThuoc = async ()=>{
//     let response = await hendlegetThuoc('ALL');
//     if(response && response.errCode === 0){
//         if(response.data.Anh){
//           Buffer.from(JSON.stringify(response.Anh)).toString('base64')
//         }
//         this.setState({
//           products: response.data,   
//         })
//     }
//   }

//   render() {
//     let products = this.state.products;
    
//     console.log(products)
//     return (
//       <Container>
//         <h2>Products</h2>
//         <Row>
//           {products.map(product => (
//             <Col sm="4">
//               <Card>
//                 <CardImg top width="100%" src={product.Anh} />
//                 <CardBody>
//                   <CardTitle>{product.TenThuoc}</CardTitle>
//                   <CardText>{product.DonGia}</CardText>

                  
//                 </CardBody>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Products);
import React, {
	useState,
	useEffect,
} from "react";
import "../../Header/style/main.css";
import RatingStars from "../../Header/components/RatingStars"
import ShoppingCart from "../../Header/components/ShoppingCart";


const products = [
	{
		id: 1,
		name: "Thuốc kem bôi Agiclovir 10% Agimexpharm điều trị nhiễm Herpes Simplex (5g)",
		rating: 4.3,
		description:
			"Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
		price: 12.000,
		// image: require("../../../assets/images/Banner1.png"),
	},
	{
		id: 2,
		name: "Fusce sit amet ipsum",
		rating: 4.2,
		description:
			"Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.",
		price: 20.000,
		// image: require("../../assets/images/product-2.png"),
	},
	{
		id: 3,
		name: "Etiam volutpat aliquam",
		rating: 3.2,
		description:
			"Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
		price: 99,
		// image: require("../../assets/images/product-3.png"),
	},
	{
		id: 4,
		name: "Lorem ipsum dolor",
		rating: 4.8,
		description:
			"Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
		price: 119,
		// image: require("../../assets/images/product-4.png"),
	},
	{
		id: 5,
		name: "Ultrices nisl",
		rating: 4.5,
		description:
			"Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
		price: 85,
		// image: require("../../assets/images/product-5.jpg"),
	},
	{
		id: 6,
		name: "Curabitur in elementum tortor",
		rating: 3.8,
		description:
			" Mauris convallis diam nibh, non malesuada enim facilisis non. Etiam sapien augue, molestie a porta sed",
		price: 149,
		// image: require("../../assets/images/product-6.png"),
	},
];

function Products() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="Products">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar">
				
				<button
					className="btn shopping-cart-btn fas fa-shopping-cart"
					onClick={() =>
						setCartVisible(true)
					}>
					
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>
			</div>
			<main>
				<h2 className="title">
					Products
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								<button className="btn">
									Detail
								</button>
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default Products;