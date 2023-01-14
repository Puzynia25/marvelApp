import { useState } from "react";
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage} from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './CharSearchForm.scss'

const CharSearchForm = () => {
    const [char, setChar] = useState(null);

    const {loading, error, getCharacterByName, clearError} = useMarvelService();
    
    const onCharLoaded = (char) => {
        setChar(char)
        console.log(char)
    }

    const updateChar = (name) => {
        clearError();

        getCharacterByName(name)
            .then(onCharLoaded)
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const content = !char ? null : char.length > 0 ? 
        <div className="char__search-wrapper">
            <div className="char__search-success">There is! Visit {char[0].name} page?</div>
            <Link to={`/marvelApp/characters/${char[0].id}`} className="button button__secondary">
                <div className="inner">To page</div>
            </Link>
        </div> : 
        <div className="char__search-error">The character was not found. Check the name and try again</div>

    return (
        <div className="char__search-form">
            <Formik
                initialValues={{
                    charName: ''
                }}
                validationSchema = {Yup.object({
                    charName: Yup.string().required('This field is required')
                })}
                onSubmit = {({charName}) => updateChar(charName)}
            >
                <Form>
                    <label className="char__search-label" htmlFor="charName">Or find a character by name</label>
                        <div className="char__search-wrapper">
                            <Field
                                id="charName"
                                name="charName"
                                placeholder="Enter name"
                                type="text"
                            />
                            <button 
                                type="submit"
                                className="button button__main"
                                disabled={loading}
                            >
                                <div className="inner">Find</div>
                            </button>
                        </div>
                        <FormikErrorMessage className="error" name="text" component="div"/>
                </Form>
            </Formik>
            {content}
            {errorMessage}
        </div>
    )
}

export default CharSearchForm;