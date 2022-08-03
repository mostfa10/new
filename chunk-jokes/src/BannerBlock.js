import React from "react";
import AllIcon from './assets/assets_Homework_Front-End_01/green-light-copy-2.png'

export class BannerBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.searchResults = [];
        this.showResults = false;
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.resetSearch = this.resetSearch.bind(this)
      this.showJoke = this.showJoke.bind(this)
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.setSearchInput(event.target.value)
        if(event.target.value.length > 3){
            this.props.fetchJokesSearchResults(event.target.value)
            this.showResults = true;
        }
    }
  
    handleSubmit(event) {     
        this.searchResults = this.props.getSearchResults()
    }

    resetSearch(){
        this.showResults = false;
        this.props.setSearchInput('all');
        this.setState({value: ''});
    }

    showJoke(index){
        if(this.searchResults.length > 1){
            this.props.setJokesToShow(this.searchResults)
        }else
        {
            this.props.setCurrentJokeIndex(index)
            this.props.setGridDisplay(false)
        }
    }

  render () {
    return ( 
        <div className="banner-block">
            <div className="row d-block">
                <div className="col-12 mt-5">
                    <span className="title-block "> The joke Bible</span>
                </div>
                <div className="col-12">
                    <span className="white-text"> Daily laughs for you and yours</span>
                </div>
            </div>
            <div className="mt-4 search-container">
            <form onSubmit={this.handleSubmit}>
                <label>
                <input type="text" className="search-input" value={this.state.value} onChange={this.handleChange} onKeyUp={this.handleSubmit} onBlur={this.resetSearch} placeholder="How can we make you laugh today ?" />
                </label>
            </form>
            { (this.showResults === true) ?
                        (
                            <div className="search-result-container">
                            <div className="row">
                                { 
                                    this.searchResults?.map((res, index) => {
                                        res.icon = AllIcon;
                                        return (<div className="search-result"  key={'res'+index.toString()} onClick={this.showJoke(index)}>
                                            <img src={res.icon} height='20px' className="px-1" alt="header icon"></img>
                                            <span>{res.categories[0] ?? 'Random'}: {res.value.substring(0, 15) + '...'}</span>
                                        </div>
                                    )})
                                }
                            </div>
                        </div>
                        ) : <span></span>
                    }
           
            </div>
        </div>
     );
}
}