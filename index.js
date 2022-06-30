const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋
<!--
**Cerdore/Cerdore** is a ✨ _special_ ✨ repository because its README.md (this file) appears on your GitHub profile.

<img align="right" src="https://github-readme-stats.vercel.app/api?username=Cerdore&show_icons=true">

![Cerdore's github stats](https://github-readme-stats.vercel.app/api?username=Cerdore&show_icons=true&theme=radical)
Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->

🌱 I’m currently learning DB (PostgreSQL and openGauss) & Distributed systems (e.g. spark and flink)!

💬 Wechat: c648038087

[![Cerdore's github stats](https://github-readme-stats.vercel.app/api/top-langs/?username=Cerdore&hide=html)](https://github.com/anuraghazra/github-readme-stats)
[![Top Langs](https://github-readme-stats.vercel.app/api?username=Cerdore&show_icons=true&count_private=true&line_height=40)](https://github.com/anuraghazra/github-readme-stats)
<!-- <img align="right" src="https://github-readme-stats.vercel.app/api?username=Cerdore&show_icons=true"> -->


⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(1)} %
---
⏰ Updated on ${new Date().toUTCString()}
![Progress Bar CI](https://github.com/liununu/liununu/workflows/Progress%20Bar%20CI/badge.svg)\

`



console.log(readme)
