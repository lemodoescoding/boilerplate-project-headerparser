const net = require('net')

const getInfoUser = (req, res) => {
  const { "user-agent": uAgent, "accept-language": lang } = req.headers;

  let ipAddress = req.socket.remoteAddress;
  
  if(ipAddress.includes('::ffff:')){
    ipAddress = ipAddress.slice(7, ipAddress.length);
  }

  return res.json({
    "ipAddress": ipAddress,
    "language": lang,
    "software": uAgent
  })
}

module.exports = { getInfoUser };
