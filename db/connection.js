//database
mongoose.connect(process.env.DATABASE_URI);
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = connection;