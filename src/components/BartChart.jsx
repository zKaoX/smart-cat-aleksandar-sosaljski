import { useState, useEffect } from 'react';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    Cell
} from "recharts";


function BarChartAdapter ({ data, titleTop, titleBottom }) {
    const [scale, setScale] = useState(getScaleFactor());

    const COLORS = [
        '#1234f6',
        '#43ff22',
        '#a7a411',
        'rgb(255, 124, 11)',
        'rgb(11, 124, 255)',
        '#831d3a'
    ];

    const WIDTH = 1100 * scale;
    const HEIGH = 300 * scale;

    useEffect(() => {
        const handleResize = () => setScale(getScaleFactor());
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    function getScaleFactor() {
        const width = window.innerWidth;
        if (width > 1200) { return 1; }
        if (width > 875 && width < 1200) { return 0.8; }
        if (width > 768 && width < 875) { return 0.71; }
        if (width > 548 && width < 768) { return 0.5; }
        if (width < 548) { return 0.37; }
    }

    return (
        <div style={{ border: '3px solid rgb(11, 125, 255)', borderRadius: '8px'}}>
            <h4 style={{ textAlign: 'center' }}>{titleTop}</h4>
            <div style={{ width: `${WIDTH}px`, height: `${HEIGH}px`, margin: '0 auto' }}>
                <BarChart
                    width={WIDTH}
                    height={HEIGH}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    barCategoryGap={'20%'}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis allowDataOverflow={true} dataKey="name" tickSize={12}/>
                    <YAxis />
                    <Legend
                        formatter={() => <span>{titleBottom}</span>}
                    />
                    <Bar dataKey="value" fill="#8884d8" animationDuration={2500}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );

}

export default BarChartAdapter;