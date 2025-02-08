import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage.jsx'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'))
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews.jsx'))

const App = () => {
  return (
    <div>
      <Navigation />
      
      <Suspense fallback={<>loading...</>}>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />

        <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>

        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App