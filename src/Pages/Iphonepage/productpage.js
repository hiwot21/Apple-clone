import React, { useEffect, useState } from "react";

function ProductPage(props) {
  const [products, setproducts] = useState([]);
  const [ProductID, setProductID] = useState(props.match.params.pid);
  useEffect(() => {
    fetch("/iphones.json")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        console.log(data.products);
        const singleProduct = productList.filter(
          (x) => x.product_url == ProductID
        );
        setproducts(singleProduct);
      });
  }, []);

  // console.log(products);

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          {products.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let productPage = "/iphone/" + id;
            let details = product.product_description;

            let productDiv = (
              <div key={id} className="bottom-100">
                <div className="row justify-content-center text-center bottom-50">
                  <div className="col-12">
                    <div className="title-wraper bold">{title}</div>
                    <div className="brief-description">{Brief}</div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">
                      {`Starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="product-details">{details}</div>
                  </div>

                  <div className={`col-sm-12 col-md-6`}>
                    <div className="prodict-image">
                      <img src={img} />
                    </div>
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;