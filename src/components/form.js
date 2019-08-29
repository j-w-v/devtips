import React from "react"

const Form = () => {
  return (
      <>
    <p>Want more tips? Get an email each time we post a new one.</p>
    <form name="Contact Form" method="POST" data-netlify="true" action="/thank-you" enctype="application/x-www-form-urlencoded">
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
    </>
  )
}
export default Form
