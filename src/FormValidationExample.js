import React, { useState, useEffect } from 'react';

const FormValidationExample = (callback, validate) => {
  const [name, setName] = useState('');
  const [name1, setName1] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [interests, setInterests] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const errors = {};
    if (!name) {
      errors.name = ' FirstName is required';
    }
    if (!name1) {
        errors.name1 = 'LastName is required';
      }
    if (!age) {
        errors.age = 'Age is required';
      }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!telephone) {
        errors.telephone = 'Number  is required';
      } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(telephone)) {
        errors.telephone = 'Invalid telephone  number';
      }
      if (!state) {
        errors.state = 'State is required';
      }
     if (!country) {
        errors.country = 'Country is required';
      }
      if (!address) {
        errors.address = 'Address is required';
      }
      if (!interests) {
        errors.interests = 'Interests is required';
      }
      setErrors(errors);
    }, [name,name1,age, email,telephone,state,country,address,interests]);
     
  

  const handleSubmit = (event) => {
     event.preventDefault();
     setIsSubmitted(true);
    if (Object.keys(errors).length !==0) {
        console.log(errors);
        return ;
  }
  console.log("Form submitted");
}


  return (
 <form onSubmit={handleSubmit}>
<div className="form">
    < div className="form-body">  
      <div div className="username">
        <label htmlFor="name" className="form__label" >Name</label>
        <input
          id="name"
          type="text"
          className="form__input1"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
           
                
         <input
          id="name1"
          type="text"
          className="form__input1"
          value={name1}
          onChange={(event) => setName1(event.target.value)}
        />
        {isSubmitted && errors.name && (<span style={{marginLeft: "80px"}}>{ errors.name}</span>)}
        { isSubmitted && errors.name1 && (<span style={{marginLeft: "246px"}}>{errors.name1}</span>)}
        </div>
      
       
      <div>
        <label htmlFor="age" className="form__label" >Age</label>
        <input
          id="age"
          type="range"
          className="form__input" 
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        { isSubmitted &&  errors.age && <span>{errors.age}</span>}
      </div>



      <div>
        <label htmlFor="email" className="form__label" >Email</label>
        <input
          id="email"
          type="email"
          className="form__input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        { isSubmitted &&  errors.email && <span>{errors.email}</span>}
      </div>
      
      <div>
        <label htmlFor="telephone" className="form__label" >Telephone</label>
        <input
          id="telephone"
          type="text"
          className="form__input"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
        />
        { isSubmitted && errors.telephone && <span>{errors.telephone}</span>}
      </div> 

       <div>
        <label htmlFor="state" className="form__label" >State</label>
        <select id="state"  className="custom-select"  value={state} onChange={(event) => setState(event.target.value)}>
          <option value="">-- Please select a state --</option>
          <option value="GU">Gujarat</option>
          <option value="PB">Punjab</option>
          <option value="RJ">Rajasthan</option>
         </select>
          { isSubmitted && errors.state && <span>{errors.state}</span>}
          </div>


         <div>
        <label htmlFor="country" className="form__label" >Country</label>
        <select id="country"   className="custom-select" value={country} onChange={(event) => setCountry(event.target.value)}>
          <option value="">-- Please select a country --</option>
          <option value="USA">United States</option>
          <option value="Canada">Canada</option>
          </select>
           {isSubmitted && errors.country && <span>{errors.country}</span>}
          </div>


          <div>
        <label htmlFor="address" className="form__label" >Address</label>
        <select id="address"  className="custom-select" value={address} onChange={(event) => setAddress(event.target.value)}>
          <option value="">-- Please select a address --</option>
          <option value="Home">Home</option>
          <option value="Company">Company</option>
          </select>
          { isSubmitted && errors.address && <span>{errors.address}</span>}
          </div>

          <div>
        <label htmlFor="interests" className="form__label" >Interests</label>
        <input
          id="interests"
          type="text"
          className="form__input"
          value={interests}
          onChange={(event) => setInterests(event.target.value)}
          />
          { isSubmitted && errors.interests && <span>{errors.interests}</span>}
         </div>
      </div>
          <div class="footer">
              <button type="submit" class="btn"  >Submit</button>
          </div>
 </div>  
    </form>
  );
};

export default FormValidationExample;