import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css'


const Filter = ({value, onChange}) => (
    <label className = {styles.label}>Find contacts by name 
                    <input
                        className = {styles.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value= {value}
            onChange={onChange}
            //onBlur={onBlur}
                     />
                </label>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    //onBlur:PropTypes.func.isRequired
}

export default Filter;