// get api
function getInfo() {
    $.ajax({
        url: 'https://64a3d188c3b509573b5695fd.mockapi.io/profile',
        method: 'GET'
    }).done((data) => {
        let body = '';
        data.forEach(e => {

            body +=
                `<tr>
                <th>${e.id}</th>
                <td>${e.title}</td>
                <td>${e.brief}</td>
                <td>${e.content}</td>
            </tr>`
        })
        $('tbody').html(body);
    }).fail(() => {
        alert('Can not get user information!');
    })
}

$(document).ready(() => {
    getInfo();
})