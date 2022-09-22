import 'jest-dom/extend-expect';
import 'react-testing-libary/cleanup-after-each';
import React from "react";
import {fireEvent, render} from '@testing-library/react';
import DdlList from '../DdlPage';
import ImagePage from '../ImagePage';

const url=
    "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg ";

it('Does ', () => {
    // const { container } = render(<ImagePage url={url}/>);
    const div = document.createElement('div');
ReactDOM.render(<ImagePage url={url}/>, div);
ReactDOM.unmountComponentAtNode(div) 
});
