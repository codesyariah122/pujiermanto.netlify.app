const dataOBJ = {
    'username' : 'codesyariah122',
    'method' : {
        'satu':'repos'
    },
    'CardGithub' : $('#card-github'),
    'imageProfile' : $('#image-profile'),
    'showProfile' : $('#show-profile'),
    'MyRepo' : $('#MyRepo'),
    'MySkill' : $('#MySkill'),
    'ShowRepo' : $('#ShowRepo'),
    'ShowSkill' : $('#ShowSkill'),
    'CloseSkill' : $('#CloseSkill'),
};


const urlAPI = {
    'github' : 
    {
        'url': 'https://api.github.com/users/',
        'profile': `${dataOBJ.username}`,
        'method': `${dataOBJ.method.satu}`,
    },
    'proxy' : 'https://cors-anywhere.herokuapp.com/'
};