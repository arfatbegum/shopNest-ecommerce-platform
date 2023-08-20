import React from 'react';
import ShippingPolicy from './ShippingPolicy';
import ReturnPolicy from './ReturnPolicy';
import Meta from '../../Shared/Meta';
import BreadCrumb from '../../Shared/BreadCrumb';

const Policy = () => {
    return (
        <div>
             <Meta title={"Policy - Shoppable"} />
            <BreadCrumb title="Policy" />
            <div className='mx-10 bg-white p-8'>
            <ShippingPolicy />
            <ReturnPolicy/>
           </div>
        </div>
    );
};

export default Policy;