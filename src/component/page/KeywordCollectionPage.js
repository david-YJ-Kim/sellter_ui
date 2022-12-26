import * as React from 'react';
import {Header} from "../organisms/Header";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import MuiTitle from "../atoms/Text/Title/MuiTitle";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import {useRef} from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {FormGroup, InputAdornment, Switch} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import NumberFormat, {InputAttributes} from 'react-number-format';


function BasicTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    const targetUrlList = ['https://www.aliexpress.com', 'https://www.taobao.com', 'https://www.amazon.com'];

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
                    <object data={targetUrlList[index]}
                            width="800"
                            height="800"
                            type="text/html">
                    </object>
                </Box>
            )}
        </div>
    );
}

function BasicA11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

let keywordList = [];
let keywordListCursor = 0;

const KeywordCollection = () => {
    const [keyword, setKeyword] = React.useState('');
    const [autoSearch, setAutoSearch] = React.useState(true);
    const [keywordLocation, setKeywordLocation] = React.useState('0')


    const inputRef = useRef(null);
    const formInputRef = useRef(null);

    const labels = ['AliExpress', 'Taobao', 'Amazon'];
    const [value, setValue] = React.useState(0);


    const keywordLocationChange = (event) => {
        setKeywordLocation(event.target.value);
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        formInputRef(newValue);
    };

    const autoSearchClicked = (event) => {

        setAutoSearch(!autoSearch);
        // console.log(autoSearch)
    }

    const inputFormSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);

        console.log(keywordLocation);
        alert(
            `keyword : ${keyword} 
        title keyword location :${keywordLocation}
        source origin : ${labels[value]}  
        title keyword list : ${data.get("titleKeywordList")}
        Hash List : ${data.get("hashList")}
        Start Page : ${data.get("startPage")}
        End Page : ${data.get("endPage")}
        Margin Percent : ${data.get("marginPercent")}
        Marget Won : ${data.get("marginWon")}
         
        `);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log(data.get('keyword'));

        setKeyword(data.get('keyword'))
        keywordList.push(data.get('keyword'));
        keywordListCursor = keywordList.length;
        console.log(keywordList)
        event.target.reset();
    };

    const keywordMovingHistory = (e) => {

        if (keywordList.length === 0) {
            alert("Please Search First.");
            return;
        }

        const stringType = e.target.value;
        const movingBack = !!stringType.startsWith('B')
        console.log(e.target.value, movingBack);

        let movingIndex = movingBack ? keywordListCursor - 1 : keywordListCursor + 1;
        if (movingIndex < 0) {
            movingIndex = 0;
        }
        if (movingIndex > keywordList.length) {
            movingIndex = keywordList.length;
        }

        keywordListCursor = movingIndex;
        console.log(keywordList[movingIndex]);

        let setIndex = 0;
        if (keywordList[movingIndex] === undefined) {
            if (movingBack) {
                console.log("[Back] Undefined")
                setKeyword(keywordList[0]);
            } else {
                console.log("[Forward] Undefined")
                setKeyword(keywordList[keywordList.length - 1]);
                setIndex = keywordList.length - 1;
            }
        } else {
            console.log("MovingOkay")
            setKeyword(keywordList[movingIndex]);
            setIndex = movingIndex;
            // window.document.getElementsByTagName("input").input = "Hi";
        }
        inputRef.current.value = keywordList[setIndex];
        formInputRef.current.value = keywordList[setIndex];
        console.log(keywordList)
    }

    return (
        <Box sx={{
            justifyContent: 'center',
            display: 'flex',
            margin: 'auto',
            marginTop: '5%',
            border: 1,
            borderColor: 'divider',
            padding: '8px, 16px',
        }}>

            <Box sx={{width: '60%'}}>
                <Stack direction="row" spacing={1}>
                    <MuiTitle text={"상품 키워드 입력"}/>

                    <Stack id="keywordFrom" component="form" direction={"row"} spacing={5} noValidate
                           onSubmit={handleSubmit}>
                        <TextField
                            // autoComplete="given-name"
                            name="keyword"
                            required
                            fullWidth
                            id="keyword"
                            label="키워드를 입력하세요."
                            autoFocus
                            inputRef={inputRef}

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
                            onClick={keywordMovingHistory}
                            value={"Back"}
                            variant="contained"
                            sx={{minWidth: '100px'}}
                        >
                            <ArrowLeftIcon/>Back
                        </Button>

                        <Button
                            onClick={keywordMovingHistory}
                            value={"Forward"}
                            variant="contained"
                            sx={{minWidth: '130px'}}
                        >
                            Forward<ArrowRightIcon/>

                        </Button>

                    </Stack>

                </Stack>

                <Box sx={{}}>
                    <Box sx={{}}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            {labels.map((title, index) => (
                                    <Tab label={title} {...BasicA11yProps(index)} />
                                )
                            )}
                        </Tabs>
                    </Box>
                    {labels.map((title, index) => (
                        <BasicTabPanel value={value} index={index}>
                            {title}
                        </BasicTabPanel>)
                    )}
                </Box>

            </Box>

            <Box sx={{
                // width:'40%'
            }}
                 component="form" noValidate onSubmit={inputFormSubmit}
            >
                <Stack spacing={1}>

                    {/*상품키워드*/}
                    <Stack direction={"row"}>
                        <MuiTitle text={"상품 키워드"}/>
                        <TextField
                            // autoComplete="given-name"
                            name="keyword"
                            required
                            fullWidth
                            id="keyword"
                            value={keyword}
                            // label="키워드를 입력하세요."
                        />
                    </Stack>

                    {/*제목 키워드*/}
                    <Stack>
                        <Stack direction={"row"}>
                            <ArrowRightIcon/>
                            <MuiTitle text={"제목 키워드"}/>
                        </Stack>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={keywordLocation}
                                onChange={keywordLocationChange}
                            >
                                <FormControlLabel value="0" control={<Radio/>} label="맨앞"/>
                                <FormControlLabel value="1" control={<Radio/>} label="랜덤"/>
                                <FormControlLabel value="2" control={<Radio/>} label="1번 맨앞, 나머지 랜덤"/>
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            // autoComplete="given-name"
                            required
                            fullWidth
                            name="titleKeywordList"
                            // label="키워드를 입력하세요."
                        />
                    </Stack>

                    {/*해시태그*/}
                    <Stack>
                        <Stack direction={"row"}>
                            <ArrowRightIcon/>
                            <MuiTitle text={"해시 태그"}/>
                            <FormControlLabel
                                control={<Switch defaultChecked/>}
                                label="자동 검색 설정"
                                onChange={autoSearchClicked}
                                labelPlacement="start"
                            />
                        </Stack>
                        <TextField
                            // autoComplete="given-name"
                            name="hashList"
                            required
                            fullWidth
                            // label="키워드를 입력하세요."
                        />
                    </Stack>

                    {/*수집 페이지 설정*/}
                    <Stack>
                        <Stack direction={"row"}>
                            <ArrowRightIcon/>
                            <MuiTitle text={"수집 페이지 설정"}/>
                        </Stack>
                        <Stack direction={"row"}>
                            <Stack>
                                <MuiTitle text={"시작 페이지"}/>
                                <TextField
                                    // id="outlined-number"
                                    label="Number"
                                    type="number"
                                    defaultValue={"1"}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    name="startPage"
                                />

                            </Stack>

                            <Stack>
                                <MuiTitle text={"끝 페이지"}/>
                                <TextField
                                    // id="outlined-number"
                                    label="Number"
                                    type="number"
                                    defaultValue={"3"}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    name="endPage"
                                />
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack>
                        <Stack direction={"row"}>
                            <ArrowRightIcon/>
                            <MuiTitle text={"마진"}/>
                        </Stack>
                        <TextField
                            // id="outlined-number"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                            }}
                            label="Number"
                            type="number"
                            defaultValue={"50"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="marginPercent"
                        />
                    </Stack>

                    <Stack>
                        <Stack direction={"row"}>
                            <ArrowRightIcon/>
                            <MuiTitle text={"기본 마진"}/>
                        </Stack>
                        <TextField
                            // id="outlined-number"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">원</InputAdornment>,
                            }}
                            label="Number"
                            type="number"
                            defaultValue={"10000"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="marginWon"

                        />
                    </Stack>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        키워드 저장
                    </Button>
                </Stack>

            </Box>
        </Box>

    )
}

export const KeywordCollectionContent = () => {
    return (
        <div>
            <Header/>
            <KeywordCollection/>
        </div>
    )
}