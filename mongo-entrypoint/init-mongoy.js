db.createUser(
    {
        user: "sa",
        pwd: "ABC123ssi",  // Or  "<cleartext password>"
        roles: [{ role: "dbOwner", db: "myproducts" }]
    }
)