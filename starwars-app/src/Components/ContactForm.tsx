import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonKind, ContactFormData } from "../types";
import { Button } from "./Button";
import InputWrapper from "./InputWrapper";

export enum ControlTypes{
    Edit, Telephone, Checkbox, Mail, 
}

export const ContactForm = () => {

    const { register, handleSubmit, formState: { isValid, errors } } = useForm<ContactFormData>({
        mode: 'onChange',
    });

    const firstControlRef = useRef<HTMLInputElement>(null);

    const onSubmit: SubmitHandler<ContactFormData> = (data) => {
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
                        <InputWrapper 
                            error={errors.firstName?.message} 
                            label={"Name"}>
                            <input type="text" {...register("firstName", {required: "Name is required"})} />
                        </InputWrapper>
                        <InputWrapper 
                            error={errors.lastName?.message} 
                            label={"Surname"}>
                            <input type="text" {...register("lastName", {required: "Surname is required"})} />
                        </InputWrapper>
                        <InputWrapper 
                            error={errors.email?.message} 
                            label={"E-mail"}>
                            <input type="email" {...register("email", {required: "E-mail is required"})} />
                        </InputWrapper>
                        <InputWrapper 
                            error={errors.postalCode?.message} 
                            label={"Postal code"}>
                            <input type="text" 
                                   placeholder="12-345" 
                                   {...register("postalCode", 
                                        { required: "Postal code is required", 
                                          pattern:{value: /[0-9]{2}-[0-9]{3}/,message:"Incorrect pattern"}})
                                    } />
                        </InputWrapper>
                        <InputWrapper 
                            error={errors.phoneNumber?.message} 
                            label={"Phone number"} >
                            <input type="tel" 
                                   placeholder="123-456-789" 
                                   {...register("phoneNumber", 
                                        { required: "Phone number is required", 
                                          pattern:{value:/[0-9]{3}-[0-9]{3}-[0-9]{3}/, message:"Incorrect pattern"}
                                        })
                                    } />
                        </InputWrapper>
                        <InputWrapper 
                            error={errors.message?.message} 
                            label={"Message"}>
                            <textarea {...register("message")}></textarea>
                        </InputWrapper>
                    </div>
                    <div className="btn-container">
                        <Button disabled={!isValid} type="submit" kind={ButtonKind.primary}>Send</Button>
                    </div>
                </div>
            </form>
        </div >
    )
}