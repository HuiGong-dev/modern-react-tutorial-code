import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 5_kB4TMqPOWfl49SHHg9xo346qi5t7Q2fyU0eigksEA",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
