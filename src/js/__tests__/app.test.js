import ErrorRepository from '../app';

test('error in repository', () => {
  const result = new ErrorRepository().translate('401');
  expect(result).toBe('Не авторизован');
});

test('error in repository', () => {
  const result = new ErrorRepository().translate('400');
  expect(result).toBe('Некорректный запрос');
});

test('error in repository', () => {
  const result = new ErrorRepository().translate('404');
  expect(result).toBe('Не найдено');
});

test('error is not in repository', () => {
  const result = new ErrorRepository().translate('403');
  expect(result).toBe('Unknown error');
});
