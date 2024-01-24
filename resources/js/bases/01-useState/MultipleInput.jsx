import { useState } from "react";


export const MultipleInput = () => {
    //1. hacer formulario controlado
    //2, método que al hacer submit me imprima en pantalla el valor del formulario
    //3. un SOLO MÉTODO para controlaar el formulario

    const[inputsForm,setInputsForm] = useState({
        email: '',
        password: ''
    });

    const {email,password} = inputsForm;


    const handleInputsChange = ({target}) => {
        const {name,value} = target;
        setInputsForm({
            ...inputsForm,
            [name]: value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputsForm);
        const divValuesForm = e.target.children['divValuesForm'];
        console.log(divValuesForm)
        divValuesForm.innerHTML = `
            <br /><br />
            <span>Email: ${email}</span>
            <br />
            <span>Password: ${password}</span>
        `;
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Email address</label>
          <input
            className='form-control'
            placeholder='Enter email'
            type='email'
            name="email"
            value={email}
            onChange={handleInputsChange}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            className='form-control'
            placeholder='Password'
            type='password'
            name="password"
            value={password}
            onChange={handleInputsChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>

        <div name="divValuesForm">
        </div>
        </form>
        </>
    );
}