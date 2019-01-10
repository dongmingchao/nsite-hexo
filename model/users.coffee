import db from './index.coffee'
import crypto from 'crypto'

model = db.define 'user',
	id:
		type: db.UUID
		defaultValue: db.UUIDV4
		comment: '用户唯一标志'
	account:
		type: db.STRING
		comment: '账号/邮箱'
		primaryKey: true
	password:
		type: db.STRING
		comment: '密码'
, comment:'用户表'

class User
	@model = model
	@passwordEncrypt: (pass) ->
		md5 = crypto.createHash 'md5'
		md5.update pass
		pass = md5.digest 'hex'
		sha = crypto.createHash 'sha256'
		sha.update pass
		pass = sha.digest 'hex'
		md5 = crypto.createHash 'md5'
		md5.update pass
		pass = md5.digest 'hex'
		return pass
	@add: ({name,pass}) ->
		pass = @passwordEncrypt pass
		await @model.sync()
		await @model.create {name,pass}

	instance: (name)->
		return await @model.findByPk name
