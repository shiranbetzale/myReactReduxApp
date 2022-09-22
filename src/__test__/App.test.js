import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import mockFetch from "../mocks/mockFetch";

const params= {
  nameOfImage:["https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg ",
  "https://images.dog.ceo/breeds/cattledog-australian/IMG_5177.jpg",
  ],
  nameDog:'hound',
  dogs:['hound'],
  subDogs:['blood'],
  subNameDog:'blood',
  handleChange:console.log("ff"), 
  handleChangeSubDogs: console.log("ff"), 
  handleChangeNumOfImages :console.log("ff"), 
}


it('ddd',()=>{
const div = document.createElement('div');
ReactDOM.render(<App {...params} />, div);
ReactDOM.unmountComponentAtNode(div) 
});


// beforeEach(() => {
//    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
// })

// afterEach(() => {
//    jest.restoreAllMocks()
// });

// test('renders the landing page', () => {
//   render(<App />);
  
//   expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
//   expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
//   expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
//   expect(screen.getByRole("img")).toBeInTheDocument();
// });

// const links = [
//   { text: 'Home', location: "/" },
//   { text: 'dog1', location: "/dog1" },
//   { text: 'dog2', location: "/dog2" },
// ];

// // test.each(links)(
// //   (link) => {
// //     render(<App />);
// //     const linkDom = screen.getByText(link.text); 
		
// //     expect(linkDom).toHaveAttribute("href", link.location);
// //   }
// // );

// test('Check if have link to home page', () => {
//     render(<App />);
//     const logoDom = screen.getByTestId(/homeLink/); 
//     expect(logoDom).toHaveAttribute("href", "/"); 

// });


