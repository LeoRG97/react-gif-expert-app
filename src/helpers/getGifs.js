import axios from "axios";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=UtqUalwdqH3gM8m4vxdqmITmuiw9PH76`;
  const { data } = await axios.get(url);

  const gifs = data.data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  });

  return gifs;
}