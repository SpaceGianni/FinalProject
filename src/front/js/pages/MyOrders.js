import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const MyOrders = () => {

    const { id } = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        
        actions.getOrderById(`
        https://3001-cgabrielp-finalproject-1d1dl3rvhs2.ws-us75.gitpod.io/api/users/${id}/cotizaciones`);
      }, []);
    
      useEffect(() => {
        
        actions.getOrderById(`
        https://3001-cgabrielp-finalproject-1d1dl3rvhs2.ws-us75.gitpod.io/api/users/${id}/cotizaciones`);
      }, [id]);
      console.log(store.shopping?.cotizaciones?.[0].region)
    
  return (
    <>
    {!!store.shopping.cotizaciones &&
        store.shopping.cotizaciones.map((item, index) => {
          return (
            <>
              <div key={index}>{item.cotizaciones?.region}</div>
              <p>{item.cotizaciones?.telefono}</p>
            </>
          );
        })}
    
    </>
  )
}

export default MyOrders