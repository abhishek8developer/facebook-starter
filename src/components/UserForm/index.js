
import React, { Component } from 'react';
import Services from '../../components/Services/index';
import Error from '../../components/common/Error'

class UserForm extends Component {
    render(){
        const {
            house,
            bedrooms,
            bathrooms,
            cleaningFrequency,
            location,
            jobTitle,
            jobDescription,
            budget,
            dateRequired,
            name,
            email,
            phoneNumber,
            password,
        } = this.props.state.values;
        const {
            homeScreen,
            handleChange,
            handleSubmit,
            handleServicesChange
        } = this.props;
        const {
            services,
            errorText
        } = this.props.state;
        return (
            <form onSubmit={handleSubmit}>
                <Services
                    errorText={errorText}
                    services={services} 
                    homeScreen={homeScreen}
                    handleServicesChange={handleServicesChange}
                />
                <div className="row">
                    <div className="col">
                        <div className="block pt-4 pb-2">
                            <div className="form-group row">
                                <div className="col-sm col-label px-md-0 fw-semibold">I Have A</div>
                                <div className="col-sm-8">
                                    <div className="form-control-wrap">
                                        <select name='house' value={house} onChange={handleChange}  className="form-control">
                                            <option value="1">House</option>
                                            <option value="2">House</option>
                                            <option value="3">House</option>
                                        </select>
                                        <i className="fa fa-angle-down fa-1-7x text-blue"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm col-label px-md-0 fw-semibold">Number of Bedrooms</div>
                                <div className="col-sm-8">
                                    <div className="form-control-wrap">
                                        <select name='bedrooms' value={bedrooms} onChange={handleChange} className="form-control">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3" selected>3</option>
                                        </select>
                                        <i className="fa fa-angle-down fa-1-7x text-blue"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm col-label px-md-0 fw-semibold">Number of Bathrooms</div>
                                <div className="col-sm-8">
                                    <div className="form-control-wrap">
                                        <select name='bathrooms' value={bathrooms} onChange={handleChange} className="form-control">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <i className="fa fa-angle-down fa-1-7x text-blue"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm col-label px-md-0 fw-semibold">Cleaning Frequency</div>
                                <div className="col-sm-8">
                                    <div className="form-control-wrap">
                                        <select name='cleaningFrequency' value={cleaningFrequency} onChange={handleChange} className="form-control">
                                            <option value="1">Daily</option>
                                            <option value="2" selected>Weekly</option>
                                            <option value="3">Monthly</option>
                                        </select>
                                        <i className="fa fa-angle-down fa-1-7x text-blue"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm col-label px-md-0 fw-semibold">Location</div>
                                <div className="col-sm-8">
                                    <input
                                        name='location' 
                                        value={location} 
                                        onChange={handleChange} 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Suburb or Postcode"
                                    />
                                    <Error errorText={errorText["location"]} errorId='location' />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm col-label px-md-0 fw-semibold">Job Title</div>
                                <div className="col-sm-8">
                                    <input 
                                        name='jobTitle'
                                        value={jobTitle} 
                                        onChange={handleChange}
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Clean my 3 bedroom 1 bathroom h..."
                                    />
                                    <Error errorText={errorText["jobTitle"]} errorId='jobTitle' />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm col-label px-md-0 fw-semibold">Job Description</div>
                                <div className="col-sm-8">
                                    <div className="form-control-wrap">
                                        <textarea
                                            name='jobDescription'
                                            value={jobDescription} 
                                            onChange={handleChange} 
                                            className="form-control" 
                                            placeholder="What do you want the cleaner to do?">
                                        </textarea>
                                    </div>
                                    <Error errorText={errorText["jobDescription"]} errorId='jobDescription' />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm col-label px-md-0 fw-semibold">Budget</div>
                                <div className="col-sm-8">
                                    <input
                                        name='budget'
                                        value={budget} 
                                        onChange={handleChange} 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="30.00"
                                    />
                                    <Error errorText={errorText["budget"]} errorId='budget' />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm col-label px-md-0 fw-semibold">Date Required</div>
                                <div className="col-sm-8">
                                    <input
                                        name='dateRequired' 
                                        value={dateRequired}
                                        onChange={handleChange}
                                        type="date" 
                                        className="form-control" 
                                        placeholder="30/05/2018"
                                    />
                                    <Error errorText={errorText["dateRequired"]} errorId='dateRequired' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex flex-column">
                        <div className="block">
                            <div className="pb-2 mb-4"><span className="fw-semibold">Job Post Completion ― </span><span className="text-blue">18%</span></div>
                            <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" style={{width: '18'}} aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="text-center text-grey-mid pt-3 jpt">More detailed job posts are likely to get a response 50% faster.</div>
                        </div>
      				</div>
                </div>
                <div className="row">
                    <div className="col-md-7 d-flex flex-column">
                        <div className="block">
                            <div className="form-group row">
                            <div className="col-sm col-label px-md-0 fw-semibold">Your Name*</div>
                                <div className="col-sm-8">
                                    <input
                                        name='name' 
                                        value={name}
                                        onChange={handleChange}
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Katie"
                                    />
                                    <Error errorText={errorText["name"]} errorId='name' />
                                </div>
                            </div>		
                            
                            <div className="form-group row">
                            <div className="col-sm col-label px-md-0 fw-semibold">Email*</div>
                                <div className="col-sm-8">
                                    <input
                                        name='email'
                                        value={email}
                                        onChange={handleChange}
                                        type="email" 
                                        className="form-control" 
                                        placeholder="email@provider.com"
                                    />
                                    <Error errorText={errorText["email"]} errorId='email' />
                                </div>
                            </div>	
                            
                            <div className="form-group row">
                            <div className="col-sm col-label px-md-0 fw-semibold">Phone Number*</div>
                                <div className="col-sm-8">
                                    <input
                                        name='phoneNumber'
                                        value={phoneNumber}
                                        onChange={handleChange} 
                                        type="tel" 
                                        className="form-control" 
                                        placeholder="xxxx xxx xxx"
                                    />
                                    <Error errorText={errorText["phoneNumber"]} errorId='phoneNumber' />
                                </div>
                            </div>	
                            
                            <div className="form-group row">
                            <div className="col-sm col-label px-md-0 fw-semibold">Password*</div>
                                <div className="col-sm-8">
                                    <input
                                        name='password'
                                        value={password}
                                        onChange={handleChange} 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="***********"
                                    />
                                    <Error errorText={errorText["password"]} errorId='password' />
                                </div>
                            </div>	
                        </div>
                    </div>
                </div>
                <div className="block py-3">
                    <div className="row justify-content-end py-1">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 pr-6">
                            <button type="button" className="btn btn-primary btn-block">Review Job</button>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 pl-6">
                            <button type="submit" value="submit" className="btn btn-success btn-block">Post Job</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default UserForm;