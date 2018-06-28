import React from 'react';
import ScriptTag from 'react-script-tag';

export default function Notes() {

    function handleClick(e) {
        e.preventDefault();
        alert('The link was clicked.');
        console.log('The link was clicked.');
    }

    return (<div>
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#myPage">AFCG</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#portfolio">PORTFOLIO</a></li>
                        <li><a href="#customers">CUSTOMERS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="jumbotron text-left">
            <h1>AFCG CONSULTING CO.</h1>
            <p>Make business more efficient with software</p>
        </div>

        <div id="about" className="container-fluid text-center">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <h2>About Company</h2><br></br>
                    <h4>AFCG is a company from Russia that builds products for customers around the world. Our team of
                        developers and consultants leverage decades of experience to build scaleable web applications
                        that solve business problems. We work with your team every step of the way to provide strategy,
                        development, and training that will help you exceed your goals.
                        We're proud to show off our work, and look forward to working with you on your next
                        project.</h4><br></br>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>

        <div className="container-fluid bg-grey">
            <div className="row">
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-globe logo slideanim"></span>
                </div>
                <div className="col-sm-8">
                    <h2>Our Values</h2><br></br>
                    <h4><strong>MISSION:</strong> We believe that our mission is to help different businesses increase
                        revenue and profits through various IT solutions. We deal in detail with each concrete case of
                        our customers in order to get the maximum benefit for both parties.</h4><br></br>
                </div>
            </div>
        </div>

        <div id="services" className="container-fluid text-center">
            <h2>OUR ADVANTAGES</h2>
            <h4>What we offer</h4>
            <br></br>
                <div className="row slideanim">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-heart logo-small"></span>
                        <h4>LOVE</h4>
                        <p>We create our solutions for you with love and attention to every detail</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-lock logo-small"></span>
                        <h4>JOB DONE</h4>
                        <p>We have made all the projects of our clients qualitatively and on time. You can ask them</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-wrench logo-small"></span>
                        <h4>HARD WORK</h4>
                        <p>We thoroughly understand your requirements and do even more</p>
                    </div>
                </div>
            <br></br>
        </div>

        <div id="portfolio" className="container-fluid text-center bg-grey">
            <h2>Portfolio</h2><br></br>
            <h4>What we have created</h4>
            <div className="row text-center slideanim">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">APOK ENGLISH BOT</h5>
                            <h6 className="card-subtitle mb-2 text-muted">programming</h6>
                            <p className="card-text">Read how we create learning platform for APOK company which allowed
                                customers receive services directly from social networks.</p>

                            <a href="#" className="card-link">Story</a>
                            <a href="#" className="card-link">Github</a>
                        </div>
                    </div>

                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">D4U WEB PLATFORM</h5>
                            <h6 className="card-subtitle mb-2 text-muted">programming</h6>
                            <p className="card-text">We have developed a system that allows you to search for the most
                                optimal way to deliver goods from one point to another.</p>

                            <a href="#" className="card-link">Story</a>
                            <a href="#" className="card-link">Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">ALL OUR PROJECTS</h5>
                            <h6 className="card-subtitle mb-2 text-muted">programming, consulting, etc.</h6>
                            <p className="card-text">Unfortunately, we can not talk about all our projects on this page,
                                so you can click on the link and read more about them.</p>
                            <a href="#" className="card-link">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>

                <h2 id="customers">What our customers say</h2>
                <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <h4>"This company is the best. I am so happy with the result!"<br></br><span>Rustem Akhmetzyanov, D4U President, D4U Inc</span>
                            </h4>
                        </div>
                        <div className="item">
                            <h4>"One word... WOW!!"<br></br><span>Emil Yusifov, APOK CEO, APOK Inc</span></h4>
                        </div>
                        <div className="item">
                            <h4>"Could I... BE any more happy with this company?"<br></br><span>Kirill Kukharchuk, NTCF CTO, NTCF co.</span>
                            </h4>
                        </div>
                    </div>

                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
        </div>

        <div id="contact" className="container-fluid bg-grey">
            <h2 className="text-center">CONTACT</h2>
            <div className="row">
                <div className="col-sm-5">
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p><span className="glyphicon glyphicon-map-marker"></span> Moscow, RU</p>
                    <p><span className="glyphicon glyphicon-phone"></span> +7 (925)-259-53-31</p>
                    <p><span className="glyphicon glyphicon-envelope"></span> arbuzovfp@gmail.com</p>
                </div>
                <div className="col-sm-7 slideanim">
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text"
                                   required></input>
                        </div>
                        <div className="col-sm-6 form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email" type="email"
                                   required></input>
                        </div>
                    </div>
                    <textarea className="form-control" id="comments" name="comments" placeholder="Comment"
                              rows="5"></textarea><br></br>
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <button className="btn btn-default pull-right" type="submit" onClick={handleClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="container-fluid text-center">
            <a href="#myPage" title="To Top">
                <span className="glyphicon glyphicon-chevron-up"></span>
            </a>
            <p>Created By <a href="https://www.afcg-company.ru" title="Visit afcg-company">www.afcg-company.ru</a></p>
        </footer>

        <div className='customAlert'>
            <p className='message'></p>
            <input type='button' className='confirmButton' value='Ok'></input>
        </div>
    </div>);
}