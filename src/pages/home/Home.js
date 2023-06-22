import React, {useEffect, useState} from "react";
import {AiOutlineArrowDown} from "react-icons/ai"
import Footer from "../../components/main/Footer";
import Header from "../../components/main/Header";
import TextAnimation from "../../helpers/TextAnimation";
import {createContact, getAbout} from "../../api/HomeApi";
import {Button, Form, Input, message} from "antd";
import TextArea from "antd/es/input/TextArea";

const Home = () => {

    const [about, setAbout] = useState({leftHand: null, rightHand: null});
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        document.title = "IT-library | Հիմնական ";
        getAllData();
    }, []);

    const getAllData = async () => {
        const aboutGet = await getAbout();
        setAbout(aboutGet[0]);
    }

    const sendMessage = async (data) => {
        setLoading(true);
        if (!data.email) alert("Invalid email");
        const info = await createContact(data);
        if (info.message.includes("Exceeded the limit")) {
            messageApi.open({
                type: "error",
                content: info.message
            });
        } else {
            messageApi.open({
                type: "info",
                content: info.message
            });
        }
        setLoading(false);
        form.resetFields();
    }

    return (
        <div>
            {contextHolder}
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
                        <p className="lead">Կայքի մասին կարճ ներկայացում</p>
                    </div>
                </div>
                <div className="row process-content">
                    <div className="left-side">
                        {about?.leftHand}
                    </div>
                    <div className="right-side">
                        {about?.rightHand}
                    </div>
                    <div className={'image-part'}/>
                </div>
            </section>
            <section id={"testimonials"}>
                <div className="row">
                    <div className="col-twelve">
                        <h2 className="h01">Կապ Մեզ Հետ</h2>
                        <Form
                            form={form}
                            onFinish={(data) => sendMessage(data)}
                            labelCol={{
                                span: 6,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            style={{
                                padding: "30px",
                                borderRadius: "5px",
                                background: "rgb(209 209 209)"
                            }}
                        >
                            <Form.Item label={'Անուն Ազգանուն'} name={"sender"}
                                       rules={[{required: true, message: 'Խնդրում ենք լրացնել այս դաշտը!'}]}>
                                <Input placeholder={"Հակոբ Հակոբյան"}/>
                            </Form.Item>
                            <Form.Item label={'Էլ․ Հասցե'} name={"email"}
                                       rules={[{required: true, message: 'Խնդրում ենք լրացնել այս դաշտը!'}]}>
                                <Input type={"email"} placeholder={"hakobyanhakob@gmail.com"}/>
                            </Form.Item>
                            <Form.Item label={'Հեռախոսահամար'} name={'phoneNumber'}>
                                <Input type={''} addonBefore={"+374"} placeholder={"012-345-678"}/>
                            </Form.Item>
                            <Form.Item label={'Հաղորդագրություն'} name={"message"}
                                       rules={[{required: true, message: 'Խնդրում ենք լրացնել այս դաշտը!'}]}>
                                <TextArea placeholder={"Բարև ձեզ, ես դիմում եմ ձեզ․․․"}/>
                            </Form.Item>
                            <Form.Item wrapperCol={{offset: 4, span: 16}}>
                                <Button style={{margin: 0}} type={"submit"}
                                        htmlType={"submit"} loading={loading}>Ուղարկել</Button>
                            </Form.Item>
                        </Form>
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