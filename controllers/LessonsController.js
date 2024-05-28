import lessonsModel from "../models/Lessons.js";
export const getAll = async (req, res) => {
  try {
    const lessons = await lessonsModel.find();
    res.json(lessons);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалось отримати статті" });
  }
};
export const getOne = async (req, res) => {
  try {
    const lessonId = req.params.id;
    console.log(lessonId);
    const doc = await lessonsModel.findOne({ _id: lessonId });
    console.log(doc.lessons);
    if (!doc) {
      return res.status(404).json({ message: "Статтю не буде знайдено" });
    }
    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалось отримати статтю" });
  }
};
