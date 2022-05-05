import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageItem.css';
import { CCard, CCardBody, CCardFooter, CCardGroup, CCardImage, CCardText, CCardTitle } from '@coreui/react';

const ManageItem = ({ item, handleDeleteDevice }) => {
    const { _id, name, picture, quantity, supplier, price, description } = item;
    const navigate = useNavigate();
    const handleStockUpdate = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <CCardGroup>
                <CCard className='manage-item mx-auto rounded-md p-3'>
                    <div className='flex items-center justify-between'>
                        <CCardImage className='w-40' orientation="top" src={picture} />
                        <CCardBody>
                            <CCardTitle className='text-xl font-semibold mb-1'>{name}</CCardTitle>
                            <CCardText>
                                <p className='text-base'>Price: ${price}</p>
                                <p className='text-base'>Quantity: {quantity}</p>
                                <p className='mb-1 text-base'>Supplier: {supplier}</p>
                                <p className='lg:w-60 md:w-48'><small>{description}</small></p>
                            </CCardText>
                        </CCardBody></div>
                    <CCardFooter className='manage-btn text-center mt-5'>
                        <button onClick={() => handleStockUpdate(_id)} className='btn-stock px-3 py-2 rounded-md text-white'>Update Stock</button>
                        <button onClick={() => handleDeleteDevice(_id)} className='btn-delete ml-3 px-3 py-2 rounded-md'>Delete Device</button>
                    </CCardFooter>
                </CCard>
            </CCardGroup>
        </div>
    );
};

export default ManageItem;