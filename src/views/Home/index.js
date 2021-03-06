import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import './node_modules/config'
import {signUp} from './node_modules/ducks/auth/actions'
import {signIn} from './node_modules/ducks/auth/actions'

import './node_modules/styles/components/Home.scss'
import './node_modules/styles/components/Btn.scss'
import './node_modules/styles/components/NavIndicator.scss'
// import 'styles/base/fonts.scss'

import MovieList from './node_modules/views/MovieList'
import Watchlist from './node_modules/views/Watchlist'
import Header from './node_modules/views/Header'
import SignInForm from './node_modules/views/SignInForm_'
import SignUpForm from './node_modules/views/SignUpForm_'
import Search from './node_modules/views/components/Search'
import MovieInfo from './node_modules/views/MovieInfo'

function Home(props) {

  const handleSignIn = ({email, password}) => {
    props.signIn(email, password)
  }

  const handleSignUp = ({email, password}) => {
    props.signUp(email, password)
  }

  return (
          <section className='home'>
            <Header />
            <div className='home__container'>
              <div className='home__inner'>
                <Route exact path='/' component={Search} />
                <Route exact path='/movies' component={MovieList} />
                <Route exact path='/watchlist' component={Watchlist} />
                <Route path='/movie/:filmID' component={MovieInfo} />
                {
                  props.user
                    ? null
                    : <>
                      <Route exact path='/sign-in' render={() => <SignInForm onSubmit={handleSignIn} />} />
                      <Route exact path='/sign-up' render={() => <SignUpForm onSubmit={handleSignUp} />} />
                    </>
                }
              </div>
            </div>
          </section>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, {signUp, signIn})(Home);