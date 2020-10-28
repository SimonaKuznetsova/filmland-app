import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import 'config'
import {signUp} from 'ducks/auth/actions'
import {signIn} from 'ducks/auth/actions'

import 'styles/components/Home.scss'
import 'styles/components/Btn.scss'
import 'styles/components/NavIndicator.scss'
// import 'styles/base/fonts.scss'

import MovieList from 'views/MovieList'
import Watchlist from 'views/Watchlist'
import Header from 'views/Header'
import SignInForm from 'views/SignInForm_'
import SignUpForm from 'views/SignUpForm_'
import MovieInfo from 'views/MovieInfo'

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
                <Route exact path='/' component={MovieList} />
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