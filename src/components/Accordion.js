import React from 'react';

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
// Yet to be implemented
    function onChangeValue(event) {
      console.log(event.target.value);
    }
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
        {/* <div className="ui styled accordion">{item.isCompleted}</div> */}
        {/* <div class="ui toggle checkbox"> */}
        {/* Yet to be implemented */}
        {/* <input type="checkbox" value={item.isCompleted} onChange={onChangeValue} checked={item.isCompleted}
            name="public"></input> */}
        {/* <label>{item.isCompleted}</label> */}
        {/* </div> */}
        {/* <div className="ui fitted toggle checkbox"><input type="radio" class="hidden" value={item.isCompleted} /><label></label></div> */}
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};
function modifyItem(item) {

  console.log(item)
}

export default Accordion;
