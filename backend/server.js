const express = require("express");
const dotenv = require("dotenv");
const { createClient } = require("@supabase/supabase-js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key. Please check your .env file.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Express server is running!");
});

app.get("/quiz-responses/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const { data, error } = await supabase
      .from("quizresponses")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.error("Error fetching quiz responses:", error);
      return res.status(500).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// route to insert quiz responses
app.post("/quiz-responses", async (req, res) => {
  const { userId, responses } = req.body;

  try {
    const { data, error } = await supabase
      .from("quizresponses")
      .insert([{ user_id: userId, responses }]);

    if (error) {
      console.error("Error inserting quiz responses:", error);
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
