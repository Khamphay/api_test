const db = require("../../config/dbconnection");
class Province {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  async findAll() {
    const query = await db.execute("call province_ShowAll();");
    return query.length == 0 ? null : query[0];
  }

  async findByName(name) {
    const query = await db.execute("province_ShowByName(?);", [name]);
    return query.length == 0 ? null : query[0];
  }

  async Save() {
    return await db.execute("call province_Insert(?) ", [this.name]);
  }

  async Update() {
    return await db.execute("call province_Update(?,?)", [this.id, this.name]);
  }

  async Delete(id) {
    return await db.execute("call province_Delete(?)", [id]);
  }
}

module.exports={Province}
