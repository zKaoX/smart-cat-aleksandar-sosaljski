import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    Cell
} from "recharts";


function BarChartAdapter ({ data, title }) {
    const COLORS = [
        '#1234f6',
        '#43ff22',
        '#a7a411',
        'rgb(255, 124, 11)',
        'rgb(11, 124, 255)',
        '#831d3a'
    ];

    return (
        <div>
            <div style={{ width: '900px', height: '300px', margin: '0 auto' }}>
                <BarChart
                    width={900}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Legend
                        formatter={() => <span>{title}</span>}
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