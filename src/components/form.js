import React from "react"

const Form = () => {
  return (
      <>
    <h4>Get tips in your inbox...</h4>
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
      <input type="submit" value="Subscribe" />
    </div>
  </form>
  </>
  )
}
export default Form
