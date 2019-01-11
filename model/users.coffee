import db from './config.coffee'
import crypto from 'crypto'
import {DataTypes} from 'sequelize'
class User
	constructor: (db) ->
		@model = db.define 'user',
			id:
				type: DataTypes.UUID
				defaultValue: DataTypes.UUIDV4
				comment: '用户唯一标志'
			account:
				type: DataTypes.STRING
				comment: '账号/邮箱'
				primaryKey: true
			password:
				type: DataTypes.STRING
				comment: '密码'
		, comment: '用户表'
	passwordEncrypt: (pass) ->
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
	add: ({name, pass}) ->
		res = status: 'success'
		user = @model.findByPk name
		if user?
			res.status = 'error'
			res.error = 'user registered'
			return res
		pass = @passwordEncrypt pass
		await @model.sync()
		return await @model.create {name, pass}

export default User