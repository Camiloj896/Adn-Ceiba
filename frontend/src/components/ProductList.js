import React, {useState, useEffect, Fragment} from 'react';
import { setProducts, setProduct, updatedProduct, deleteProduct } from '../api/Product';
import { MdDelete, MdCreate, MdVisibility } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const style = {
    container: { color: 'white', width: '30%', border: '1px solid white', borderRadius: '7px', margin: '4px 15px' },
    btn: { backgroundColor: 'transparent', border: 'none', color: 'white' }    
}

function ProductList(){

    const defaultValue = 'loading..';
    const [loading , setLoading] = useState(true);
    const [data , setData] = useState([]);
    const [modalShow , setModalShow] = useState(false);
    const [showProduct , setShowProduct] = useState({
        type: defaultValue,
        amount: defaultValue,
        value: defaultValue,
        totalCost: defaultValue,
        date: defaultValue
    });

    const [editProduct , setEditProduct] = useState({
        id: defaultValue,
        type: defaultValue,
        amount: defaultValue,
        value: defaultValue,
        totalCost: defaultValue,
        date: defaultValue
    });

    const [modalEdit , setModalEdit] = useState(false);

    useEffect(() => {
         setProducts()
          .then(res => {
            setData(res.data);
            setLoading(false);
          })
          .catch(err => console.log(err));
      }, []);

    // HIDE AND SHOW MODALS
    // ------------------------------------------>

    // SHOW
    const handleCloseMS = () => setModalShow(false);

    const showModalProducts = (id) => {

        setProduct(id).then(res => {
            setShowProduct({
                type: res.data.type,
                amount: res.data.amount,
                value: res.data.value,
                totalCost: res.data.totalCost,
                date: res.data.createAt
            });
          })
          .catch(err => console.log(err));

        setModalShow(true);
    }

    // EDIT
    const handleCloseME = () => setModalEdit(false);

    const EditModalProducts = (id) => {

        setProduct(id).then(res => {
            setEditProduct({
                id: res.data.id,
                type: res.data.type,
                amount: res.data.amount,
                value: res.data.value,
                totalCost: res.data.totalCost,
                date: res.data.createAt
            });
          })
          .catch(err => console.log(err));

          setModalEdit(true);
    }

    const Update = e => {

        e.preventDefault()

        let data = {
            type: e.target.producto.value,
            amount: e.target.cantidad.value,
            value: e.target.valor.value
        }

        updatedProduct(e.target.id.value, data).then(res => {
            if(res.status === 200){
                window.location.reload()
                setModalEdit(false);
            }
        })
        .catch(err => console.log(err));


    }

    const Delete = (id) => {

        deleteProduct(id).then(res => {
            if(res.status === 200){
                window.location.reload()
            }
        })
        .catch(err => console.log(err));


    }

    function setAllProduct() {
        return(
            data.map(products => (
                <div key={products.id} style={style.container}>
                    <div style={{width: '60%', display: 'inline-block'}}>
                    {/* PRODUCT */}
                    <span>{products.type}</span>
                    </div>
                    {/* OPTIONS */}
                    <div style={{width: '40%', display: 'inline-block'}}> 
                        <MdVisibility style={{cursor: 'pointer', margin: '0 1px'}} onClick={showModalProducts.bind(this, products.id)}/>                              
                        <MdCreate style={{cursor: 'pointer', margin: '0 1px'}} onClick={EditModalProducts.bind(this, products.id)}/>                                
                        <MdDelete style={{cursor: 'pointer', margin: '0 1px'}} onClick={Delete.bind(this, products.id)}/>                            
                    </div>
                </div>
            )) 
        )
    }

      return(
        <Fragment>
            {/* SET ALL COST */}
            { loading ? " " : setAllProduct() }
            {/* SHOW */}
            <Modal show={modalShow} onHide={handleCloseMS}>
                <Modal.Header closeButton>
                    <Modal.Title>{showProduct.type}</Modal.Title> 
                </Modal.Header>
                <Modal.Body>
                    <p style={{margin: '0'}}><strong>Value: </strong>{showProduct.value}</p>
                    <p style={{margin: '0'}}><strong>Amount: </strong>{showProduct.amount}</p>
                    <p style={{margin: '0'}}><strong>Total Cost: </strong>{showProduct.totalCost}</p>
                    <p style={{margin: '0'}}><strong>Date: </strong>{showProduct.date}</p>
                </Modal.Body>
            </Modal> 
            {/* EDIT */}
            <Modal show={modalEdit} onHide={handleCloseME}>
                <Modal.Header closeButton>
                    <Modal.Title>{editProduct.type}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={Update}>
                        <input 
                            type="text"                                             
                            defaultValue={editProduct.id}
                            name="id"
                            style={{display:'none'}}
                        />
                        <div className="form-group">
                            <label className="float-left">Product</label>
                            <input 
                                type="text"                                             
                                defaultValue={editProduct.type}
                                name="producto"
                                className="form-control"
                            />
                            <small className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label className="float-left">Value</label>
                            <input 
                                type="number"
                                defaultValue={editProduct.value}
                                name="valor"
                                className="form-control"
                            />                                        
                        </div>
                        <div className="form-group">
                            <label className="float-left">Amount</label>
                            <select className="form-control" name="cantidad" defaultValue={editProduct.amount}>
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
        </Fragment>
      )

}

export default ProductList;

// docker run --name YOURCONTAINERNAME --restart=always -d -p 27017:27017 mongo