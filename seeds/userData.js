const {User} = require('../models');

const userData = [

    {
        username: "test",
        email: "jjwatt@gmail.com",
        password: "Test123",
        heightInches: 74,
        weightLbs : 244
    }
]
const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});
module.exports = seedUsers;
