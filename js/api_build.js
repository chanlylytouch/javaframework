$(document).ready(function(){
    database.collection('profile').get().then((data) => {
        var result = "";
        data.forEach(element => {
            // console.log(element.data().name);
            result +=`
                <div class="card shadow-lg mt-4">
                    <div class="card-header">
                        <img src="${element.data().image_profile}" style="border-radius:50%;" width='50px'; height='50px'>&nbsp;${element.data().name}
                        <button class="bnt btn-danger btn-sm float-right" onclick="deleteUser()">delete</button>
                        </div>
                    <div class="card-body">
                        <img src="${element.data().post_image}" class="img-fluid">
                    </div>
                </div>
            `
        });
        $('#result').append(result);
    });

    $('button').on('click',function(){
        var name = $('#name').val();
        var image_profile=$('#profile').val();
        var post_image=$('#post').val();
        database.collection('profile').add({
            name:name,
            image_profile:image_profile,
            post_image:post_image,

        })
    })
})