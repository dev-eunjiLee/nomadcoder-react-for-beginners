import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  // router에서 내가 지정한 변수명을 그대로 들고온다
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json);
  };

  useEffect(async () => {
    const json = getMovie();
  }, []);

  return <h1>Detail</h1>;
}

export default Detail;
