export default function handler(req, res) {
  res.status(200).json({
    clientId: process.env.TWITCH_CLIENT_ID,
    accessToken: process.env.TWITCH_ACCESS_TOKEN
  });
}