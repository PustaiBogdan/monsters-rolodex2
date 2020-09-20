import React from 'react';

import  './serch-box.styles.css';

export const SerchBox=({placeholder,handelChange})=>(

    
    <input className="serch" type='serch' placeholder={placeholder} onChange={handelChange}/>

)