module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        userName: {type: String, required: true, unique: true},
        accountNumber: {type: String, required: true, unique: true},
        emailAddress: {type: String, required: true, unique: true},
        identityNumber: {type: String, required: true, unique: true},
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("users", schema);
    return User;
  };