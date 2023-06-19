import React, {useEffect, useState} from "react";
import {AiOutlineArrowDown} from "react-icons/ai"
import Footer from "../../components/main/Footer";
import Header from "../../components/main/Header";
import TextAnimation from "../../helpers/TextAnimation";
import {getAbout} from "../../api/HomeApi";

const Home = () => {

    const [about, setAbout] = useState({leftHand: null, rightHand: null});

    useEffect(() => {
        document.title = "IT-library | Հիմնական ";
        getAllData();
    }, []);

    const getAllData = async () => {
        const aboutGet = await getAbout();
        setAbout(aboutGet[0]);
    }

    return (
        <div>
            <Header/>
            <section id={'intro'}>
                <div className="shadow-overlay"></div>
                <div className="intro-content">
                    <div className="row">
                        <div className="col-twelve">
                            <h1>IT-LIBRARY</h1>
                            <TextAnimation data={{text: ['"Test 1"', '"Test 2"', '"Test 3"'], period: 2000}}/>
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
                        <h2 className={'h01'}>Մեր Մասին</h2>
                        <p className="lead">Պրոեկտի մասին կարճ ներկայացում</p>
                    </div>
                </div>
                <div className="row process-content">
                    <div className="left-side">
                        {about.leftHand}
                    </div>
                    <div className="right-side">
                        {about.rightHand}
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