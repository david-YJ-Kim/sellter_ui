import {Header} from "../organisms/Header";
import * as React from "react";
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MuiTitle from "../atoms/Text/Title/MuiTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useEffect} from "react";
import {ListItem} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

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

const KeyWordTable = ({syncMethod, dto}) => {

    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={dto.rows}
                columns={dto.columns}
                pageSize={7}
                rowsPerPageOptions={[7]}
                // checkboxSelection
                onSelectionModelChange={(ids) => {
                    // console.log(ids);
                    syncMethod(ids);
                }}
            />
        </div>
    )
}
const KeyWordInfo = ({syncMethod}) => {

    const getTableData = (searchData) => {
        if (searchData === undefined) {
            return {
                rows: ItemTableRows,
                columns: ItemTableColumns
            }
        } else {
            return {
                rows: ItemTableRows,
                cols: ItemTableColumns
            }
        }

    }

    const [tableData, setTableData] = React.useState(getTableData());
    const [selectedRows, setSelectedRows] = React.useState();
    const [searchKeyWord, setSearchKeyWord] = React.useState();

    const triggerSyncData = (isKeyPRD) => {

        return syncMethod("Search Data Sync!");
    }

    const getFromTable = (tableData) => {
        setSelectedRows(tableData);
    }


    return (
        <Stack>
            <h2>{selectedRows}</h2>
            <h2>{searchKeyWord}</h2>

            <Stack direction={"row"}>
                <ArrowRightIcon/>
                <MuiTitle text={"상품 키워드 리스트"}/>
            </Stack>

            <Stack direction={"row"}>

                <TextField
                    // autoComplete="given-name"
                    name="hashList"
                    onChange={(event) => {
                        setSearchKeyWord(event.target.value)
                    }
                    }
                    required
                    // label="키워드를 입력하세요."
                />

                <Button onClick={() => {
                    triggerSyncData(false);
                }
                }>
                    조회
                </Button>
                <Button onClick={() => {
                    triggerSyncData(true);
                }
                }>
                    핵심상품조회
                </Button>
            </Stack>

            <KeyWordTable syncMethod={getFromTable} dto={tableData}/>

        </Stack>


    )
}


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


function CommentIcon() {
    return null;
}

const KeyWordItemList = ({syncMethod, data}) => {
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        syncMethod(JSON.stringify(newChecked));
    };

    console.log(data === undefined)

    if (data === undefined) {
        return <div></div>
    } else {
        return (
            <div>
                <List sx={{width: '100%', maxWidth: 560, bgcolor: 'background.paper'}}>
                    {data.map((value, index) => {
                        const labelId = `checkbox-list-label-${index}`;

                        return (
                            <ListItem
                                key={value}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="comments">
                                        <CommentIcon/>
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{'aria-labelledby': labelId}}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`Title :  ${value.title}`}/>
                                    <ListItemText id={labelId} primary={`IMG ${value.img}`}/>
                                    <ListItemText id={labelId} primary={`DESC ${value.description}`}/>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        )
    }
}
const KeyWordItemInfo = ({dto}) => {


    const [listData, setListData] = React.useState(dto);
    const [clickedList, setClickedList] = React.useState();
    const countItems = listData === undefined ? 0 : listData.length;

    const getFromList = (listData) => {
        setClickedList(listData);
    }

    // useEffect(() => {
    //     setListData(getListData)
    // }, [dto]);


    return (
        <div>
            <h2>키워드별 상품 리스트 : {countItems}개</h2>
            <Button
                onClick={(event) => {
                    event.preventDefault();
                    alert(`삭제 버튼 클릭됨! 삭제 대상 : ${JSON.stringify(clickedList)}`)
                }
                }
            >
                상품 삭제
            </Button>
            <h2>{JSON.stringify(dto)}</h2>
            <KeyWordItemList syncMethod={getFromList} data={listData}/>

        </div>
    )
}


const ItemManagementArea = () => {

    const [searchData, setSearchData] = React.useState();
    const [selectedRows, setSelectedRows] = React.useState();

    const getFromPanel = (panelData) => {
        setSearchData(panelData);
    }

    const getListData = () => {

        console.log(JSON.stringify(searchData));
        return [
            {
                title: 'item1',
                img: '/src/img',
                description: 'Lorem ipsurn dolor sit smarte, hello world !!'
            },
            {
                title: 'item2',
                img: '/src/img',
                description: 'Lorem ipsurn dolor sit smarte, hello world !!'
            },
            {
                title: 'item3',
                img: '/src/img',
                description: 'Lorem ipsurn dolor sit smarte, hello world !!'
            }
        ]

    }


    return (
        <Stack direction={"row"}>
            <KeyWordInfo syncMethod={getFromPanel}/>
            <KeyWordItemInfo dto={getListData()}/>

        </Stack>
    )
}

export const ItemManagementContent = () => {
    return (
        <div>
            <Header/>
            <ItemManagementArea/>
        </div>
    )
}