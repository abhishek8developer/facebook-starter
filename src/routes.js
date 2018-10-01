import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux";

import Header from './components/common/Header';
import Home from './modules/home/container/';
import Footer from './components/common/Footer';
import JobPost from './modules/home/component/PostJob';
import createStore from "./store/createStore";


const Routes = () => {
    const store = createStore();
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header />
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/postjob" component={JobPost}/>
                    <Footer/>
                </div>
            </Router>
        </Provider>        
    );
}
export default Routes;