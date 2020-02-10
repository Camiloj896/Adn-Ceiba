import React from 'react';
import { setProducts } from './../api/Producto';
import { MdDelete, MdCreate, MdVisibility } from "react-icons/md";

class ProductList extends React.Component {

    constructor(){
        super()
        this.state = { data: []};
    }

    componentDidMount(){

        setProducts().then(res => {
            this.setState({data: res.data})
        });

    }

    render() {

        const { data } = this.state;
        console.log(data)
        if(data.length > 1) {
            return(
                
                data.map(products => (

                    <div id={products.id} style={{ color: 'white', width: '30%', border: '1px solid white', borderRadius: '7px', margin: '4px 15px' }}>
                        <div style={{width: '60%', display: 'inline-block'}}>
                        <span>{products.type}</span>
                        </div>
                        <div style={{width: '40%', display: 'inline-block'}}>
                            <MdVisibility style={{cursor: 'pointer', margin: '0 1px'}}/>
                            <MdCreate style={{cursor: 'pointer', margin: '0 1px'}}/>
                            <MdDelete style={{cursor: 'pointer', margin: '0 1px'}}/>
                        </div>
                    </div>
                )) 
            )

        }else{
            return " ";
        }
    }

}

export default ProductList;