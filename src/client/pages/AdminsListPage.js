import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/hocs/requireAuth'

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    })
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.admins.length} Admins Loaded`}</title>
        <meta property="og:title" content="Admins" />
      </Helmet>
    )
  }

  render() {
    return (
      <div className="center-align" style={{ marginTop: '200px' }}>
        {this.head()}
        <h3>Here's a list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ admins }) => ({
  admins
})

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
}
