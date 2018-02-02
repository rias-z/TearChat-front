const express = require( 'express' );
const router = express.Router();

// モデル宣言
const User = require('./models/user')


// ユーザ登録
// TODO メール認証できるようにする
router.post('/post/register', (req, res) => {
  console.log("\n[POST] /post/register")

  User.find((err, result) => {
    if (err) {
      console.log(err)
      res.send(500)
    }

    // usersの長さを取得
    let users_length = result.length

    // requestからuserNameとpasswordを取得
    // TODO passwordを暗号化させる
    const {userName, password} = req.body

    // userの新規登録
    let user = new User()
    user.user_id = users_length + 1
    user.name = userName
    user.password = password

    // TODO user.save時の重複キーエラーのthrowがうまくいかない
    user.save((err) => {
      if (err) {
        console.log(err)
        throw new Error('BulkWriteError')
      }

      res.status(200).json({'returnValue': 'ok'})
    })
  })
})

// 全ユーザの取得
router.get('/get/users', (req, res) => {
  console.log("\n[GET] /get/users")

  User.find((err, result) => {
    if (err) {
      console.log(err)
      throw new Error('BulkWriteError')
    }

    res.status(200).json(result)
  })
})

module.exports = router;
