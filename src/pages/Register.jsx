// import { Formik, Field, Form } from 'formik';
// import { methPostUsers } from '../helpers/index'


// const Register = () => (
//     <div>
//         <h1>Register</h1>
//         <Formik
//             initialValues={{
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//             }}
//             onSubmit={async (values) => {
//                 await new Promise((r) => setTimeout(r, 500));
//                 methPostUsers(values);
//             }}
//         >
//             <Form>
//                 <label htmlFor="firstName">First Name</label>
//                 <Field id="firstName" name="firstName" placeholder="Jane" />

//                 <label htmlFor="lastName">Last Name</label>
//                 <Field id="lastName" name="lastName" placeholder="Doe" />

//                 <label htmlFor="email">Email</label>
//                 <Field
//                     id="email"
//                     name="email"
//                     placeholder="jane@acme.com"
//                     type="email"
//                 />
//                 <label htmlFor="password">Password</label>
//                 <Field
//                     id="password"
//                     name="password"
//                     placeholder="1234654"
//                     type="password"
//                 />
//                 <button type="submit">Register</button>
//             </Form>
//         </Formik>
//     </div>
// );





// export default Register