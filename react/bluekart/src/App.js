import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* nav section */}
          <nav class="navbar navbar-expand-lg navbar-light" >
        <Link class="navbar-brand" href="../index.html"><img src="../assets/images/3118563.png" alt="" class="navbar-img"/></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link class="nav-link" href="#">Home<span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">About</Link>
                </li>
                <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                        aria-expanded="false">
                        Services
                    </Link>
                    <div class="dropdown-menu">
                        <Link class="dropdown-item" href="#">Purchase</Link>
                        <Link class="dropdown-item" href="#">Set Up</Link>
                        <div class="dropdown-divider"></div>
                        <Link class="dropdown-item" href="#">Reviews</Link>
                    </div>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Contact Us</Link>
                </li>
            </ul>
        </div>
    </nav>
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/images/_20230717_on_oppenheimer_lead.jpg" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Robert.J.Oppenheimer</h5>
                    <p>J. Robert Oppenheimer was an American theoretical physicist who served as the director of the
                        Manhattan Project's Los Alamos Laboratory during World War II.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/images/rsz_foto_cover_-_alberteinstein.jpg" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Albert Einstein</h5>
                    <p>Albert Einstein was a German-born physicist who developed the special and general theories of
                        relativity and won the Nobel Prize for Physics in 1921 for his explanation of the photoelectric
                        effect. Einstein is generally considered the most influential physicist of the 20th century.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/images/Nikola_tesla-OCD-1600x840.webp" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Nikola Tesla</h5>
                    <p>Nikola Tesla was a Serbian American inventor and engineer who discovered and patented the
                        rotating magnetic field, the basis of most alternating-current machinery.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
    </div>
    <section class="about-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-7 col-lg-6 col-md-6 co-sm-12 col-xs-12">
                    <div class="about-details">
                        <h3>Welcome to the world of science</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores incidunt deserunt
                            deleniti, consequatur aperiam voluptatibus amet explicabo nam facilis iste nihil obcaecati
                            quidem optio, odit facere nemo et in.</p>
                        <button class="btn btn-success">Join Now</button>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 col-md-6 co-sm-12 col-xs-12">
                    <div class="abt-img-div">
                        <img src="../assets/images/wp1817999.webp" alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="product-section py-5">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-4 co-sm-6 col-12">
                    <div class="product-div">
                        <img src="../assets/images/GettyImages-700832601-5bb602c0c9e77c002609fe08.jpg" alt=""
                            class="img product-img" />
                        <div class="product-details px-2">
                            <h5>Silicon</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p><del>Rs.1000</del>Rs.999</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 co-sm-6 col-12">
                    <div class="product-div">
                        <img src="../assets/images/R (2).jfif" alt="" class="img product-img" />
                        <div class="product-details px-2">
                            <h5>Uranium</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p><del>Rs.100000</del>Rs.99999</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 co-sm-6 col-12">
                    <div class="product-div">
                        <img src="../assets/images/OIP (1).jfif" alt="" class="img product-img" />
                        <div class="product-details px-2">
                            <h5>Plutonium</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p><del>Rs.100000</del>Rs.99999</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 co-sm-6 col-12">
                    <div class="product-div">
                        <img src="../assets/images/R (3).jfif" alt="" class="img product-img" />
                        <div class="product-details px-2">
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
  );
}

export default App;
