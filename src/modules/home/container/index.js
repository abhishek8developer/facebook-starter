import React, { Component } from 'react';
import { withRouter } from "react-router";
import Banner from '../../../components/Banner'
import Services from '../../../components/Services'
import { services } from '../../../json/services'

class Home extends Component {
    render(){
        return (
            <div className='body home'>
                <Banner/>
                <Services services={services} homeScreen={true}/>
                <section className="section-1 bg-blue text-center text-white fz-20 fw-semibold">
                    <div className="container">
                        <p className="px-xl-5 mx-xl-5">Fed up with poor quality cleaners?  Wish you could choose the ideal cleaner for your specific needs? Find A Cleaner Now gives you fast, free and direct access to a range of trusted, quality cleaners. Create your job posting or look through cleaners’ profiles to find exactly what you want easily!</p>
                        <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <a href="/postjob" className="btn btn-success btn-lg btn-block">Find a cleaner</a>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="section-how-it-works bg-grey-light text-center">
                    <div className="container">
                        <h2>HOW IT WORKS</h2>
                        <div className="row pt-3">
                        <div className="col-sm-4 mb-4">
                            <span className="sprites icons-1 icon-1 mb-3"></span>
                            <h3>Find a cleaner</h3>
                            <p>Post a job or Search profiles</p>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <span className="sprites icons-1 icon-2 mb-3"></span>
                            <h3>Select the best</h3>
                            <p>Contact as many cleaners as you like <br/> and choose the right one for you</p>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <span className="sprites icons-1 icon-3 mb-3"></span>
                            <h3>Relax!</h3>
                            <p>And free up time for the things you’d <br/> rather be doing!</p>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="section-what-others-say">
                <div className="container">
                    <h2 className="text-center">WHAT OTHERS SAY</h2>
                    <div className="row pt-4 mt-3">
                    <div className="col-sm-6">
                        <div className="box bg-grey-light d-flex flex-column">
                        <p className="mb-1">The place was spotless, Katie did an excellent job, we’ve found the perfect cleaner for our family.</p>
                        <div className="fz-12 mt-auto"><span className="text-blue">Sally,</span> Malvern East, <span className="text-grey-mid">VIC</span></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="box bg-grey-light d-flex flex-column">
                        <p className="mb-1">A great exit cleab, thanks. The place looked spotless and we got our bond back. Thank you.</p>
                        <div className="fz-12 mt-auto"><span className="text-blue">Andrew,</span> St Kilda, <span className="text-grey-mid">VIC</span></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="box bg-grey-light d-flex flex-column">
                        <p className="mb-1">My windows have never looked so good! Thanks Ian for a sparkling job!</p>
                        <div className="fz-12 mt-auto"><span className="text-blue">Jenny,</span> Kew, <span className="text-grey-mid">VIC</span></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="box bg-grey-light d-flex flex-column">
                        <p className="mb-1">Thank you for an amazing job Sue, you’re just like Alice from the Brady Bunch! Cleaning, cooking and keeping us all organised, we’re so glad we found you.</p>
                        <div className="fz-12 mt-auto"><span className="text-blue">Amanda,</span> Brighton, <span className="text-grey-mid">VIC</span></div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section className="bg-blue text-center text-white fz-20 fw-semibold py-4">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-md-6 col-lg-auto pt-1">
                            <div className="px-xl-5 ml-xl-2 mr-xl-3 py-4">Cleaners! Wish you could find great jobs quickly and easily?</div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <a href="/#" className="btn btn-success btn-lg btn-block">Cleaning jobs</a>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withRouter(Home);