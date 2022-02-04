// import { Component } from "react";


// class Form extends Component {


//     handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log(e);
//         this.setState({ [name]: value });
//     };

//     render() {
//         return <form>
//             <label htmlFor="">
//                 Name
//                 <input
//                     type="text"
//                     name="name"
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                     required
//                 />
//             </label>
//             <button type="submit" onClick={handleChange}>Add contact</button>
//         </form>
//     }
// }

// export default Form;