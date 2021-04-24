import React from 'react';
import { useHistory } from "react-router-dom";
import { Formik, Form} from "formik";
import { TextInput } from "./FieldList";
import ButtonGroup from './../ButtonGroup';
import { validationSchema } from "./validationSchema";

export default function Contact(props) {

    const history = useHistory();

    const initialValues = props.initialState;
    let pathWithoutPage = history.location.pathname.slice(0,-1);
    return (
        <div className="my-form">
            <h3>How may your employer contact you?</h3>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {console.log(values)}}  
                validationSchema={validationSchema}
            >
                {({isSubmitting}) => (
                    <Form className="my-form contact-form" >
                        <div className="form-flex">
                            <div className="input-group f49">
                                <TextInput 
                                    name="personal.firstName"
                                    label = "First Name"
                                    placeholder="First Name"
                                />
                                
                            </div>
                            <div className="input-group f49">
                                <TextInput 
                                    name="personal.lastName"
                                    label="Last Name"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        <div className="form-flex">
                            <div className="input-group f100">
                                <TextInput 
                                    name="personal.profession"
                                    label="Profession"
                                    placeholder="Your Profession"
                                />
                            </div>
                        </div>

                        <div className="form-flex">
                            <div className="input-group f49 f-sm-100">
                                <TextInput 
                                    name="personal.city"
                                    label="City"
                                    placeholder="Enter Your City"
                                />
                            </div>
                            <div className="input-group f24 f-sm-49">
                                <TextInput 
                                    name="personal.country"
                                    label="Country"
                                    placeholder="Your Country"
                                />
                            </div>
                            <div className="input-group f24 f-sm-49">
                                <TextInput 
                                    name="personal.postcode"
                                    label="Zip Code"
                                    placeholder="Zip Code"
                                />
                            </div>
                        </div>

                        <div className="form-flex">
                            <div className="input-group f49">
                                <TextInput
                                    name="personal.phone"
                                    label="Phone"
                                    placeholder="Phone Number"
                                    type="number"
                                />
                            </div>
                            <div className="input-group f49">
                                <TextInput
                                    name="personal.email"
                                    label="Email"
                                    placeholder="Email Address"
                                    type="email"
                                />
                            </div>
                        </div>

                        <h6>+ Add Social Links</h6>

                        <ButtonGroup 
                            pathWithoutPage={pathWithoutPage} 
                            pageNo={props.pageNo}
                            pagesStr={props.pagesStr}
                        />
                    </Form>
                )}
                
            </Formik>
            
        </div>
    )
}
