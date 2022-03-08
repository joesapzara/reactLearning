import React from 'react';

const Accordion = ({ items }) => {
  const modifyItem = (item) => {
    console.log(item);
    item.text="test";
  }
  const renderedItems = items.map((item) => {
    return (
      <React.Fragment key={item.key} >
        <div className="title active" onClick={() => modifyItem(item)} >

          {item.text}
        </div>
        <div className="content active" onClick={() => modifyItem(item)} >
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
