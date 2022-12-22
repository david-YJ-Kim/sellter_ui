import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import PropTypes from "prop-types";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        },
        y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            data : [-1000, -500, -200, 0 , 200, 500, 1000],
            borderColor: 'rgb(255,99,132)',
            backgrundColor: 'rgba(255,99,132,0.5)',
            yAxisID: 'y',
        },
        {
            label: 'Dataset 2',
            data : [1000, 500, 200, 0 , -200, -500, -1000],
            borderColor: 'rgb(53,162,235)',
            backgrundColor: 'rgba(53,162,235,0.5)',
            yAxisID: 'y1',
        },
    ],
};

const MultiLineChart = () => {
    return <Line options={options} data={data} />;
}

export const Chart = ({type, ...args}) => {

    if(type === 'MultiLine'){
        return <MultiLineChart {...args} />
    }

}

Chart.propTypes = {
    type : PropTypes.oneOf(['MultiLine'])
}

Chart.defaultProps = {
    type :'MultiLine'
}
