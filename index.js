const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;

  const currentUtcTime = new Date();
  const timeDifference = Math.floor(Math.random() * 5) - 2;
  currentUtcTime.setMinutes(currentUtcTime.getMinutes() + timeDifference);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[new Date().getDay()];

  const githubFileUrl =
    "https://github.com/yourusername/yourrepository/blob/main/app.js";
  const githubRepoUrl = "https://github.com/yourusername/yourrepository";

  const data = {
    slack_name,
    current_day_of_week: currentDay,
    current_utc_time: currentUtcTime.toISOString(),
    track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };
  res.status(200).json(data);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
