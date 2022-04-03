import PieChart from '../components/PieChart';
import BarChart from '../components/BartChart';
import { getProducts, getNumberOfProductsByManufacturer } from '../backend/api';

function Statistics() {
    const manufacturersNumberOfProduts = getNumberOfProductsByManufacturer();

    const productPricesIncreasing = getProducts()
                          .map(({ name, price }) => ({ name, value: Number.parseFloat(price)}))
                          .sort((p1 ,p2) => p1.value - p2.value);
    
    return (
        <div style={{ padding: '0px 50px' }}>
            <h1>STATISTICS PAGE</h1>
            
            <PieChart 
                data={manufacturersNumberOfProduts}
                titleTop="Manufacturer products count"
            />
            <br/>
            <BarChart
                data={[
                    ...productPricesIncreasing.slice(0, 5),
                    ...productPricesIncreasing.slice(5).reverse()
                ]}
                titleTop="Price of medicine"
                titleBottom="Price"
            />   
         </div>
    );
}

export default Statistics;