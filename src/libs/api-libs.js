export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const object = await response.json();
  return object;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((items) => items[objectProperty]);
};

export const generateRandomData = (data, range) => {
  const firstNum = Math.floor(Math.random() * (data.length - range) + 1);
  const lastNum = firstNum + range;

  const response = {
    data: data.slice(firstNum, lastNum),
  };
  return response;
};
