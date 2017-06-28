module.exports = (sequelize, types) =>
  sequelize.define('artist', {
    id: { type: types.UUID, primaryKey: true, defaultValue: types.UUIDV4 },
    mbid: { type: types.STRING, notNull: true },

    name: { type: types.STRING, notNull: true },
    overview: { type: types.TEXT }
  }, {
    timestamps: true,
    paranoid: true,
    underscored: true
  });
