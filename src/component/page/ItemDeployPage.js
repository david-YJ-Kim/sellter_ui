import * as React from 'react';
import {Header} from "../organisms/Header";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {Card, CardActions, CardContent, Switch} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MuiTitle from "../atoms/Text/Title/MuiTitle";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {BizMarketMetaInfoSample} from "../../utils/data/itemDeploy";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useEffect} from "react";


const BizMarketMetaInfoCard = ({market, bizLicense, marginRate, marginWon, autoRegi}) => {
    const [flag, setFlag] = React.useState(autoRegi)

    useEffect(() => {
        setFlag(autoRegi)
    }, [autoRegi])

    const AutoRegiInputFormHandle = () =>{
        setFlag(!flag);
    }
    const AutoRegiInputForm = ({defaultFlag}) => {
        const controlVal = () => {
            // console.log(defaultFlag)
            return defaultFlag ? <Switch defaultChecked/> : <Switch />
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
    const isRegister = (mrk)  => {
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

    return (
        <div>
            <h1>BizKeyWordPanel</h1>
            <Button onClick={() => {
                syncMethod('Sync Data');
            }
            } >
                조회
            </Button>
        </div>
    )

}
const BizKeyWordTable = ({syncMethod}) => {

    return (
        <div>
            <h1>BizKeyWordTable</h1>
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
    // BizKeyWordPanel


    // BizKeyWordTable
    return(
        <div>
            <Stack direction={"row"}>
                <ArrowRightIcon/>
                <MuiTitle text={"상품 키워드 리스트"}/>
            </Stack>
            <h1>BizKeyWordInfo</h1>
            <h1>{JSON.stringify(searchData)}</h1>
            <BizKeyWordPanel syncMethod={getFromPanel} />
            <BizKeyWordTable syncMethod={getFromTable} />
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
                    }
                    }
                >
                    변경 저장
                </Button>

                <Button
                    onClick={(event) => {
                        event.preventDefault();
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