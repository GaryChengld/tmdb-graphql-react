import gql from 'graphql-tag';

const basicMovieFragment = gql`
  fragment BasicMovieInfo on BaseMovie {
    id
    title
    posterPath(size: L)
  }
`;

export const homePageQuery = gql`
  query homePageQuery($region: String) {
    nowPlayingMovies(page: 1, region: $region) {
      results {
        ...BasicMovieInfo
        voteAverage
        videos(type: "Trailer") {
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
        ...BasicMovieInfo
        voteAverage
        releaseDate
      }
    }
  }
  ${basicMovieFragment}
`;

export const upcomingMoviesQuery = gql`
  query upcomingMovies($page: Int!, $region: String) {
    movieData: upcomingMovies(page: $page, region: $region) {
      page
      totalPages
      results {
        ...BasicMovieInfo
        releaseDate
      }
    }
  }
  ${basicMovieFragment}
`;

export const popularMoviesQuery = gql`
  query popularMovies($page: Int!, $region: String) {
    movieData: popularMovies(page: $page, region: $region) {
      page
      totalPages
      results {
        ...BasicMovieInfo
        voteAverage
        releaseDate
      }
    }
  }
  ${basicMovieFragment}
`;

export const topRatedMoviesQuery = gql`
  query topRatedMovies($page: Int!, $region: String) {
    movieData: topRatedMovies(page: $page, region: $region) {
      page
      totalPages
      results {
        ...BasicMovieInfo
        voteAverage
        releaseDate
      }
    }
  }
  ${basicMovieFragment}
`;
