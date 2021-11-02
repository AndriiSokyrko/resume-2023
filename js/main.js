let  partsOfRezumeEngl = {

    aboutMe: {
        profession: 'Front-End Developer',
        name: 'Andrii Sokyrko',
        description: 'I am an experienced sysadmin and at the same' +
            ' time a beginner front-end developer. More than fifteen ' +
            'years of experience in IT. Many applications have been ' +
            'written to automate workflows. I am constantly studying ' +
            'innovations and new directions in the field of IT. The main ' +
            'stack that I have learned and used is as follows:'
    },
    workExpirience: {
        name:'Expirience',
        works: [
            // work1:
            {
                position: '<span class="my-work-expirience-company">Freelance</span>',
                period: 'june 2019 - now <span class="my-work-expirience-period-divider">|</span> Ukraine',
                duties: [
                    'HTML +JS coding',
                    'CMS Open cart 1.5',
                    'Wordpress- Widget, layouts, custom fields…',
                    'Laravel, Yii2 - changing makeup(base level)',
                    'https://freelance.ua/user/sorey14/portfolio/'
                ]
            }
                ,
            // work2:
            {
                position: 'Ingenier-Programs  <span class="my-work-expirience-company">Central Ambulance of the  Lysyanka district</span>',
                period: 'june 2019 - Februar 2020 <span class="my-work-expirience-period-divider">|</span> Ukaraine',
                duties: [
                    'Accounting programs',
                    '(BestZvit, Dilcon) \/ add new users',
                    'Administration of the Website <a class="my-projects-link" href="https://lisjanska.crl.net.ua"\>lisjanska.crl.net.ua</a>',
                    'Create new clients Bestzvit',
                    'Support LAN and WAN health',
                    'Email, anti-virus update',
                    'PC diagnostics identification of malfunctions',
                    'User training'
                ]
            }
            ,
            // work3:
            {
                position: 'Main specialist IT <span class="my-work-expirience-company"> Lysyanka court Cherkassy district</span>',
                period: 'september 2020 - may 2021 <span class="my-work-expirience-period-divider">|</span> Ukraine',
                duties: [
                    'Ensuring stable operation of Windows Server 2008/2016 servers',
                    'Administration of domain users (asset directory)',
                    'Administration of the court website <a class="my-projects-link" href="https:\//ls.ck.court.gov.ua/sud2311"\> ls.ck.court.gov.ua/sud2311<\/a>',
                    'System security, database backups (Firebase) / software D-3 (ship cases), Accord (video recording system), Izikon - communication with other ships',
                    'LAN and WAN health support, Cisko5055',
                    'Email, anti-virus update',
                    'PC diagnostics determination of malfunctions (25 units)',
                    'User supprt and training'
                ]
            }
        ]
    },
    education: {
        title: 'Education',
        uni: 'Cerkaskyj nacionalnyj universytet imeni Bohdana Chmelnyckoho',
        spec: 'physics-mathematics',
        period: 'september 1989 - june 1994 <span class="my-work-expirience-period-divider">|</span> Ukraine'
    }
}

function aboutMe(){
    // about-me-text
    let textAboutMeProfession = document.getElementById("about-me-profession");
    let textAboutMeName = document.getElementById("about-me-name");
    let textAboutMeDescription = document.getElementById("about-me-description-text");

    let tempProfession = textAboutMeProfession.innerHTML
    let tempName = textAboutMeName.innerHTML

    let tempDescription = textAboutMeDescription.innerHTML

    textAboutMeProfession.innerHTML  = partsOfRezumeEngl.aboutMe.profession;
    partsOfRezumeEngl.aboutMe.profession =tempProfession;

    textAboutMeName.innerHTML  = partsOfRezumeEngl.aboutMe.name;
    partsOfRezumeEngl.aboutMe.name =tempName;

    textAboutMeDescription.innerHTML  = partsOfRezumeEngl.aboutMe.description;
    partsOfRezumeEngl.aboutMe.description =tempDescription;
}
function workExpirience() {
    // my-work-expirience-section
    let mainContentName = document.getElementById("work-expirience-name"); //expirience name
    let tempMainName = mainContentName.innerHTML
    document.getElementById("work-expirience-name").innerHTML = partsOfRezumeEngl.workExpirience.name
    partsOfRezumeEngl.workExpirience.name = tempMainName
    i = 0
    partsOfRezumeEngl.workExpirience.works.forEach((work)=> {

        let period ="my-work-expirience-period-w"+(i+1);
        let mainContentPeriod = document.getElementById(period); //expirience name
        let tempMainPeriod = mainContentPeriod.innerHTML
        document.getElementById("my-work-expirience-period-w"+(i+1)).innerHTML =  work.period
         work.period = tempMainPeriod
        //
        let postion ="my-work-expirience-position-w" + (i+1);
        let mainContentPosition = document.getElementById(postion); //expirience зщышешщт
        let tempMainPosition = mainContentPosition.innerHTML
        document.getElementById("my-work-expirience-position-w" + (i+1)).innerHTML = work.position
        work.position = tempMainPosition

        //
        let textAboutMeDuties = [...document.getElementById("my-work-expirience-duties-w" + (i+1)).children];
        let temp = []
        textAboutMeDuties.forEach((child, index) => {
            temp.push(child.innerHTML)
        })
        j = 0
        var children = document.querySelectorAll('#my-work-expirience-duties-w' + (i+1) + ' .my-work-expirience-duty');
            children.forEach((child) => {
                // console.log(child)
            child.innerHTML = work.duties[j]
             work.duties[j] = temp[j]
            j++
        });
        i++
    }
    )
}
function education(){
    // about-me-text
    let textEducationTitle = document.getElementById("main-content-title");
    let textEducationUni = document.getElementById("my-education-uni");
    let textEducationSpec = document.getElementById("my-education-spec");
    let textEducationPeriod = document.getElementById("my-education-period");

    let tempEducationTitle = textEducationTitle.innerHTML
    let tempEducationUni = textEducationUni.innerHTML
    let tempEducationSpec = textEducationSpec.innerHTML
    let tempEducationPeriod = textEducationPeriod.innerHTML

    textEducationTitle.innerHTML  = partsOfRezumeEngl.education.title;
    partsOfRezumeEngl.education.title =tempEducationTitle;

    textEducationUni.innerHTML  = partsOfRezumeEngl.education.uni;
    partsOfRezumeEngl.education.uni =tempEducationUni;

    textEducationSpec.innerHTML  = partsOfRezumeEngl.education.spec;
    partsOfRezumeEngl.education.spec =tempEducationSpec;

    textEducationPeriod.innerHTML  = partsOfRezumeEngl.education.period;
    partsOfRezumeEngl.education.period =tempEducationPeriod;
}

function changeLang() {
    // console.log(partsOfRezumeEngl.aboutMeDescription.description);

    aboutMe();
    workExpirience();
    education();
}

