import "./ContactFormStyles.css"

function ContactForm(){
    return (
        <div className="form-container">
        <h1>Send a message to us!</h1>
        <form>
            <imput placeholder="Name"/>
            <imput placeholder="Email"/>
            <imput placeholder="Subject"/>
            <textarea placeholder="Message" rows="4"></textarea>
            <button>Send Message</button>
        </form>
        </div>
    )
}

export default ContactForm;