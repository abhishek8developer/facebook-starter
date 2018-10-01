import React, { Component } from 'react'
import Error  from '../common/Error';

class Services extends Component {    
    render() {
        const { homeScreen, services, handleServicesChange,errorText } = this.props;
            let homeServices = services.map((data,i)=>
                <div className="col-sm-6 col-md-4 mb-3" key={i} >
                    <img src={data.image} alt="" className="mb-2"/>
                    <h3 className="mb-0">{data.title}</h3>
                    <p>{data.description}</p>
                </div>
            )
            let jobPostServices = services.map((service,i)=>
                <div className="col-lg-3 col-sm-6" key={i}>
                    <label className="checkbox-group cg1">
                        <input 
                            name={service.title} 
                            type="checkbox"
                            checked={service.isSelected}
                            onChange={handleServicesChange}
                        />
                        <img src={service.image} alt=""/><br/>
                        <span className="checkbox-value"> {service.title}</span>
                    </label>
                </div>
            )
        return (
            <div>
                {homeScreen? 
                    <section className="section-services text-center">
                        <div className="container">
                            <h2>SERVICES</h2>
                            <div className="row mt-5">
                                {homeServices}
                            </div>
                        </div>
                    </section>
                    :
                    <div className="block">
                        <div className="fw-semibold mb-2">
                            I am looking for:
                        </div>
                        <div className="row">
                            {jobPostServices}
                        </div>
                        <Error errorText={errorText["selectedServices"]} />
                    </div>
                }
            </div>
        )
    }
}

export default Services;