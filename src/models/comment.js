import { Model, DataTypes } from "sequelize"

export default function (sequelize) {

    class Comment extends Model{}

    Comment.init({
        commentId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        info: {
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 40],
                    msg: 'Invalid info length!'
                }
            }
        }
    }, { sequelize, tableName: 'comments'}),

    sequelize.models.Comment.belongsTo(sequelize.models.Job, {
        foreignKey: 'jobId'
    })

    return Comment
}