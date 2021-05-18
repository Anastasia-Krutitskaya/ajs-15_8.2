
// TODO: write your code here
export const map = new Map();
export default class ErrorRepository {
  constructor() {
    map.set('400', 'Некорректный запрос');
    map.set('401', 'Не авторизован');
    map.set('404', 'Не найдено');
  }
  translate(code) {
    if (map.get(code) === undefined) {
      return 'Unknown error'
    }
    return map.get(code);
  }
}

const repository = new ErrorRepository();
console.log(repository.translate('403'));