// import React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import MuiTitle from "../atoms/Text/Title/MuiTitle";
// import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import {makeStyles} from '@material-ui/core/styles';
// import Stack from "@mui/material/Stack";
// import {styled} from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
//
// const MarketRegister = ({buttonVal, marketList}) => {
//     // console.log(buttonVal, marketList);
//
//     if (marketList.includes(buttonVal)) {
//         return <RegisteredItem>{buttonVal}</RegisteredItem>
//     } else {
//         return <Item>{buttonVal}</Item>
//     }
//
// }
//
// const Item = styled(Paper)(({theme}) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     cursor: 'pointer',
// }));
//
// const RegisteredItem = styled(Item)(({theme}) => ({
//     backgroundColor: 'yellow',
//     color: theme.palette.text.primary,
// }));
//
// const useStyles = makeStyles(theme => ({
//     clickableIcon: {
//         color: 'green',
//         '&:hover': {
//             color: 'yellow',
//         },
//     },
// }));
//
// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
// }
//
//
// const ModalStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };
//
// function BasicTabPanel(props: TabPanelProps) {
//     const {children, value, index, ...other} = props;
//     console.log(children,other);
//
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//
//     return (
//
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//
//             <Stack direction={"row"}>
//                 {/*<AddBoxRoundedIcon onClick={addBizLicense} className={classes.clickableIcon} cursor={"pointer"}/>*/}
//                 <AddBoxRoundedIcon onClick={handleOpen} cursor={"pointer"}/>
//                 <MuiTitle text={`${other.title} 추가`}/>
//             </Stack>
//
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={ModalStyle}>
//                     <Typography id="modal-modal-title" variant="h6" component="h2">
//                         {other.title} 정보 추가
//                     </Typography>
//                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                     </Typography>
//                 </Box>
//             </Modal>
//
//             {value === index && (
//                 <Box sx={{p: 3}}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }
//
// function BasicA11yProps(index: number) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }
//
//
// export const BizAccount = () => {
//
//     const classes = useStyles();
//     // const { labels, ...other } = props;
//     const labels = ['출고지', '반품지', '출고일', '택배'];
//
//     const [value, setValue] = React.useState(0);
//     const [bizLicense, setBizLicense] = React.useState('');
//     const [market, setMarket] = React.useState('');
//
//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//         setValue(newValue);
//         console.log(value, bizLicense, market)
//     };
//
//     const addBizLicense = (event) => {
//         alert("Add Biz License");
//     }
//
//     const registableMarket = ['쿠팡', 'G마켓', '네이버', '11번가', '위메프'];
//     const bizLicenseInfo = [
//         {
//             'name': '사업자1',
//             'market': ['쿠팡', '네이버']
//         },
//         {
//             'name': '사업자2',
//             'market': ['G마켓']
//         },
//         {
//             'name': '사업자3',
//             'market': ['쿠팡']
//         },
//         {
//             'name': '사업자4',
//             'market': []
//         },
//         {
//             'name': '사업자5',
//             'market': []
//         },
//     ]
//
//     return (
//         <Box sx={{
//             width: '70%',
//             justifyContent: 'center',
//             display: 'flex',
//             margin: 'auto',
//             marginTop: '15%',
//             border: 1,
//             borderColor: 'divider',
//             padding: '8px, 16px',
//             height: '500px'
//         }}>
//             <Box sx={
//                 {
//                     width: '50%',
//                     height: '500px'
//                 }
//             }>
//                 {/*Title*/}
//                 <Stack direction={"row"}>
//                     <ArrowRightIcon/>
//                     <MuiTitle text={"배송 설정"}/>
//                 </Stack>
//
//                 <Box sx={{
//                     width: '100%',
//                     minHeight: '100px'
//                 }}>
//                     <Box sx={{}}>
//                         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//                             {labels.map((title, index) => (
//                                     <Tab label={title} {...BasicA11yProps(index)} />
//                                 )
//                             )}
//                         </Tabs>
//                     </Box>
//                 </Box>
//
//
//                 <Stack direction={"row"}>
//                     <ArrowRightIcon/>
//                     <MuiTitle text={"사업자 관리"}/>
//                 </Stack>
//
//                 <Stack direction={"row"}>
//                     {/*<AddBoxRoundedIcon onClick={addBizLicense} className={classes.clickableIcon} cursor={"pointer"}/>*/}
//                     <AddBoxRoundedIcon onClick={addBizLicense} cursor={"pointer"}/>
//                     <MuiTitle text={"사업자 추가"}/>
//                 </Stack>
//
//                 {bizLicenseInfo.map((info, index) => (
//
//                     <Box>
//                         <Stack direction="row" spacing={1} sx={{marginTop: '3px'}}>
//                             <Item>{info.name}</Item>
//
//                             {registableMarket.map((name, index) => (
//                                 <a onClick={function (e) {
//                                     e.preventDefault();
//                                     setBizLicense(info.name);
//                                     setMarket(name);
//                                 }
//                                 }>
//                                     <MarketRegister buttonVal={name} marketList={info.market}/>
//                                 </a>
//                             ))}
//
//                         </Stack>
//                     </Box>
//
//                 ))
//                 }
//
//             </Box>
//
//             <Box sx={
//                 {
//                     width: '50%',
//                     height: '500px'
//                 }
//             }>
//
//                 <Stack direction={"row"}>
//                     <ArrowRightIcon/>
//                     <MuiTitle text={"설정창"}/>
//                 </Stack>
//
//                 {labels.map((title, index) => (
//                     <BasicTabPanel value={value} index={index} license={bizLicense} market={market} title={title}>
//                         설정 정보 : {title}  타켓 마켓 : {market}  사업자 : {bizLicense}
//                     </BasicTabPanel>)
//                 )}
//             </Box>
//
//         </Box>
//
//     )
// }