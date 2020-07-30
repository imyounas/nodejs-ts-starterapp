//import "dotenv/config";
import ExpressApp from "./ExpressApp";
import UsersRoute from "./server/routes/UserRoutes";

const app = new ExpressApp([new UsersRoute()]);

app.listen();
