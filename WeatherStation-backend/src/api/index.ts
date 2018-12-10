import { Router } from "express";

import cityRouter from "@api/city";
import weatherRouter from "@api/weather";

const router = Router();

router.use("/city", cityRouter);
router.use("/weather", weatherRouter);

router.use((req, res) => {
	res.status(404).json({
		type: "error",
		value: "Page not found"
	});
});

export default router;
