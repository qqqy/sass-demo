import React from "react";
import './SassComp.scss';

export default function(){
  return (
    <div id="container">
      <header id="header">
        {buildDivs(10,"header-element")}
      </header>
      <main>
        {buildSections(["test" , "test" , "test"] , "wrapper" , 3)}
      </main>
      <footer>

      </footer>
    </div>
  )
}

function buildDivs(quantity, classString){
  const newArr = [];
  for(let i = 0; i < quantity; i++){
    newArr.push(<div className={classString}>This is the content of the div with the classname {classString}</div>)
  }
  return newArr
}

function buildSections(classArray, classString, innerQuantity){
  const newArr = [];
  for(let i = 0 ; i < classArray.length ; i++){
    newArr.push(<div className={classString}>
      {buildDivs(innerQuantity , classArray[i])}
    </div>)
  }
  return newArr
}