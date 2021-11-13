import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MovieResponseDto } from './dto/movie-response.dto';

@Injectable()
export class AppService {

  async getResult (searchKey: string) {
    const result = await axios.get(process.env.OMDBAPIURL, {
      params: {
        t: searchKey,
        apikey: process.env.APIKEY
      }
    });
    return result.data;
    // const result: MovieResponseDto = {
    //   Title: "Dil",
    //   Year: "1990",
    //   Rated: "Not Rated",
    //   Released: "22 Jun 1990",
    //   Runtime: "172 min",
    //   Genre: "Comedy, Drama, Romance",
    //   Director: "Indra Kumar",
    //   Writer: "Rajeev Kaul, Naushir Khatau, Kamlesh Pandey",
    //   Actors: "Aamir Khan, Madhuri Dixit, Saeed Jaffrey",
    //   Plot: "A man pretends to be a rich industrialist to improve his son's chances of marrying in to wealth, but his plan backfires on him.",
    //   Language: "Hindi",
    //   Country: "India",
    //   Awards: "1 win & 6 nominations",
    //   Poster: "https://m.media-amazon.com/images/M/MV5BNzZiZTY0NTMtNTFhMC00OTA1LTg5ZmQtMjYwNThhNDJiOTVkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    //   Ratings: [
    //     {
    //       Source: "Internet Movie Database",
    //       Value: "6.7/10"
    //     }
    //   ],
    //   Metascore: "N/A",
    //   imdbRating: "6.7",
    //   imdbVotes: "5,168",
    //   imdbID: "tt0099429",
    //   Type: "movie",
    //   DVD: "05 Jun 2017",
    //   BoxOffice: "N/A",
    //   Production: "N/A",
    //   Website: "N/A",
    //   Response: "True"
    // }
  }
}
