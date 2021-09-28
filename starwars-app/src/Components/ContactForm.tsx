import { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


export enum ControlTypes{
    Edit, Telephone, Checkbox, Mail, 
}

type Inputs = {
    name: string;
    lastName: string;
    email: string;
    postalCode: string;
    phoneNumber: string;
    message: string
  };

export const ContactForm = () => {

    const { register, handleSubmit, watch, formState: { errors }} = useForm<Inputs>();

    const firstControlRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        firstControlRef.current?.focus();
    }, [])

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="controls-wrapper">
                    <div className="form-title-form">
                        <h1>Contact form</h1>
                    </div>
                    <div className="form-content">
                        <div className="control-wrapper">
                            <label>Name:</label>
                            <input {...register("name", {required: true, })} className={errors.name ? "valid-error" : ''} type="text" ref={firstControlRef} />
                            <p>{errors.name?.message}</p>
                        </div>
                        <div className="control-wrapper">
                            <label>Surname:</label>
                            <input {...register("lastName",{required: true, })} className={errors.lastName ? "valid-error" : ''} type="text" />
                            {/* <p>{errors.lastName?.message}</p> */}
                        </div>
                        <div className="control-wrapper">
                            <label>E-mail:</label>
                            <input {...register("email", {required: true, })} className={errors.email ? "valid-error" : ''} type="email" />
                            {/* <p>{errors.email?.message}</p> */}
                        </div>
                        <div className="control-wrapper">
                            <label>Postal code:</label>
                            <input {...register("postalCode", {required: true, })} className={errors.postalCode ? "valid-error" : ''} type="text" pattern="[0-9]{2}-[0-9]{3}" placeholder="11-111"/>
                            {/* <p>{errors.postalCode?.message}</p> */}
                        </div>
                        <div className="control-wrapper">
                            <label>Phone namber:</label>
                            <input {...register("phoneNumber", {required: true, })} className={errors.phoneNumber ? "valid-error" : ''} type="tel" placeholder="123456789" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" />
                            {/* <p>{errors.phoneNumber?.message}</p> */}
                        </div>
                        <div className="control-wrapper">
                            <label>Message</label>
                            <textarea {...register("message")} ></textarea>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button type="submit">Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}