// import React, {useState} from 'react';
// import axios from 'axios';



//     async function handlesubmit(e){
//         e.preventDefault();

//         const getUsername={
//             email:email,
//             password:password,  
//         };
//         let response = await axios.post(`http://localhost:3000/api/users/login`, '');
//             console.log(response.data);
//             localStorage.setItem('token', response.data)
//             window.location ='/';
//     }

//     return (
//         <form className="findPage" onSubmit={handlesubmit}>
//             <label>email</label>
//             <input value={email} onChange={(event) => getEmail(event.target.value)} type='text' />

//             <label>passord</label>
//             <input value={password} onchange={(event) => getPassword(event.target.value)} type='text' /> }
            
//             </form> 
//     );

// export default FindPage;