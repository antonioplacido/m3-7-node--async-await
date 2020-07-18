const request = require("request-promise");

// getDadJoke

const getDadJoke = new Promise((resolve, reject) => {
  try {
    const joke = request({
      uri: "https://icanhazdadjoke.com/",
      header: { Accept: "application/json" },
      json: true,
    }).then((response) => {
      resolve(response.joke);
    });
  } catch (err) {
    reject(err);
  }
});

getDadJoke.then((data) => console.log(data));
