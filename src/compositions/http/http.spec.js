import http, { getResponseJson } from './http';

const mock = {
  mock: 'mocked response data'
};

const responseMock = {
  ok: true,
  status: 200,
  headers: {
    get: jest.fn(),
  },
  json: () => Promise.resolve({ data: mock }),
}

describe('http', () => {
  it('is http', async () => {
    let res;
    try {
      res = await http({ url: '/' });
    } catch(e) {
      res = e;
    }

    expect(res.status).toBe(200);
    expect(res.data.length).toBeGreaterThan(1);
  });

  describe('getResponseJson', () => {
    it('is getResponseJson', async () => {
      const res = await getResponseJson(responseMock);
      expect(res).toEqual({ ok: true, status: 200, data: mock });
    });

    it('has no content length', async () => {
      const res = await getResponseJson({ ...responseMock, headers: {  get: () => '0'} });

      expect(res).toEqual({ ok: true, status: 200, data: {} });
    })
  });

});
