'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    type: DataTypes.STRING
  }, {timestamps: false});
  
  Tag.associate = function(models) {
    Tag.belongsToMany(models.Note, {
      through: 'NoteTags',
      onDelete: 'CASCADE'
    });
  };

  return Tag;
};