import * as React from 'react';
import {Header} from "../organisms/Header";
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiTitle from "../atoms/Text/Title/MuiTitle";
import TextField from "@mui/material/TextField";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {InputAdornment, Switch} from "@mui/material";
import Button from "@mui/material/Button";
import moment from "@date-io/moment";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {DesktopDatePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, {Dayjs} from "dayjs";


const ItemTableColumns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'firstName', headerName: 'First name', width: 130},
    {field: 'lastName', headerName: 'Last name', width: 130},
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const ItemTableRows = [
    {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
    {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
    {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
    {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
    {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
    {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
    {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
    {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
    {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
];

const ItemTable = () => {

    const [selectedRows, setSelectedRows] = React.useState(null);
    const handleSelectRow = (ids) => {
        console.log(ids);
        setSelectedRows(ids);
    }
    return (
        <div style={{height: 400, width: '100%'}}>
            <h1>{selectedRows}</h1>
            <DataGrid
                rows={ItemTableRows}
                columns={ItemTableColumns}
                pageSize={7}
                rowsPerPageOptions={[7]}
                checkboxSelection
                onSelectionModelChange={(ids) => {
                    // console.log(ids);
                    handleSelectRow(ids);
                }}
            />
        </div>
    );
}

const ItemTablePannel = ({getStart, getEnd}) => {
    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();
    // const [startDate, setStartDate] = React.useState('');
    const handleStartDate = (newDate) => {
        setStartDate(newDate.format('YYYY-MM-DD'));
        getStart(newDate.format('YYYY-MM-DD'));
    };

    const handleEndDate = (newDate) => {
        setEndDate(newDate.format('YYYY-MM-DD'));
        getEnd(newDate.format('YYYY-MM-DD'));
    };

    return (
        <Stack direction={"row"} spacing={1}>


            <TextField
                // autoComplete="given-name"
                name="hashList"
                required
                // label="키워드를 입력하세요."
            />

            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                    label="Start Date"
                    name="startDate"
                    inputFormat="MM/DD/YYYY"
                    value={startDate}
                    onChange={handleStartDate}
                    renderInput={(params) => <TextField {...params} />}
                />

                <DesktopDatePicker
                    label="End Date"
                    name={"endDate"}
                    inputFormat="MM/DD/YYYY"
                    value={endDate}
                    onChange={handleEndDate}
                    renderInput={(params) => <TextField {...params} />}
                />

            </LocalizationProvider>



            {/*<TextField*/}
            {/*    // autoComplete="given-name"*/}
            {/*    name="endDate"*/}
            {/*    required*/}
            {/*    fullWidth*/}
            {/*    // label="키워드를 입력하세요."*/}
            {/*/>*/}

            {/*<TextField*/}
            {/*    // autoComplete="given-name"*/}
            {/*    name="searchKeyword"*/}
            {/*    required*/}
            {/*    fullWidth*/}
            {/*    // label="키워드를 입력하세요."*/}
            {/*/>*/}


            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                조회
            </Button>
        </Stack>

    )
}

export const ItemCollectionContent = () => {

    const [value, setValue] = React.useState('');

    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();

    const getStartDate = (date) => {
        setStartDate(date);
    }

    const getEndDate = (date) => {
        setEndDate(date);
    }

    const inputFormSubmit = (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
        console.log(data.get("startDate"))
        setValue(data.get("hashList"));

    }

    return (
        <div>
            <Header/>
            <h1>{value}</h1>
            <h1>{startDate}</h1>
            <h1>{endDate}</h1>

            <Box sx={{
                // width:'40%'
            }}
                 component="form" noValidate onSubmit={inputFormSubmit}
            >
                <ItemTablePannel getStart={getStartDate} getEnd={getEndDate}/>

            </Box>
            <h1>ItemCollection2</h1>
        </div>
    )
}