import { Model, DataTypes } from "sequelize"

export default function (sequelize) {

    class Advert extends Model{}

    Advert.init({
        advertId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        info: {
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                len: {
                    args: [5, 100],
                    msg: 'Invalid Advert Info length!'
                }
            }
        }
    }, { sequelize, tableName: 'adverts'})

    sequelize.models.Advert.belongsTo(sequelize.models.Job, {
        foreignKey: 'jobId'
    })

    return Advert
}