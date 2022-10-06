import 'jest-dom/extend-expect';
import 'react-testing-libary/cleanup-after-each';
import React from "react";
import ImagePage from '../ImagePage';
import ReactDOM from 'react-dom'

const url=
    "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg ";

it('Does ', () => {
    // const { container } = render(<ImagePage url={url}/>);
    const div = document.createElement('div');
ReactDOM.render(<ImagePage url={url}/>, div);
ReactDOM.unmountComponentAtNode(div) 
});
