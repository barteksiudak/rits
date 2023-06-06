import { randUuid, randFullName, randNumber, randBetweenDate } from '@ngneat/falso';

export function getDate(date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

export function getDates() {
  const now = new Date();
  now.setDate(0);
  const to = getDate(now);
  now.setMonth(now.getMonth() - 3);
  now.setDate(1);
  const from = getDate(now);

  return randBetweenDate({ from, to, length: randNumber({ min: 0, max: 30 }) });
}

export function getUserTransactions(userId) {
  const dates = getDates();

  return dates.map(date => ({
    date,
    id: randUuid(),
    userId: userId,
    userName: randFullName(),
    amount: randNumber({ min: 0, max: 350 })
  }))
}

export default function fetchMock() {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        status: 200,
        ok: true,
        headers: { get: () => ''},
        json: () => Promise.resolve({
          data: Array.prototype.concat(...randUuid({ length: randNumber({ min: 15, max: 30 }) }).map(getUserTransactions)),
          status: 200,
          ok: true,
        })
      });
    }, Math.max(Math.floor(Math.random() * 1300)), 500);
  });
}
