import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import {shallow} from 'enzyme';


describe('SearchBox', () => {

   it('renders without crashing', () => {
     const wrapper = shallow(<SearchBox
      onSearchCityChanged={() => {}}
     />);
   });
 
   it('search by city text is displayed', () => {
 
     const value = 'mock value';
 
     const wrapper = shallow(<SearchBox
       location={value}
       onSearchCityChanged={() => {}}
     />);
 
 
     expect(wrapper.find('#searchCity').props().value).toEqual(value);
   });
 
   it('onSearchCityChanged handler is called when search value changes', () => {
 
     const handleSearchCityChanged = jest.fn();
 
     const wrapper = shallow(<SearchBox
      onSearchCityChanged={handleSearchCityChanged}
     />);
 
     const value = 'mock value2';
 
     wrapper.find('#searchCity').simulate('change', {value});
 
     expect(handleSearchCityChanged).toHaveBeenCalledWith(value);
 
   });
 
   it('search by keyword text is displayed', () => {
 
    const value = 'mock value';

    const wrapper = shallow(<SearchBox
      query={value}
      onSearchQueryChanged={() => {}}
    />);


    expect(wrapper.find('#searchKeyword').props().value).toEqual(value);
  });

  it('onSearchQueryChanged handler is called when search value changes', () => {

    const handleSearchQueryChanged = jest.fn();

    const wrapper = shallow(<SearchBox
      onSearchQueryChanged={handleSearchQueryChanged}
    />);

    const value = 'mock value2';

    wrapper.find('#searchKeyword').simulate('change', {value});

    expect(handleSearchQueryChanged).toHaveBeenCalledWith(value);

  });


 });
 