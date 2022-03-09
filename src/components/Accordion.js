import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const modifyItem = (item) => {
    console.log(item);
    item.text = "test";
    item.isCompleted=!item.isCompleted;
    color = (item.isCompleted==true?'green':'red')
  }
 var color="red";
  
  const renderedItems = items.map((item) => {
    color = (item.isCompleted==true?'green':'red')
    return (
      <React.Fragment key={item.key} >
        <div className="title active" onClick={() => modifyItem(item)} >

          {item.text}
        </div>
        {/* {item.isCompleted == true ? <p>Completed!</p> : <p>Not yet completed</p>} */}
        <div className="content active" onClick={() => modifyItem(item)} >
        <p> <a className={`ui + ${color} tag label`}>Color cmpleted</a></p>
          {item.isCompleted == true &&
            <p> <a className="ui green tag label">Completed</a></p>
          }
          {item.isCompleted == false &&
            <p>  <a className="ui red tag label">Yet to be done</a></p>
          }


        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};


export default Accordion;
