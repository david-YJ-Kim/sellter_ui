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
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputAdornment,
    Switch
} from "@mui/material";
import Button from "@mui/material/Button";
import moment from "@date-io/moment";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {DesktopDatePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, {Dayjs} from "dayjs";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";


const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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

const ItemTable = ({dataRows, dataColumns, getSelectedRows}) => {

    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={dataRows}
                columns={dataColumns}
                pageSize={7}
                rowsPerPageOptions={[7]}
                checkboxSelection
                onSelectionModelChange={(ids) => {
                    // console.log(ids);
                    getSelectedRows(ids);
                }}
            />
        </div>
    );
}

const ItemTablePannel = ({getStart, getEnd, triggerAction}) => {

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

    const btnClicked = (event) => {
        triggerAction(event.target.value);
        // alert(`bnt clicked type : ${event.target.value}`)
    }


    return (
        <Box>
            <Stack>
                {/*1층 Row*/}
                <Stack direction={"row"}>
                    <MuiTitle text={"등록일"}/>

                </Stack>


                {/*2층 Row*/}
                <Stack direction={"row"} spacing={1}>


                    <TextField
                        // autoComplete="given-name"
                        name="hashList"
                        required
                        // label="키워드를 입력하세요."
                    />

                    {/*등록일 설정*/}
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

                    <Button
                        type="submit"
                        // fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        조회
                    </Button>

                    <MuiTitle text={"제목 글자수"}/>
                    <TextField
                        // id="outlined-number"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">자</InputAdornment>,
                        }}
                        // label="Number"
                        type="number"
                        defaultValue={"50"}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="titleWordCount"

                    />


                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button
                            onClick={btnClicked}
                            value={"DEL"}
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >키워드 삭제</Button>
                        <Button
                            onClick={btnClicked}
                            value={"COL"}
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >상품 수집
                        </Button>

                        <Button
                            onClick={btnClicked}
                            value={"EDIT"}
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            편집
                        </Button>
                    </ButtonGroup>
                </Stack>
            </Stack>
        </Box>

    )
}

const ItemCollectionArea = () => {

    const [rowData, setRowData] = React.useState(ItemTableRows);

    const [value, setValue] = React.useState('');

    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();
    const [selectedRows, setSelectedRows] = React.useState([]);

    const getSelectedRows = (rows) => {
        setSelectedRows(rows);
    }

    const getStartDate = (date) => {
        setStartDate(date);
    }

    const getEndDate = (date) => {
        setEndDate(date);
    }

    const triggerRowAction = (type) => {

        if (selectedRows.length < 1) {
            alert("Please Select Row First");
            return;
        }
        // console.log(selectedRows);
        if (type.startsWith("D")) {
            alert(`Delete bnt clicked ${selectedRows} and Type : ${type}`)
        } else if(type.startsWith("E")){
            if(selectedRows.length > 1){
                alert(`편집을 위해 1개 로우만 선택해주세요. ${selectedRows} and Type : ${type}`)
            }else{
                alert(`편집 bnt clicked ${selectedRows} and Type : ${type}`)
            }
        }else{
            alert(`Collection bnt clicked ${selectedRows} and Type : ${type}`)
        }

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
            <h1>{value}</h1>
            <h1>{startDate}</h1>
            <h1>{endDate}</h1>

            <Box sx={{}}
                 component="form"
                 noValidate
                 onSubmit={inputFormSubmit}
            >
                <ItemTablePannel
                    selectedRows={selectedRows}
                    getStart={getStartDate}
                    getEnd={getEndDate}
                    triggerAction={triggerRowAction}
                />

            </Box>

            <ItemTable dataRows={rowData} dataColumns={ItemTableColumns} getSelectedRows={getSelectedRows}/>
        </div>
    )
}


function BasicTabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {

    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const FormDialog = (type, row) => {
    console.log(type, row);


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}

const BanWordArea = ({banWordList, currentMode, syncBandMode}) => {

    const [searchWord, setSearchWord] = React.useState();
    const [banMode, setBandMode] = React.useState(currentMode);
    const [selectedRows, setSelectedRows] = React.useState([]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getSelectedRows = (rows) => {
        setSelectedRows(rows);
    }
    const handleChange = (event) => {
        setBandMode(event.target.value)
        syncBandMode(event.target.value)
    };

    const EditWordModal = ({type, row}) =>{
        // return <FormDialog type={type} row={row}/>

        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ModalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        정보 편집
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        데이터 타입 : {type}
                        Row ID: {row}
                    </Typography>
                </Box>
            </Modal>
        )

    }

    return (

        <Stack>
            <Stack direction={"row"}>

                <MuiTitle text={`${banWordList[banMode]}관리`}/>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={banMode}
                    label="mode"
                    onChange={handleChange}
                >
                    <MenuItem value={0}>{banWordList[0]}</MenuItem>
                    <MenuItem value={1}>{banWordList[1]}</MenuItem>
                    <MenuItem value={2}>{banWordList[2]}</MenuItem>
                </Select>

                <Button
                    onClick={(event) => {
                        alert(`Do Search Word Type : ${banWordList[banMode]}`);

                    }
                    }>
                    전체조회
                </Button>

                <Button
                    onClick={(event) => {
                        alert(`전체 엑설 다운로드 Word Type : ${banWordList[banMode]}`);
                    }}
                >
                    전체 엑셀 다운로드
                </Button>

                <Button
                    onClick={(event) => {
                        alert(`전체 엑설 업로드 Word Type : ${banWordList[banMode]}`);
                    }}
                >
                    전체 엑셀 업로드
                </Button>
            </Stack>

            <Stack id="keywordFrom" component="form" direction={"row"} noValidate
                   onSubmit={(event) => {
                       event.preventDefault();
                       const data = new FormData(event.currentTarget);
                       console.log(event.target);

                       // if (btnType.startsWith("D")) {
                       //     alert(`Delete Word ${data.get("searchWord")}`)
                       //     return
                       // }
                       alert(`Search With Word ${data.get("searchWord")}  with ${banWordList[banMode]}`)
                   }}>
                <TextField
                    // autoComplete="given-name"
                    name="searchWord"
                    required
                    // fullWidth
                    id="searchWord"
                    label="키워드를 입력하세요."
                    autoFocus
                    onChange={(event) => {
                        setSearchWord(event.target.value);
                    }
                    }

                    // value={keyword}
                />
                <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    찾기
                </Button>
                <Button
                    value={"DEL"}
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    onClick={(event) => {
                        alert(`Add Data ${searchWord} with ${banWordList[banMode]}`)
                    }
                    }
                >
                    추가
                </Button>
                <Button
                    value={"DEL"}
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    onClick={(event) => {
                        alert(`[${banWordList[banMode]}] Delete Data Selected Rows. ${selectedRows}`)
                    }
                    }
                >
                    선택삭제
                </Button>
                <Button
                    value={"EDIT"}
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    onClick={(event) => {
                        if (selectedRows.length === 1) {
                            handleOpen();
                        } else {
                            if(selectedRows.length === 0){
                                alert(`[${banWordList[banMode]}] 편집을 위해 로우를 선택해 주세요. Selected Rows. ${selectedRows}`)
                            }else{
                                alert(`[${banWordList[banMode]}] 편집은 하나의 로우만 선택해 주세요. Selected Rows. ${selectedRows}`)
                            }

                        }
                    }
                    }
                >
                    편집
                </Button>
            </Stack>

            <ItemTable
                dataRows={ItemTableRows}
                dataColumns={ItemTableColumns}
                getSelectedRows={getSelectedRows}
            />

        <EditWordModal type={banWordList[banMode]} row={selectedRows}/>


        </Stack>
    )
}

export const ItemCollectionContent = () => {

    const banWordList = ['금지어', '제외어', '대체어'];
    const [value, setValue] = React.useState(3);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getBandMode = (mode) => {
        console.log(mode)
        setValue(mode);
    }


    return (
        <div>
            <Header/>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label={banWordList[0]} {...a11yProps(0)} />
                <Tab label={banWordList[1]} {...a11yProps(1)} />
                <Tab label={banWordList[2]} {...a11yProps(2)} />
                <div hidden={true}>
                    <Tab label="" {...a11yProps(3)} />
                </div>
            </Tabs>

            <BasicTabPanel value={value} index={0}>
                <BanWordArea currentMode={0} banWordList={banWordList} syncBandMode={getBandMode}/>
            </BasicTabPanel>
            <BasicTabPanel value={value} index={1}>
                <BanWordArea currentMode={1} banWordList={banWordList} syncBandMode={getBandMode}/>
            </BasicTabPanel>
            <BasicTabPanel value={value} index={2}>
                <BanWordArea currentMode={2} banWordList={banWordList} syncBandMode={getBandMode}/>
            </BasicTabPanel>
            <BasicTabPanel value={value} index={3}>
                <ItemCollectionArea/>
            </BasicTabPanel>
        </div>
    )
}