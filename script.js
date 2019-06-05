var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'http://nodejs-demo-03-04-nhtj5', true);
request.open('GET', 'http://34.66.252.170', true);

request.onload = function () {
  if (request.status == 200) {
    var data = JSON.parse(this.response);
    data.forEach(book => {
      console.log(book['Title'])
    });
  } else {
    console.log('error');
  }
};

// Send request
request.send();