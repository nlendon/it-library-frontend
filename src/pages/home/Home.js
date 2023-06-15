import React, {useEffect} from "react";
import {AiOutlineArrowDown} from "react-icons/ai"
import Footer from "../../components/main/Footer";
import Header from "../../components/main/Header";

const Home = () => {

    useEffect(() => {
        document.title = "IT-library | Հիմնական ";
    }, []);

    return (
        <div>
            <Header/>
            <section id={'intro'}>
                <div className="shadow-overlay"></div>
                <div className="intro-content">
                    <div className="row">
                        <div className="col-twelve">
                            <h1>IT-LIBRARY</h1>
                            <a className="arrow-down" href="#process"
                               title=""><AiOutlineArrowDown
                                size={50} color={'#FF00D8'} style={{marginTop: '15px'}}/></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id={"process"}>
                <div className="row section-intro">
                    <div className="col-twelve">
                        <h1 className={'h01'}>Մեր Մասին</h1>
                        <p className="lead">Մեր մասին Շաաաատ կարճ ինֆո</p>
                    </div>
                </div>
                <div className="row process-content">
                    <div className="left-side">
                    </div>
                    <div className="right-side">
                    </div>
                    <div className="image-part"></div>
                </div>
            </section>
            <section id={'news'}>
                <div className='row'>
                    <div className='col-twelve'>
                        <h1 className={'h01'}>ԵԻՊՔ Նորություններ</h1>

                        <div className='cards'>
                            <div className='news-card'>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id={"testimonials"}>
                <div className="row">
                    <div className="col-twelve">
                        <h2 className="h01">Կապ Մեզ Հետ</h2>
                    </div>
                </div>
                <div className="row flex-container">
                    <div id="testimonial-slider" className="flexslider">
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;