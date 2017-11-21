'use strict';
module.exports = (sequelize, DataTypes) => {
  var Note = sequelize.define('Note', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    links: DataTypes.STRING,
    date_added: DataTypes.DATE,
    date_modified: DataTypes.DATE,
  }, {timestamps: false});
  
  Note.associate = function(models) {
    Note.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };

  Note.associate = function(models) {
    Note.belongsToMany(models.Tag, {
      through: 'NoteTags',
      onDelete: 'CASCADE'
    });
  };

  return Note;
};