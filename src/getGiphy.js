// giphy: OaeV76rXJPjKoCQO350DmOuAON1mFS5I

const giphyAPIRequest = async function getGiphyData(weatherText) {
  try {
    const giphyData = await fetch(
      `https://api.giphy.com/v1/gifs/translate?key=OaeV76rXJPjKoCQO350DmOuAON1mFS5I&s=${weatherText} weather`
    );
    const jsonData = await giphyData.json();
    return jsonData.data.images.original.url;
  } catch (err) {
    throw new Error("Error!");
  }
};

export default giphyAPIRequest;
