import React, { Component } from "react";
import API from "../utils/api";
import Button from "react-bootstrap/Button"

class Results extends Component {

    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    handleSave = book => {

        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <div>
                {!this.props.books.length ? (
                    <p className="text-center">No Results to Display</p>
                ) : (
                        <div>
                            {this.props.books.map(result => (
                                <div className="card mb-3" key={result._id}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img alt={result.title} className="img-fluid" src={result.image} />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h5 className="card-title">{result.title} by {result.authors}</h5>
                                                <p className="card-text">{result.description}</p>
                                                <div>
                                                    <a href={result.link} className="btn" variant="info" target="_blank" >View</a>
                                                    <Button onClick={() => this.handleSave(result)} variant="info" >
                                                        {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Results;