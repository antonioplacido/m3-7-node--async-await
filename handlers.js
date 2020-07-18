// nothing here yet...

// getDadJoke

function getDadJoke(req, res) {
  const joke = req.params.joke;
  res.status(200).json({
    status: 200,
    Accept: "application/json",
    joke,
  });
  return joke;
  console.log(joke);
}

module.exports = { getDadJoke };
