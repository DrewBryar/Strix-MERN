const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peopledb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Database Connection Established"))
    .catch(()=>console.log("Uh oh, there was an error.", err))