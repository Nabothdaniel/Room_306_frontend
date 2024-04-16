import React from 'react'

const Input = ({labelValue,inputName,holder,inputType,inputClass}) => {
  return (
    <div className=''>
        <label htmlFor="username">{labelValue}</label>
      <input type={inputType}  name={inputName} className={inputClass} placeholder={holder} />
    </div>
  )
}

export default Input
