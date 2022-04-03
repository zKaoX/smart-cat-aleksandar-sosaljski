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
    const COLORS = [
        '#1234f6',
        '#43ff22',
        '#a7a411',
        'rgb(255, 124, 11)',
        'rgb(11, 124, 255)',
        '#831d3a'
    ];

    return (
        <div style={{ border: '3px solid rgb(11, 125, 255)', borderRadius: '8px'}}>
            <h4 style={{ textAlign: 'center' }}>{titleTop}</h4>
            <div style={{ width: '1100px', height: '300px', margin: '0 auto' }}>
                <BarChart
                    width={1100}
                    height={300}
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