import React from 'react'

const About = () => {
  return (
    <div>
        <section className="about-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6 col-md-6 co-sm-12 col-xs-12">
                            <div className="about-details">
                                <h3>Welcome to the world of science</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores incidunt deserunt
                                    deleniti, consequatur aperiam voluptatibus amet explicabo nam facilis iste nihil obcaecati
                                    quidem optio, odit facere nemo et in.</p>
                                <button className="btn btn-success">Join Now</button>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-6 co-sm-12 col-xs-12">
                            <div className="abt-img-div">
                                <img src="../assets/images/wp1817999.webp" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About