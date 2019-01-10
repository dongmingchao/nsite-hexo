import sequlize from 'sequelize'

db = new sequlize 'mokiri', 'root', 'cxz,./123',
	host: 'localhost'
	dialect: 'mysql'
	pool:
		max: 5
		min: 0
		idle: 10000

export default db