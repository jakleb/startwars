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
                            <input {...register("name")} type="text" />
                        </div>
                        <div className="control-wrapper">
                            <label>Surname:</label>
                            <input {...register("lastName")} type="text" />
                        </div>
                        <div className="control-wrapper">
                            <label>E-mail:</label>
                            <input {...register("email")} type="email" />
                        </div>
                        <div className="control-wrapper">
                            <label>Postal code:</label>
                            <input {...register("postalCode")} type="text" />
                        </div>
                        <div className="control-wrapper">
                            <label>Phone namber:</label>
                            <input {...register("phoneNumber")} type="tel" placeholder="123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
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