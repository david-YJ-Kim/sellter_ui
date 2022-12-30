import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";

export const BizMarketMetaInfoSample = [

    {
        'bizLicense': 'Plexter',
        'marginRate': '50',
        'marginWon': '12000',
        '쿠팡': {
            'autoRegi': true,
            'marginRate': '45',
            'marginWon': '12000',
        },
        '11번가': {
            'autoRegi': true,
            'marginRate': '75',
            'marginWon': '12000',
        },
        '옥션': {
            'autoRegi': true,
            'marginRate': '50',
            'marginWon': '12000',
        }
    },
    {
        'bizLicense': '마리와직구',
        'marginRate': '72',
        'marginWon': '18500',
        '쿠팡': {
            'autoRegi': true,
            'marginRate': '72',
            'marginWon': '18500',
        },
        '인터파크': {
            'autoRegi': true,
            'marginRate': '72',
            'marginWon': '18500',
        },
        '옥션': {
            'autoRegi': true,
            'marginRate': '50',
            'marginWon': '12000',
        }
    },
    {
        'bizLicense': 'RichMan',
        'marginRate': '42',
        'marginWon': '10000',
        '11번가': {
            'autoRegi': true,
            'marginRate': '42',
            'marginWon': '10000',
        },
        'G마켓': {
            'autoRegi': true,
            'marginRate': '42',
            'marginWon': '10000',
        }
    },
]

export const bizLicenseSample = [
    {
        'name': '사업자1',
        'market': ['쿠팡', '네이버']
    },
    {
        'name': '사업자2',
        'market': ['G마켓']
    },
    {
        'name': '사업자3',
        'market': ['쿠팡']
    },
    {
        'name': '사업자4',
        'market': []
    },
    {
        'name': '사업자5',
        'market': []
    },
]

export const marketSample = ['쿠팡', 'G마켓', '네이버', '11번가', '위메프'];

export const dataTableRowSample = [
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


export const dataTableColumnSample = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'firstName', headerName: 'First name', width: 130},
    {field: 'lastName', headerName: 'Last name', width: 130},
    {field: 'age',headerName: 'Age',type: 'number',width: 90,},
    {field: 'fullName',headerName: 'Full name',description: 'This column has a value getter and is not sortable.',
        sortable: false,width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

// SM = SaleManagement
export const SMOrderTableRowSample = [

    {id: 1, status: '신규주문', marketPrdCode: '1057522156', productId: null, orderTimeStamp: '2022-12-03', marketAccount: '와우프렌즈_인터파크',
        quantity:2, amount:44200,deliveryFee:3000,sourcingOrigin:'',productCost:'',thirdPartyFee:'',
        deliveryAgent:'대한통운',deliveryCode:'',shippingCode:'',shippingCodeFlag:'',receiverNM:'준여부',
        receiverCel:'',receiverTel:'',productTitle:'마이크로 SD6드 6테라바이트' ,optional:'',postalCode:'0326',address:'',
        deliveryMemo:'',buyerNM:'김연준',buyerCel:'',buyerTel:'',orderCode:'',CSMemo:''
    },
    {id: 2, status: '신규주문', marketPrdCode: '1057522156', productId: null, orderTimeStamp: '2022-12-03', marketAccount: '와우프렌즈_인터파크',
        quantity:2, amount:44200,deliveryFee:3000,sourcingOrigin:'',productCost:'',thirdPartyFee:'',
        deliveryAgent:'대한통운',deliveryCode:'',shippingCode:'',shippingCodeFlag:'',receiverNM:'준여부',
        receiverCel:'',receiverTel:'',productTitle:'마이크로 SD6드 6테라바이트' ,optional:'',postalCode:'0326',address:'',
        deliveryMemo:'',buyerNM:'김연준',buyerCel:'',buyerTel:'',orderCode:'',CSMemo:''
    },
    {id: 3, status: '신규주문', marketPrdCode: '1057522156', productId: null, orderTimeStamp: '2022-12-03', marketAccount: '와우프렌즈_인터파크',
        quantity:2, amount:44200,deliveryFee:3000,sourcingOrigin:'',productCost:'',thirdPartyFee:'',
        deliveryAgent:'대한통운',deliveryCode:'',shippingCode:'',shippingCodeFlag:'',receiverNM:'준여부',
        receiverCel:'',receiverTel:'',productTitle:'마이크로 SD6드 6테라바이트' ,optional:'',postalCode:'0326',address:'',
        deliveryMemo:'',buyerNM:'김연준',buyerCel:'',buyerTel:'',orderCode:'',CSMemo:''
    },

]

export const SMOrderTableColumnSample = [
    {field: 'id', headerName: 'No.', width: 70},
    {field: 'status', headerName: '구분', width: 130},
    {field: 'marketPrdCode', headerName: '마켓상품번호', width: 130},
    {field: 'productId',headerName: '상품ID',width: 90,},
    {field: 'orderTimeStamp',headerName: '주문일시',width: 90,},
    {field: 'marketAccount',headerName: '계정',width: 90,},
    {field: 'quantity',headerName: '수량',type: 'number',width: 90,},
    {field: 'amount',headerName: '실결제금액',type: 'number',width: 90,},
    {field: 'deliveryFee',headerName: '배송비',type: 'number',width: 90,},
    {field: 'sourcingOrigin',headerName: '소싱마켓',width: 90,},
    {field: 'productCost',headerName: '소싱가격',width: 90,},
    {field: 'thirdPartyFee',headerName: '배대지비용',width: 90,},
    {field: 'deliveryAgent',headerName: '택배사',width: 90,},
    {field: 'deliveryCode',headerName: '송장번호',width: 90,},
    {field: 'shippingCode',headerName: '개인통관고유부호',width: 90,},
    {field: 'shippingCodeFlag',headerName: '통관부호일치여부',width: 90,},
    {field: 'receiverNM',headerName: '수령자',width: 90,},
    {field: 'receiverCel',headerName: '수령자휴대전화',width: 90,},
    {field: 'receiverTel',headerName: '수령자전화번호',width: 90,},
    {field: 'productTitle',headerName: '상품명',width: 90,},
    {field: 'optional',headerName: '선택사항',width: 90,},
    {field: 'postalCode',headerName: '우편변호',width: 90,},
    {field: 'address',headerName: '주소',width: 90,},
    {field: 'deliveryMemo',headerName: '배송메모',width: 90,},
    {field: 'buyerNM',headerName: '구매자',width: 90,},
    {field: 'buyerCel',headerName: '구매자휴대전화',width: 90,},
    {field: 'buyerTel',headerName: '구매자전화',width: 90,},
    {field: 'orderCode',headerName: '주문고유코드',width: 90,},
    {field: 'CSMemo',headerName: 'CS메모',width: 90,},
]


