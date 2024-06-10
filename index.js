console.log("html form");
const fname = document.getElementById('fname');
const sname = document.getElementById('sname');
const lname = document.getElementById('lname');
const ftname = document.getElementById('ftname');
const stname = document.getElementById('stname');
const ltname = document.getElementById('ltname');
const mfname = document.getElementById('fmname');
const smname = document.getElementById('smname');
const lmname = document.getElementById('lmname');
const email = document.getElementById('email');
const pnumber = document.getElementById('pnum');
const Acard1 = document.getElementById('a1');
const Acard2 = document.getElementById('a2');
const Acard3 = document.getElementById('a3');
const pcard = document.getElementById('pcard');

fname.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]{3,10}$/;
    let str = fname.value;
    if (regex.test(str)) {
        console.log('mathed');
        fname.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        fname.classList.add('is-invalid');
    }
})

sname.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]{0,10}$/;
    let str = sname.value;
    if (regex.test(str)) {
        console.log('mathed');
        sname.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        sname.classList.add('is-invalid');
    }
})

lname.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]{0,10}$/;
    let str = lname.value;
    if (regex.test(str)) {
        console.log('mathed');
        lname.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        lname.classList.add('is-invalid');
    }
})

ftname.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]{3,10}$/;
    let str = ftname.value;
    if (regex.test(str)) {
        console.log('mathed');
        ftname.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        ftname.classList.add('is-invalid');
    }
})

stname.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]{0,10}$/;
    let str = stname.value;
    if (regex.test(str)) {
        console.log('mathed');
        stname.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        stname.classList.add('is-invalid');
    }
})

ltname.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]{0,10}$/;
    let str = ltname.value;
    if (regex.test(str)) {
        console.log('mathed');
        ltname.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        ltname.classList.add('is-invalid');
    }
})

mfname.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]{3,10}$/;
    let str = mfname.value;
    if (regex.test(str)) {
        console.log('mathed');
        mfname.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        mfname.classList.add('is-invalid');
    }
})

smname.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]{0,10}$/;
    let str = smname.value;
    if (regex.test(str)) {
        console.log('mathed');
        smname.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        smname.classList.add('is-invalid');
    }
})

lmname.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]{0,10}$/;
    let str = lmname.value;
    if (regex.test(str)) {
        console.log('mathed');
        lmname.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        lmname.classList.add('is-invalid');
    }
})

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        console.log('mathed');
        email.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        email.classList.add('is-invalid');
    }
})

pnumber.addEventListener('blur', () => {
    let regex = /^[0-9]{10,10}$/;
    let str = pnumber.value;
    if (regex.test(str)) {
        console.log('mathed')
        pnumber.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        pnumber.classList.add('is-invalid');
    }
})

Acard1.addEventListener('blur', () => {
    let regex = /^[0-9]{4,4}$/;
    let str = Acard1.value;
    if (regex.test(str)) {
        console.log('mathed');
        Acard1.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        Acard1.classList.add('is-invalid');
    }
})

Acard2.addEventListener('blur', () => {
    let regex = /^[0-9]{4,4}$/;
    let str = Acard2.value;
    if (regex.test(str)) {
        console.log('mathed');
        Acard2.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        Acard2.classList.add('is-invalid');
    }
})

Acard3.addEventListener('blur', () => {
    let regex = /^[0-9]{4,4}$/;
    let str = Acard3.value;
    if (regex.test(str)) {
        console.log('mathed');
        Acard3.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        Acard3.classList.add('is-invalid');
    }
})

pcard.addEventListener('blur', () => {
    let regex = /^[0-9]{10,10}$/;
    let str = pcard.value;
    if (regex.test(str)) {
        console.log('mathed');
        pcard.classList.remove('is-invalid');
    }
    else {
        console.log('not matched');
        pcard.classList.add('is-invalid');
    }
})


let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('you clicked');

    let success = document.getElementById('success');
    success.classList.add('show');

})


