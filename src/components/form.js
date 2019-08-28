import React from "react"

const Form = () => {
  return (
    <form name="Contact Form" method="POST" data-netlify="true" action="/thank-you">
      <p>
        <label>
          Name <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email <input type="email" name="email" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}
export default Form
