/* eslint-disable no-unused-vars */
import { Formik, Field, Form } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.error('Please enter your search query!');

export default function SearchBar({ onInput }) {

    const handleSubmit = (values, actions) => {
        onInput(values.query);
        console.log(values.query);
        actions.resetForm();
    }

    return (
        <header>
            <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
                <Form>
                    <Field type="text" name="query" autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos" />
                    <button type="submit" onClick={notify}>Search</button>

                </Form>
            </Formik>
        </header>
    )
}