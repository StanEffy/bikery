import type { Config } from "@jest/types"

const esModules = ["lodash-es", "nanoid"].join("|")

const config: Config.InitialOptions = {
	transform: {
		// "^.+\\.[jt]sx?$": "ts-jest",
		"\\.[jt]sx?$": "babel-jest",
	},
	transformIgnorePatterns: ["/node_modules/(?!(nanoid)/)"],
	moduleNameMapper: {
		"^lodash-es(/(.*)|$)": "lodash$1",
		"^nanoid(/(.*)|$)": "nanoid$1",
	},
}

export default config
