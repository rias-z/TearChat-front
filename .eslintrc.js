const WARN = (process.env.CI == "true") ? "error" : "warn"


module.exports =
  {
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [
        1, {"extensions": [".js", ".jsx"]}
      ],
      'indent': [WARN, 2],
      'semi': [WARN, "never"],
      'max-len': [WARN, 80], // 1行の長さ80文字以上は警告
    }
  }
