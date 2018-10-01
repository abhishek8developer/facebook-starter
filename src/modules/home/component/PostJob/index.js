import React, { Component } from 'react';
import { withRouter } from "react-router";
import { services } from '../../../../json/services';
import UserForm from '../../../../components/UserForm';
import {validatePostJobForm} from '../../../../helper/index';
var _ = require('lodash');

class JobPost extends Component {
    constructor(props){
        super(props)
        this.state={
            services:[],
            values: {
            house:2,
            bedrooms:1,
            bathrooms:1,
            cleaningFrequency:1,
            location:'',
            jobTitle:'',
            jobDescription:'',
            budget:'',
            dateRequired:'',
            name:'',
            email:'',
            phoneNumber:'',
            password:'',
            selectedServices:[]
            },
            errorText:{},
            
        }
    }

    componentWillMount = () => {
        services.map((val)=>{
            val["isSelected"] = false;
        })
        this.setState({services:services})
    }

    handleChange = (e) => {
        let errors = this.state.errorText;
        let values = this.state.values;
        values[e.target.name] = e.target.value;
        this.setState({values});
        errors[e.target.name] = validatePostJobForm(e.target.name,e.target.value);
        this.setState({errorText:errors})
    }

    handleSubmit = (e) => {
        let errors = this.state.errorText;
        let currentState = this.state.values;
        Object.keys(currentState).map((val,i)=>{
            errors[val] = validatePostJobForm(val,currentState[val]);
            this.setState({errorText:errors}) 
        })
        e.preventDefault();
    }

    handleServicesChange = (e) => {
        let errors = this.state.errorText;
        let selectedServices = this.state.values['selectedServices'];
        services.map((val)=>{
            if(e.target.name == val.title){
                val["isSelected"] = !val.isSelected;
                let check = _.find(selectedServices, val);
                if(check){
                    var evens = _.remove(selectedServices, function(n) {
                        return n == val;
                    });
                }else{
                 selectedServices.push(val);
                }                
            }
        })
        this.setState({services:services,selectedServices:selectedServices})
    }

    render(){
        return (
            <section className="bg-grey-light pt-4 pb-2">
                <div className="container px-xl-0 pt-3">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 px-xl-0">
                            <UserForm
                                state={this.state}
                                homeScreen={false}
                                handleServicesChange={this.handleServicesChange}
                                handleChange={(e)=>{this.handleChange(e)}}
                                handleSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(JobPost);