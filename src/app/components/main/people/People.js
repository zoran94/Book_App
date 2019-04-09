import React from 'react';
import Search from './Search';
import PeopleList from './PeopleList';
import fetchUsers from './../../../../services/fetchUsers';




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
        fetchUsers().then((response) => console.log(response))
    }

    searchUser(e) {
        this.setState({ searchValue: e.target.value })
    }

    componentDidMount() {
        this.onloadFetchUsers();
    }

    render() {
        return (
            <>
                <Search searchUser={this.searchUser} />
                <PeopleList />
            </>

        )
    }

}

export default People;

