import http, { getResponseJson } from './http';

const mock = {
  mock: 'mocked response data'
};

const responseMock = {
  ok: true,
  status: 'ok',
  headers: {
    get: jest.fn(),
  },
  json: () => Promise.resolve(mock),
}

describe('http', () => {
  it('is http', async () => {
    let res;
    try {
      res = await http({ url: '/' });
    } catch(e) {
      res = e;
    }

    expect(String(res)).toMatch(/syntaxerror/i);
  });

  it('is getResponseJson', async () => {
    const res = await getResponseJson(responseMock);
    expect(res).toEqual({ ok: true, status: 'ok', data: mock });
  });
});
