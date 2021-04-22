import React, {useEffect, useRef} from 'react';
import { Formik, Field, Form, FieldArray } from "formik";

export default function Contact(props) {
    const initialValues = props.initialState
    

    useEffect(() => {
        console.log("mounted");
        return() => {
            console.log("unmounted");
        }
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {console.log(values)}}
                
            >
                <Form className="my-form contact-form" >
                    <div className="form-flex">
                        <div className="input-group f49">
                            <label htmlFor="firstName">First Name</label>
                            <Field id="firstName" name="personal.firstName" 
                            placeholder="First Name"
                            type="text" />
                        </div>
                        <div className="input-group f49">
                            <label htmlFor="lastName">Last Name</label>
                            <Field id="lastName" name="personal.lastName" 
                            placeholder="Last Name"
                            type="text" />
                        </div>
                    </div>

                    <div className="form-flex">
                        <div className="input-group f100">
                            <label htmlFor="profession">Profession</label>
                            <Field id="profession" name="personal.profession" 
                            placeholder="Your Profession" type="text" />
                        </div>
                    </div>

                    <div className="form-flex">
                        <div className="input-group f49 f-sm-100">
                            <label htmlFor="city">City</label>
                            <Field id="city" name="personal.city" 
                            placeholder="Enter Your City" type="text" />

                        </div>
                        <div className="input-group f24 f-sm-49">
                            <label htmlFor="country">Country</label>
                            <Field id="country" name="personal.country" 
                            placeholder="Your Country"
                            type="text" />
                        </div>
                        <div className="input-group f24 f-sm-49">
                            <label htmlFor="postCode">Zip Code</label>
                            <Field id="postCode" name="personal.postcode" type="number" placeholder="Zip Code" />
                        </div>
                    </div>

                    <div className="form-flex">
                        <div className="input-group f49">
                            <label htmlFor="phone">Phone</label>
                            <Field id="phone" name="personal.phone"
                            placeholder="Phone Number" type="number" />

                        </div>
                        <div className="input-group f49">
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="personal.email"
                            placeholder="Email Address" type="email" />

                        </div>
                    </div>

                    <h6>+ Add Social Links</h6>

                    

                </Form>
                
            </Formik>
            
        </div>
    )
}
