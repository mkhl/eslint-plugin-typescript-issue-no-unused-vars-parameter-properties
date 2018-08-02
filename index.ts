class Logger {
	log(message: string): void {
		console.info(message)
	}
}

class App {
	constructor(private logger: Logger) {}

	run(): void {
		this.logger.log("Hello, world!")
	}
}

new App(new Logger()).run()
