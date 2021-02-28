import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleEnterKey = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue, ...categories]); //callback
            setInputValue('');
        }



    }
    return (

        <form onSubmit={handleEnterKey}>
            <input
                placeholder='Ingresa categoria'
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}