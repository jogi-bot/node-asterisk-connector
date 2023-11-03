const AsteriskManager = require("asterisk-manager");
const ami = new AsteriskManager();

const amiConfig = {
  host: "192.168.0.178",
  port: 5038,
  username: "asterisk",
  password: "asterisk",
};

ami.connect(amiConfig, (err) => {
  if (err) {
    console.error("Failed to connect to Asterisk AMI:", err);
  } else {
    console.log("Connected to Asterisk AMI");

    
  }
});
