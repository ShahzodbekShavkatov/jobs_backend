import { Model, DataTypes } from "sequelize"

export default function (sequelize) {

    class UserAdmin extends Model{}

    UserAdmin.init({
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(),
            unique: true,
            allowNull: false,
            validate: {
                len: {
					args: [2, 50],
					msg: 'Invalid username length!'
				}
            }
        },
        password: {
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                len: {
                    args: [5, 200],
                    msg: 'Invalid password length!'
                }
            }
        },
        email: {
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                is: {
                    args: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    msg: 'Invalid email!'
                }
            }
        }
    }, { sequelize, tableName: 'userAdmins'})

    return UserAdmin
}



// userId
// username
// password
// email