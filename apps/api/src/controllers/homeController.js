export const home = async (req, res) => {
  // set the status code and content-type
  res.writeHead(200, { "Content-Type": "application/json" }) // send data
  res.end(JSON.stringify(posts))
}
