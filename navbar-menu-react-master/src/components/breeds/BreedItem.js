import React from 'react'

const BreedItem = ({ item }) => {
    return (
      
        <div className='card'>
        

          <div className='card-inner'>
            <div className='card-front'>
              <img src={item.img} alt='' />
            </div>
            <div className='card-back'>
              <h1>{item.name}</h1>
              
              <ul>
              <li>
                  <strong>Breed:</strong> {item.breed}
                </li>
                <li>
                  <strong>Sex:</strong> {item.sex}
                </li>
                <li>
                  <strong>Age:</strong> {item.age}
                </li>
                <li>
                  <strong>Chip Number:</strong> {item.chipNumber}
                </li>
                <li>
                  <strong>Present:</strong> {item.present===true?"Yes":"No"}
                </li>
                <li>
                  <strong>Owner:</strong> {item.owner.name}
                    <strong></strong> {item.owner.lastName}
                </li>
                <li>
                  <strong>Phone Number:</strong> {item.owner.phoneNumber}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    
}

export default BreedItem
