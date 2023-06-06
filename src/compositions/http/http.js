import fetchMock from './fetchMock';

export const getResponseJson = (response) => {
  const { status, ok } = response;
  if (response.headers.get('Content-Length') === '0') {
    return Promise.resolve({
      data: {},
      status,
      ok,
    });
  }

  const responseData = response.json();
  return responseData.then(({ data }) => ({
    data,
    status,
    ok,
  }));
};

export default function http({
  method = 'get',
  url,
  payload,
}) {
  const controller = new AbortController();
  const { signal } = controller;
  let body;

  try {
    body = JSON.stringify(payload);
  } catch (e) {
    return Promise.reject(e);
  }

  const request = fetchMock(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body,
    signal,
  })
    .then((response) => getResponseJson(response))

  request.cancel = () => controller.abort();

  return request;
}
