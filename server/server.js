import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors({ origin: true }));

app.get("/", async (req, res) => {
  res.send("hello bro");
});

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: {
          "Private-Key": "8da65b1d-2a65-4118-be5f-67ec26568513", 
        },
      }
    );
    // Trả về dữ liệu từ response của API
    res.json(response.data);
      } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error"); // Trả về lỗi server nếu có lỗi xảy ra
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
