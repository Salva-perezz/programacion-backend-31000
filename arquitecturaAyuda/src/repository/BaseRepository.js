class BaseRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async getAll(id) {
    return await this.dao.getAll(id);
  }

  async create(newEntity) {
    return await this.dao.create(newEntity);
  }

  //   async update(id, updateData) {
  //     return this.dao.updateOne({ _id: id }, updateData);
  //   }

  //   async delete(id) {
  //     await this.dao.deleteOne({ _id: id });

  //     return true;
  //   }
}

export default BaseRepository;
