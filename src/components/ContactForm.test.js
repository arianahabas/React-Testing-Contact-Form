import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ContactForm from './ContactForm'

//render ContactForm
test('Renders form without errors', () => {
    render(<ContactForm/>)
})


test ('Form can be filled out , submitted , and user data displayed', async () => {
    //render ContactForm
    render(<ContactForm/>)

    // query for inputs
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const email = screen.getByLabelText(/email/i)
    const message = screen.getByLabelText(/message/i)

    //fill out inputs
    fireEvent.change(firstName, { target: { value: ' Ariana'}})
    fireEvent.change(lastName, { target: { value: ' Habas'}})
    fireEvent.change(email, { target: { value: ' arianahabas@gmail.com'}})
    fireEvent.change(message, { target: { value: ' hello everyone'}})

    //query for submit button
    const submitButton = screen.getByRole('button', {name: /submit/i})

   //click submit button
    fireEvent.click(submitButton)

    //see if DOM contains submission
    expect(await screen.findByText(/arianahabas@gmail.com/i)).toBeInTheDocument()

})






// await act (async() => {
//     fireEvent.blur(firstName)
//     fireEvent.blur(lastName)
//     fireEvent.blur(email)
//     fireEvent.blur(message)
// })
 
// const errors = screen.queryByText(/looks like there was an error/i)

// expect (errors).not.toBeInTheDocument()


