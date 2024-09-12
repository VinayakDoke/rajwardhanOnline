import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup' // For validation

// Validation schema for the form
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  mobile: Yup.string().required('Mobile number is required'),
  message: Yup.string().required('Please let us know how we can help')
})

function ContactForm () {
  return (
    <>
      <div className='custom-form-main'>
        <Container className='custom-form'>
          <div className='custom-form-header'>
            <b>Contact Us</b>
          </div>
          <hr />
          <Row>
            <Col>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  mobile: '',
                  message: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  // Handle form submission here
                  console.log(values)
                  setSubmitting(false)
                }}
              >
                {({ handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='formName'>
                      <Field
                        name='name'
                        type='text'
                        placeholder='Enter name'
                        className='form-control'
                      />
                      <ErrorMessage
                        name='name'
                        component='div'
                        className='text-danger'
                      />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formEmail'>
                      <Field
                        name='email'
                        type='email'
                        placeholder='Enter email'
                        className='form-control'
                      />
                      <ErrorMessage
                        name='email'
                        component='div'
                        className='text-danger'
                      />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formMobile'>
                      <Field
                        name='mobile'
                        type='text'
                        placeholder='Enter Mobile No.'
                        className='form-control'
                      />
                      <ErrorMessage
                        name='mobile'
                        component='div'
                        className='text-danger'
                      />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formMessage'>
                      <Field
                        name='message'
                        as='textarea'
                        placeholder='How can we help?'
                        className='form-control'
                      />
                      <ErrorMessage
                        name='message'
                        component='div'
                        className='text-danger'
                      />
                    </Form.Group>

                    <Button
                      variant='success'
                      type='submit'
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ContactForm
