import { setProduct, setProducts, createProduct, updatedProduct, deleteProduct} from './Product';
import axios from 'axios';

jest.mock('axios');

const data = {    
    type: 'cost type',
    amount: 5,
    value: 20000    
}

describe('--- EndPoints ---', () => {

    it('GetAll Cost', () => {

        let getData = [{
            id: '1',
            type: 'cost type',
            amount: 5,
            value: 20000,
            totalCost: 0,
            createAt: new Date()
        }];
        
        axios.get.mockImplementationOnce(() => Promise.resolve(getData));

        expect(setProducts()).resolves.toEqual(getData);
    });

    it('Get Cost', () => {

        let getData = {
            id: '1',
            type: 'cost type',
            amount: 5,
            value: 20000,
            totalCost: 0,
            createAt: new Date()
        };
        
        axios.get.mockImplementationOnce(() => Promise.resolve(getData));

        expect(setProduct(getData.id)).resolves.toEqual(getData);
    
    });

    it('Create Cost', () => {

        let postData = {
            type: 'cost type',
            amount: 5,
            value: 20000
        };
        
        axios.post.mockImplementationOnce(() => Promise.resolve(postData));

        expect(createProduct(postData)).resolves.toEqual(postData);
    
    });

    it('Update Cost', () => {

        let putData = {
            id: '1',
            type: 'cost type',
            amount: 5,
            value: 20000,
            totalCost: 0,
            createAt: new Date()
        };
        
        axios.put.mockImplementationOnce(() => Promise.resolve(putData));

        expect(updatedProduct(putData.id, putData)).resolves.toEqual(putData);
    
    });

    it('Delete Cost', () => {

        let deleteData = {
            id: '1',
            type: 'cost type',
            amount: 5,
            value: 20000,
            totalCost: 0,
            createAt: new Date()
        };
        
        axios.delete.mockImplementationOnce(() => Promise.resolve(deleteData));

        expect(deleteProduct(deleteData.id)).resolves.toEqual();
        
    
    });
    
});