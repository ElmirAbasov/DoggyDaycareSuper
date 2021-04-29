import React, { Component } from 'react';
import Home from './section/Home';
import Register from './section/Register';

import About from './section/About';

import {Route} from 'react-router-dom';

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/register" component={Register} />
            </section>
        )
    }
}

export default Section
