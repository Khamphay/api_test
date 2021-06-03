const { Province } = require("../models/Province");
const ProvinceController = new Province();

exports.getProvince = (req, res, next) => {
  const proQuery = ProvinceController.findAll();
  res.sendAsyncApi(proQuery);
};

exports.getProvinceByName = (req, res, next) => {
  const name = req.params.name;
  const proQuery = ProvinceController.findByName(name);
  res.sendAsyncApi(proQuery);
}

exports.postProvince = (req, res, next) => {
  const name=req.body.name;
  const province = new Province(0, name);
  province.Save();
}
