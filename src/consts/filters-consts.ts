import IFilm from "../interfaces/i-film";

export const GENRES = [
  {
    id: 28,
    name: "боевик",
  },
  {
    id: 12,
    name: "приключения",
  },
  {
    id: 16,
    name: "мультфильм",
  },
  {
    id: 35,
    name: "комедия",
  },
  {
    id: 80,
    name: "криминал",
  },
  {
    id: 99,
    name: "документальный",
  },
  {
    id: 18,
    name: "драма",
  },
  {
    id: 10751,
    name: "семейный",
  },
  {
    id: 14,
    name: "фэнтези",
  },
  {
    id: 36,
    name: "история",
  },
  {
    id: 27,
    name: "ужасы",
  },
  {
    id: 10402,
    name: "музыка",
  },
  {
    id: 9648,
    name: "детектив",
  },
  {
    id: 10749,
    name: "мелодрама",
  },
  {
    id: 878,
    name: "фантастика",
  },
  {
    id: 10770,
    name: "телевизионный фильм",
  },
  {
    id: 53,
    name: "триллер",
  },
  {
    id: 10752,
    name: "военный",
  },
  {
    id: 37,
    name: "вестерн",
  },
];

export const SORT_DATES = [2020, 2019, 2018, 2017];

export const DEFAULT_DATE_VALUE = "";

export type TypeSort = (list: IFilm[], userLists?: [...string[][]]) => IFilm[];

export interface ISort {
  name: string;
  method: TypeSort;
}

export const SORT_TYPES: ISort[] = [
  {
    name: "Популярные по убыванию",
    method(list: IFilm[]) {
      return [
        ...list.sort((a: IFilm, b: IFilm) => b.popularity - a.popularity),
      ];
    },
  },
  {
    name: "Популярные по возрастанию",
    method(list: IFilm[]) {
      return [
        ...list.sort((a: IFilm, b: IFilm) => a.popularity - b.popularity),
      ];
    },
  },
  {
    name: "Рейтинг по убыванию",
    method(list: IFilm[]) {
      return [
        ...list.sort((a: IFilm, b: IFilm) => b.vote_average - a.vote_average),
      ];
    },
  },
  {
    name: "Рейтинг по возростанию",
    method(list: IFilm[]) {
      return [
        ...list.sort((a: IFilm, b: IFilm) => a.vote_average - b.vote_average),
      ];
    },
  },
  {
    name: "Сначала избраные",
    method(list: IFilm[], [favoriteList] = []) {
      return [
        ...list.sort((a: IFilm) => {
          const isFavorite = favoriteList.includes(a.title);
          return isFavorite ? -1 : 1;
        }),
      ];
    },
  },
  {
    name: "Посмотреть позже",
    method(list: IFilm[], [, watchList] = []) {
      return list.filter((film) => {
        return watchList.includes(film.title);
      });
    },
  },
];

export const SEARCH_QUESTIONS = {
  VOTES_SORT: [
    {
      name: "Высокая",
      method(list: IFilm[]) {
        return list.filter(({ vote_average: voteAverage }) => {
          return Number(voteAverage) >= 5;
        });
      },
    },
    {
      name: "Низкая",
      method(list: IFilm[]) {
        return list.filter(({ vote_average: voteAverage }) => {
          return Number(voteAverage) < 5;
        });
      },
    },
  ],
  POPULARITY_SORT: [
    {
      name: "Популярный",
      method(list: IFilm[]) {
        return list.filter(({ vote_count: voteCount, popularity }) => {
          return Number(voteCount) > 200 && Number(popularity) > 100;
        });
      },
    },
    {
      name: "Неизвестный",
      method(list: IFilm[]) {
        return list.filter(({ vote_count: voteCount, popularity }) => {
          return Number(voteCount) <= 200 && Number(popularity) <= 100;
        });
      },
    },
  ],
};

export const DEFAULT_SORT_NAME = SORT_TYPES[0].name;

export const DEFAULT_SORTS = {
  type: DEFAULT_SORT_NAME,
  date: DEFAULT_DATE_VALUE,
};

export const DEFAULT_GENRES = [];
export const DEFAULT_SORT_METHOD = SORT_TYPES[0].method;

export const DEFAULT_QUESTIONS_VALUE = {};
