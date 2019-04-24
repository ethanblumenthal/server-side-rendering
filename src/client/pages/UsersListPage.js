import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { fetchUsers } from '../actions'

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users" />
      </Helmet>
    )
  }

  render() {
    return (
      <div className="center-align" style={{ marginTop: '200px' }}>
        {this.head()}
        <h3>Here's a list of users</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users
})

export default {
  component: connect(mapStateToProps, { fetchUsers })(UserList),
  loadData: ({ dispatch }) => dispatch(fetchUsers())
}
