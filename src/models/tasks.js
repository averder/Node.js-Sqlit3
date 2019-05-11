module.exports = (sequelize,DataType) =>{
   
    const Tasks = sequelize.define('Tasks' , {
        id: {
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty:true
            }
        },
        done: {
            // las tareas puede estar hechas o no 
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Tasks.associate = (models) => {
        Tasks.belongsTo(models.Users);
    };

    return Tasks;
};