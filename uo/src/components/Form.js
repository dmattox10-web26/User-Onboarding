import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form, FormGroup, FormFeedback, Label, Input, Row, Col } from 'reactstrap'
const Form = () => {
    
    const formik = useFormik({
        initialValues: {
            name: 'Your Full Name',
            email: 'Your Email Address',
            password: 'Your Password',
            confirm: 'Retype Password',
        },
        validationSchema: Yup.object({
           name: Yup.string()
           .max(25, 'must be 25 characters or less')
           .required('Required'),
           email: Yup.string()
           .email('Invalid email address')
           .required('Required'),
           password: Yup.string()
           .min(8, 'must be 8 characters or more')
           .required('Required'),
           confirm: Yup.string().when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both passwords need to be the same"
                )
            }),  
           accepted: Yup.boolean()
           .required('Required')
           .oneOf([true], 'You must accept the terms and conditions.')
        }),
        onSubmit: values => {

        },
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <Col xs='6'>
                    <FormGroup>
                        <Label for='name'>Name</Label>
                        <Input
                            id='name'
                            name='name'
                            type='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                    </FormGroup>
                </Col>
                <Col xs='6'>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input
                            id='email'
                            name='email'
                            type='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs='6'>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                    </FormGroup>
                </Col>
                <Col xs='6'>
                    <FormGroup>
                        <Label for='confirm'>Confirm Password</Label>
                        <Input
                            id='confirm'
                            name='confirm'
                            type='confirm'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirm}
                        />
                        {formik.touched.confirm && formik.errors.confirm ? <div>{formik.errors.confirm}</div> : null}
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <FormGroup check>
                    <Label check>
                        <Input 
                        id='accepted'
                        name='accepted'
                        type='checkbox'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.accepted}
                        />{' '}
                        Agree to terms of Service?
                    </Label>
                </FormGroup>
            </Row>
            <Row>
                <Button type='submit'>Submit</Button>
            </Row>
        </Form>
    )
}