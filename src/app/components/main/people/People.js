import React from 'react';
import Search from './Search';
import PeopleList from './PeopleList';
import { fetchUsers } from './../../../../services/userService';



class People extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            people: null,
            searchValue: ""
        }

        this.searchUser = this.searchUser.bind(this)
    }


    onloadFetchUsers() {
        fetchUsers().then((response) => {
            this.setState({ people: response });
        })
    }

    searchUser(e) {
        this.setState({ searchValue: e.target.value })
    }

    componentDidMount() {
        this.onloadFetchUsers();
    }

    render() {
        if (!this.state.people) {
            return (
                <div className="sk-fading-circle">
                    <div className="sk-circle1 sk-circle"></div>
                    <div className="sk-circle2 sk-circle"></div>
                    <div className="sk-circle3 sk-circle"></div>
                    <div className="sk-circle4 sk-circle"></div>
                    <div className="sk-circle5 sk-circle"></div>
                    <div className="sk-circle6 sk-circle"></div>
                    <div className="sk-circle7 sk-circle"></div>
                    <div className="sk-circle8 sk-circle"></div>
                    <div className="sk-circle9 sk-circle"></div>
                    <div className="sk-circle10 sk-circle"></div>
                    <div className="sk-circle11 sk-circle"></div>
                    <div className="sk-circle12 sk-circle"></div>
                </div>
                )
        }
        const people = this.state.people.filter((element) => {
            return `${element.firstName}${element.lastName}`.toLowerCase().includes(this.state.searchValue.toLowerCase());
        })
        return (
            <div className="padding-top">
                <Search searchUser={this.searchUser} />
                <PeopleList people={people} />
            </div>

        )
    }

}

export default People;

