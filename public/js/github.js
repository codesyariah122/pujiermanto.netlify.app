const githubProfile = (users, method) => {
    const data = {
        'user' : users,
        'method' : method,
    };

    $.ajax({
        url: `${urlAPI.proxy}${urlAPI.github.url}${data.user}`,
        type: 'get',
        dataType: 'json',
        data: data,
        success: function(res){
            if(res){
                dataOBJ.imageProfile.append(`
                    <img src="${res.avatar_url}" class="img-thumbnail img-fluid rounded mx-auto d-block img-responsive" alt="${res.login}">
                `);
                dataOBJ.CardGithub.append(`
                    <h5 id="card-title" class="card-title ml-2">${res.name}</h5>
                    <small class="text-primary ml-2 blockquote-footer">${res.bio}</small>
                    <p class="card-text" style="font-size: 18px;">
                        <small class="text-primary">Github : ${res.login} </small><br/>
                        <small class="text-danger">Followes : ${res.followers}</small>
                        <small class="text-danger">Following : ${res.following}</small><br/>
                        <small class="text-success">Last Update : ${res.updated_at}</small>
                    </p>
                    
                    <p class="card-text" style="font-size: 18px;">
                        <b> Last Project : </b> 
                        <ul style="list-style:none;">
                            <li>${res.company}</li>
                            <li>${res.location}</li>
                        </ul>
                    </p>
                `);
            }
        }
    });
}

const githubRepos = (users, method) => {
    
    dataOBJ.MyRepo.html('');

    const dataRepos = {
        'username' : users,
        'method' : method,
    };
    $.ajax({
        url: `${urlAPI.proxy}${urlAPI.github.url}${dataRepos.username}/${dataRepos.method}`,
        type: 'get',
        dataType: 'json',
        data: dataRepos,
        success: function(res){
            if(res){
                // console.log(res);
                dataOBJ.MyRepo.append(`
                    <li><h1 class="text-primary">My Repo</h1></li>
                `);
                $.each(res, function(key, index){
                    dataOBJ.MyRepo.append(`
                        <li class="list-group-item"><a href="${index.html_url}" target="_blank">${index.name}</a></li>
                    `);
                });
            }
        }
    });
};


dataOBJ.MySkill.hide();
dataOBJ.CloseSkill.css({
    'cursor' : 'pointer'
});

$(document).ready(function(){
   githubProfile(urlAPI.github.profile, '');

   dataOBJ.ShowSkill.on('click', function(){
        $('#CloseSkill').show('slow').fadeIn(1000);
        dataOBJ.MySkill.show('slow').fadeIn(1000);
        dataOBJ.MyRepo.hide('slow').slideUp(1000);
   });

   $('#CloseSkill').on('click', function(){
       dataOBJ.MySkill.hide('slow').slideUp(1000);
       $(this).hide('slow').slideUp(1000);
       dataOBJ.MyRepo.hide('slow').slideUp(1000);
   });

   dataOBJ.ShowRepo.on('click', function(){
       dataOBJ.MyRepo.show('slow').fadeIn(1000);
       dataOBJ.MySkill.hide('slow').slideUp(1000);
       githubRepos(dataOBJ.username, dataOBJ.method.satu);
   });

   
});