const newRoomEndpoint =
  `${window.location.origin}/api/rooms`;

/**
 * Create a short-lived room for demo purposes.
 *
 * It uses the redirect proxy as specified in netlify.toml`
 * This will work locally if you following the Netlify specific instructions
 * in README.md
 *
 * See https://docs.daily.co/reference#create-room for more information on how
 * to use the Daily REST API to create rooms and what options are available. 
 */
async function createRoom() {

  const exp = Math.round(Date.now() / 1000) + 60 * 30;
  /*const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer b2cdec99c50a6846b778a2eb88f9cf4fd9a71cab07587a43771345911a730b43'
    },
    body: 'false',
    
  };
  
  fetch('https://api.daily.co/v1/rooms', options)
    .then(response => console.log(response))
    .catch(err => console.error(err)); 
    */
  const options = {
   properties: {
      exp: exp,
    }
  };
  /*
  let response = await fetch(newRoomEndpoint, {
    method: "POST",
    body: JSON.stringify(options),
    mode: 'cors',
  }),*/
    //room = await response.json();
  //return room;

  // Comment out the above and uncomment the below, using your own URL
  return { url: "https://uofthacks2021.daily.co/uofthacks2021" };
  
}

export default { createRoom };
