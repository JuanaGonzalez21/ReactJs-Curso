import React from 'react';

const FormNavbar = () => {
    return (
        <>
         <form className="d-flex">
             <input className="form-control me-sm-2" type="text" placeholder="Search"></input>
             <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        </>
    );
}

export default FormNavbar;
