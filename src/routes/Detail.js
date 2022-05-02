import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  // router에서 내가 지정한 변수명을 그대로 들고온다
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json.data.movie);

    setMovieDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(async () => {
    const json = getMovie();
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <h1>{movieDetail.title}</h1>
      <img src={movieDetail.medium_cover_image} />
      <div>
        <h3>genres</h3>
        <ul>
          {movieDetail.genres.map((perGenre) => {
            return <li>{perGenre}</li>;
          })}
        </ul>
      </div>
      <div>
        <h3>description</h3>
        {movieDetail.description_intro !== "" ? (
          <p> movieDetail.description_intro</p>
        ) : (
          <p>여튼 재밌는 영화야</p>
        )}
      </div>
    </div>
  );
}

export default Detail;
