import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { now } from 'sequelize/types/utils';

export class Ticket extends Model {
  public id!: number;
  public customerName!: string;
  public email!: string;
  public createdAt!: Date;
  public status!: string;
  public notes!: string;
}

Ticket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.ENUM('open', 'pending', 'done'),
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize, // Sequelize instance
    modelName: 'Ticket',
    tableName: 'tickets',
    timestamps: false,
  }
);
