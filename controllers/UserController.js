import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
export const register = async (req, res) => {
  try {
    //шифрування паролів за доп bcrypt
    const password = req.body.password;
    //створення солі-алгоритму шифрування
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //підгот документ на створення користувача
    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
      startTestResult: [0, 0],
    });
    //збереження в базі даних цього документу
    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не вдалось зареєструватись" });
  }
};
export const login = async (req, res) => {
  try {
    //шукаємо чи є в базі даних таких емейл
    const user = await UserModel.findOne({ email: req.body.email });
    //якщо немає то повертаємо повідомлення
    if (!user) {
      return res.status(404).json({
        message: "Вас не найдено. Зареєструйтесь для початку роботи",
      });
    }
    //якщо є порівнюємо введений пароль разом з тим шо в реєстрації(в базі даних)
    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );
    //якщо не правильний пароль
    if (!isValidPass) {
      return res.status(404).json({
        message: "Не правильний логін або пароль",
      });
    }
    //якшо все окей то
    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );
    const { passwordHash, ...userData } = user._doc;

    res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(404).json("Не вдалось авторизуватись");
  }
};
export const getMe = async (req, res) => {
  try {
    //шукаємо користувача за айді в базі даних
    const user = await UserModel.findById(req.userId);
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "Користувач не знайдений" });
    }
    const { passwordHash, ...userData } = user._doc;

    res.json(userData);
  } catch (err) {
    res.json({ message: "failed" });
  }
};

export const PutStartResult = async (req, res) => {
  try {
    const result = req.body.result;
    // Знаходимо користувача за його ID в базі даних
    const user = await UserModel.findByIdAndUpdate(
      req.userId, // ID користувача
      { startTestResult: result }, // Оновлення поля startTestResult
      { new: true } // Опція new: true вказує повертати оновлений документ
    );

    // Перевіряємо, чи користувач був знайдений
    if (!user) {
      return res.status(404).json({ message: "Користувач не знайдений" });
    }

    // Відсилаємо дані користувача без хешу пароля
    const { passwordHash, ...userData } = user._doc;
    res.json(userData);
  } catch (err) {
    res.status(500).json({ message: "Помилка сервера" });
  }
};
export const updateDo = async (req, res) => {
  try {
    const { index, value } = req.body;

    // Отримати поточні дані користувача
    const user = await UserModel.findById(req.userId);

    // Перевірити, чи знайдено користувача
    if (!user) {
      return res.status(404).send("Користувача не знайдено");
    }

    // Перевірити, чи масив done існує
    if (!user.done) {
      user.done = [];
    }

    // Перевірити, чи нове значення краще
    if (!user.done[index] || value > user.done[index]) {
      // Оновити значення, якщо нове значення краще або якщо попереднє значення відсутнє
      await UserModel.findOneAndUpdate(
        { _id: req.userId },
        { $set: { [`done.${index}`]: value } },
        { new: true }
      );
      res.status(200).send("Дані оновлено");
    } else {
      // Повернути повідомлення, що нове значення не краще
      res.status(400).send("Нове значення не краще поточного");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Помилка оновлення значення в масиві");
  }
};

export const getOne = async (req, res) => {
  try {
    const { index } = req.query;
    const user = await UserModel.findOne({ _id: req.userId });

    // Перевірити, чи знайдено користувача
    if (!user) {
      return res.status(404).send("Користувача не знайдено");
    }

    // Перевірити, чи існує значення за індексом
    if (!user.done?.[index]) {
      return res.status(404).send("Значення за індексом не знайдено");
    }

    res.status(200).json(user.done[index]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Помилка отримання даних користувача");
  }
};

export const getAll = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.userId });

    if (!user) {
      return res.status(404).send("Користувача не знайдено");
    }

    res.status(200).json(user.done);
  } catch (error) {
    console.error(error);
    res.status(500).send("Помилка отримання даних користувача");
  }
};

// export const updateDo = async (req, res) => {
//   try {
//     const { index, subIndex, value } = req.body;
//     const result = await UserModel.findOneAndUpdate(
//       { _id: req.userId },
//       { $set: { [`done.${index}.${subIndex}`]: value } }, // Виправлено тут index на subIndex
//       { new: true }
//     );

//     res.status(200).send("Дані оновлено");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Помилка оновлення значення в масиві");
//   }
// };

// export const getOne = async (req, res) => {
//   try {
//     const { index, subIndex } = req.query;
//     const user = await UserModel.findById(req.userId);
//     console.log(user);

//     if (!user) {
//       return res.status(404).json({ message: "Користувач не знайдений" });
//     }
//     const { passwordHash, ...userData } = user._doc;
//     const desiredObject = userData.done[0][`${index}`];
//     console.log(desiredObject);
//     const desiredValue = desiredObject[`${subIndex}`];
//     if (!desiredValue) {
//       return res.json(false);
//     }
//     console.log(desiredValue);

//     res.json(desiredValue);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to retrieve post" });
//   }
// };

// export const getOne = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const lessonId = req.params.lessonId;
//     const user = req.userId;
//     const doc = await UserModel.findOne({
//       lessonId: lessonId,
//       user: user,
//     });

//     if (!doc) {
//       return res.status(404).json({ message: "not found" });
//     }
//     console.log(doc.done);
//     res.json(doc.done);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to retrieve post" });
//   }
// };
