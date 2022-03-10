import React, { useState } from "react";
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';

const Todo = () => {

    const columns = [
        { field: 'id', headerName: 'S.No', width: 100, editable: false },
        { field: 'text', headerName: 'Task', width: 500, editable: true },
        { field: 'isCompleted', headerName: 'Status', width: 250, editable: true }
    ]
    const [rows, setRows] = useState([{
        id: 1,
        text: "Unit test for todo app ",
        isCompleted: "Yet to be completed",

    }]);
    const addToDo = () => {
        const cnt = count + 1;
        setCount(cnt);
        const temp = [...rows, {
            id: count,
            text: name,
            isCompleted: "Yet to be completed"
        }];
        setRows(temp)
        setName("");
    }
    const [name, setName] = useState("");
    const [count, setCount] = useState(2);
    return (
        <div>
            <Container maxWidth="md">
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
                <br /><br /><br /><br /><br />
            </Box>
            <Grid container justifyContent="center">
                <TextField value={name}
                    onChange={(event) => setName(event.target.value)} id="filled-basic" sx={{ flexGrow: 1, alignSelf: 'flex-center', width: '50vh' }} label="Task to be done" variant="outlined" />
                &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <Button onClick={addToDo}
                    variant="contained">Save</Button>
            </Grid>
            <br /><br />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
            </Container>
        </div>
    );
}
export default Todo;