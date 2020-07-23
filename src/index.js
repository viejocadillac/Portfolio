import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronUp, faChevronDown, faPhone, faMapMarkerAlt, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faLinkedin, faGithub, faChevronLeft, faChevronUp, faChevronDown, faFacebookSquare, faInstagram, faPhone, faMapMarkerAlt, faBars)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
