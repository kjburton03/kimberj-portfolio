import "./contact.css"

export const ContactKimberJ = () => {
    return <>
        <h1> whats the addy </h1>
        <article className="contact__form">

        <form action="https://getform.io/f/16f3f33c-8c18-4149-b2a3-945eb372e721" method="POST" className="forms">
            <input 
                type="text" 
                name="name"
                placeholder="name"/>
            <input 
                type="email" 
                name="email" 
                placeholder="email"
                />
            <textarea 
                type="text" 
                name="message" 
                rows="7"
                placeholder="message"

            />
            <button 
            type="submit">Send</button>
                    </form>
                    </article>
    </>
}