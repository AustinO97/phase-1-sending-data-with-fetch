// Add your code here
function submitData(name, email) {
    const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: name,
        email: email,
    }),
}
    return fetch("http://localhost:3000/users", configurationObject)
    .then(res => res.json())
    .then(data => document.querySelector('body').append(data['id']))
    .catch(function (error) {
        alert('no');
        console.log(error.message);
        document.querySelector('body').append(error.message)
    })
};
