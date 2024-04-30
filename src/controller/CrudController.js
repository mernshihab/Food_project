const productModel = require("../model/ProductModel");

exports.Create = async (req, res) => {
  try {
    let reqBody = req.body;
    await productModel.create(reqBody);
    return res
      .status(200)
      .json({ status: "success", msg: "Request Completed" });
  } catch (e) {
    res.send("Error");
  }
};

exports.Read = async (req, res) => {
    try {
       let rows = await productModel.find();
        return res
          .status(200)
          .json({ status: "success", msg: "Request Completed", row:rows });
      } catch (e) {
        res.send("Error");
      }
};

exports.ReadbyID =async (req, res) => {
  try {
    let {id} = req.params
     let rows = await productModel.find({_id:id});
      return res
        .status(200)
        .json({ status: "success", msg: "Request Completed", row:rows });
    } catch (e) {
      res.send("Error");
    }
};

exports.Update = async (req, res) => {
    try {
        let {id} = req.params
        let reqBody = req.body;
        await productModel.updateOne({_id:id}, reqBody);
        return res
          .status(200)
          .json({ status: "success", msg: "Request Completed" });
      } catch (e) {
        res.send("Error");
      }
};

exports.Delete = async (req, res) => {
    try {
        let {id} = req.params
        await productModel.deleteOne({_id:id});
        return res
          .status(200)
          .json({ status: "success", msg: "Request Completed" });
      } catch (e) {
        res.send("Error");
      }
};
