export const ContactForm = () => {

    return (
        <form>
            <div className="form-title-form">
                <h1>Contact form</h1>
            </div>
            <div className="form-content">
                <div>
                    <label>Name:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Surname:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>E-mail:</label>
                    <input type="email"/>
                </div>
                <div>
                    <label>Postal code:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Phone namber:</label>
                    <input type="tel" placeholder="123-456-789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea></textarea>
                </div>
            </div>
            <div className="btn-container">
                <button type="submit">Send</button>
            </div>
        </form>
    )
}