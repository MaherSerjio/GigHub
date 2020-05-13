import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="col-sm-6 " >
                <form onSubmit={this.onFormSubmit}>
                    <div className="input-group" >
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => { this.setState({ term: e.target.value }) }}
                            className="form-control py-2 border-right-0 border"
                            placeholder="Search for an artist…" >
                        </input>
                        <i className="fa fa-search"></i>
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;