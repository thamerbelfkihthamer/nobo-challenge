import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Films from '../components/Films';
Enzyme.configure({ adapter: new Adapter() });


describe('Films', () => {

    it('render without crashing', () => {
        const dev = document.createElement('dev');
        ReactDOM.render(<Films />, dev);
        ReactDOM.unmountComponentAtNode(dev);
    });
    
})