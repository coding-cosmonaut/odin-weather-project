// giphy: OaeV76rXJPjKoCQO350DmOuAON1mFS5I

const giphyAPIRequest = async function getGiphyData(weatherText) {
  try {
    const giphyData = await fetch(
      `api.giphy.com/v1/gifs/translate?key=OaeV76rXJPjKoCQO350DmOuAON1mFS5I&s=${weatherText}`
    );
    const jsonData = await giphyData.json();
    console.log(jsonData);
    return jsonData;
  } catch (err) {
    throw new Error("Error!");
  }
};

export default giphyAPIRequest;
