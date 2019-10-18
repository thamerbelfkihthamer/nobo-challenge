import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Film from '../components/Film';
Enzyme.configure({ adapter: new Adapter() });

describe('Search', () => {

    it('render without crashing', () => {
        const dev = document.createElement('dev');
        ReactDOM.render(<Film />, dev);
        ReactDOM.unmountComponentAtNode(dev);
    });


    test('has a valid snapshot', () => {
        const search = renderer.create(<Film />);
        const tree = search.toJSON();
        expect(tree).toMatchSnapshot();
    });

})