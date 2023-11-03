const AsteriskManager = require("asterisk-manager");
const ami = new AsteriskManager();

const amiConfig = {
  host: " ", //write_ your_asterisk-server_IP addr.
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
