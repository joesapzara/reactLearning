import React, { useState } from "react";
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';


const Todo = () => {
    const columns = [
        { field: 'id', headerName: 'S.No', width: 150, editable: true },
        { field: 'text', headerName: 'Task', width: 600, editable: true },
        { field: 'isCompleted', headerName: 'Status', width: 250, editable: true }

    ]
    const [rows, setRows] = useState([{
        id: 1,
        text: "Create app with MUI",
        isCompleted: "Yet to be completed",

    }]);
    const addToDo = () => {
        const temp = [...rows, {
            id: count + 1,
            text: name,
            isCompleted: "Yet to be completed"
        }];
        setRows(temp)
    }
    const [name, setName] = useState("");
    const [count, setCount] = useState(2);
    return (
        <div>
            <Box component="form"

                noValidate
                autoComplete="off" >
                <AppBar >
                    <Toolbar>
                        <Typography align="center"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, alignSelf: 'flex-center' }}
                            variant="h6"   >
                            The To do Lists
                        </Typography>

                    </Toolbar>
                </AppBar>
                <br /><br /><br /><br /><br /><br />
            </Box>
            <TextField value={name}
                onChange={(event) => setName(event.target.value)} id="filled-basic" sx={{ flexGrow: 1, alignSelf: 'flex-center', width: '100vh' }} label="Task to be done" variant="outlined" />
            &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <Button onClick={addToDo}
                variant="contained">Save</Button>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}

                />
            </div>
        </div>

    );
}
export default Todo;