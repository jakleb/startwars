import { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonKind, ContactFormData } from "../types";
import { Button } from "./Button";
import Input from "./Input";

export enum ControlTypes{
    Edit, Telephone, Checkbox, Mail, 
}

export const ContactForm = () => {

    //const { register, handleSubmit, watch, formState: { errors }} = useForm<Inputs>();

    const { register, handleSubmit, formState: { isValid, errors } } = useForm<ContactFormData>({
        mode: 'onChange',
    });

    const firstControlRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        firstControlRef.current?.focus();
    }, [])

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
                        <Input
                            label="Name:"
                            type="text"
                            error={errors?.firstName?.message}
                            {...register('firstName', { required: 'to pole jest wymagane' })}
                        />
                        <Input
                            label={"Surname:"}
                            type="text"
                            error={errors?.lastName?.message}
                            {...register('lastName')}
                        />
                        <Input
                            label={"E-mail:"}
                            error={errors?.email?.message}
                            type="email"
                            {...register('email')}
                        />
                        <Input
                            label={"Postal code:"}
                            error={errors?.postalCode?.message}
                            type="text"
                            placeholder="11-111" 
                            pattern="[0-9]{2}-[0-9]{3}"
                            {...register('postalCode')}
                        />
                        <Input
                            label={"Phone namber:"}
                            error={errors?.phoneNumber?.message}
                            type="tel"
                            placeholder="123456789" 
                            pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                            {...register('phoneNumber')}
                        />
                        <Input
                            label={"Message:"}
                            type="textarea"
                            {...register('phoneNumber')}
                        />
                        {/* {
                           Object.entries(contactFormData).map(([fieldName, options]) => {
                               register('fieldName')
                            return <Input {...options} {...register(fieldName, {})}/>
                            })
                        } */}
                    </div>
                    <div className="btn-container">
                        <Button disabled={!isValid} type="submit" kind={ButtonKind.primary}>Send</Button>
                    </div>
                </div>
            </form>
        </div >
    )
}