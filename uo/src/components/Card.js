import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

const UOCard = (props) => {
    const { name, email } = props.user
    return (
        <Card>
            <CardBody>
                <CardTitle>{ name }</CardTitle>
                <CardSubtitle>{ email }</CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default UOCard