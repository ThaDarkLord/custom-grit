
const User =require('./User');
const workoutInfo =require('./workoutInfo');
const Routines =require('./Routines');

User.hasMany(Routines, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Routines.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(workoutInfo, {
    foreignKey: 'user_id'
});

workoutInfo.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = {User, Routines, workoutInfo};