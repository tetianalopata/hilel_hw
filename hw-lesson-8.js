fetch('https://reqres.in/api/users?page=1&per_page=5')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });