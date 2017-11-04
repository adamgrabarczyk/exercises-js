




//
// function setOptions(options) {
//
//     const env = options.env
//
//     const db = options.db
//
// return [ env, db ];
//
// }

function setOptions({env, db}) {
return [env, db];

}


let opt = setOptions({env: 'dev', db: 'SQL'})

alert(opt);