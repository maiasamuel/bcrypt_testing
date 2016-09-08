const bcrypt = require("bcrypt");
//this causes code to break until you actually set up knex
//const user = require("../db/user");

bcrypt.genSalt(11, (err, salt)=> {
  console.log("salt:", salt);
  bcrypt.hash("unicorns are cool", salt, (err, hash)=> {
    //user('user').insert({password: hash});
    console.log('hash:', hash);
  });
});

bcrypt.compare("unicorns are cool", '$2a$11$ITxZg21Kt3mv/2oulVVsOePujDRUHeVdMhHhgvbv.ftezMyZnvlAe', (err, isMatch)=> {
  console.log('is a match', isMatch);
});
