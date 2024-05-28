import testsModel from "../models/Test.js";
import test1sModel from "../models/Test1.js";
import test2Model from "../models/Test2.js";
import test3Model from "../models/Test3.js";
import test4Model from "../models/Test4.js";
import test5Model from "../models/Test5.js";
import test6Model from "../models/Test6.js";
import test7Model from "../models/Test7.js";
export const getAll1 = async (req, res) => {
  try {
    const test = await test1sModel.find();
    res.json(test);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалось отримати test" });
  }
};
export const getAll = async (req, res) => {
  try {
    const test = await testsModel.find();
    res.json(test);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалось отримати test" });
  }
};
export const getAll2 = async (req, res) => {
  try {
    const test = await test2Model.find();
    res.json(test);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалось отримати test" });
  }
};
export const getAll3 = async (req, res) => {
  try {
    const test = await test3Model.find();
    res.json(test);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалось отримати test" });
  }
};
export const getAll4 = async (req, res) => {
  try {
    const test = await test4Model.find();
    res.json(test);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалось отримати test" });
  }
};
export const getAll5 = async (req, res) => {
  try {
    const test = await test5Model.find();
    res.json(test);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалось отримати test" });
  }
};

export const getAll6 = async (req, res) => {
  try {
    const test = await test6Model.find();
    res.json(test);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалось отримати test" });
  }
};
export const getAll7 = async (req, res) => {
  try {
    const test = await test7Model.find();
    res.json(test);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалось отримати test" });
  }
};
