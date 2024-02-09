
const Cardio =require('./cardio');
const Muscular =require('./muscular');
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

Routines.hasMany(Muscular, {
    foreignKey: 'routine_id'
});

Muscular.belongsTo(Routines,{
    foreignKey: 'routine_id',
})

Routines.hasMany(Cardio,{
    foreignKey: 'routine_id'
})

Cardio.belongsTo(Routines, {
    foreignKey: 'routine_id'
})


module.exports = {User, Routines, workoutInfo, Muscular, Cardio};