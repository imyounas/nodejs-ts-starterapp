use admin
db.createUser(
    {
        user: "root",
        pwd: "ABC123ssi",  // Or  "<cleartext password>"
        roles: ["readWrite", "dbAdmin"]
    }
)