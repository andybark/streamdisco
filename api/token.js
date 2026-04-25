export default function handler(req, res) {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const accessToken = process.env.TWITCH_ACCESS_TOKEN;
  
  res.status(200).json({
    clientIdExists: !!clientId,
    accessTokenExists: !!accessToken,
    clientIdLength: clientId ? clientId.length : 0,
    accessTokenLength: accessToken ? accessToken.length : 0
  });
}