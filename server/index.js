import app from "./app";

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${process.env.PORT || 3000}`);
});
