class BaseRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async getById(id) {
    return await this.dao.findById(id);
  }

  async create(newEntity) {
    return await this.dao.create(newEntity);
  }

  async update(id, updateData) {
    return this.dao.updateOne({ _id: id }, updateData);
  }

  async delete(id) {
    await this.dao.deleteOne({ _id: id });

    return true;
  }
}

module.exports = BaseRepository;
