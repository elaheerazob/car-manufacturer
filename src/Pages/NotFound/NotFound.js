import React from 'react';
import Notfound from '../../Image/NotFound.png';

const NotFound = () => {
    return (
        <div >
        <img style={{height : '700px'}} className='w-full'  src={Notfound} alt="" />
    </div>
    );
};

export default NotFound;