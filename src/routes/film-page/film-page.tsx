import { useLoaderData } from "react-router-dom";
import IFilm from "../../interfaces/i-film";

const FilmPage = () => {
  const {
    title,
    overview,
    vote_average: voteAverage,
    release_date: releaseDate,
    original_language: originalLanguage,
    poster_path,
    backdrop_path,
  } = useLoaderData() as IFilm;
  const imagePath = poster_path || backdrop_path;
  return (
    <main className="film">
      <div className="film__intro">
        <div className="wrapper">
          <div className="film__poster">
            <img src={`TestPic.jpg`} alt="poster" />
          </div>
          <div className="film__title">
            <h1 className="film__name">{title}</h1>
            <p className="film__raiting">{`Рейтинг: ${voteAverage}`}</p>
            <p>{overview}</p>
          </div>
        </div>
      </div>
      <div className="film__content wrapper">
        <nav>
          <a href="#" className="active">{`Детали`}</a>
          <a href="#">{`Видео`}</a>
          <a href="#">{`Актеры`}</a>
        </nav>
        <div className="film__detail">
          <div className="film__detail-item">
            <h3>{`Статус`}</h3>
            <span>{`Released`}</span>
          </div>
          <hr />
          <div className="film__detail-item">
            <h3>{`Дата выхода`}</h3>
            <span>{releaseDate}</span>
          </div>
          <hr />
          <div className="film__detail-item">
            <h3>{`Продолжительность`}</h3>
            <span>{`117 минут`}</span>
          </div>
          <hr />
          <div className="film__detail-item">
            <h3>{`Язык оригинала`}</h3>
            <span>{originalLanguage}</span>
          </div>
          <hr />
        </div>
      </div>
    </main>
  );
};

export default FilmPage;
