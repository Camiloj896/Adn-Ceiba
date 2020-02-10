import React from 'react';
import ProductList from './ProductList';

const style = {
    container: { position: 'absolute', wdth: '70%', display: 'flex', justifyContent: 'center', paddingTop: '10px', flexWrap: 'wrap'},
    container2: { width: '93%', display: 'flex', flexWrap: 'Wrap'},
    cards: { color: 'white', width: '20%', border: '1px solid white', borderRadius: '7px' },
    cursor: {cursor: 'pointer', margin: '0 1px'}
}
const ContainerList = () => {
    return(
        <div style={style.container}>
            <h1 className="text-light w-100">Lista De Gastos</h1>
            <div style={style.container2}>
                <ProductList />
            </div>
        </div>
    )
}

export default ContainerList;


    
    
    