const date_ = new Date();

function isAvaible() {

    if(date_.getMonth() >5){
        return true
    }
    if(date_.getMonth() == 5 && date_.getDate() >= 5){
        return true;
    }
}


module.exports = {
    discord:{
        id: "587615441640226837",
        kaiID: "852628541634773063" 
    },
    github:{
        token1: "ghp_glp5HVMRtuOmz6b",
        token2: "sQrU6hpJNdqo10J2IkmuF"
    },
    kaily: "05/05/" + (isAvaible() ? date_.getFullYear()+ 1 : date_.getFullYear()),
    about:{
        description: "Hello, I'm Yusuf, 18 year old developer living in Turkey and technical manager of the PCIFIC Esports team. Recently, I have been working as a volunteer in the positions of director and community manager in esports broadcasts.",
    },
    social:{
        github: "https://github.com/Aronshire",
        instagram: "https://instagram.com/shirreee",
        twitter: "https://twitter.com/shirrree",
        discord: "https://discord.com/users/587615441640226837",
        spotify: "https://open.spotify.com/user/srloru4s9s1vxk65qv02dfd0m",
    },
    meta:{
        title: 'My Personal Website',
        description: 'My Personal Website',
        theme: '#02060f',
        lang: 'en',
        url: 'https://aronshire.me',
        image: '',
    },
    title: 'Aronshire',
    titles:[
        {title: 'Home', url: '/', icon: 'fa-house'},
        {title: 'Projects', url: '/projects' ,icon: 'fa-blog'},
        {title: 'withKaily', url: '/withkaily', icon: 'fa-heart'},
    ]
}

