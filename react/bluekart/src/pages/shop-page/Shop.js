import React from 'react'

const Shop = () => {
  return (
    <div>
      <section className="product-section py-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4 co-sm-6 col-12">
                            <div className="product-div">
                                <img src="../assets/images/GettyImages-700832601-5bb602c0c9e77c002609fe08.jpg" alt=""
                                    className="img product-img" />
                                <div className="product-details px-2">
                                    <h5>Silicon</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <p><del>Rs.1000</del>Rs.999</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 co-sm-6 col-12">
                            <div className="product-div">
                                <img src="../assets/images/R (2).jfif" alt="" className="img product-img" />
                                <div className="product-details px-2">
                                    <h5>Uranium</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <p><del>Rs.100000</del>Rs.99999</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 co-sm-6 col-12">
                            <div className="product-div">
                                <img src="../assets/images/OIP (1).jfif" alt="" className="img product-img" />
                                <div className="product-details px-2">
                                    <h5>Plutonium</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <p><del>Rs.100000</del>Rs.99999</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 co-sm-6 col-12">
                            <div className="product-div">
                                <img src="../assets/images/R (3).jfif" alt="" className="img product-img" />
                                <div className="product-details px-2">
                                    <h5>Hydrogen</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <p><del>Rs.10000</del>Rs.9999</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Shop