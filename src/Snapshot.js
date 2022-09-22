import App from "./App";

it('renders list with one row', async () => {
    const fetchDogList = jest.fn(() => new Promise(resolve => resolve(data)));
    const wrapper = mount(<App fetchProductList={fetchDogList}/>);
    wrapper.update();
    
    expect(wrapper).toMatchSnapshot();
 });
 
 
//  // Traditional way
//  it('renders list with one row without snapshot', async () => {
//     const fetchProductList = jest.fn(() => new Promise(resolve => resolve(data)));
//     const wrapper = mount(<ProductsComponent fetchProductList={fetchProductList}/>);
//     wrapper.update();
    
//     expect(wrapper.find('h1').length).toBe(1);              
//     expect(wrapper.find('h1').text()).toBe('List of customers');           
//     expect(wrapper.find('button').length).toBe(1);    
//     expect(wrapper.find('button').text()).toBe('View customer');     
//     expect(wrapper.find('ul').children().length).toBe(5);
//  });