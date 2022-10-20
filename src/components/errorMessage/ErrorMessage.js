import error from './error.gif';

const ErrorMessage = () => {
    return (
        <img src={error} alt="Error" style={{display: 'block', width: '150px', height: '150px', margin: '0 auto'}}/>
    )
}

export default ErrorMessage;