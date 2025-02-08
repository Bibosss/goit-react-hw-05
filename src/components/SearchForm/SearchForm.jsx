import { Field, Formik, Form } from "formik";

const SearchForm = ({ onSearch, initialQuery }) => {
    const initialValues = {
    movieName: initialQuery || "",
    }
    
    const handleSubmit = (values, actions) => {
        if (!values.movieName.trim()) return;
        onSearch(values.movieName.trim())
        actions.setSubmitting(false);
    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
                <Form>
                    <Field
                        type="text"
                        name="movieName"
                        placeholder="Enter the title to search"
                        autoComplete="off"
                        autoFocus
                    />
                    <div>
                        <button type="submit">Search</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default SearchForm;