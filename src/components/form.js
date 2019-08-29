import React from "react"

const Form = () => {
  return (
      <>
    <p>Want more tips? Get an email each time we post a new one.</p>
    <form
    name="contact"
    method="post"
    action="/thank-you"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
  </>
  )
}
export default Form
