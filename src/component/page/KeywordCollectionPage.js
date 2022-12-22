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
import Embed from 'react-embed';

let keywordList = [];
let keywordListCursor = 0;

const KeywordCollection = () => {
    const [keyword, setKeyword] = React.useState('');
    const inputRef = useRef(null);

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

        if(keywordList.length === 0){
            alert("Please Search First.");
            return;
        }

        const stringType = e.target.value;
        const movingBack = !!stringType.startsWith('B')
        console.log(e.target.value, movingBack);

        let movingIndex = movingBack ? keywordListCursor -1 : keywordListCursor + 1;
        if(movingIndex < 0 ){
            movingIndex = 0;
        }
        if(movingIndex > keywordList.length){
            movingIndex = keywordList.length;
        }

        keywordListCursor = movingIndex;
        console.log(keywordList[movingIndex]);

        let setIndex = 0;
        if(keywordList[movingIndex] === undefined){
            if(movingBack){
                console.log("[Back] Undefined")
                setKeyword(keywordList[0]);
            }else{
                console.log("[Forward] Undefined")
                setKeyword(keywordList[keywordList.length-1]);
                setIndex = keywordList.length-1;
            }
        }else{
            console.log("MovingOkay")
            setKeyword(keywordList[movingIndex]);
            setIndex = movingIndex;
            // window.document.getElementsByTagName("input").input = "Hi";
        }
        inputRef.current.value = keywordList[setIndex];
    }

    return (
        <Box>
            <Stack direction="row" spacing={1}>
                <MuiTitle text={"상품 키워드 입력"} />

                <Stack id="keywordFrom" component="form" direction={"row"} spacing={5} noValidate onSubmit={handleSubmit} >
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
                        sx={{ mt: 3, mb: 2 }}
                    >
                        찾기
                    </Button>

                    <Button
                        onClick={keywordMovingHistory}
                        value={"Back"}
                        variant="contained"
                        sx={{ minWidth:'100px' }}
                    >
                        <ArrowLeftIcon/>Back
                    </Button>

                    <Button
                        onClick={keywordMovingHistory}
                        value={"Forward"}
                        variant="contained"
                        sx={{ minWidth:'130px' }}
                    >
                        Forward<ArrowRightIcon/>

                    </Button>

                </Stack>

                <h1>{keyword}</h1>


            </Stack>

            <iframe src={"https://ko.aliexpress.com/?gatewayAdapt=glo2kor"} />
            <iframe is="x-frame-bypass" src="https://www.naver.com/"></iframe>
            {/*<Embed url='https://www.youtube.com/watch?v=soICQ3B2kEk' />*/}
            <Embed url='https://ko.aliexpress.com/?gatewayAdapt=glo2kor' />


            <object data="https://ko.aliexpress.com/?gatewayAdapt=glo2kor"
                    width="800"
                    height="800"
                    type="text/html">
            </object>
            <embed type="text/html" src="https://www.aliexpress.com/" width="800" height="500" />
            {/*<iframe*/}
            {/*    src="https://www.aliexpress.com"*/}
            {/*    name="프레임 이름"*/}
            {/*    width="500px"*/}
            {/*    height="500px"*/}
            {/*    sandbox="allow-scripts allow-popups">*/}
            {/*    /!*iframe를 지원하지 않는 브라우저인 경우 대체정보를 제공*!/*/}
            {/*</iframe>*/}
        </Box>
    )
}

export const KeywordCollectionContent = () => {
    return (
        <div>
            <Header />
            <KeywordCollection />
        </div>
    )
}