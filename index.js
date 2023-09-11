const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;

  const currentUtcTime = new Date();
  const timeDifference = Math.floor(Math.random() * 5) - 2;
  currentUtcTime.setMinutes(currentUtcTime.getMinutes() + timeDifference);
  const formattedUtcTime = currentUtcTime
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
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
    "https://github.com/Shelby243/zuriBackEnd/blob/main/index.js";
  const githubRepoUrl = "https://github.com/Shelby243/zuriBackEnd";

  const data = {
    slack_name,
    current_day: currentDay,
    utc_time: formattedUtcTime,
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
