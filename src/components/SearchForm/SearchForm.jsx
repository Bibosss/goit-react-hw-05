import { Field, Formik, Form } from "formik";

const initialValues = {
    movieName: "",
}

const SearchForm = ({ onSearch }) => {
    const handleSubmit = (values, actions) => {
        if (!values.movieName.trim()) return;
        onSearch(values.movieName.trim())
        actions.resetForm();
    }

    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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