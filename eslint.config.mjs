import nextObusk from "@obusk/eslint-config-next";

const eslintConfig = [
    ...nextObusk,
    {
        settings: {
            // eslint-plugin-react's "detect" mode calls the removed
            // `context.getFilename()` API under ESLint 10, crashing every
            // lint run. A concrete version skips detection entirely.
            react: {
                version: "19.2.8",
            },
            // eslint-plugin-tailwindcss v4 requires the entry CSS file
            // path explicitly; it can't be inferred by the shared config.
            tailwindcss: {
                cssConfigPath: "./src/app/globals.css",
            },
        },
    },
];

export default eslintConfig;
