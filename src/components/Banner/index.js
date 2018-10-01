import React, { Component } from 'react'

class Banner extends Component {
    render() {
        return (
            <section className="section-hero hero-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>Find trusted, top quality cleaners to help you in an affordable and efficient way</h1>
                            <div className="text-center">
                                <a href="/postjob" className="btn btn-primary btn-lg">Find a cleaner</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;