import gql from 'graphql-tag';

const basicMovieFragment = gql`
  fragment BasicMovieInfo on BaseMovie {
    id
    title
    posterPath(size: L)
  }
`;

const listMovieFragment = gql`
  fragment ListMovieInfo on BaseMovie {
    id
    title
    releaseDate
    voteAverage
    overview
    posterPath(size: L)
    backdropPath
    genres {
      id
      name
    }
    trailer {
      key
    }
  }
`;

export const homePageQuery = gql`
  query homePageQuery($region: String) {
    nowPlayingMovies(page: 1, region: $region) {
      results {
        ...BasicMovieInfo
        voteAverage
        trailer {
          key
        }
      }
    }
    upcomingMovies(page: 1, region: $region) {
      results {
        ...BasicMovieInfo
        releaseDate
      }
    }
    popularMovies(page: 1, region: $region) {
      results {
        ...BasicMovieInfo
      }
    }
  }
  ${basicMovieFragment}
`;

export const nowPlayingMoviesQuery = gql`
  query nowPlayingMovies($page: Int!, $region: String) {
    movieData: nowPlayingMovies(page: $page, region: $region) {
      page
      totalPages
      results {
        ...ListMovieInfo
      }
    }
  }
  ${listMovieFragment}
`;

export const upcomingMoviesQuery = gql`
  query upcomingMovies($page: Int!, $region: String) {
    movieData: upcomingMovies(page: $page, region: $region) {
      page
      totalPages
      results {
        ...ListMovieInfo
      }
    }
  }
  ${listMovieFragment}
`;

export const popularMoviesQuery = gql`
  query popularMovies($page: Int!, $region: String) {
    movieData: popularMovies(page: $page, region: $region) {
      page
      totalPages
      results {
        ...ListMovieInfo
      }
    }
  }
  ${listMovieFragment}
`;

export const topRatedMoviesQuery = gql`
  query topRatedMovies($page: Int!, $region: String) {
    movieData: topRatedMovies(page: $page, region: $region) {
      page
      totalPages
      results {
        ...ListMovieInfo
      }
    }
  }
  ${listMovieFragment}
`;

export const movieDetailQuery = gql`
  query movieDetail($id: Int!) {
    movieDetail(id: $id) {
      id
      title
      imdbId
      originalLanguage {
        englishName
        name
      }
      spokenLanguages {
        englishName
        name
      }
      runtime
      releaseDate
      releaseYear
      budget
      revenue
      voteAverage
      overview
      posterPath(size: L)
      backdropPath
      genres {
        id
        name
      }
      casts {
        id
        name
        character
        profilePath(size: L)
      }
      crews {
        id
        name
        job
        profilePath(size: L)
      }
      director {
        id
        name
        profilePath(size: L)
      }
      images {
        posters
        backdrops
      }
      trailer {
        key
      }
      videos {
        type
        key
      }
      recommendations {
        results {
          ...BasicMovieInfo
        }
      }
    }
  }
  ${basicMovieFragment}
`;
