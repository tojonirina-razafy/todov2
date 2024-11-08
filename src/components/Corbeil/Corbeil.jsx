import React from 'react'
import './Corbeil.css'



const Corbeil = ({ corbeil, onClearItem, handleDeleteItems }) => {
    console.log(corbeil,)
    const corbeilItems = JSON.parse(localStorage.getItem('corbeil')) || []


    return (
        <ul className='corbeil'>
            <small>Corbeils</small>
            {
                corbeilItems.map((item) => (<CorbeilItem item={item} handleDeleteItems={handleDeleteItems} />))
            }


            {corbeilItems.length > 0 && <button className='btn-clear' onClick={() => onClearItem()}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5" stroke="currentColor" />
            </svg> clear all</button>}
        </ul>
    )
}



const CorbeilItem = ({ item, handleDeleteItems }) => {

    return (
        <li className='item-corbeil' key={item.id}>
            <label htmlFor='task'>{item.task}</label>
            <span onClick={() => handleDeleteItems(item.id)} className='trash'>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5" stroke="currentColor" />
                </svg>
            </span>
        </li>
    )
}



export default Corbeil