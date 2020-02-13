import React, {useState} from 'react';
import Error from './Error';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { createProduct } from './../api/Product';
import { MdLocalHospital } from 'react-icons/md';

const style = {
    container: { display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, width: '30%', height: '100%'}    
}

const Producto = () => {

    const [error , setError] = useState(false);
    const [success , setSuccess] = useState(false);
    const [errorProducto , setErrorProducto] = useState(false);
    const [errorValor , setErrorValor] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    //DEFINIR VALOR DEL PRODUCTO
    const definirProducto = e => {
        e.preventDefault();

        let type = e.target.producto.value;
        let value = e.target.valor.value;
        let amount = e.target.cantidad.value;
        
        //VALIDACIONES Y MSJ DE ERROR
        if(type === null || type === '') { 
            setErrorProducto(true)             
        } else { 
            setErrorProducto(false)                     
        }

        if(value === null || value === '' || value < 1) { 
            setErrorValor(true) 
        } else { 
            setErrorValor(false)
        }

        if(value === null || value === '' || value < 1 || type === null || type === '') { 
            setError(true)            
        }else{
            
            setError(false) 

            let data = {
                type: type,
                amount: amount,
                value: value
            }

            const ProductCreate = [];

            createProduct(data).then(res => {
                ProductCreate.push(res.data)
            });

            setSuccess(true)            

            // window.location.reload()
        }
        
    }

    return (
        <div style={style.container}>
            <Card style={{width: '90%'}}>
                <Card.Header style={{backgroundColor: 'black'}}>
                    <h2 className="text-light">......</h2>
                </Card.Header>
                <Card.Body>
                    { error ? <Alert id="alert-error" variant="danger"><Error msj="Por favor, complete la información" /></Alert> : null}        
                    { success ? <Alert id="alert-success" variant="success"><Error msj="Product Created" /></Alert> : null}        
                    <form onSubmit={definirProducto}>
                        <div className="form-group">
                            <label className="float-left">Producto { errorProducto ? <span className="text-danger">*</span> : null} </label>
                            <input 
                                type="text"
                                id="Product_C"
                                placeholder="Producto" 
                                name="producto"
                                className="form-control"
                            />
                            <small className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label className="float-left">Valor { errorValor ? <span className="text-danger">*</span> : null}</label>
                            <input 
                                type="number"
                                id="Value_C"
                                placeholder="Valor" 
                                name="valor"
                                className="form-control"
                            />
                            <small className="form-text text-muted" id="error-value-create">{ errorValor ? 'La cantidad ingresada debe ser mayor a 1' : null}</small>
                        </div>
                        <div className="form-group">
                            <label className="float-left">Cantidad</label>
                            <select className="form-control" name="cantidad" defaultValue="1" id="Amount_c">
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
                            <small className="form-text text-muted float-left"></small>
                        </div>                        
                        <Button type="submit" id="btn-create" variant="outline-dark" style={{marginTop:'10px', width: '50%'}}>Enviar</Button>
                    </form>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Bien</Modal.Title>
                </Modal.Header>                
            </Modal>
        </div>
    );
} 

export default Producto;