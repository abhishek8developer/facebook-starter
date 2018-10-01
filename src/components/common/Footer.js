import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer bg-grey-darkest text-grey-mid fz-12">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6">
                        <h5>FIND A CLEANER NOW</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">About Us</a></li>
                            <li><a href="#!">Media</a></li>
                            <li><a href="#!">Tips for Cleaners</a></li>
                            <li><a href="#!">Tips for Customers</a></li>
                            <li><a href="#!">FAQs</a></li>
                            <li><a href="#!">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <h5>CATEGORIES</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Domestic Cleaning</a></li>
                            <li><a href="#!">Cooking</a></li>
                            <li><a href="#!">Housekeeping</a></li>
                            <li><a href="#!">Window Cleaning</a></li>
                            <li><a href="#!">Oven Cleaning</a></li>
                            <li><a href="#!">Carpet Cleaning</a></li>
                        </ul>
                    </div>
                    </div>
                    <ul className="list-inline list-socials text-right mt-1 mb-2">
                        <li className="list-inline-item"><a href="#!" className="sprites facebook"></a></li>
                        <li className="list-inline-item"><a href="#!" className="sprites instagram"></a></li>
                        <li className="list-inline-item"><a href="#!" className="sprites twitter"></a></li>
                    </ul>
                    <hr className="my-0"/>
                    <div className="row pt-3 pb-2 text-center text-sm-left">
                    <div className="col-sm">
                        <ul className="list-inline">
                            <li className="list-inline-item mr-5"><a href="#!">Terms of Use</a></li>
                            <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-auto">© 2018 Find A Cleaner Now</div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;