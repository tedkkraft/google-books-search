import React from "react";

function Form(props){
    return (
        <div className="container">
            <form>
                <div className="form-group p-5">
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for a book"
                        id="search"
                    />
                    <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
                    Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;