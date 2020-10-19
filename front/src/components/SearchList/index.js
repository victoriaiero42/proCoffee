import React from 'react';

export default function SearchList({ searchList = [] }) {
  return (
    <>
      { searchList.map((data, index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
