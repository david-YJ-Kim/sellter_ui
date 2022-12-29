import * as React from 'react';
import {useEffect} from 'react';
import {Header} from "../organisms/Header";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {Card, CardActions, CardContent, FormGroup, Switch} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MuiTitle from "../atoms/Text/Title/MuiTitle";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {BizMarketMetaInfoSample} from "../../utils/data/itemDeploy";
import FormControlLabel from "@mui/material/FormControlLabel";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";


const BizMarketMetaInfoCard = ({market, bizLicense, marginRate, marginWon, autoRegi}) => {
    const [flag, setFlag] = React.useState(autoRegi)

    useEffect(() => {
        setFlag(autoRegi)
    }, [autoRegi])

    const AutoRegiInputFormHandle = () => {
        setFlag(!flag);
    }
    const AutoRegiInputForm = ({defaultFlag}) => {
        const controlVal = () => {
            // console.log(defaultFlag)
            return defaultFlag ? <Switch defaultChecked/> : <Switch/>
        }

        return <FormControlLabel
            control={controlVal(defaultFlag)}
            value={flag}
            label="등록 설정"
            onChange={AutoRegiInputFormHandle}
            labelPlacement="start"
        />

    }

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {bizLicense}
                </Typography>
                <Typography variant="h5" component="div">
                    {market}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    <AutoRegiInputForm defaultFlag={flag}/>
                    <br/>
                    마진율:{marginRate}%
                    <br/>
                    필수 마진(원){marginWon} 원
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br/>
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    );

    return (
        <Box sx={{minWidth: 275}}>
            <Card variant="outlined">
                {card}
            </Card>
        </Box>
    )
}

const BizMarketMetaInfoStack = ({metaData, syncData, bizLicense, defualtMarketList}) => {

    const info = metaData[bizLicense];
    const isRegister = (mrk) => {
        return Object.keys(info).includes(mrk);
    }

    return (
        <Stack direction={"row"}>
            {defualtMarketList.map((market, index) => (
                <BizMarketMetaInfoCard
                    market={market}
                    bizLicense={info.bizLicense}
                    marginRate={isRegister(market) ? info[market].marginRate : info.marginRate}
                    marginWon={isRegister(market) ? info[market].marginWon : info.marginWon}
                    autoRegi={isRegister(market) ? info[market].autoRegi : false}
                />
            ))}

        </Stack>
    )

}

const BizKeyWordPanel = ({syncMethod}) => {

    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();
    const [unRegiFlag, setUnRegiFlag] = React.useState(false);
    const [searchKeyWord, setSearchKeyWord] = React.useState();

    const triggerSyncData = (isKeyPRD) => {

        if (startDate === undefined || endDate === undefined) {
            alert("날짜를 날지정해주세ㅇ.ㅇ");
            return;
        }

        let dto = {
            startDate: startDate,
            endDate: endDate,
            unRegiFlag: unRegiFlag,
            isKeyPRD: isKeyPRD,
            searchKeyWord
        }

        return syncMethod(dto);
    }

    const handleStartDate = (newDate) => {
        setStartDate(newDate.format('YYYY-MM-DD'));
    };

    const handleEndDate = (newDate) => {
        setEndDate(newDate.format('YYYY-MM-DD'));
    };

    return (
        <div>
            <h1>수집일</h1>
            {/*등록일 설정*/}
            <Stack direction={"row"}>

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

                {/*미등록 상품만*/}
                <FormGroup>
                    <FormControlLabel onClick={(event) => {
                        setUnRegiFlag(!unRegiFlag);
                    }} control={<Checkbox/>} label="미등록 상품만"/>
                </FormGroup>


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
                <Button onClick={() => {
                    alert("대상 마켓 삭제..? 란 무엇인가.");
                }
                }>
                    대상 마켓 삭제
                </Button>
                <Button onClick={() => {
                    alert("대상 마켓 업로드..? 란 무엇인가.");
                }
                }>
                    대상 마켓 업로드
                </Button>
            </Stack>
        </div>
    )

}
const BizKeyWordTable = ({syncMethod, dto}) => {

    return (
        <div>
            {/*<h3>{JSON.stringify(dto)}</h3>*/}
            <div style={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={dto.rows}
                    columns={dto.columns}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    checkboxSelection
                    onSelectionModelChange={(ids) => {
                        // console.log(ids);
                        syncMethod(ids);
                    }}
                />
            </div>
        </div>
    )
}
const BizKeyWordInfo = ({metaData, bizLicense}) => {

    const [searchData, setSearchData] = React.useState();
    const [selectedRows, setSelectedRows] = React.useState();

    const getFromPanel = (panelData) => {
        setSearchData(panelData);
    }
    const getFromTable = (tableData) => {
        setSelectedRows(tableData);
    }

    const getTableData = (panelData) => {

        return {
            rows: ItemTableRows,
            columns: ItemTableColumns
        };

        // return panelData === undefined ? "Init No Data are transfered" : panelData.searchKeyWord + "HelloWorld";
    }

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

    return (
        <div>
            <Stack direction={"row"}>
                <ArrowRightIcon/>
                <MuiTitle text={"상품 키워드 리스트"}/>
            </Stack>
            <h1>BizKeyWordInfo : {bizLicense}</h1>
            <h1>{JSON.stringify(searchData)}</h1>
            <h1>SelctedRows : {selectedRows}</h1>
            <BizKeyWordPanel syncMethod={getFromPanel}/>
            <BizKeyWordTable syncMethod={getFromTable} dto={getTableData(searchData)}/>
        </div>

    )
}

const ItemDeployArea = ({bizMarketMetaInfo, defaultMarketList}) => {

    const [data, setData] = React.useState(bizMarketMetaInfo);
    const [bizLicense, setBizLicense] = React.useState('0');

    const getDataFromChild = (data) => {
        setData(data);
    }

    return (
        <div>
            <Stack direction={"row"}>
                <ArrowRightIcon/>
                <MuiTitle text={"사업자 선택"}/>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bizLicense}
                    label="mode"
                    onChange={(event) => {
                        setBizLicense(event.target.value)
                    }}
                >
                    {bizMarketMetaInfo.map((obj, index) => (
                            <MenuItem id={index} value={index}>{obj.bizLicense}</MenuItem>
                        )
                    )}
                </Select>
                <Button
                    onClick={(event) => {
                        event.preventDefault();
                        alert("변경 데이터 저장 Query 수행 " + bizLicense)
                    }
                    }
                >
                    변경 저장
                </Button>

                <Button
                    onClick={(event) => {
                        event.preventDefault();
                        alert("요거는 어떻게 처리해야할까... 다시 랜더링 하면 될라나..?")
                    }
                    }
                >
                    초기화
                </Button>
            </Stack>

            <BizMarketMetaInfoStack
                metaData={data}
                syncData={getDataFromChild}
                bizLicense={bizLicense}
                defualtMarketList={defaultMarketList}
            />

            <BizKeyWordInfo
                metaData={data}
                bizLicense={bizLicense}
            />


        </div>
    )
}
export const ItemDeployContent = () => {

    const metaInfoSample = BizMarketMetaInfoSample;

    const bizLicenseList = [
        '사업자1',
        '사업자2',
        '사업자3'
    ]
    const defaultMarketList = [
        '쿠팡',
        '네이버',
        '11번가',
        'G마켓',
        '옥션',
        '인터파크'
    ]
    return (
        <div>
            <Header/>
            <ItemDeployArea bizMarketMetaInfo={metaInfoSample} defaultMarketList={defaultMarketList}/>
        </div>
    )
}