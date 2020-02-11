import React from 'react';
import { setProducts, updatedProduct, deleteProduct } from '../api/Product';
import { MdDelete, MdCreate, MdVisibility } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class ProductList extends React.Component {

    constructor(){
        super()
        this.state = { data: [], show: false, show2: false};
    }

    componentDidMount(){

        setProducts().then(res => {
            this.setState({data: res.data})
        });        

    }

    handleClose = () => this.setState({show: false});
    handleShow = () => this.setState({show: true});
    handleClose2 = () => this.setState({show2: false});
    handleShow2 = () => this.setState({show2: true});

    updateProduct = e => {
        e.preventDefault();

        let id = e.target.producto.id;
        let type = e.target.producto.value;
        let value = e.target.valor.value;
        let amount = e.target.cantidad.value;

        let data = {
            type: type,
            amount: amount,
            value: value
        }

        const productUpdate = [];
        updatedProduct(id, data).then(res => {
            productUpdate.push(res.data)
        });

        if(productUpdate.id) { window.location.reload(); }                   

        return false;
    }

    deleteProduct = (id) => {
        const productDelete = [];
        deleteProduct(id).then(res => {
            productDelete.push(res.data)
        });

        if(productDelete.id) { window.location.reload(); }                   

        return false;
    }

    render() {

        const { data, show, show2 } = this.state;

        console.log(data)

        const style = {
            container: { color: 'white', width: '30%', border: '1px solid white', borderRadius: '7px', margin: '4px 15px' },
            btn: { backgroundColor: 'transparent', border: 'none', color: 'white' }    
        }
        
        if(data.length >= 1) {
            return(
                
                data.map(products => (

                    <div id={products.id} key={products.id} style={style.container}>
                        <div style={{width: '60%', display: 'inline-block'}}>
                        {/* PRODUCT */}
                        <span>{products.type}</span>
                        </div>
                        {/* OPTIONS */}
                        <div style={{width: '40%', display: 'inline-block'}}> 
                            <MdVisibility style={{cursor: 'pointer', margin: '0 1px'}} onClick={this.handleShow2}/>                              
                            <MdCreate style={{cursor: 'pointer', margin: '0 1px'}} onClick={this.handleShow}/>                                
                            <MdDelete style={{cursor: 'pointer', margin: '0 1px'}} onClick={this.deleteProduct(products.id)}/>                            
                        </div>                        
                        {/* SHOW */}
                        <Modal show={show2} onHide={this.handleClose2}>
                            <Modal.Header closeButton>
                                <Modal.Title>{products.type}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p style={{margin: '0'}}><strong>Id: </strong>{products.id}</p>
                                <p style={{margin: '0'}}><strong>Value: </strong>{products.value}</p>
                                <p style={{margin: '0'}}><strong>Amount: </strong>{products.amount}</p>
                                <p style={{margin: '0'}}><strong>Total Cost: </strong>{products.totalCost}</p>
                                <p style={{margin: '0'}}><strong>Date: </strong>{products.createAt}</p>
                            </Modal.Body>
                        </Modal>                               
                        {/* EDIT */}     
                        <Modal show={show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{products.type}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form onSubmit={this.updateProduct}>
                                    <input 
                                        type="text"                                             
                                        value={products.id}
                                        name="id"
                                        style={{display:'none'}}
                                    />
                                    <div className="form-group">
                                        <label className="float-left">Product</label>
                                        <input 
                                            type="text"                                             
                                            value={products.type}
                                            name="producto"
                                            className="form-control"
                                        />
                                        <small className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-group">
                                        <label className="float-left">Value</label>
                                        <input 
                                            type="number"
                                            value={products.value}
                                            name="valor"
                                            className="form-control"
                                        />                                        
                                    </div>
                                    <div className="form-group">
                                        <label className="float-left">Amount</label>
                                        <select className="form-control" name="cantidad" defaultValue={products.amount}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>                                        
                                    </div>       
                                    <div className="d-flex w-100 justify-content-center">
                                        <Button type="submit" variant="outline-dark" className="mx-auto">Done</Button>
                                    </div>                                    
                                </form>
                            </Modal.Body>                           
                        </Modal>
                    </div>
                )) 
            )

        }else{
            return " ";
        }
    }

}

export default ProductList;