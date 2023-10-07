module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        userName: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        token: {type: String, default: null},
        lastTokenCreatedAt: {type: Date, default: null},
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("auths", schema);
    return User;
  };