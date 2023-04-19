import { sequelize } from "../dbConfig.js";
import { DataTypes } from "sequelize";

const productsSchema = {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}

export const productsModel = sequelize.define('Product', productsSchema)