import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import { ActivityController } from "./controllers/activity.controller";
import { DonationRequestedController } from "./controllers/DonationRequested.controller";
import { FeaturedController } from "./controllers/featured.controller";
import { NotificationController } from "./controllers/notification.controller";
import { OtpRecordsController } from "./controllers/otpRecords.controller";
import { Reset_passwordController } from "./controllers/reset_password.controller";
import { RoleController } from "./controllers/role.controller";
import { UserController } from "./controllers/user.controller";
import registerController from "./lib/core/controller/registerControllers";

dotenv.config();

export function createApp() {
  const app: Express = express();

  // basic middlewares
  app.use(cors({ origin: true }));
  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // health route
  app.get("/health", (req: Request, res: Response): any => {
    try {
      return res.status(200).json({ message: "UP" });
    } catch (e) {
      return res.status(500).json({ message: "DOWN" });
    }
  });

  app.get("/", (_req: Request, res: Response) => {
    console.log("object");
    res.status(200).json({});
  });

  registerController(app, [
    UserController,
    ActivityController,
    DonationRequestedController,
    FeaturedController,
    NotificationController,
    OtpRecordsController,
    Reset_passwordController,
    RoleController,
  ]);

  // 404 not found handler
  app.use((_req, res: Response) => {
    res.status(404).json({ message: "Not found" });
  });

  // 500 internal server error handler
  app.use((err: any, _req: any, res: Response, _next: any) => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  });

  return app;
}
