import { Model, DataTypes } from "sequelize"

export default function (sequelize) {
    
    class Job extends Model{}

    Job.init({
        jobId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        jobName: {
            type: DataTypes.STRING(),
            unique: true,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 30],
                    msg: 'Invalid jobName length!'
                }
            }
        },
        about: {
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                len: {
                    args: [10, 500],
                    msg: 'Invalid about length!'
                }
            }
        },
        goodSides: {
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                len: {
                    args: [10, 200],
                    msg: 'Invalid goodSides length!'
                }
            }
        },
        badSides: {
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                len: {
                    args: [10, 200],
                    msg: 'Invalid badSides length!'
                }
            }
        },
        imgUrl: {
            type: DataTypes.STRING(),
            allowNull: false,
        }
    }, { sequelize, tableName: 'jobs'})

    return Job
}