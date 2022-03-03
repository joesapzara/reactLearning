import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Accordion from "./components/Accordion";


const Layout = () => {
    const todoValue = "";
    const count = 2;

    const tdata = [
        {
            text: "Learn about React",
            isCompleted: false,
            key: 0
        },
        {
            text: "Meet friend for lunch",
            isCompleted: true,
            key: 1
        },
        {
            text: "Build really cool todo app",
            isCompleted: false,
            key: 2
        }
    ]
    const [name, setName] = useState("");

    const [todo, setTODO] = React.useState([
        {
            text: "Learn about React",
            isCompleted: false,
            key: 0
        },
        {
            text: "Meet friend for lunch",
            isCompleted: true,
            key: 1
        },
        {
            text: "Build really cool todo app",
            isCompleted: false,
            key: 2
        }
    ]);

    return (

        <div>
            <div className="ui celled grid">
                <div className="two wide column">

                </div>
                <div className="twelve wide column">
                    <center>
                        <div className="ui inverted segment">
                            <center><h4 className="ui teal inverted header">To-Do Lists</h4></center></div>
                        <div>
                            <center>   <Accordion items={todo} /></center>
                        </div>
                    </center>
                    <span> </span>
                    <center>

                        <div className="ui input focus">
                            <center> <input type="text" value={name}
                                onChange={(e) => setName(e.target.value)} /> </center>
                        </div>
                        <span> </span>
                        <button className="ui primary button" onClick={addToDo} >
                            Add
                        </button>
                    </center>

                </div>
                <div className="two wide column">
                </div>

            </div>
        </div>
    )


    function addToDo(event) {
        setTODO([...todo, {
            text: name,
            isCompleted: false,
            key: count + 1
        }])
        setName("");
        event.preventDefault();
    }
}

export default Layout;

//Take react component and show it
         //   ReactDOM.render(<App />, document.querySelector('#root'))