import { Sequelize, DataTypes, Model } from "sequelize"
import { sequelize } from "../config/database.js"

export class Post extends Model {}

Post.init(
  {
    content: {
      type: DataTypes.STRING(240),
      allowNull: false,
    },
  },
  {
    sequelize,
  }
)
