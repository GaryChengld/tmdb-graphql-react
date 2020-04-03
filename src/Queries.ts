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
      name
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
          name
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
      originalTitle
      tagline
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
        creditId
        personId: id
        name
        character
        profilePath(size: L)
      }
      directors {
        creditId
        personId: id
        name
        profilePath(size: L)
      }
      writers {
        creditId
        personId: id
        name
        job
      }
      images {
        posters
        backdrops
      }
      smallImages: images {
        posters(size: M)
        backdrops(size: S)
      }
      trailer {
        name
        key
      }
      videos {
        id
        name
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

export const movieCastQuery = gql`
  query movieDetail($id: Int!) {
    movieDetail(id: $id) {
      id
      title
      posterPath(size: L)
      releaseYear
      casts {
        creditId
        personId: id
        name
        character
        profilePath(size: L)
      }
      crews {
        creditId
        personId: id
        name
        job
        profilePath(size: L)
      }
      images {
        backdrops
      }
    }
  }
`;
