

$.ajax({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/comments',
    dataType: 'json'
}).done(function(data) {
    console.log(data)

    for (let i = 0; i < 20; i++) {
        let comment = data[i]
        $('#result').append(`
            <h5>${comment.id}</h5>
            <p>${comment.body}<p>
        `)
    }
});

$('#my-user').submit(function(e){
    e.preventDefault()
    let name=$('#name').val()
    let comment=$('#comment').val()
    let url=$(this).attr('action')

    $.post(url, {name : name, comment:comment}).done(function(data){
        $('#result').append(`
        <h2>${data.name}</h2>
        <p>${data.comment}<p>
        `)
    })
})