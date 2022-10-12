const postData = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  } catch (error) {
  }
};

const getData = async (url) => {
  const res = await fetch(url);

  if (!res) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

export { postData, getData };
