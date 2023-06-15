import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className={"footer-bottom"}>
                <div className="row">
                    <div className="col-twelve">
                        <div className="copyright">
                            <span>© IT-LIBRARY {new Date().getFullYear()}.</span>
                            <span>Created by <strong>IT-Library Team<i className="fa fa-heart"></i></strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;