import React from 'react';
import './App.css';
import Navbar from './Navbar';
import data from './data.js'
import Article from './Article';


export default function App() {
  const articles= data.map(item => {
    return <Article 
              key={item.id}
              picture= {item.picture}
              title={item.title}
              country={item.country}
              googlemapsUrl={item.googlemapsUrl}
              date={item.date}
              text={item.text}/>
  }
  )
  return (
    <div>
      <Navbar/>
      {articles}
    </div>
  );
}
