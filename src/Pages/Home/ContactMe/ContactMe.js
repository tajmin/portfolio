import React from 'react';
import emailjs from 'emailjs-com';
import { Container, } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ContactMe = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const serviceID = 'service_jzlx9sm';
    const formID = 'contact_template_zvsvrsu';
    const userID = 'user_WcgZPx1yMwi3VAf7EjgNc';

    const handleForm = data => {
        emailjs.send(serviceID, formID, data, userID)
            .then((result) => {
            }, (error) => {
                console.log(error);
            });
        reset();
    };

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <h2 className="display-6 theme-text my-5 pb-5">Let's have a chat!</h2>
            <Container className="d-flex justify-content-center align-items-center">
                <form className="w-50" onSubmit={handleSubmit(handleForm)}>
                    <div className="mb-4">
                        <label className="form-label text-secondary">Name</label>
                        <input {...register("name")} className="form-control" type="text" name="name" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label text-secondary">Email</label>
                        <input {...register("email")} className="form-control" type="email" name="email" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label text-secondary">Message</label>
                        <textarea {...register("message")} rows="5" className="form-control" type="text" name="message" />
                    </div>
                    <div className="py-3 sm:flex sm:flex-row-reverse">
                        <input type="submit" value="Submit" className="btn theme-button py-2 px-4" />
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default ContactMe;