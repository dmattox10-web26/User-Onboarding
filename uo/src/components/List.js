import React from 'react'
import UOCard from './Card'
const UOList = (props) => {
    const { users } = props
    console.log(users)
    return (
        <>
        {users.map(user =>
            <UOCard user={ user } />    
        )}
        </>
    )
}

export default UOList