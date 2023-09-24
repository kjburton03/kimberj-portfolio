import "./contact.css"

export const ContactKimberJ = () => {
    return <>
        <div className="form-container">
        <article className="contact__form">
        <h3 className="conact__title">Wanna talk?</h3>
        <h4 className="contact__info"> Or reach out to me at kj.burton03@gmail </h4>
        <form action="https://getform.io/f/16f3f33c-8c18-4149-b2a3-945eb372e721" method="POST" className="forms">
            <input 
                type="text" 
                name="name"
                placeholder="name"/>
                <br></br>
            <input 
                type="email" 
                name="email" 
                placeholder="email"
                />
                <br></br>
            <textarea 
                type="text" 
                name="message" 
                rows="7"
                placeholder="message"

            />
            <br></br>
            <button 
            type="submit">Send</button>
                    </form>
                    </article>
                    </div>
    </>
}