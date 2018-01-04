// Generate access token here: http://instagram.pixelunion.net/
// They are not permanent!
var token = '1357495186.1677ed0.8ef8dd3ba535467894710670d145e893',
    num_photos = 10, // maximum 20
    container = document.getElementById('instagram'),
    scrElement = document.createElement('script');

window.mishaProcessResult = function (data) {
    for (x in data.data) {
        container.innerHTML += '<li><img src="' + data.data[x].images.low_resolution.url + '"></li>';
    }
}

scrElement.setAttribute('src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult');
document.body.appendChild(scrElement);