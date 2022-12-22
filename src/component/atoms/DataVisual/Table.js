import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import TablePagination from '@mui/material/TablePagination';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import PropTypes from "prop-types";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const BasicTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



const DataTableColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
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

const DataTableRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={DataTableRows}
                columns={DataTableColumns}
                pageSize={7}
                rowsPerPageOptions={[7]}
                checkboxSelection
            />
        </div>
    );
}



function DenseTableCreateData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const DenseTableRows = [
    DenseTableCreateData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    DenseTableCreateData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    DenseTableCreateData('Eclair', 262, 16.0, 24, 6.0),
    DenseTableCreateData('Cupcake', 305, 3.7, 67, 4.3),
    DenseTableCreateData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DenseTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {DenseTableRows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const ColumnGroupingTableColumns: Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toFixed(2),
    },
];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function ColumnGroupingTableCreateData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    const density = population / size;
    return { name, code, population, size, density };
}

const ColumnGroupingTableRows = [
    ColumnGroupingTableCreateData('India', 'IN', 1324171354, 3287263),
    ColumnGroupingTableCreateData('China', 'CN', 1403500365, 9596961),
    ColumnGroupingTableCreateData('Italy', 'IT', 60483973, 301340),
    ColumnGroupingTableCreateData('United States', 'US', 327167434, 9833520),
    ColumnGroupingTableCreateData('Canada', 'CA', 37602103, 9984670),
    ColumnGroupingTableCreateData('Australia', 'AU', 25475400, 7692024),
    ColumnGroupingTableCreateData('Germany', 'DE', 83019200, 357578),
    ColumnGroupingTableCreateData('Ireland', 'IE', 4857000, 70273),
    ColumnGroupingTableCreateData('Mexico', 'MX', 126577691, 1972550),
    ColumnGroupingTableCreateData('Japan', 'JP', 126317000, 377973),
    ColumnGroupingTableCreateData('France', 'FR', 67022000, 640679),
    ColumnGroupingTableCreateData('United Kingdom', 'GB', 67545757, 242495),
    ColumnGroupingTableCreateData('Russia', 'RU', 146793744, 17098246),
    ColumnGroupingTableCreateData('Nigeria', 'NG', 200962417, 923768),
    ColumnGroupingTableCreateData('Brazil', 'BR', 210147125, 8515767),
];

const ColumnGroupingTable = () => {
    const [page, setPage] = React.useState(0);
    const [ColumnGroupingTableRowsPerPage, setColumnGroupingTableRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeColumnGroupingTableRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColumnGroupingTableRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={2}>
                                Country
                            </TableCell>
                            <TableCell align="center" colSpan={3}>
                                Details
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {ColumnGroupingTableColumns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 57, minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ColumnGroupingTableRows
                            .slice(page * ColumnGroupingTableRowsPerPage, page * ColumnGroupingTableRowsPerPage + ColumnGroupingTableRowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {ColumnGroupingTableColumns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                ColumnGroupingTableRowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={ColumnGroupingTableRows.length}
                ColumnGroupingTableRowsPerPage={ColumnGroupingTableRowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onColumnGroupingTableRowsPerPageChange={handleChangeColumnGroupingTableRowsPerPage}
            />
        </Paper>
    );
}



function CollapsibleTableCreateData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    price: number,
) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props: { row: ReturnType<typeof CollapsibleTableCreateData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const CollapsibleTableRows = [
    CollapsibleTableCreateData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    CollapsibleTableCreateData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    CollapsibleTableCreateData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    CollapsibleTableCreateData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    CollapsibleTableCreateData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

const CollapsibleTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {CollapsibleTableRows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



const TAX_RATE = 0.07;

function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
    return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

interface SpanningTableRow {
    desc: string;
    qty: number;
    unit: number;
    price: number;
}

function subtotal(items: SpanningTableRow[]) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const SpanningTableRows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(SpanningTableRows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const SpanningTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            Details
                        </TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Desc</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">Sum</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {SpanningTableRows.map((row) => (
                        <TableRow key={row.desc}>
                            <TableCell>{row.desc}</TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.unit}</TableCell>
                            <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Tax</TableCell>
                        <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                            0
                        )} %`}</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};


function OrderBoardTableCreateData(
    name: string,
    newOrder: number,
    ReadyDeli: number,
    IngDeli: number,
    CompleteDeli: number,
    ConfirmBuy: number,
    Refund: number,
    Cancel: number,
    Change: number,
) {
    return {
        name,
        newOrder,
        ReadyDeli,
        IngDeli,
        CompleteDeli,
        ConfirmBuy,
        Refund,
        Cancel,
        Change,
        markets: [
            {
                name : "쿠팡",
                newOrder : 5,
                ReadyDeli : 1,
                IngDeli : 5,
                CompleteDeli : 1,
                ConfirmBuy : 6,
                Refund : 0,
                Cancel : 0,
                Change : 0,
            },
            {
                name : "스스",
                newOrder : 4,
                ReadyDeli : 2,
                IngDeli : 6,
                CompleteDeli : 2,
                ConfirmBuy : 5,
                Refund : 0,
                Cancel : 0,
                Change : 0,
            },
        ],
    };
}



function OrderBoardTableRow(props: { row: ReturnType<typeof OrderBoardTableCreateData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.newOrder}</TableCell>
                <TableCell align="right">{row.ReadyDeli}</TableCell>
                <TableCell align="right">{row.IngDeli}</TableCell>
                <TableCell align="right">{row.CompleteDeli}</TableCell>
                <TableCell align="right">{row.ConfirmBuy}</TableCell>
                <TableCell align="right">{row.Refund}</TableCell>
                <TableCell align="right">{row.Cancel}</TableCell>
                <TableCell align="right">{row.Change}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>

                            <Typography variant="h6" gutterBottom component="div">
                                Markets
                            </Typography>

                            <Table size="small" aria-label="purchases" align="right">

                                {/*<TableHead>*/}
                                {/*    <TableRow>*/}
                                {/*        <TableCell>Date</TableCell>*/}
                                {/*        <TableCell>Customer</TableCell>*/}
                                {/*        <TableCell align="right">Amount</TableCell>*/}
                                {/*        <TableCell align="right">Total price ($)</TableCell>*/}
                                {/*    </TableRow>*/}
                                {/*</TableHead>*/}

                                <TableBody>
                                    {row.markets.map((marketRow) => (
                                        <TableRow key={marketRow.name}>
                                            {/*<TableCell />*/}
                                            {/*<TableCell />*/}
                                            <TableCell component="th" scope="row">
                                                {marketRow.name}
                                            </TableCell>
                                            <TableCell align="right">{marketRow.newOrder}</TableCell>
                                            <TableCell align="right">{marketRow.ReadyDeli}</TableCell>
                                            <TableCell align="right">{marketRow.IngDeli}</TableCell>
                                            <TableCell align="right">{marketRow.CompleteDeli}</TableCell>
                                            <TableCell align="right">{marketRow.ConfirmBuy}</TableCell>
                                            <TableCell align="right">{marketRow.Refund}</TableCell>
                                            <TableCell align="right">{marketRow.Cancel}</TableCell>
                                            <TableCell align="right">{marketRow.Change}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const OrderBoardTableRows = [
    OrderBoardTableCreateData('사업자#1', 53, 21, 36, 21, 21, 0, 0, 0),
    OrderBoardTableCreateData('사업자#2', 32, 42, 21, 21, 36, 0, 0, 0),
    OrderBoardTableCreateData('사업자#3', 262, 16.0, 24, 6.0, 3.79),
    OrderBoardTableCreateData('사업자#4', 305, 3.7, 67, 4.3, 2.5),
    OrderBoardTableCreateData('사업자#5', 356, 16.0, 49, 3.9, 1.5),
];

const OrderBoardTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>사업자</TableCell>
                        <TableCell align="right">신규주문</TableCell>
                        <TableCell align="right">발송대기</TableCell>
                        <TableCell align="right">배송중</TableCell>
                        <TableCell align="right">배송완료</TableCell>
                        <TableCell align="right">구매확정</TableCell>
                        <TableCell align="right">반품</TableCell>
                        <TableCell align="right">취소</TableCell>
                        <TableCell align="right">교환</TableCell>
                        {/*<TableCell align="right">Protein&nbsp;(g)</TableCell>*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell />
                        <TableCell>
                            TOTAL
                        </TableCell>
                    </TableRow>
                    {OrderBoardTableRows.map((row) => (
                        <OrderBoardTableRow key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};







export const MuiTable = ({type, ...args}) => {

    if(type === "Basic"){
        return <BasicTable {...args} />
    }

    if(type === "Data"){
        return <DataTable {...args} />
    }

    if(type === "Dense"){
        return <DenseTable {...args} />
    }

    if(type === "ColumnGrouping"){
        return <ColumnGroupingTable {...args} />
    }

    if(type === "Collapse"){
        return <CollapsibleTable {...args} />
    }

    if(type === "Spanning"){
        return <SpanningTable {...args} />
    }

    if(type === 'OrderBoard'){
        return <OrderBoardTable {...args} />
    }

}

MuiTable.propTypes = {
    type:PropTypes.oneOf([
        "Basic", "Data", "Dense",
        "ColumnGrouping", "Collapse", "Spanning",
        'OrderBoard'
    ])
}

MuiTable.defaultProps = {
    type : "Basic"
}

