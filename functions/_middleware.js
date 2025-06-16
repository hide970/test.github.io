export const onRequest = async ({ request }) => {
  const auth = request.headers.get("authorization");
  const expected = "Basic " + btoa("user:pass1234"); // 任意に変更可能

  if (auth !== expected) {
    return new Response("認証が必要です", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  return fetch(request);
};
