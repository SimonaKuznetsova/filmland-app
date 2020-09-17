import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import 'config'
import { fire } from 'config'
import {signUp} from 'ducks/auth/reducer'

import 'styles/components/Home.scss'
import 'styles/components/Btn.scss'
import 'styles/components/NavIndicator.scss'
import 'styles/base/fonts.scss'

import MovieList from 'views/MovieList'
import Watchlist from 'views/Watchlist'
import { Header } from 'views/Header'
import SignInForm from 'views/SignInForm_'
import SignUpForm from 'views/SignUpForm_'
import MovieInfo from 'views/MovieInfo'

function Home(props) {

  const handleSignIn = (values) => {
    console.log('---', values)
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
                    ? <h1>You are home</h1>
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

export default connect(mapStateToProps, {signUp})(Home);