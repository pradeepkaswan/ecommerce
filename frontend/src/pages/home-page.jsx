import { Row, Col } from "react-bootstrap"
import products from "../data/products"
import Product from "../components/product"

const HomePage = () => {
  return (
    <>
      <h4>Latest products</h4>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
