# node-asterisk-connector
Node.js library for connecting to Asterisk's Asterisk Manager Interface (AMI). AMI is a text-based protocol that allows you to control and monitor Asterisk from external applications.
### Installation

To run this project, you'll need Node.js installed. Then, you can install the required packages using npm:

```bash
npm install


### Configuration

Before running the code, make sure to configure the AsteriskManager object in your code by providing the necessary connection details. Here's how to set up the `amiConfig` object:

- `host`: Replace with your Asterisk server's IP address.
- `port`: The default AMI port is 5038.
- `username` and `password`: Use the credentials that your Asterisk server requires for AMI access.

```javascript
const amiConfig = {
  host: "your_asterisk_server_IP",
  port: 5038,
  username: "your_ami_username",
  password: "your_ami_password",
};

### Usage

To establish a connection with the Asterisk AMI, simply run your Node.js script. Here's how you can initiate the connection:

```javascript
ami.connect(amiConfig, (err) => {
  if (err) {
    console.error("Failed to connect to Asterisk AMI:", err);
  } else {
    console.log("Connected to Asterisk AMI");
    // You can perform AMI actions here.
  }
});
### Author

- Your Name: Jogi Krunal J.
- [Your GitHub Profile](https://github.com/jogi-bot)
- Contact :jogikrunal9477@gmail.com

