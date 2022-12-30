import * as React from 'react';
import {Header} from "../organisms/Header";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import TextField from "@mui/material/TextField";
import MuiTitle from "../atoms/Text/Title/MuiTitle";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
    bizLicenseSample,
    marketSample,
    SMOrderTableColumnSample,
    SMOrderTableRowSample
} from "../../utils/data/itemDeploy";
import {DataGrid} from "@mui/x-data-grid";

const SMDashBoardItem = ({dto}) => {

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    {dto.kor}
                </Typography>
                <Typography variant="h3" component="div">
                    {dto.count}건
                </Typography>
            </CardContent>
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

const SMDashBoard = ({dto}) => {

    return (
        <div>
            <Stack direction={"row"}>
                {dto.map((obj, index) => (
                    <SMDashBoardItem dto={obj}/>
                ))}

            </Stack>

        </div>
    )

}

const OrderTable = ({dto}) => {

    const [selectedRows, setSelectedRows] = React.useState([]);

    const getTableData = () => {
        console.log(dto === undefined)
        return {
            row : dto === undefined ? '' : SMOrderTableRowSample,
            col : SMOrderTableColumnSample
        }
    }

    return (

        <div>
            <h2>{JSON.stringify(dto)}</h2>
            <Button
                onClick={(event) => (
                    alert(`발송 처리 선택된 Row : ${selectedRows}`)
                )}
            >
                발송처리
            </Button>
            <Button onClick={(event) => (
                alert(`발송정보일괄등록 선택된 Row : ${selectedRows}`)
            )}
            >
                발송정보일괄등록
            </Button>


            <div style={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={getTableData().row}
                    columns={getTableData().col}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    checkboxSelection
                    onSelectionModelChange={(ids) => {
                        // console.log(ids);
                        setSelectedRows(ids);
                    }}
                />
            </div>

        </div>
    )
}

const OrderTablePanel = ({syncMethod}) => {

    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();
    const [bizLicense, setBizLicense] = React.useState(0);
    const [market, setMarket] = React.useState(0);

    const handleSearchButton = () => {
        const data = {
            startDate: startDate,
            endDate: endDate,
            bizLicense: bizLicenseSample[bizLicense],
            market: marketSample[market]
        };
        syncMethod(data);
    }

    const handleStartDate = (newDate) => {
        setStartDate(newDate.format('YYYY-MM-DD'));
    };

    const handleEndDate = (newDate) => {
        setEndDate(newDate.format('YYYY-MM-DD'));
    };

    return (
        <div>
            <Stack direction={"row"} spacing={2}>

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

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bizLicense}
                    label="mode"
                    onChange={(event) => {
                        setBizLicense(event.target.value);
                    }
                    }
                >
                    {bizLicenseSample.map((obj, index) => (
                        <MenuItem value={index}>{obj.name}</MenuItem>
                    ))}
                </Select>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={market}
                    label="mode"
                    onChange={(event) => {
                        setMarket(event.target.value);
                    }
                    }
                >
                    {marketSample.map((name, index) => (
                        <MenuItem value={index}>{name}</MenuItem>
                    ))}
                </Select>


                <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    onClick={handleSearchButton}
                >
                    조회
                </Button>

            </Stack>
        </div>
    )
}
const SMOrderTableSection = () => {

    const [searchData, setSearchData] = React.useState();

    const getFromPanel = (data) => {
        setSearchData(data);
    }


    return (
        <div>
            {/*TablePanel*/}
            <OrderTablePanel syncMethod={getFromPanel}/>

            {/*OrderTable*/}
            <OrderTable dto={searchData}/>

        </div>
    )
}
const SalesManagementArea = () => {

    const getDashBoardData = () => {

        return [
            {
                count: 150,
                kor: '신규주문',
                title: 'newOrder'
            },
            {
                count: 180,
                title: 'readyForDeparture',
                kor: '발송대기'
            },
            {
                count: 12,
                title: 'delivering',
                kor: '배송중'
            },
            {
                count: 120,
                title: 'comDelivering',
                kor: '배송완료',
            },
            {
                count: 20,
                title: 'refundETC',
                kor: '반품/취소/교환'
            },
            {
                count: 12,
                title: 'cs',
                kor: '고객문의'
            }
        ]
    }

    return (
        <div>
            {/*SMDashBoard*/}
            <SMDashBoard dto={getDashBoardData()}/>

            {/*SMOrderTable*/}
            <SMOrderTableSection/>

        </div>

    )

}

export const SaleManagementContent = () => {
    return (
        <div>
            <Header/>
            <SalesManagementArea/>
        </div>
    )
}