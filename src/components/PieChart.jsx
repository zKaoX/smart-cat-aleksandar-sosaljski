import { PieChart, Pie, Cell, Legend } from "recharts";

function PieChartAdapter({ data, titleTop }) {
    const COLORS = [
        'rgb(255, 124, 11)',
        'rgb(11, 124, 255)',
        '#831d3a',
        '#1234f6',
        '#43ff22',
        '#a7a411',
    ];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180
        const radius = outerRadius * 1.4; //innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill={COLORS[index]} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
    };

    return (
        <div style={{ border: '3px solid rgb(11, 125, 255)', borderRadius: '0.2em'}}>
            <h4 style={{ textAlign: 'center' }}>{titleTop}</h4>
            <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        outerRadius={90}
                        fill="#82ca9d"
                        label={renderCustomizedLabel}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
}

export default PieChartAdapter;