import {
    about_en, about_ua,
    cources,
    skills,
    about_general_ua,
    about_general_en,
    block_name_ua,
    block_name_en,
    education_ua,
    education_en,
    expirience_ua,
    expirience_en, contacts
} from '../dates/dates.js'
let lang = 'en'
const about_change_lang = document.querySelector('#about_change_lang')

about_change_lang.addEventListener('click',(e) => {
    e.preventDefault()
    lang = e.target.value
    init()

})

const init = () => {
    aboutFn();
    coursesFn();
    expirienceFn();
    educationFn();
    contactsFn();
    skillsFn();
}

init()

function aboutFn(){
    const about_fio_block = document.querySelector('#about_fio_block')
    const about_description = document.querySelector('#about_description')
    const about_major = document.querySelector('#about_major')
    const about_general = lang==='ua' ? about_general_ua : about_general_en;
    const about_text = lang==='ua' ? about_ua : about_en;
    about_fio_block.innerHTML = about_general.name;
    about_major.innerHTML = about_general.magor;
    about_description.innerHTML = about_text.join(',')
}

function coursesFn(){
    const block_name = lang==='ua' ? block_name_ua : block_name_en;
    const courses_title = document.querySelector('#courses_title')
    const courses_description = document.querySelector('#courses_description')
    courses_description.innerHTML = ''
    courses_title.innerHTML = block_name[0].name
    cources.map(course => {
        const li = document.createElement('li')
        li.innerHTML = `<span>${course.name}</span>   <span>${course.year}</span>`
        courses_description.append(li);
    })

}

function expirienceFn() {
    const block_name = lang==='ua' ? block_name_ua : block_name_en;
    const expirience = lang==='ua' ? expirience_ua : expirience_en;
    const expirience_title = document.querySelector('#expirience_title')
    const expirience_description = document.querySelector('#expirience_description')
    expirience_description.innerHTML = '';
    expirience_title.innerHTML = block_name[2].name

    expirience.map(exp => {
        const li = document.createElement('li')
        li.innerHTML = `<div>
            <h3>${exp.position}</h3>
            <spam>${exp.period}</spam>
        </div>`
        exp.duties.map(elm => {
            const ol = document.createElement('ol')
            ol.innerHTML = elm
            li.append(ol)
        })
        expirience_description.append(li);
    })
}

function educationFn() {
    const education = lang==='ua' ? education_ua : education_en;
    const block_name = lang==='ua' ? block_name_ua : block_name_en;

    const education_block_title = document.querySelector('#education_block_title')
    const education_block_name = document.querySelector('#education_block_name')
    const education_block_major = document.querySelector('#education_block_major')
    const education_block_period = document.querySelector('#education_block_period')
    education_block_title.innerHTML = block_name[1].name
    education_block_name.innerHTML = education.title
    education_block_major.innerHTML = education.magor
    education_block_period.innerHTML = education.period
}

function contactsFn() {
    const block_name = lang==='ua' ? block_name_ua : block_name_en;
    const contacts_title = document.querySelector('#contacts_title')
    const contacts_tel = document.querySelector('#contacts_tel')
    const contacts_email_name = document.querySelector('#contacts_email_name')
    const contacts_github_name = document.querySelector('#contacts_github_name')
    const contacts_linkedin_name = document.querySelector('#contacts_linkedin_name')
    contacts_title.innerHTML = block_name[3].name
    contacts_tel.innerHTML = contacts.tel
    contacts_tel.setAttribute("href",contacts.tel)
    contacts_email_name.innerHTML = contacts.eMail
    contacts_email_name.setAttribute("href","mailto"+contacts.eMail)
    contacts_github_name.innerText = contacts.gitHUb
    contacts_github_name.setAttribute("href",contacts.gitHUb)
    contacts_linkedin_name.innerHTML = contacts.linkedin
    contacts_linkedin_name.setAttribute("href",contacts.linkedin)

}
function skillsFn() {
    const block_name = lang==='ua' ? block_name_ua : block_name_en;
    const sidebar_title = document.querySelector('#sidebar_title')
    const tech_skills_list = document.querySelector('#tech_skills_list')
    tech_skills_list.innerHTML =''
    sidebar_title.innerHTML = block_name[4].name
    skills.map(skill => {
        const li = document.createElement('li')
        const span = document.createElement('span')
        span.classList.add('tech-skills-item-text')
        li.classList.add('tech-skills-item')
        span.innerText = skill
        li.append(span)
        tech_skills_list.append(li)
    })
}


