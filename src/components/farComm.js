const swarmHostName = `${window.location.hostname}`;
const swarmPort = '5000';
const swarmHost = `http://${swarmHostName}:${swarmPort}`;
const swarmUIHost = `http://${swarmHostName}:3000`;
const smrPort = '4000';

// ======== Fetch Token ===========================
function fetchToken() {
	return fetch(`${swarmHost}/login/access-token/`, {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: "username=root&password=root@farobot",
	})
		.then((response) => response.json())
		.then((data) => {
			// console.log(data);
			return data;
		});
}

function userLogin() {
    $.ajax({
      url: `${swarmUIHost}/testdb/login`,
      type: 'POST',
      data: {
        userID: '',
        pwd: ''
      },
      success: function (data) {
        console.log('AAAAAAAA');
        console.log(data);
        var statusData = restLoginStatus();
        console.log(statusData)
        // console.log(statusData)
      },
      error: function (e) {
        console.log(e.responseText);
      },
    });
  }

function restLoginStatus() {
    return $.get(`${swarmUIHost}/testdb/getLoginStatus`, function (data, status) {
      if (status === "success") {
        console.log("--- get login status ---");
        console.log(data)
      }
    });
  }

document.addEventListener('DOMContentLoaded', function() {
    console.log('load farComm')
    userLogin()
})