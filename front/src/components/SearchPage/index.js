import React, { useState, useEffect } from 'react';
import SearchPanel from '../SearchPanel';
import SearchList from '../SearchList';

export default function SearchPage(props) {
  // console.log('>>>>>>>>>>>', props);
  const [input, setInput] = useState('');
  const [searchListDefault, setSearchListDefault] = useState();
  const [searchList, setSearchList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setSearchList(data) 
         setSearchListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = searchListDefault.filter(search => {
      return search.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setSearchList(filtered);
  }

  useEffect( () => {
    fetchData()
  },[]);
	
  return (
    <>
      <h1>Search List</h1>
      <SearchPanel 
       keyword={input} 
       setKeyword={updateInput}
      />
      <SearchList searchList={searchList}/>
    </>
   );
}
