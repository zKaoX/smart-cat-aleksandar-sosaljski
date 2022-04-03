import PieChart from '../components/PieChart';
import BarChart from '../components/BartChart';

const manufacturersNumberOfProduts = [
  { name: "A1", value: 150 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
];

const products = [
    {
      name: "Panklav",
      value: 2460,
    },
    {
      name: "Herbiko",
      value: 1398,
    },
    {
        name: "Aspirin",
        value: 1000,
    },
    {
        name: "Bensedin",
        value: 1598,
    },
    {
        name: "Panklav",
        value: 2460,
      },
      {
        name: "Herbiko",
        value: 1398,
      },
      {
          name: "Aspirin",
          value: 1000,
      },
      {
          name: "Bensedin",
          value: 1598,
      },
      {
        name: "Aspirin",
        value: 1000,
    },
    {
        name: "Bensedin",
        value: 1598,
    },
  ];

const colors = [
    '#1234f6',
    '#43ff22',
    '#a7a411',
    'rgb(255, 124, 11)',
    'rgb(11, 124, 255)',
    '#831d3a'
];

function Statistics() {

    return (
        <>
            <h1>STATISTICS PAGE</h1>
            <PieChart data={manufacturersNumberOfProduts} />
            <BarChart data={products} title="Price"/>   
         </>
    );
}

export default Statistics;