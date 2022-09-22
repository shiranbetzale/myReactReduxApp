import React from "react";
import {fireEvent, render} from '@testing-library/react';
import DdlList from '../DdlPage';

// it('Does click event', () => {
//     const { container } = render(<DdlList />);
//     fireEvent.click(container.querySelector('.btn'));
// });

it('Does click event', () => {
    const { getBtTestId } = render(  
    <DdlList/>);
expect(getByTestId('btn')).toHaveTextContent("submit");
});


// it('Does click event', () => {
//     const { container } = render(<DdlList />);
//     fireEvent.click(container.querySelector('.btn'));
// });

