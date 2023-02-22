import { serverHttp } from "./http";
import "./webSocket";

serverHttp.listen(3000, () => console.log("Server PORT 3000"));