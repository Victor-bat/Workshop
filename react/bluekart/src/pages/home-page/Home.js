import React from 'react'
import Contact from '../contact-page/Contact'
import About from '../about-page/About'
import Shop from '../shop-page/Shop'

const Home = () => {
  return (
    <div>
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../assets/images/_20230717_on_oppenheimer_lead.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Robert.J.Oppenheimer</h5>
                            <p>J. Robert Oppenheimer was an American theoretical physicist who served as the director of the
                                Manhattan Project's Los Alamos Laboratory during World War II.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../assets/images/rsz_foto_cover_-_alberteinstein.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Albert Einstein</h5>
                            <p>Albert Einstein was a German-born physicist who developed the special and general theories of
                                relativity and won the Nobel Prize for Physics in 1921 for his explanation of the photoelectric
                                effect. Einstein is generally considered the most influential physicist of the 20th century.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../assets/images/Nikola_tesla-OCD-1600x840.webp" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Nikola Tesla</h5>
                            <p>Nikola Tesla was a Serbian American inventor and engineer who discovered and patented the
                                rotating magnetic field, the basis of most alternating-current machinery.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            <About/>
            <Shop/>
            <Contact/>
            </div>
  )
}

export default Home