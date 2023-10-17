import express from "express";
import User from "../models/user.js";
import OrderData from "../models/oamodel.js";

 const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });

    if (exist) {
      return res.status(401).json({ message: "username already exist" });
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: "error while adding user data" });
  }
});

router.post("/orderentry", async (req, res) => {
  
  try {
    const oaexist = await OrderData.findOne({ oano: req.body.oano });

    if (oaexist) {
      return res.status(401).json({ message: "OA already Exist" });
    }
    const orderdata = req.body;
    const neworderdata = new OrderData(orderdata);
    await neworderdata.save();
    res.status(200).json({ message: orderdata });
  } catch (error) {
    res.status(500).json({ message: "error while adding order data" });
  }
});

router.get("/getoadata", async (req, res) => {
  const oadata = await OrderData.find({});
  res.json({ message: "data fetchched successfully", data: oadata });
});
router.get("/getuserdata", async (req, res) => {
  const userdata = await User.find({});
  res.json({ message: "data fetchched successfully", data: userdata });
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const Password = req.body.Password;

  if (!username) {
    return res.send({ code: 400, message: "username required" });
  } else if (!Password) {
    return res.send({ code: 400, message: "password required" });
  } else {
    const existuser = await User.findOne({ username });
    if (existuser) {
      if (existuser.Password == Password) {
        res.send({ code: 200, message: "login successful", data: existuser });
      } else {
        res.send({ code: 404, message: "Wrong Password" });
      }
    } else {
      return res.send({ code: 400, message: "user not exist" });
    }
  }
});

//admin page routes
//user role edit route

router.post("/verifyrole", async (req, res) => {
  const filter = { _id: req.body._id };
  const update = {
    verifiedrole: req.body.verifiedrole,
    Role: req.body.verifiedrole,
  };

  const doc = await User.findOneAndUpdate(filter, update, {
    new: true,
  });
  if (doc) {
    res.send({
      code: 200,
      message: "User Role Verified Successfully",
      data: doc,
    });
  } else {
    res.send({ code: 500, message: "failed" });
  }
});

//user delete
router.post("/deleteuser", async (req, res) => {
  const id = req.body._id;

  const doc = await User.findOneAndDelete({ _id: id });
  if (doc) {
    res.send({ code: 200, message: "User Deleted Successfully", data: doc });
  } else {
    res.send({ code: 500, message: "failed" });
  }
});

//get last oa entry
router.get("/getlastserialdata", async (req, res) => {
  const serialdata = await OrderData.find().sort({ createddate: -1 }).limit(1);

  if (serialdata) {res.json({ message: "data fetchched successfully", data: serialdata });
    
  } else {
    res.send({ code: 500, message: "failed" });
  }
  
});

//warranty card data
router.post("/serialnogenerate", async (req, res) => {
 
  const filter = { _id: req.body._id };
  const update = {
    serialNo: req.body.serialNo,
    createddate:req.body.createddate
  };

  const doc = await OrderData.findOneAndUpdate(filter, update, {
    new: true,
  });
  if (doc) {
    res.send({
      code: 200,
      message: "Serial Number Genearated Successfully",
      data: doc,
    });
  } else {
    res.send({ code: 500, message: "failed" });
  }
});



export default router;
