
function fetch(seachQuery, page) {
    const key = "27868120-ecbda89988110022223138572";
  return fetch(
    `https://pixabay.com/api/?key=${key}&q=${seachQuery}&page=${page}&image_type=photo&per_page=12&orientation=horizontal`
  ).then(response => {
    if(response.ok);
    return response.json();
  });
}

const api = {
  fetch,
};

export default api;